"use client";
import React, { useState } from "react";
import { profileDataFormSchema } from "@/utils/validationFormSchema";
import { Formik } from "formik";
import { CartInterface, profileDataFormInterface } from "@/utils/contracts";
import { omit } from "lodash";
import AddProfilePageInnerForm from "@/modules/profileDataForm/AddProfilePageInnerForm";
import toast, { Toaster } from "react-hot-toast";
import { initialValues } from "@/utils/someValues";

interface AddProfilePagePropsInterface {
  data: CartInterface;
}

const AddProfilePage: React.FC<AddProfilePagePropsInterface> = ({ data }) => {
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (
    values: profileDataFormInterface,
    actions: any
  ) => {
    setLoading(true);
    console.log(values);
    const priceNumber = +values.price;
    const Newvalues = { ...values, price: priceNumber };
    const valuesToSend = omit(Newvalues, ["newRule", "newAmenitie"]);
    const res = await fetch("/api/profile", {
      method: "POST",
      body: JSON.stringify({ ...valuesToSend }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const data = await res.json();
    setLoading(false);
    if (data.error) {
      toast.error(data.error);
    } else {
      actions.resetForm();
      toast.success(data.message);
    }
  };
  console.log(data);
  return (
    <div className="text-center">
      <h1 className="font-bold text-slate-800 mb-3">
        {data ? "ویرایش آگهی" : "ثبت آگهی"}
      </h1>
      <Formik
        initialValues={initialValues}
        validationSchema={profileDataFormSchema}
        onSubmit={handleSubmit}
      >
        <AddProfilePageInnerForm loading={loading} />
      </Formik>
      <Toaster />
    </div>
  );
};

export default AddProfilePage;
