import { Section1PropsInterface } from "@/utils/contracts";
import React from "react";
import { IoLocation } from "react-icons/io5";

const Section1: React.FC<Section1PropsInterface> = ({
  title,
  location,
  description,
  rules,
  amenities,
}) => {
  return (
    <div className="w-3/4">
      <div className="flex flex-col  mb-12">
        <span className="font-bold text-lg">{title}</span>
        <span className="flex gap-x-2">
          <IoLocation size={18} />
          <span>{location}</span>
        </span>
      </div>
      <div className="mb-8">
        <p className="border-b-2 border-slate-300 mb-3 pb-2 text-blue-600 font-medium">
          توضیحات
        </p>
        <div className="text-justify text-sm">{description}</div>
      </div>
      {amenities.length ? (
        <div className="mb-8">
          <p className="border-b-2 border-slate-300 mb-3 pb-2 text-blue-600 font-medium">
            امکانات
          </p>
          <ul className="pr-2">
            {rules.map((i) => (
              <li key={i} className="flex items-center gap-x-4">
                <span className="inline-block w-2 h-2 bg-blue-500 rounded-full"></span>
                <span>{i}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      {rules.length ? (
        <div className="mb-8">
          <p className="border-b-2 border-slate-300 mb-3 pb-2 text-blue-600 font-medium">
            قوانین
          </p>
          <ul className="pr-2">
            {amenities.map((i) => (
              <li key={i} className="flex items-center gap-x-4">
                <span className="inline-block w-2 h-2 bg-blue-500 rounded-full"></span>
                <span>{i}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default Section1;
