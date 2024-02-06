import DashboardSideBar from "@/modules/DashboardSideBar";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const DashboardLayout = async ({ children }) => {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/signin");
  return (
    <div className="flex flex-col sm:flex-row justify-center items-start gap-x-4 mb-4 mt-4">
      <DashboardSideBar />
      <div className="w-full sm:w-2/3 md:w-4/6 lg:w-5/6 min-h-screen bg-slate-50 rounded p-4">
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
