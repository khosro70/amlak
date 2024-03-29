import AdminPage from "@/templates/AdminPage";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import User from "@/models/User";
import DashboardSideBar from "@/modules/DashboardSideBar";
import Profile from "@/models/Profile";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "املاک وان | پنل ادمین",
};

const admin = async () => {
  await connectDB();
  const session = await getServerSession(authOptions);
  if (!session) redirect("/signin");
  const user = await User.findOne({ email: session.user?.email });
  if (user.role !== "ADMIN") redirect("/dashboard");
  const [USER] = await User?.aggregate([
    { $match: { email: session?.user?.email } },
    {
      $lookup: {
        from: "profiles",
        foreignField: "userId",
        localField: "_id",
        as: "profiles",
      },
    },
  ]);
  const profiles = await Profile.find({ published: false });
  return (
    <div className="flex flex-col sm:flex-row justify-center items-start gap-x-4 mb-4 mt-4">
      <DashboardSideBar
        role={user.role}
        email={user.email}
        profiles={profiles}
        data={JSON.parse(JSON.stringify(USER.profiles))}
      />
      <div className="w-full sm:w-2/3 md:w-4/6 lg:w-5/6 min-h-[calc(100vh-100px)] rounded p-4">
        <AdminPage profiles={profiles} role={user.role} />
      </div>
    </div>
  );
};

export default admin;
