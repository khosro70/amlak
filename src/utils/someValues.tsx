import { MdApartment, MdVilla } from "react-icons/md";
import { profileDataFormInterface } from "./contracts";
import { FaStore } from "react-icons/fa";
import { PiOfficeChairFill } from "react-icons/pi";

export const initialValues: profileDataFormInterface = {
  title: "",
  description: "",
  location: "",
  phone: "",
  realState: "",
  price: "",
  constructionData: new Date(),
  category: "",
  amenities: [],
  rules: [],
  newAmenitie: "",
  newRule: "",
};

export const sidebarItems = [
  { href: "/buy-residential", icon: <MdVilla />, label: "همه" },
  {
    href: "/buy-residential?category=villa",
    icon: <MdVilla />,
    label: "ویلا",
  },
  {
    href: "/buy-residential?category=apartment",
    icon: <MdApartment />,
    label: "آپارتمان",
  },
  {
    href: "/buy-residential?category=store",
    icon: <FaStore />,
    label: "مغازه",
  },
  {
    href: "/buy-residential?category=office",
    icon: <PiOfficeChairFill />,
    label: "دفتر",
  },
];
