import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CategoryCardInterfaceProps {
  name: string;
  image: string;
}

const CategoryCard: React.FC<CategoryCardInterfaceProps> = ({
  name,
  image,
}) => {
  return (
    <Link
      href={`/buy-residential?category=${image}`}
      className="flex flex-col items-center gap-y-2 rounded hover:shadow-lg bg-slate-200 px-1 pt-1 pb-2"
    >
      <Image
        className="rounded"
        src={`/images/${image}.png`}
        width={500}
        height={500}
        alt="image"
      />
      <span className="text-xl font-medium">{name}</span>
    </Link>
  );
};

export default CategoryCard;
