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

export const profileDataFormSchema = yup.object({
  title: yup.string().required("عنوان آگهی الزامی است"),
  location: yup.string().required("آدرس الزامی است"),
  phone: yup
    .string()
    .required("تلفن تماس الزامی است")
    .matches(/^(?:\+98|0)?9\d{9}$/, "شماره موبایل معتبر نیست"),
  price: yup
    .string()
    .test("is-number", "این قسمت فقط عدد قرار می‌گیرد", (value) => {
      if (!value) return true;
      return !isNaN(+value);
    })
    .required("قیمت الزامی است"),
  realState: yup.string().required("ثبت این فیلد الزامی است"),
  category: yup.string().required("ثبت این فیلد الزامی است"),
  constructionData: yup.date().required("ثبت این فیلد الزامی است"),
  description: yup.string().required("ثبت این فیلد الزامی است"),
  newRule: yup.string(),
  newAmenitie: yup.string(),
});

export default validationSignUpFormSchema;
