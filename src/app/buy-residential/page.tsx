import { NextPage } from "next";
import BuyResidentialPage from "@/templates/BuyResidentialPage";
import { buyResidentialPropsInterface, CartInterface } from "@/utils/contracts";

const buyResidential: NextPage<buyResidentialPropsInterface> = async ({
  searchParams,
}) => {
  const res = await fetch("http://localhost:3000/api/profile", {
    cache: "no-store",
  });
  const data = await res.json();
  if (data.error) return <h1>مشکلی پیش آمده دوباره تلاش کنید</h1>;
  let finalData = data.data;
  if (searchParams?.category) {
    finalData = finalData.filter(
      (i: CartInterface) => i.category === searchParams.category
    );
  }
  return <BuyResidentialPage data={finalData} category={searchParams?.category} />;
};

export default buyResidential;
