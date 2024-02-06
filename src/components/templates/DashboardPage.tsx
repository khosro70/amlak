import React from "react";

interface DashboardPageInterfaceProps {
  createdAt: Date;
}

const DashboardPage: React.FC<DashboardPageInterfaceProps> = ({
  createdAt,
}) => {
  return (
    <div className="">
      <p className="font-semibold text-slate-800">شما می توانید آگهی های خود را ثبت کنید تا هزاران نفر آن را ببینند!</p>
      <div className="flex gap-x-2 mt-4 bg-blue-300 w-fit py-1 px-3 rounded">
        <span className="font-medium">تاریخ عضویت شما:</span>
        <span>{createdAt.toLocaleDateString("fa-IR")}</span>
      </div>
    </div>
  );
};

export default DashboardPage;
