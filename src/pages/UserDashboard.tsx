import DashboardUI from '../components/dashboard/DashboardUI';

const UserDashboard = () => {
    return (
        <div className="mx-auto flex h-svh w-full flex-col justify-center gap-y-4 border bg-[#181818] p-4 text-center font-light text-[#c2c2c2] shadow-md lg:h-lvh lg:p-20">
            <DashboardUI />
        </div>
    );
};

export default UserDashboard;
