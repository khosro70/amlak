import { mapStringToPersian } from "@/utils/mapCategoryToPersian";
import Link from "next/link";
import React from "react";

interface SidebarItemProps {
  category: string;
  href: string;
  icon: React.ReactNode;
  label: string;
  selected: boolean;
  onClick: () => void;
}
const SideBarItem: React.FC<SidebarItemProps> = ({
  category,
  href,
  icon,
  label,
  selected,
  onClick,
}) => {
  return (
    <li>
      <Link
        href={href}
        className={`${
          selected
            ? "flex gap-x-2 items-center"
            : "flex gap-x-2 items-center opacity-60"
        }`}
        onClick={onClick}
      >
        <span className="text-green-800">{icon}</span>
        <span>{label}</span>
      </Link>
    </li>
  );
};

export default SideBarItem;
