import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../firebase/Auth/useAuth';

const Protected = () => {
    const { user } = useAuth();

    if (!user) {
        return <Navigate to="/" />;
    }

    return <Outlet />;
};

export default Protected;
