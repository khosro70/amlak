import DashboardCard from "@/modules/myProfilesPage/DashboardCard";
import { CartInterface } from "@/utils/contracts";

import React from "react";
import { Toaster } from "react-hot-toast";

interface MyProfilesPageInterfaceProps {
  profiles: CartInterface[];
}

const MyProfilesPage: React.FC<MyProfilesPageInterfaceProps> = ({
  profiles,
}) => {
  return (
    <div className="flex flex-col gap-y-2 bg-slate-200 p-2 justify-center items-center min-h-[calc(100vh-100px)]">
      {profiles.length ? null : (
        <p className="text-2xl font-bold">هیچ آگهی ثبت نشده است</p>
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
