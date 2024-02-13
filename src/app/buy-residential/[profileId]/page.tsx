import Profile from "@/models/Profile";
import ProfileDetailsPage from "@/templates/ProfileDetailsPage";
import connectDB from "@/utils/connectDB";
import { ProfileDetailsPropsInterface } from "@/utils/contracts";
import { Metadata, NextPage, ResolvingMetadata } from "next";

const ProfileDetails: NextPage<ProfileDetailsPropsInterface> = async ({
  params,
}) => {
  await connectDB();
  const profile = await Profile.findOne({ _id: params.profileId });
  if (!profile) return <h1> مشلکی پیش آمده است دوباره تلاش کنید</h1>;
  return <ProfileDetailsPage {...profile._doc} />;
};

export default ProfileDetails;

type Props = {
  params: { profileId: string };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  await connectDB();
  const profile = await Profile.findOne({ _id: params.profileId });
  return {
    title: profile.title,
    description: profile.description,
    authors: { name: "Khosro Moradi" },
  };
};
