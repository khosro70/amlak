import React from "react";
import Card from "@/modules/homePage/Card";
import { CartInterface } from "@/utils/contracts";
import { MdApartment, MdVilla } from "react-icons/md";
import { FaStore } from "react-icons/fa";
import { PiOfficeChairFill } from "react-icons/pi";
import Link from "next/link";

interface BuyResidentialPageInterfaceProps {
  data: {
    data: CartInterface[];
  };
}

const BuyResidentialPage: React.FC<BuyResidentialPageInterfaceProps> = ({
  data,
}) => {
  console.log(typeof data);
  return (
    <div className="flex gap-x-3 bg-slate-50 min-h-[calc(100vh-100px)] rounded py-3 px-4 mb-4">
      <div className="w-2/6 sm:w-3/12 lg:w-2/12 bg-slate-200 p-3 h-fit sticky top-[68px] rounded">
        <ul className="space-y-2">
          <li>
            <Link href="#" className="flex gap-x-2 items-center">
              <MdVilla />
              <span>ویلا</span>
            </Link>
          </li>
          <li>
            <Link href="#" className="flex gap-x-2 items-center">
              <MdApartment />
              <span>آپارتمان</span>
            </Link>
          </li>
          <li>
            <Link href="#" className="flex gap-x-2 items-center">
              <FaStore />
              <span>مغازه</span>
            </Link>
          </li>
          <li>
            <Link href="#" className="flex gap-x-2 items-center">
              <PiOfficeChairFill />
              <span>دفتر</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 w-4/6 sm:w-9/12 lg:w-10/12 min-h-[calc(100vh-100px)] rounded">
        {data.data.map((i) => (
          <Card {...i} key={i._id} />
        ))}
      </div>
    </div>
  );
};

export default BuyResidentialPage;
