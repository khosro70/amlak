import DashboardCard from "@/modules/myProfilesPage/DashboardCard";
import { CartInterface } from "@/utils/contracts";

import React from "react";
import { Toaster } from "react-hot-toast";
import { BsExclamationCircle } from "react-icons/bs";

export interface MyProfilesPageInterfaceProps {
  profiles: CartInterface[];
  role?: string;
}

const MyProfilesPage: React.FC<MyProfilesPageInterfaceProps> = ({
  profiles,
}) => {
  return (
    <div className="flex flex-col gap-y-2 bg-slate-200 p-2 justify-start items-center min-h-[calc(100vh-100px)] rounded">
      {profiles.length ? null : (
        <div className="text-2xl font-bold flex flex-col gap-y-4 justify-center items-center min-h-[calc(100vh-100px)]">
          <BsExclamationCircle size={55} />
          <span>هیچ آگهی ثبت نشده است!</span>
        </div>
      )}
      {profiles.map((profile) => (
        <DashboardCard
          key={profile._id}
          data={JSON.parse(JSON.stringify(profile))} 
        />
      ))}
      <Toaster />
    </div>
  );
};

export default MyProfilesPage;
