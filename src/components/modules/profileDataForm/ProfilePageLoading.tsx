"use client";
import React from "react";
import { ThreeDots } from "react-loader-spinner";

const ProfilePageLoading: React.FC = () => {
  return (
    <ThreeDots
      visible={true}
      height="8.5"
      width="30"
      color="white"
      radius="9"
      ariaLabel="three-dots-loading"
      wrapperStyle={{
        background: "rgb(234 88 12 / var(--tw-bg-opacity))",
        borderRadius: "0.25rem",
        display: "inline-block",
        text: "center",
        paddingRight: "15.5px",
        paddingLeft: "15.5px",
        paddingTop: "5px",
      }}
      wrapperClass=""
    />
  );
};

export default ProfilePageLoading;
