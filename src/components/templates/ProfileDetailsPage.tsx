import Section1 from "@/modules/profileDetailsPage/Section1";
import Section2 from "@/modules/profileDetailsPage/Section2";
import { CartInterface } from "@/utils/contracts";
import { englishNumbersToPersian } from "@/utils/replaceNumber";
import React from "react";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { FaPhone } from "react-icons/fa";
import { IoIosPricetags } from "react-icons/io";
import { IoLocation, IoShareSocial } from "react-icons/io5";
import { MdApartment, MdOutlineRealEstateAgent } from "react-icons/md";

const ProfileDetailsPage: React.FC<CartInterface> = ({
  title,
  description,
  location,
  phone,
  realState,
  price,
  constructionData,
  category,
  amenities,
  rules,
}) => {
  return (
    <div className="flex gap-y-3 gap-x-7 shadow p-2 min-h-[calc(100vh-100px)] rounded mb-4 bg-slate-200">
      <Section1
        title={title}
        location={location}
        description={description}
        rules={rules}
        amenities={amenities}
      />
      <Section2
        realState={realState}
        price={price}
        constructionData={constructionData}
      />
    </div>
  );
};

export default ProfileDetailsPage;
