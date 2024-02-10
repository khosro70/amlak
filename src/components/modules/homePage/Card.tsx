import { CartInterface } from "@/utils/contracts";
import { mapStringToPersian } from "@/utils/mapCategoryToPersian";
import { englishNumbersToPersian } from "@/utils/replaceNumber";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoIosPricetags } from "react-icons/io";

const Card: React.FC<CartInterface> = ({ category, price, title }) => {
  return (
    <div className="bg-slate-200 p-1 flex flex-col justify-between">
      <Image
        className="w-full h-1/2"
        src={`/images/categoryImage/${category}.jpg`}
        width={500}
        height={500}
        alt="image"
        priority
      />
      <div className="flex flex-col gap-y-1 items-start w-full p-3 h-1/2">
        <span className="text-sm md:text-xs">
          <span className="font-medium">دسته بندی:</span>
          {mapStringToPersian(category)}
        </span>
        <span className="font-bold text-sm">{title}</span>

        <span className="flex gap-x-2 text-sm">
          <span>
            <IoIosPricetags className="text-blue-600" />
          </span>
          {englishNumbersToPersian(price)} تومان
        </span>
        <Link
          href="#"
          className="flex justify-between items-center w-full mt-2 text-sm"
        >
          <span className="text-blue-600 hover:text-orange-500 transition">
            مشاهده آگهی
          </span>
          <span>
            <FaArrowLeftLong size={25} className="text-green-500" />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Card;
