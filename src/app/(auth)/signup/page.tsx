import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import SignupPage from "@/templates/SignupPage";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

const signup = async () => {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/");
  }
  return (
    <>
      <SignupPage />
    </>
  );
};

export default signup;


