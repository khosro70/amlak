export interface signInFormData {
  email: string;
  password: string;
}

export interface signUpFormData {
  email: string;
  password: string;
  confirmPassword: string;
}

export interface profileDataFormInterface {
  title: string;
  location: string;
  phone: string;
  price: string;
  realState: string;
  category: string;
  constructionData: Date;
  description?: string;
  rules: string[];
  amenities: string[];
  newRule: string;
  newAmenitie: string;
}
