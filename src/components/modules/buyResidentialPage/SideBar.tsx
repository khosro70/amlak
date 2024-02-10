import React, { useEffect, useState } from "react";
import SideBarItem from "./SideBarItem";
import { sidebarItems } from "@/utils/someValues";
import { mapStringToPersian } from "@/utils/mapCategoryToPersian";

export interface SideBarPropsInterface {
  category: string;
}

const SideBar: React.FC<SideBarPropsInterface> = ({ category }) => {
  const [selectedType, setSelectedType] = useState<string | null>("همه");

  const handleItemClick = (propertyType: string) => {
    setSelectedType((prevType) =>
      prevType === propertyType ? null : propertyType
    );
  };

  useEffect(() => {
    if (category) setSelectedType(mapStringToPersian(category));
  }, []);

  return (
    <div className="w-2/6 sm:w-3/12 lg:w-2/12 bg-slate-200 p-3 h-fit sticky top-[88px] rounded">
      <span className="mb-3 font-bold block text-lg">دسته بندی</span>
      <ul className="space-y-2">
        {sidebarItems.map((item, index) => (
          <SideBarItem
            category={category}
            key={index}
            href={item.href}
            icon={item.icon}
            label={item.label}
            selected={selectedType === item.label}
            onClick={() => handleItemClick(item.label.toLowerCase())}
          />
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
