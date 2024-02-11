"use client";
import React, { useEffect, useState } from "react";
import { IoShareSocial } from "react-icons/io5";
import { CopyToClipboard } from "react-copy-to-clipboard";

const ShareButton: React.FC = () => {
  const [url, setUrl] = useState("");
  useEffect(() => {
    const url = window.location.href;
    setUrl(url);
  }, []);
  return (
    <CopyToClipboard text={url}>
      <div className="flex gap-x-2 border-2 justify-center items-center py-2 rounded-lg shadow-lg w-1/3 md:w-full">
        <IoShareSocial size={18} className="font-medium" />
        <span className="text-sm">اشتراک گذاری</span>
      </div>
    </CopyToClipboard>
  );
};

export default ShareButton;
