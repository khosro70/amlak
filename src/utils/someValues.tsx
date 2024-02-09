import { profileDataFormInterface } from "./contracts";

export const initialValues: profileDataFormInterface = {
    title: "",
    description: "",
    location: "",
    phone: "",
    realState: "",
    price: "",
    constructionData: new Date(),
    category: "",
    amenities: [],
    rules: [],
    newAmenitie: "",
    newRule: "",
  };