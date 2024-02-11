"use client";
import { DashboardCardPropsInterface } from "@/utils/contracts";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import DashboardCardSection from "./DashboardCardSection";

const DashboardCard: React.FC<DashboardCardPropsInterface> = ({
  data,
  role,
}) => {
  const router = useRouter();
  const editHandler = () => {
    router.push(`/dashboard/my-profiles/${data._id}`);
    router.refresh();
  };
  const deleteHandler = async () => {
    const res = await fetch(`/api/profile/delete/${data._id}`, {
      method: "DELETE",
    });
    const Data = await res.json();
    console.log(Data);
    if (Data.error) {
      toast.error(Data.error);
    } else {
      toast.success(Data.message);
      router.refresh();
    }
  };
  const publishHandler = async () => {
    const res = await fetch(`/api/profile/publish/${data._id}`, {
      method: "PATCH",
    });
    const Data = await res.json();
    if (Data.message) {
      toast.success(Data.message);
      router.refresh();
    }
  };
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center gap-x-3 border-b-2 border-slate-300 pt-2 pb-2 lg:pb-4 w-full ">
      <Image
        className=" w-full lg:w-4/12"
        src={`/images/categoryImage/${data.category}.jpg`}
        width={800}
        height={800}
        alt="image"
        priority
      />
      <DashboardCardSection
        _id={data._id}
        price={data.price}
        title={data.title}
        category={data.category}
        location={data.location}
      />
      <div className="flex flex-col justify-between items-start gap-y-4 p-3 w-full lg:w-3/12">
        <button
          className="hover:bg-red-200 font-medium transition border-2 border-dashed border-red-500 py-1 px-2 rounded w-full"
          onClick={deleteHandler}
        >
          حذف آگهی
        </button>
        <button
          className="hover:bg-yellow-200 font-medium transition border-2 border-dashed border-yellow-500 py-1 px-2 rounded w-full"
          onClick={editHandler}
        >
          ویرایش آگهی
        </button>
        {role === "ADMIN" ? (
          <button
            className="hover:bg-green-200 font-medium transition border-2 border-dashed border-green-500 py-1 px-2 rounded w-full"
            onClick={publishHandler}
          >
            انتشار
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default DashboardCard;
