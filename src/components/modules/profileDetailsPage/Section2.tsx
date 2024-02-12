import { englishNumbersToPersian } from "@/utils/replaceNumber";
import React from "react";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { FaPhone } from "react-icons/fa";
import { IoIosPricetags } from "react-icons/io";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import ShareButton from "./ShareButton";

interface Section2PropsInterface {
  realState: string;
  price: string;
  constructionData: Date;
}

const Section2: React.FC<Section2PropsInterface> = ({
  realState,
  price,
  constructionData,
}) => {
  return (
    <div className="flex flex-row justify-between md:justify-start md:flex-col gap-y-3 w-full md:w-1/4 ">
      <div className="flex flex-col gap-y-2 justify-center items-center py-6 border-2 rounded-lg shadow-lg w-1/3 md:w-full">
        <MdOutlineRealEstateAgent size="45" className="text-green-500" />
        <span className="font-medium text-md md:text-lg">
          املاک: {realState}
        </span>
        <span className="flex gap-x-2">
          <FaPhone />
          <span className="text-sm">09129414308</span>
        </span>
      </div>
      <ShareButton />
      <div className="flex flex-col justify-center items-center border-2 gap-y-2 py-6 shadow-lg w-1/3 md:w-full">
        <span className="flex gap-x-2 rounded-lg items-center">
          <span className="font-medium">آپارتمان</span>
        </span>
        <span className="flex gap-x-2">
          <span>
            <IoIosPricetags className="text-blue-600" />
          </span>
          <span className="text-sm">
            {englishNumbersToPersian(price)} تومان
          </span>
        </span>
        <span className="flex gap-x-2">
          <BsFillCalendarDateFill className="text-green-500" />
          <span>{new Date(constructionData).toLocaleDateString("fa-IR")}</span>
        </span>
      </div>
    </div>
  );
};

export default Section2;
