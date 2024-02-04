"use client";
import React from "react";
import FormInput from "./shared/FormInput";

const SignInForm: React.FC = () => {
  return (
    <>
      <FormInput
        type="email"
        text="ایمیل:"
        name="email"
        ErrorMessageClassName="text-xs text-red-800"
        FieldClassName="bg-slate-200 px-1 flex-1 w-full focus:border-none focus:ring-0 focus:outline-0 p-1 rounded"
      />
      <FormInput
        type="password"
        text="رمز عبور:"
        name="password"
        ErrorMessageClassName="text-xs text-red-800"
        FieldClassName="bg-slate-200 mb-2 px-1 flex-1 w-full focus:border-none focus:ring-0 focus:outline-0 p-1 rounded"
      />
    </>
  );
};

export default SignInForm;
