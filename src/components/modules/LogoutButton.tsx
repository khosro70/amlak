"use client";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";
import React from "react";
import { FiLogOut } from "react-icons/fi";

const LogoutButton: React.FC = () => {
  const router = useRouter();
  const handleSignOut = async () => {
    await signOut();
    router.push("/");
  };
  return (
    <button
      className="flex font-bold items-center transition-all gap-x-2 text-red-600 text-sm sm:text-base hover:font-bold"
      onClick={handleSignOut}
    >
      <FiLogOut className="text-red-600 text-lg" />
      <span>خروج</span>
    </button>
  );
};

export default LogoutButton;
