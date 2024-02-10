import type { Metadata } from "next";
import "./globals.css";
import { vazirMatn } from "@/utils/fonts";
import Layout from "@/layout/Layout";
import NextAuthProvider from "@/providers/NextAuthProvider";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`bg-neutral-200 bg-fixed bg-[url('/images/profileBg.jpg')] ${vazirMatn.className}`}
      >
        <NextAuthProvider>
          <Layout>{children}</Layout>
        </NextAuthProvider>
      </body>
    </html>
  );
}
