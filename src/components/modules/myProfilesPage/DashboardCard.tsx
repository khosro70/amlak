"use client";
import { DashboardCardPropsInterface } from "@/utils/contracts";
import React from "react";
import { englishNumbersToPersian } from "@/utils/replaceNumber";
import Image from "next/image";
import { mapStringToPersian } from "@/utils/mapCategoryToPersian";
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosPricetags } from "react-icons/io";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const DashboardCard: React.FC<DashboardCardPropsInterface> = ({ data }) => {
  const router = useRouter();
  const editHandler = () => {
    router.push(`/dashboard/my-profiles/${data._id}`);
  };
  const deleteHandler = async () => {
    const res = await fetch(`/api/profile/delete/${data._id}`, {
      method: "DELETE",
    });
    const Data = await res.json();
    console.log(Data)
    if (Data.error) {
      toast.error(Data.error);
    } else {
      toast.success(Data.message);
      router.refresh();
    }
  };
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center gap-x-3 border-b-2 pt-2 pb-2 lg:pb-4 w-full ">
      <Image
        className=" w-full lg:w-4/12"
        src={`/images/categoryImage/${data.category}.jpg`}
        width={800}
        height={800}
        alt="image"
        priority
      />
      <div className="flex flex-col gap-y-2 items-start w-full lg:w-5/12 p-3 lg:px-9">
        <span className="text-sm md:text-base">
          <span className="font-medium">دسته بندی:</span>{" "}
          {mapStringToPersian(data.category)}
        </span>
        <span className="font-bold text-lg">{data.title}</span>
        <span className="flex gap-x-2 text-sm">
          <span>
            <IoLocationOutline className="text-green-500" />
          </span>
          {data.location}
        </span>
        <span className="flex gap-x-2 text-sm">
          <span>
            <IoIosPricetags className="text-blue-600" />
          </span>
          {englishNumbersToPersian(data.price)} تومان
        </span>
        <Link
          href="#"
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
      <div className="flex flex-col justify-between items-start gap-y-4 p-3 w-full lg:w-3/12">
        <button
          className="bg-red-600 py-1 px-2 rounded w-full"
          onClick={deleteHandler}
        >
          حذف آگهی
        </button>
        <button
          className="bg-yellow-500 py-1 px-2 rounded w-full"
          onClick={editHandler}
        >
          ویرایش آگهی
        </button>
      </div>
      
    </div>
  );
};

export default DashboardCard;
