import { NextPage } from "next";
import Link from "next/link";

const Footer: NextPage = () => {
  return (
    <footer className="py-6 px-3 bg-blue-400 text-slate-800">
      <div className="container mx-auto xl:max-w-[1200px] flex justify-between items-start gap-x-3 px-2">
        <div className="w-1/2 md:w-3/4 pr-2">
          <h1 className="text-lg mb-1 font-medium">
            سامانه ی خرید و اجاره ی املاک
          </h1>
          <p className="text-justify">
            می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر
            کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده
            می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر
            متن باشد. معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های
            آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری
          </p>
        </div>
        <div className="w-1/2 md:w-1/4 flex justify-center">
          <ul className="space-y-2 list-disc">
            <li className="hover:text-orange-600 font-medium transition">
              <Link href="#">تعرفه های قانونی</Link>
            </li>
            <li className="hover:text-orange-600 font-medium transition">
              <Link href="#">مشاورین خبره</Link>
            </li>
            <li className="hover:text-orange-600 font-medium transition">
              <Link href="#">دسترسی سریع</Link>
            </li>
            <li className="hover:text-orange-600 font-medium transition">
              <Link href="#">قولنامه ی محضری</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
