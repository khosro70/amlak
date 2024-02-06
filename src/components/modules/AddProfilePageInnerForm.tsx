import React from "react";
import { ErrorMessage, Field, Form, useFormikContext } from "formik";
import { profileDataFormInterface } from "@/utils/contracts";
import { MdOutlineLibraryAdd } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

const AddProfilePageInnerForm: React.FC = ({}) => {
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
    <Form
      onSubmit={formik.handleSubmit}
      className="space-y-5 justify-center items-start min-w-[300px] border border-slate-300 shadow p-6 gap-y-3 mb-2 bg-slate-50"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-2 gap-y-5">
        <div className="flex flex-col self-start justify-start items-start gap-y-1 w-full">
          <label htmlFor="title">عنوان آگهی</label>
          <Field
            className="px-2 bg-slate-200 flex-1 w-full focus:border-none focus:ring-0 focus:outline-0 p-1 rounded"
            type="text"
            id="title"
            name="title"
          />
          <ErrorMessage
            className="text-xs text-red-800"
            name="title"
            component="div"
          />
        </div>
        <div className="flex flex-col self-start justify-start items-start gap-y-1 w-full">
          <label htmlFor="phone">تلفن تماس</label>
          <Field
            className="px-2 bg-slate-200 flex-1 w-full focus:border-none focus:ring-0 focus:outline-0 p-1 rounded"
            type="text"
            id="phone"
            name="phone"
          />
          <ErrorMessage
            className="text-xs text-red-800"
            name="phone"
            component="div"
          />
        </div>
        <div className="flex flex-col self-start justify-start items-start gap-y-1 w-full">
          <label htmlFor="price">قیمت</label>
          <Field
            className="px-2 bg-slate-200 flex-1 w-full focus:border-none focus:ring-0 focus:outline-0 p-1 rounded"
            type="text"
            id="price"
            name="price"
          />
          <ErrorMessage
            className="text-xs text-red-800"
            name="price"
            component="div"
          />
        </div>
        <div className="flex flex-col self-start justify-start items-start gap-y-1 w-full">
          <label htmlFor="location">آدرس</label>
          <Field
            className="px-2 bg-slate-200 flex-1 w-full focus:border-none focus:ring-0 focus:outline-0 p-1 rounded"
            type="text"
            id="location"
            name="location"
          />
          <ErrorMessage
            className="text-xs text-red-800"
            name="location"
            component="div"
          />
        </div>
        <div className="flex flex-col self-start justify-start items-start gap-y-1 w-full">
          <label htmlFor="realState">بنگاه</label>
          <Field
            className="px-2 bg-slate-200 flex-1 w-full focus:border-none focus:ring-0 focus:outline-0 p-1 rounded"
            type="text"
            id="realState"
            name="realState"
          />
          <ErrorMessage
            className="text-xs text-red-800"
            name="realState"
            component="div"
          />
        </div>
        <div className="flex flex-col self-start justify-start items-start gap-y-1 w-full">
          <label htmlFor="constructionData">تاریخ ساخت</label>
          <DatePicker
            calendar={persian}
            locale={persian_fa}
            calendarPosition="bottom-right"
            value={formik.values.constructionData}
            onChange={(value: any) => {
              formik.setFieldValue("constructionData", value?.toDate?.());
            }}
            style={{
              flex: "1 1 0%",
              width: "100%",
              backgroundColor: "rgb(226 232 240 / var(--tw-bg-opacity))",
              height: "32px",
              borderRadius: "4px",
              fontSize: "16px",
              padding: "3px 8px",
              border: "none",
              textAlign: "center",
            }}
          />
          <ErrorMessage className="" name="constructionData" component="div" />
        </div>
      </div>
      {/* radio */}
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
      </div>
      {/* rules */}
      <div>
        <div className="flex flex-col self-start justify-start items-start gap-y-1 w-full">
          <label htmlFor="newRule">قوانین ملک:</label>
          <ul className="mb-2 space-y-2">
            {formik.values.rules?.map((rule, index) => (
              <li key={index} className="flex gap-x-10 text-sm">
                <span>{rule}</span>
                <button
                  onClick={() => handleRemoveRule(index)}
                  className="flex gap-x-2 items-center bg-red-600 text-white rounded px-2 py-1"
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
            className="text-xs text-red-800"
            name="newRule"
            component="div"
          />
        </div>
        <button
          className="flex items-center gap-x-2 rounded mb-8 text-right text-white bg-green-600 px-3 py-1 mt-2"
          type="button"
          onClick={() => handleAddRule()}
        >
          افزودن قانون جدید
          <MdOutlineLibraryAdd />
        </button>
      </div>
      {/* amenities */}
      <div>
        <div className="flex flex-col self-start justify-start items-start gap-y-1 w-full">
          <label htmlFor="newRule">امکانات رفاهی:</label>
          <ul className="mb-2 space-y-2">
            {formik.values.amenities?.map((amenitie, index) => (
              <li key={index} className="flex gap-x-10 text-sm">
                <span>{amenitie}</span>
                <button
                  onClick={() => handleRemoveAmenitie(index)}
                  className="flex gap-x-2 items-center bg-red-600 text-white rounded px-2 py-1"
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
            className="text-xs text-red-800"
            name="newAmenitie"
            component="div"
          />
        </div>
        <button
          className="flex items-center gap-x-2 rounded mb-8 text-right text-white bg-green-600 px-3 py-1 mt-2"
          type="button"
          onClick={() => handleAddAmenitie()}
        >
          افزودن امکان رفاهی جدید
          <MdOutlineLibraryAdd />
        </button>
      </div>
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
        <ErrorMessage name="message" component="div" className="text-red-500" />
      </div>
      <button
        className="rounded block text-right text-white bg-orange-600 px-3 py-1"
        type="submit"
      >
        ثبت آگهی
      </button>
    </Form>
  );
};

export default AddProfilePageInnerForm;
