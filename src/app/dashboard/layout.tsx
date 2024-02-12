import DashboardSideBar from "@/modules/DashboardSideBar";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import connectDB from "@/utils/connectDB";
import User from "@/models/User";
import { authOptions } from "../api/auth/[...nextauth]/route";
import Profile from "@/models/Profile";

const DashboardLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/signin");

  await connectDB();
  const user = await User.findOne({ email: session.user?.email });
  if (!user)
    return (
      <div className="flex justify-center items-center min-h-[calc(100vh-100px)]">
        مشکلی پیش آمده است. دوباره تلاش کنید
      </div>
    );
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
        data={JSON.parse(JSON.stringify(USER.profiles))}
        profiles={JSON.parse(JSON.stringify(profiles))}
      />
      <div className="w-full sm:w-2/3 md:w-4/6 lg:w-5/6 min-h-[calc(100vh-100px)] rounded p-4">
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
