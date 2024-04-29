import { Navigate } from 'react-router-dom';
import { useAuth } from '../firebase/Auth/useAuth';
import PageLayout from '../components/layout/PageLayout';

const Protected = () => {
    const { user } = useAuth();

    if (!user) {
        return <Navigate to="/" />;
    }

    return <PageLayout />;
};

export default Protected;
