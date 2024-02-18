// src/AuthService.ts
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';

export const signIn = async (username: string, password: string) => {
    try {
        const userCredential = await signInWithEmailAndPassword(
            auth,
            username,
            password
        );
        console.log(userCredential.user); // Handle the signed-in user
    } catch (error) {
        console.error(error); // Handle errors
    }
};
