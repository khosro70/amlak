export interface signInFormData {
  email: string;
  password: string;
}

export interface AddProfilePageInnerFormInterfaceProps {
  loading: boolean;
}

export interface signUpFormData {
  email: string;
  password: string;
  confirmPassword: string;
}

export interface buyResidentialPropsInterface {
  params?: {};
  searchParams: { category: string };
}

export interface BuyResidentialPageInterfaceProps {
  data: CartInterface[];
  category: string;
}

interface Section1PropsInterface {
  title: string;
  location: string;
  description: string;
  rules: string[];
  amenities: string[];
}

export interface CartInterface {
  loading?: boolean;
  _id?: any;
  title: string;
  description: string;
  location: string;
  phone: string;
  realState: string;
  price: string;
  constructionData: Date;
  category: string;
  amenities: string[];
  rules: string[];
  newAmenitie?: string;
  newRule?: string;
  userId?: any;
  createdAt?: any;
  updatedAt?: any;
  __v?: any;
}

export interface EditPagePropsInterface {
  params: {
    profileId: string;
  };
  searchParams?: {};
}

export interface DashboardCardPropsInterface {
  key?: any;
  data: CartInterface;
}

export interface profileDataFormInterface {
  title: string;
  description: string;
  location: string;
  phone: string;
  realState: string;
  price: string;
  constructionData: Date;
  category: string;
  amenities: string[];
  rules: string[];
  newAmenitie: string;
  newRule: string;
}
