import { NextPage } from "next";
import Link from "next/link";
import { FiLogIn } from "react-icons/fi";

const Header: NextPage = () => {
  return (
    <header className="w-full py-3 bg-slate-50 mb-3 text-slate-800">
      <div className="container mx-auto xl:max-w-[1200px] px-3 flex justify-between items-center">
        <div>
          <ul className="flex justify-start items-center gap-x-4 text-lg font-medium">
            <li>
              <Link href="/">صفحه اصلی</Link>
            </li>
            <li>
              <Link href="/buy-residential">آگهی ها</Link>
            </li>
          </ul>
        </div>
        <div>
          <Link href="/signin" className="flex justify-end items-center text-lg font-medium gap-x-1">
            <FiLogIn size={25} />
            <span>ورود</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
