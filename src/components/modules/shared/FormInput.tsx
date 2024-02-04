"use client";
import React from "react";
import { Field, ErrorMessage } from "formik";

interface FormInputInterfaceProps {
  type: string;
  FieldClassName: string;
  ErrorMessageClassName: string;
  text: string;
  name: string;
}

const FormInput: React.FC<FormInputInterfaceProps> = ({
  type,
  FieldClassName,
  ErrorMessageClassName,
  text,
  name,
}) => {
  return (
    <div className="flex flex-col gap-y-1 w-full">
      <label htmlFor="email">{text}</label>
      <Field className={FieldClassName} type={type} id={name} name={name} />
      <ErrorMessage
        className={ErrorMessageClassName}
        name={name}
        component="div"
      />
    </div>
  );
};

export default FormInput;
