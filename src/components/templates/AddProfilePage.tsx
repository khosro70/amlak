"use client";
import React, { useState } from "react";
import { profileDataFormSchema } from "@/utils/validationFormSchema";
import { Formik } from "formik";
import { CartInterface } from "@/utils/contracts";
import { omit } from "lodash";
import AddProfilePageInnerForm from "@/modules/profileDataForm/AddProfilePageInnerForm";
import toast, { Toaster } from "react-hot-toast";
import { initialValues } from "@/utils/someValues";
import { useRouter } from "next/navigation";

interface AddProfilePagePropsInterface {
  data: CartInterface;
}

const AddProfilePage: React.FC<AddProfilePagePropsInterface> = ({ data }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (values: CartInterface, actions: any) => {
    setLoading(true);
    const priceNumber = +values.price;
    const Newvalues = { ...values, price: priceNumber };
    const valuesToSend = omit(Newvalues, ["newRule", "newAmenitie"]);
    const res = await fetch("/api/profile", {
      method: data ? "PATCH" : "POST",
      body: JSON.stringify({ ...valuesToSend }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const Data = await res.json();
    setLoading(false);
    if (Data.error) {
      toast.error(Data.error);
    } else {
      router.refresh();
      actions.resetForm();
      toast.success(Data.message);
    }
  };
  console.log(data);
  return (
    <div className="text-center">
      <h1 className="font-bold text-slate-800 mb-3">
        {data ? "ویرایش آگهی" : "ثبت آگهی"}
      </h1>
      <Formik
        initialValues={data ? data : initialValues}
        validationSchema={profileDataFormSchema}
        onSubmit={handleSubmit}
        enableReinitialize={true}
      >
        <AddProfilePageInnerForm loading={loading} {...data} />
      </Formik>
      <Toaster />
    </div>
  );
};

export default AddProfilePage;
