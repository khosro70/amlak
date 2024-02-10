import DashboardPage from "@/templates/DashboardPage";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import connectDB from "@/utils/connectDB";
import User from "@/models/User";

const dashboard = async () => {
  await connectDB();
  const session = await getServerSession(authOptions);
  const user = await User.findOne({ email: session?.user?.email });
  return <DashboardPage createdAt={user?.createdAt} />;
};

export default dashboard;
