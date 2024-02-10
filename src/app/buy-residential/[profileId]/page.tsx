import Profile from "@/models/Profile";
import ProfileDetailsPage from "@/templates/ProfileDetailsPage";
import connectDB from "@/utils/connectDB";
import { NextPage } from "next";

export interface ProfileDetailsPropsInterface {
  params: { profileId: string };
  searchParams?: {};
}

const ProfileDetails: NextPage<ProfileDetailsPropsInterface> = async ({
  params,
}) => {
  await connectDB();
  const profile = await Profile.findOne({ _id: params.profileId });
  if (!profile) return <h1> مشلکی پیش آمده است دوباره تلاش کنید</h1>;
  return <ProfileDetailsPage {...profile._doc} />;
};

export default ProfileDetails;
