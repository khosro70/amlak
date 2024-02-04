"use client";
import React from "react";
import { ThreeDots } from "react-loader-spinner";

const SignUpFormLoading: React.FC = () => {
  return (
    <ThreeDots
      visible={true}
      height="31.5"
      width="40"
      color="white"
      radius="9"
      ariaLabel="three-dots-loading"
      wrapperStyle={{
        margin: "auto",
        width: "100%",
        background: "rgb(234 88 12 / var(--tw-bg-opacity))",
        borderRadius: "0.25rem",
        display: "flex",
        justifyContent: "center",
      }}
      wrapperClass=""
    />
  );
};

export default SignUpFormLoading;
