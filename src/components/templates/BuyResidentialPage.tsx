"use client";
import React from "react";
import Card from "@/modules/buyResidentialPage/Card";
import { BuyResidentialPageInterfaceProps } from "@/utils/contracts";
import SideBar from "@/modules/buyResidentialPage/SideBar";

const BuyResidentialPage: React.FC<BuyResidentialPageInterfaceProps> = ({
  data,
  category,
}) => {
  return (
    <div className="flex gap-x-3 min-h-[calc(100vh-100px)] rounded py-3 px-4 mb-4">
      <SideBar category={category} />
      {data.length === 0 ? (
        <div className="flex text-sm md:text-2xl justify-center items-center w-full min-h-[calc(100vh-100px)] bg-slate-200">
          هیچ آگهی تایید شده ای وجود ندارد!
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 w-4/6 sm:w-9/12 lg:w-10/12 rounded bg-slate-200 p-1 h-fit">
          {data.map((i) => (
            <Card {...i} key={i._id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default BuyResidentialPage;
