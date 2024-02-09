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
    <div className="flex flex-col gap-y-2">
      {profiles.length ? null : <p>هیچ آگهی ثبت نشده است</p>}
      {profiles.map((profile) => (
        <DashboardCard key={profile._id} data={JSON.parse(JSON.stringify(profile))} />
      ))}
      <Toaster />
    </div>
  );
};

export default MyProfilesPage;

