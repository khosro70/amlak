"use client";
import React from "react";
import FormInput from "../shared/FormInput";
import DatePickerInProfileDataPage from "./DatePickerInProfileDataPage";

const ProfileDataFormSection1: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-2 gap-y-5">
      <FormInput
        type="text"
        name="title"
        text="عنوان آگهی"
        FieldClassName="px-2 bg-slate-200 flex-1 w-full focus:border-none focus:ring-0 focus:outline-0 p-1 rounded"
        ErrorMessageClassName="text-xs text-red-500"
        divClassName="flex flex-col self-start justify-start items-start gap-y-1 w-full"
      />
      <FormInput
        type="text"
        name="phone"
        text="تلفن تماس"
        FieldClassName="px-2 bg-slate-200 flex-1 w-full focus:border-none focus:ring-0 focus:outline-0 p-1 rounded"
        ErrorMessageClassName="text-xs text-red-500"
        divClassName="flex flex-col self-start justify-start items-start gap-y-1 w-full"
      />
      <FormInput
        type="text"
        name="price"
        text="قیمت"
        FieldClassName="px-2 bg-slate-200 flex-1 w-full focus:border-none focus:ring-0 focus:outline-0 p-1 rounded"
        ErrorMessageClassName="text-xs text-red-500"
        divClassName="flex flex-col self-start justify-start items-start gap-y-1 w-full"
      />
      <FormInput
        type="text"
        name="location"
        text="آدرس"
        FieldClassName="px-2 bg-slate-200 flex-1 w-full focus:border-none focus:ring-0 focus:outline-0 p-1 rounded"
        ErrorMessageClassName="text-xs text-red-500"
        divClassName="flex flex-col self-start justify-start items-start gap-y-1 w-full"
      />
      <FormInput
        type="text"
        name="realState"
        text="بنگاه"
        FieldClassName="px-2 bg-slate-200 flex-1 w-full focus:border-none focus:ring-0 focus:outline-0 p-1 rounded"
        ErrorMessageClassName="text-xs text-red-500"
        divClassName="flex flex-col self-start justify-start items-start gap-y-1 w-full"
      />
      <DatePickerInProfileDataPage />
    </div>
  );
};

export default ProfileDataFormSection1;
