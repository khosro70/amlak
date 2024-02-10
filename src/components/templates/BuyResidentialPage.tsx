import React from "react";
import Card from "@/modules/homePage/Card";
import { CartInterface } from "@/utils/contracts";

interface BuyResidentialPageInterfaceProps {
  data: {
    data: CartInterface[]
  };
}

const BuyResidentialPage: React.FC<BuyResidentialPageInterfaceProps> = ({
  data,
}) => {
  console.log(typeof data);
  return (
    <div className="flex gap-x-3 bg-slate-50 min-h-[calc(100vh-100px)] rounded py-3 px-4 mb-4">
      <div className="w-2/6 sm:w-3/12 lg:w-2/12 bg-green-400 p-3 h-fit sticky top-[74px]">
        <ul>
          <li>ali</li>
          <li>ali</li>
          <li>ali</li>
          <li>ali</li>
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
