import * as yup from "yup";

const validationSignUpFormSchema = yup.object({
  email: yup.string().email("ایمیل معتبر نیست").required("ایمیل الزامی است"),
  password: yup
    .string()
    .min(6, "رمز عبور باید حداقل 6 کاراکتر باشد")
    .required("رمز عبور الزامی است"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), undefined], "تکرار رمز عبور مطابقت ندارد")
    .required("تکرار رمز عبور الزامی است"),
});

export const validationSignInFormSchema = yup.object({
  email: yup.string().email("ایمیل معتبر نیست").required("ایمیل الزامی است"),
  password: yup
    .string()
    .min(6, "رمز عبور باید حداقل 6 کاراکتر باشد")
    .required("رمز عبور الزامی است"),
});

export default validationSignUpFormSchema;
