

import { NextPage } from "next";
import BuyResidentialPage from "@/templates/BuyResidentialPage";
import { buyResidentialPropsInterface, CartInterface } from "@/utils/contracts";
import connectDB from "@/utils/connectDB";
import Profile from "@/models/Profile";

const buyResidential: NextPage<buyResidentialPropsInterface> = async ({
  searchParams,
}) => {
  await connectDB();
  const profiles = await Profile.find({ published: true }).select("-userId");
  let data = await JSON.parse(JSON.stringify(profiles));
  if (searchParams?.category) {
    data = data.filter(
      (i: CartInterface) => i.category === searchParams.category
    );
  }
  return <BuyResidentialPage data={data} category={searchParams?.category} />;
};
export default buyResidential;
