import { MyProfilesPageInterfaceProps } from "./MyProfilesPage";
import { BsExclamationCircle } from "react-icons/bs";
import DashboardCard from "@/modules/myProfilesPage/DashboardCard";
import { Toaster } from "react-hot-toast";

const AdminPage: React.FC<MyProfilesPageInterfaceProps> = ({
  profiles,
  role,
}) => {
  return (
    <div className="flex flex-col gap-y-2 bg-slate-200 p-2 justify-start items-center min-h-[calc(100vh-100px)] rounded">
      {profiles.length ? null : (
        <div className="text-2xl font-bold flex flex-col gap-y-4 justify-center items-center min-h-[calc(100vh-100px)]">
          <BsExclamationCircle size={55} />
          <span>هیچ آگهی در انتظار تاییدی وجود ندارد !</span>
        </div>
      )}
      {profiles.map((profile) => (
        <DashboardCard
          key={profile._id}
          data={JSON.parse(JSON.stringify(profile))}
          role={role}
        />
      ))}
      <Toaster />
    </div>
  );
};

export default AdminPage;
