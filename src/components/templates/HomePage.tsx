import CategoryCard from "@/modules/homePage/CategoryCard";
import React from "react";
import { FaCity } from "react-icons/fa";

const HomePage: React.FC = () => {
  const cities = [
    "اصفهان",
    "تهران",
    "مشهد",
    "شیراز",
    "همدان",
    "تبریز",
    "سنندج",
    "اهواز",
  ];
  const categoryItemsInHomePage = [
    { name: "ویلا", image: "villa" },
    { name: "آپارتمان", image: "apartment" },
    { name: "مغازه", image: "store" },
    { name: "دفتر", image: "office" },
  ];
  return (
    <div className="min-h-[calc(100vh-100px)] py-3 px-4 mb-4">
      <div className="flex flex-col justify-center items-center gap-y-4 md:gap-y-12 h-36 md:h-72">
        <h1 className="font-black text-blue-500 text-2xl md:4xl lg:text-5xl">
          سامانه ی خرید و اجاره ی ملک
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mb-10 gap-x-6 gap-y-5 lg:gap-y-0 lg:grid-cols-4 px-6 lg:px-20">
        {categoryItemsInHomePage.map((i) => (
          <CategoryCard name={i.name} image={i.image} key={i.name} />
        ))}
      </div>
      <div className="flex flex-col gap-y-4 justify-center items-center mb-6 mt-10 md:mt-20">
        <h1 className="text-2xl font-bold">شهرهای پر بازدید</h1>
        <ul className="grid grid-cols-2 md:grid-cols-4 w-full">
          {cities.map((i) => (
            <li
              key={i}
              className="flex justify-center items-center gap-x-3 bg-blue-400 rounded py-2 my-3 mx-6"
            >
              <FaCity />
              <span>{i}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
