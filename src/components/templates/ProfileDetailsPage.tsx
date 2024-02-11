import Section1 from "@/modules/profileDetailsPage/Section1";
import Section2 from "@/modules/profileDetailsPage/Section2";
import { CartInterface } from "@/utils/contracts";
import React from "react";

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
    <div className="flex flex-col md:flex-row gap-y-3 gap-x-7 shadow p-4 min-h-[calc(100vh-100px)] rounded mb-4 bg-slate-200">
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
