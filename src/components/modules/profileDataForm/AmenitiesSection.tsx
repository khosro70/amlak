"use client";
import { profileDataFormInterface } from "@/utils/contracts";
import { ErrorMessage, Field, useFormikContext } from "formik";
import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { MdOutlineLibraryAdd } from "react-icons/md";

const AmenitiesSection: React.FC = () => {
  const formik = useFormikContext<profileDataFormInterface>();
  const handleAddAmenitie = () => {
    if (formik.values.newAmenitie?.trim() !== "") {
      formik.setFieldValue("amenities", [
        ...(formik.values.amenities || []),
        formik.values.newAmenitie,
      ]);
      formik.setFieldValue("newAmenitie", "");
      formik.setFieldError("newAmenitie", "");
    }
  };

  const handleRemoveAmenitie = (index: number) => {
    const updatedamenities = formik.values.amenities?.filter(
      (_, i) => i !== index
    );
    formik.setFieldValue("amenities", updatedamenities);
  };
  return (
    <div>
      <div className="flex flex-col self-start justify-start items-start gap-y-1 w-full">
        <label htmlFor="newRule">امکانات رفاهی:</label>
        <ul className="mb-2 space-y-2">
          {formik.values.amenities?.map((amenitie, index) => (
            <li key={index} className="flex items-center gap-x-10 text-sm">
              <span>{amenitie}</span>
              <button
                onClick={() => handleRemoveAmenitie(index)}
                className="text-xs flex gap-x-2 items-center bg-red-600 text-white rounded px-2 py-1"
              >
                حذف
                <AiOutlineDelete />
              </button>
            </li>
          ))}
        </ul>
        <Field
          className="bg-slate-200 px-3 flex-1 w-full focus:border-none focus:ring-0 focus:outline-0 p-1 rounded"
          type="text"
          id="newAmenitie"
          name="newAmenitie"
          placeholder="امکانات رفاهی خود را وارد کنید"
        />
        <ErrorMessage
          className="text-xs text-red-500"
          name="newAmenitie"
          component="div"
        />
      </div>
      <button
        className="flex items-center text-sm gap-x-2 rounded mb-8 text-right text-white bg-green-600 px-3 py-1 mt-2"
        type="button"
        onClick={() => handleAddAmenitie()}
      >
        افزودن امکان رفاهی جدید
        <MdOutlineLibraryAdd />
      </button>
    </div>
  );
};

export default AmenitiesSection;
