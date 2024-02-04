"use client";
import React, { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
interface NextAuthProviderInterfaceProps {
  children: ReactNode;
}

const NextAuthProvider: React.FC<NextAuthProviderInterfaceProps> = ({
  children,
}) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default NextAuthProvider;
