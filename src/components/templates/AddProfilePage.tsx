import React from "react";
import { profileDataFormSchema } from "@/utils/validationFormSchema";
import { Formik } from "formik";
import { profileDataFormInterface } from "@/utils/contracts";
import { omit } from "lodash";
import AddProfilePageInnerForm from "@/modules/AddProfilePageInnerForm";

const AddProfilePage: React.FC = ({}) => {
  const initialValues: profileDataFormInterface = {
    title: "",
    phone: "",
    price: "",
    location: "",
    realState: "",
    constructionData: new Date(),
    category: "",
    description: "",
    rules: [],
    amenities: [],
    newAmenitie: "",
    newRule: "",
  };

  const handleSubmit = async (values: profileDataFormInterface) => {
    const valuesToSend = omit(values, ["newRule", "newAmenitie"]);
    console.log(valuesToSend);
  };

  return (
    <div className="text-center">
      <h1 className="font-bold text-slate-800 mb-3">ثبت آگهی</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={profileDataFormSchema}
        onSubmit={handleSubmit}
      >
        <AddProfilePageInnerForm />
      </Formik>
    </div>
  );
};

export default AddProfilePage;
