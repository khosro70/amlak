"use client";
import { ErrorMessage, Field } from "formik";
import React from "react";

const TextAreaInProfileDataPage: React.FC = () => {
  
  return (
    <div className="flex flex-col">
        <label className="mb-2 flex" htmlFor="description">
          <span>توضیحات:</span>
        </label>
        <div className="border-2 border-slate-200 bg-white">
          <Field
            name="description"
            as="textarea"
            rows={4}
            className="w-full max-h-28 resize-none border-none border-slate-200 focus:ring-0 focus:border-0 focus:outline-none p-2"
          />
        </div>
        <ErrorMessage
          name="description"
          component="div"
          className="text-red-500 text-right text-xs"
        />
      </div>
  );
};

export default TextAreaInProfileDataPage;
