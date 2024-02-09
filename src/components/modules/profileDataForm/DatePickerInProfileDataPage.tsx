"use client";
import { ErrorMessage, useFormikContext } from "formik";
import React from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { profileDataFormInterface } from "@/utils/contracts";

const DatePickerInProfileDataPage: React.FC = () => {
  const formik = useFormikContext<profileDataFormInterface>();

  return (
    <div className="flex flex-col self-start justify-start items-start gap-y-1 w-full">
      <label htmlFor="constructionData">تاریخ ساخت</label>
      <DatePicker
        calendar={persian}
        locale={persian_fa}
        calendarPosition="bottom-right"
        value={formik.values.constructionData}
        onChange={(value: any) => {
          formik.setFieldValue("constructionData", value?.toDate?.());
        }}
        style={{
          flex: "1 1 0%",
          width: "100%",
          backgroundColor: "rgb(226 232 240 / var(--tw-bg-opacity))",
          height: "32px",
          borderRadius: "4px",
          fontSize: "16px",
          padding: "3px 8px",
          border: "none",
          textAlign: "center",
        }}
      />
      <ErrorMessage className="" name="constructionData" component="div" />
    </div>
  );
};

export default DatePickerInProfileDataPage;
