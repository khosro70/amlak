type CategoryType = "office" | "apartment" | "villa" | "store";

const mapCategoryToPersian = (category: CategoryType): string => {
  switch (category) {
    case "office":
      return "دفتر";
    case "apartment":
      return "آپارتمان";
    case "villa":
      return "ویلا";
    case "store":
      return "مغازه";
    default:
      return "category";
  }
};

export const mapStringToPersian = (str: string): string => {
  if (["office", "apartment", "villa", "store"].includes(str)) {
    const categoryType = str as CategoryType;
    const persianValue = mapCategoryToPersian(categoryType);
    return persianValue;
  }
  const defaultCategory = "office";
  const categoryType = defaultCategory as CategoryType;
  const persianValue = mapCategoryToPersian(categoryType);
  return persianValue;
};
