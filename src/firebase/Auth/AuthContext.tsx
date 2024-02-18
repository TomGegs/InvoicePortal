//AuthContextProvider.tsx

import { createContext, useEffect, useState } from 'react';
import { auth } from '../firebaseConfig';
import {
    User,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
} from 'firebase/auth';

// Define types for the context
type AuthContextType = {
    signIn: (email: string, password: string) => Promise<void>;
    signOut: () => Promise<void>;
    user: User | null;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// AuthContextProvider component
const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);

    // SignIn function
    const signIn = async (email: string, password: string) => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
            console.error('Failed to sign in:', error);
        }
    };
    const signOutUser = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.error('Failed to sign out:', error);
        }
    };
    // Monitor auth state changes
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, setUser);
        return unsubscribe; // Cleanup subscription on unmount
    }, []);

    return (
        <AuthContext.Provider value={{ signIn, signOut: signOutUser, user }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthContextProvider };
