import React from "react";
import { Form, useFormikContext } from "formik";
import { profileDataFormInterface } from "@/utils/contracts";
import ProfilePageLoading from "./ProfilePageLoading";
import TextAreaInProfileDataPage from "./TextAreaInProfileDataPage";
import ProfileDataFormSection1 from "./ProfileDataFormSection1";
import RadioBotton from "./RadioBotton";
import RulesSection from "./RulesSection";
import AmenitiesSection from "./AmenitiesSection";

interface props {
  loading: boolean;
  title?: string;
}

const AddProfilePageInnerForm: React.FC<props> = ({ loading, title }) => {
  const formik = useFormikContext<profileDataFormInterface>();

  return (
    <Form
      onSubmit={formik.handleSubmit}
      className="space-y-5 justify-center items-start min-w-[300px] border border-slate-300 shadow p-6 gap-y-3 mb-2"
    >
      <ProfileDataFormSection1 />
      <RadioBotton />
      <RulesSection />
      <AmenitiesSection />
      <TextAreaInProfileDataPage />
      {title ? (
        <button
          className="rounded block text-right text-white bg-orange-600 px-3 py-1"
          type="submit"
        >
          {loading ? <ProfilePageLoading /> : "ویرایش آگهی"}
        </button>
      ) : (
        <button
          className="rounded block text-right text-white bg-orange-600 px-3 py-1"
          type="submit"
        >
          {loading ? <ProfilePageLoading /> : "ثبت آگهی"}
        </button>
      )}
    </Form>
  );
};

export default AddProfilePageInnerForm;
