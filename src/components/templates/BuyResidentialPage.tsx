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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 w-4/6 sm:w-9/12 lg:w-10/12 rounded h-fit">
        {data.map((i) => (
          <Card {...i} key={i._id} />
        ))}
      </div>
    </div>
  );
};

export default BuyResidentialPage;
