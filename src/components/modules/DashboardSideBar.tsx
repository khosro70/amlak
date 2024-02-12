"use client";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import LogoutButton from "./LogoutButton";
import { DashboardSideBarPropsInterface } from "@/utils/contracts";
import { useState } from "react";
import { englishNumbersToPersian } from "@/utils/replaceNumber";

const DashboardSideBar: React.FC<DashboardSideBarPropsInterface> = ({
  role,
  email,
  profiles,
  data,
}) => {
  const [selectedItem, setSelectedItem] = useState<number>(0);

  const handleItemClick = (index: number) => {
    setSelectedItem(index);
  };

  return (
    <aside className="flex flex-col justify-between items-center sm:items-start gap-y-5 w-full sm:w-1/3 md:w-2/6 lg:w-1/6 bg-slate-300 rounded py-6 px-4 sm:sticky sm:top-4 md:top-24">
      <div className="w-full">
        <div className="hidden sm:flex flex-col items-center sm:w-full gap-y-6 mb-4">
          <span className="flex flex-col items-center">
            <CgProfile className="text-blue-500 text-[30px] sm:text-[60px]" />
            {role === "ADMIN" ? <span>ادمین</span> : null}
          </span>
          <span className="hidden sm:block border-b-2 border-blue-400 text-xs">
            {email}
          </span>
        </div>
        <ul className="sm:space-y-2 gap-x-14 sm:gap-x-0 flex flex-row justify-center items-center sm:items-start sm:flex-col text-sm sm:text-base font-medium">
          <li
            className={`hover:text-orange-500 transition ${
              selectedItem === 0 ? "" : "opacity-60"
            }`}
            onClick={() => handleItemClick(0)}
          >
            <Link href="/dashboard">حساب کاربری</Link>
          </li>
          <li
            className={`hover:text-orange-500 transition ${
              selectedItem === 1 ? "" : "opacity-60"
            }`}
            onClick={() => handleItemClick(1)}
          >
            <Link
              href="/dashboard/my-profiles"
              className="relative flex items-center"
            >
              <span>آگهی های من</span>
              <span className="absolute -left-8 flex justify-center items-center rounded-full border-2 w-6 h-6 bg-green-800 text-white">
                {englishNumbersToPersian(data.length.toString())}
              </span>
            </Link>
          </li>
          <li
            className={`hover:text-orange-500 transition ${
              selectedItem === 2 ? "" : "opacity-60"
            }`}
            onClick={() => handleItemClick(2)}
          >
            <Link href="/dashboard/add">ثبت آگهی</Link>
          </li>
        </ul>
      </div>
      <div className="space-y-3 flex flex-row sm:flex-col gap-x-14">
        {role === "ADMIN" ? (
          <div
            className={`hover:text-orange-500 transition pt-4 text-green-700`}
          >
            <Link href="/admin" className="relative flex items-center">
              <span>در انتظار تایید</span>
              <span className="absolute -left-8 flex justify-center items-center rounded-full border-2 w-6 h-6 bg-red-500 text-white">
                {englishNumbersToPersian(profiles.length.toString())}
              </span>
            </Link>
          </div>
        ) : null}
        <LogoutButton />
      </div>
    </aside>
  );
};

export default DashboardSideBar;
