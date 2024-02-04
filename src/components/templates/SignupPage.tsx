"use client";
import React, { useState } from "react";
import { Formik, Form } from "formik";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import SignUpForm from "@/modules/SignUpForm";
import SignUpFormLoading from "@/modules/SignUpFormLoading";
import { signUpFormData } from "@/utils/contracts";
import validationSignUpFormSchema from "@/utils/validationFormSchema";

const SignupPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const initialValues: signUpFormData = {
    email: "",
    password: "",
    confirmPassword: "",
  };
  const router = useRouter();
  const handleSubmit = async (values: signUpFormData) => {
    setLoading(true);
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({ email: values.email, password: values.password }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const data = await res.json();
    if (res.status === 201) {
      setLoading(false);
      router.push("/signin");
    } else {
      setLoading(false);
      toast.error(data.error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-[600px]">
      <h1 className="mb-4 text-lg font-bold text-orange-600">فرم ثبت نام</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSignUpFormSchema}
        onSubmit={handleSubmit}
      >
        <Form className="flex flex-col justify-center items-start  min-w-[300px] border border-slate-300 shadow p-6 gap-y-3 mb-2 bg-slate-50">
          <SignUpForm />
          <div className="flex flex-col justify-center w-full">
            {loading ? (
              <SignUpFormLoading />
            ) : (
              <button
                className="rounded text-white bg-orange-600 px-3 py-1"
                type="submit"
              >
                ثبت نام
              </button>
            )}
          </div>
        </Form>
      </Formik>
      <p className="text-sm">
        <span>حساب کاربری دارید؟</span>
        <Link className="text-blue-600 mr-1" href="/signin">
          ورود
        </Link>
      </p>
      <div>
        <Toaster />
      </div>
    </div>
  );
};

export default SignupPage;
