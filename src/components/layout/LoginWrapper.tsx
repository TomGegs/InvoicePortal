import { Outlet } from 'react-router-dom';

const LoginWrapper = () => {
    return (
        <>
            <main className="flex h-svh items-center bg-neutral-800 lg:h-lvh">
                <Outlet />
            </main>
        </>
    );
};

export default LoginWrapper;
