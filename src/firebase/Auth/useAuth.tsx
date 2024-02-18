import { useContext } from 'react';
import { AuthContext } from './AuthContext';
export const useAuth = () => {
    // The useContext hook returns the current context value for the AuthContext
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthContextProvider');
    }
    return context;
};
