import NextAuth, { NextAuthOptions, SessionOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/User";
import { verifyPassword } from "@/utils/auth";
import connectDB from "@/utils/connectDB";
import { NextApiRequest } from "next";

const authOptions: never | NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      async authorize(
        credentials: Record<string, string> | undefined,
        req: Pick<NextApiRequest, "body" | "query" | "headers" | "method">
      ) {
        const { email, password } = credentials || {};
        try {
          await connectDB();
        } catch (error) {
          throw new Error("مشکلی در سرور رخ داده");
        }
        if (!email || !password) {
          throw new Error("لطفا اطلاعات معتبر وارد وارد کنید");
        }

        const user = await User.findOne({ email });

        if (!user) throw new Error("لطفا ابتدا حساب کاربری ایجاد کنید");

        const isValid = await verifyPassword(password, user.password);

        if (!isValid) throw new Error("ایمیل یا رمز عبور اشتباه است");

        return { email };
      },
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST, authOptions };
