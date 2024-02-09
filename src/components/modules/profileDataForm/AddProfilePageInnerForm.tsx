import React from "react";
import { Form, useFormikContext } from "formik";
import {
  AddProfilePageInnerFormInterfaceProps,
  profileDataFormInterface,
} from "@/utils/contracts";
import ProfilePageLoading from "./ProfilePageLoading";
import TextAreaInProfileDataPage from "./TextAreaInProfileDataPage";
import ProfileDataFormSection1 from "./ProfileDataFormSection1";
import RadioBotton from "./RadioBotton";
import RulesSection from "./RulesSection";
import AmenitiesSection from "./AmenitiesSection";

const AddProfilePageInnerForm: React.FC<
  AddProfilePageInnerFormInterfaceProps
> = ({ loading }) => {
  const formik = useFormikContext<profileDataFormInterface>();

  return (
    <Form
      onSubmit={formik.handleSubmit}
      className="space-y-5 justify-center items-start min-w-[300px] border border-slate-300 shadow p-6 gap-y-3 mb-2 bg-slate-50"
    >
      <ProfileDataFormSection1 />
      <RadioBotton />
      <RulesSection />
      <AmenitiesSection />
      <TextAreaInProfileDataPage />
      <button
        className="rounded block text-right text-white bg-orange-600 px-3 py-1"
        type="submit"
      >
        {loading ? <ProfilePageLoading /> : "ثبت آگهی"}
      </button>
    </Form>
  );
};

export default AddProfilePageInnerForm;
