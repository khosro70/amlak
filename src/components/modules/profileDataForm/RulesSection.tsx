"use client";
import { profileDataFormInterface } from "@/utils/contracts";
import { ErrorMessage, Field, useFormikContext } from "formik";
import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { MdOutlineLibraryAdd } from "react-icons/md";

const RulesSection: React.FC = () => {
  const formik = useFormikContext<profileDataFormInterface>();
  const handleAddRule = () => {
    if (formik.values.newRule?.trim() !== "") {
      formik.setFieldValue("rules", [
        ...(formik.values.rules || []),
        formik.values.newRule,
      ]);
      formik.setFieldValue("newRule", "");
      formik.setFieldError("newRule", "");
    }
  };

  const handleRemoveRule = (index: number) => {
    const updatedRules = formik.values.rules?.filter((_, i) => i !== index);
    formik.setFieldValue("rules", updatedRules);
  };
  return (
    <div>
      <div className="flex flex-col self-start justify-start items-start gap-y-1 w-full">
        <label htmlFor="newRule">قوانین ملک:</label>
        <ul className="mb-2 space-y-2">
          {formik.values.rules?.map((rule, index) => (
            <li key={index} className="flex items-center gap-x-10 text-sm">
              <span>{rule}</span>
              <button
                onClick={() => handleRemoveRule(index)}
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
          id="newRule"
          name="newRule"
          placeholder="قانون خود را وارد کنید"
        />
        <ErrorMessage
          className="text-xs text-red-500"
          name="newRule"
          component="div"
        />
      </div>
      <button
        className="flex items-center text-sm gap-x-2 rounded mb-8 text-right text-white bg-green-600 px-3 py-1 mt-2"
        type="button"
        onClick={() => handleAddRule()}
      >
        افزودن قانون جدید
        <MdOutlineLibraryAdd />
      </button>
    </div>
  );
};

export default RulesSection;
