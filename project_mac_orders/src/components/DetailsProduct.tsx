import React from "react";
import { IDetailsProps } from "../utils/interfaces";

/***
 * Functional component to render the product
 * Details product
 * @{name} receive the name of the product
 * @{price} receive the price of the product
 * @{description} receive the price of the product
 * @{calorie} receive the price of the product
 ***/

const DetailsProduct: React.FC<IDetailsProps> = ({
  name,
  price,
  description,
  calorie,
}) => {
  return (
    <div className="px-6 py-4">
      <p className={`${"font-bold mb-2"} ${calorie ? "text-5xl": "text-xl"}`}>{name}</p>
      <p className={`${"text-gray-400"} ${calorie ? "text-3xl": "text-base"}`}>${price}</p>
      <p className={`${"text-gray-700"} ${calorie ? "text-xl mt-2": "text-base"}`}>{description}</p>
      {calorie ? (
        <p className="text-gray-700 text-base text-yellow-macdonalds"> Nutrition: {calorie} cal</p>
      ) : (
        ""
      )}
    </div>
  );
};

export default DetailsProduct;
