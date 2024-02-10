import BuyResidentialPage from "@/templates/BuyResidentialPage";
import { NextPage } from "next";

const buyResidential: NextPage = async () => {
  const res = await fetch("http://localhost:3000/api/profile", {
    cache: "no-store",
  });
  const data = await res.json();
  if (data.error) return <h1>مشکلی پیش آمده دوباره تلاش کنید</h1>;
  return <BuyResidentialPage data={data} />;
};

export default buyResidential;
