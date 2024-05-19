import React from "react";
import Image from "next/image";
import { CardProps } from "../utils/interfaces";
import Link from "next/link";
/***
 * Functional component to render the product
 * in the menu
 * @{name} receive the name of the product
 * @{price} receive the price of the product
 ***/

const Card: React.FC<CardProps> = ({
  name,
  price,
  image,
  description,
  slug,
}) => {
  return (
    <div className="max-w-sm overflow-hidden shadow-lg rounded-lg">
      <Link href={`/details/${encodeURIComponent(slug)}`}>
        <div className="h-[400px] overflow-hidden">
          <Image
            src={image}
            alt={name}
            width={200}
            height={200}
            layout="responsive"
          />
        </div>
        <div className="px-6 py-4">
          <p className="font-bold text-xl mb-2">{name}</p>
          <p className="text-gray-400 text-base">${price}</p>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #{slug}
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Card;
