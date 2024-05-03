import { Outlet } from 'react-router-dom';

const PageLayout = () => {
    return (
        <div className="flex h-svh w-full items-center bg-gray-300 font-light text-[#c2c2c2] lg:h-lvh">
            <Outlet />
        </div>
    );
};

export default PageLayout;
