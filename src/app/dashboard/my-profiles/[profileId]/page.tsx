
import Profile from "@/models/Profile";
import AddProfilePage from "@/templates/AddProfilePage";
import connectDB from "@/utils/connectDB";
import { EditPagePropsInterface } from "@/utils/contracts";
import { NextPage } from "next";

const edit: NextPage<EditPagePropsInterface> = async ({ params }) => {
  const { profileId } = params;
  await connectDB();
  const profile = await Profile.findOne({ _id: profileId });
  if (!profile) return <p>مشکلی پیش آمده است. لطفا دوباره امتحان کنید</p>;
  return <AddProfilePage data={JSON.parse(JSON.stringify(profile))} />;
};

export default edit;
