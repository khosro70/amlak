import React from "react";
import { ErrorMessage, Field } from "formik";

const RadioBotton: React.FC = () => {
  return (
    <div className="flex flex-col gap-y-1 items-start">
      <label>دسته بندی</label>
      <div className="flex gap-x-5">
        <div className="flex items-center gap-x-2">
          <Field
            type="radio"
            id="villa"
            name="category"
            value="villa"
            className="mr-1"
          />
          <label htmlFor="villa">ویلا</label>
        </div>
        <div className="flex items-center gap-x-2">
          <Field
            type="radio"
            id="apartment"
            name="category"
            value="apartment"
            className="mr-1"
          />
          <label htmlFor="apartment">آپارتمان</label>
        </div>
        <div className="flex items-center gap-x-2">
          <Field
            type="radio"
            id="store"
            name="category"
            value="store"
            className="mr-1"
          />
          <label htmlFor="store">مغازه</label>
        </div>
        <div className="flex items-center gap-x-2">
          <Field
            type="radio"
            id="office"
            name="category"
            value="office"
            className="mr-1"
          />
          <label htmlFor="office">دفتر</label>
        </div>
      </div>
      <ErrorMessage
        className="text-xs text-red-500"
        name="category"
        component="div"
      />
    </div>
  );
};

export default RadioBotton;
