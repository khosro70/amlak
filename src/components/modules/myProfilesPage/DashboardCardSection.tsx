"use client";
import { DashboardCardSectionInterface } from "@/utils/contracts";
import React from "react";
import { englishNumbersToPersian } from "@/utils/replaceNumber";
import { mapStringToPersian } from "@/utils/mapCategoryToPersian";
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosPricetags } from "react-icons/io";
import Link from "next/link";

const DashboardCardSection: React.FC<DashboardCardSectionInterface> = ({
  _id,
  price,
  title,
  category,
  location,
}) => {
  return (
    <div className="flex flex-col gap-y-2 items-start w-full lg:w-5/12 p-3 lg:px-9">
      <span className="text-sm md:text-base">
        <span className="font-medium">دسته بندی:</span>
        {mapStringToPersian(category)}
      </span>
      <span className="font-bold text-lg">{title}</span>
      <span className="flex gap-x-2 text-sm">
        <span>
          <IoLocationOutline className="text-green-500" />
        </span>
        {location}
      </span>
      <span className="flex gap-x-2 text-sm">
        <span>
          <IoIosPricetags className="text-blue-600" />
        </span>
        {englishNumbersToPersian(price)} تومان
      </span>
      <Link
        href={`/buy-residential/${_id}`}
        className="flex justify-between items-center w-full mt-3"
      >
        <span className="text-green-900 hover:text-orange-500 transition">
          مشاهده آگهی
        </span>
        <span>
          <FaArrowLeftLong size={25} className="text-green-500" />
        </span>
      </Link>
    </div>
  );
};

export default DashboardCardSection;
