import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import LogoutButton from "./LogoutButton";

const DashboardSideBar = async () => {
  const session = await getServerSession(authOptions);

  return (
    <aside className="flex flex-row sm:flex-col justify-between items-center sm:items-start gap-y-5 w-full sm:w-1/3 md:w-2/6 lg:w-1/6 bg-slate-50 rounded py-6 px-4 sm:sticky sm:top-4">
      <div className="flex flex-col items-center sm:w-full gap-y-6">
        <CgProfile className="text-blue-500 text-[30px] sm:text-[60px]" />
        <span className="hidden sm:block border-b-2 border-blue-400 text-xs">
          {session?.user?.email}
        </span>
      </div>
      <ul className="sm:space-y-2 gap-x-3 sm:gap-x-0 flex flex-row items-center sm:items-start sm:flex-col text-sm sm:text-base">
        <li className="hover:text-orange-500 transition">
          <Link href="/dashboard">حساب کربری</Link>
        </li>
        <li className="hover:text-orange-500 transition">
          <Link href="/dashboard/my-profiles">آگهی های من</Link>
        </li>
        <li className="hover:text-orange-500 transition">
          <Link href="/dashboard/add">ثبت آگهی</Link>
        </li>
      </ul>
      <LogoutButton />
    </aside>
  );
};

export default DashboardSideBar;
