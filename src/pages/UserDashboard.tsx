import { DashboardLayout } from '../components/dashboard/DashboardLayout';
import { UserNav } from '../components/dashboard/dataTable/user-nav';

const UserDashboard = () => {
    return (
        <div className="mx-auto flex h-svh w-full flex-col bg-[#181818] font-light text-[#c2c2c2] lg:h-lvh">
            <UserNav />
            <DashboardLayout />
        </div>
    );
};

export default UserDashboard;
