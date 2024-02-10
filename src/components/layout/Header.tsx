"use client";
import { NextPage } from "next";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { FiLogIn } from "react-icons/fi";

const Header: NextPage = () => {
  const { data } = useSession();

  return (
    <header className="w-full py-3 bg-slate-200 mb-3 text-slate-800 sticky top-0 shadow-lg">
      <div className="container mx-auto xl:max-w-[1200px] px-3 flex justify-between items-center">
        <div>
          <ul className="flex justify-start items-center gap-x-4 text-sm sm:text-lg font-medium">
            <li className="hover:text-orange-500 transition">
              <Link href="/">صفحه اصلی</Link>
            </li>
            <li className="hover:text-orange-500 transition">
              <Link href="/buy-residential">فروش</Link>
            </li>
            <li className="hover:text-orange-500 transition">
              <Link href="/buy-residential">خرید</Link>
            </li>
            <li className="hover:text-orange-500 transition">
              <Link href="/buy-residential">رهن</Link>
            </li>
            <li className="hover:text-orange-500 transition">
              <Link href="/buy-residential">اجاره</Link>
            </li>
          </ul>
        </div>
        {data ? (
          <div>
            <Link
              href="/dashboard"
              className="flex justify-end items-center text-sm sm:text-lg font-medium gap-x-1 hover:text-blue-900"
            >
              <CgProfile
                size={40}
                className="p-1 rounded transition text-blue-500"
              />
              <span className="">املاک من</span>
            </Link>
          </div>
        ) : (
          <div>
            <Link
              href="/signin"
              className="flex justify-end items-center text-sm sm:text-lg font-medium gap-x-1"
            >
              <FiLogIn size={25} />
              <span>ورود</span>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
