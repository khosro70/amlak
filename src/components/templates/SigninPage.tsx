"use client";
import React, { useState } from "react";
import { Formik, Form } from "formik";
import { validationSignInFormSchema } from "@/utils/validationFormSchema";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import SignUpFormLoading from "@/modules/SignUpFormLoading";
import SignInForm from "@/modules/SignInForm";
import { signInFormData } from "@/utils/contracts";
import { signIn } from "next-auth/react";

const SigninPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const initialValues: signInFormData = {
    email: "",
    password: "",
  };
  const router = useRouter();
  const handleSubmit = async (values: signInFormData) => {
    setLoading(true);
    const res = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
    });
    setLoading(false);
    if (res?.error) {
      toast.error(res.error);
    } else {
      router.push("/");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-[600px]">
      <h1 className="mb-4 text-lg font-bold text-orange-600">فرم ورود</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSignInFormSchema}
        onSubmit={handleSubmit}
      >
        <Form className="flex flex-col justify-center items-start  min-w-[300px] border border-slate-300 shadow p-6 gap-y-3 mb-2 bg-slate-50">
          <SignInForm />
          <div className="flex flex-col justify-center w-full">
            {loading ? (
              <SignUpFormLoading />
            ) : (
              <button
                className="rounded text-white bg-orange-600 px-3 py-1"
                type="submit"
              >
                ورود
              </button>
            )}
          </div>
        </Form>
      </Formik>
      <p className="text-sm">
        <span>حساب کاربری ندارید؟</span>
        <Link className="text-blue-600 mr-1" href="/signup">
          ثبت نام
        </Link>
      </p>
      <div>
        <Toaster />
      </div>
    </div>
  );
};

export default SigninPage;
