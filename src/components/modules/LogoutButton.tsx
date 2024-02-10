"use client";
import { signOut } from "next-auth/react";
import React from "react";
import { FiLogOut } from "react-icons/fi";

const LogoutButton: React.FC = () => {
  const handleSignOut = async () => {
    await signOut();
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
