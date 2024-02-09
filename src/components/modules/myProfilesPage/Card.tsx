import React from "react";

interface CardPropsInterface {
  data: any;
}

const Card: React.FC<CardPropsInterface> = ({ data }) => {
  return (
    <>
      <h1>{data.title}</h1>
    </>
  );
};

export default Card;
