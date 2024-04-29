import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { LoginForm } from '../components/login/LoginForm';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const HomePage = () => {
    const navigate = useNavigate();
    const auth = getAuth();

    useEffect(() => {
        // Auth object to listen for changes in the authentication state
        // (signed-in user or null when signed out)
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, navigate to the account page
                navigate('/account');
            } else {
                // No user is signed in, stay on the home page or handle accordingly
            }
        });

        // Clean up the observer when the component unmounts
        return () => unsubscribe();
    }, [navigate, auth]);

    return (
        <div className="mx-auto flex h-fit w-fit flex-col justify-center gap-y-4 rounded-2xl border bg-[#181818] p-4 text-center font-light text-[#c2c2c2] shadow-md lg:p-20">
            <h1 className="text-2xl font-thin text-white">
                Welcome to your invoice portal
            </h1>
            <LoginForm />
        </div>
    );
};

export default HomePage;
