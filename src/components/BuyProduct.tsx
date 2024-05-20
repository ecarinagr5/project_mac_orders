"use client";
import React from "react";
import { IBuyProduct } from "../utils/interfaces";
import { useCartState, useCartDispatch } from "../utils/context/CartContext";
import Link from "next/link";

/***
 * Functional component to render the Buy product
 * Details props
 * @{product} full product to show the data
 ***/

const BuyProduct: React.FC<IBuyProduct> = ({ product }) => {
  const dispatch = useCartDispatch();
  const state = useCartState();
  const value = state?.items[0];

  return (
    <div className="mx-auto">
      <Link href={"/cart"}>
        <button
          className="bg-gray-300 border-b-4 rounded-xl py-2 w-[300px] hover:bg-yellow-600 hover:text-white"
          onClick={() => dispatch({ type: "ADD_ITEM", payload: product })}
        >
          Add Cart {value ? "(1)" : ""}
        </button>
      </Link>
    </div>
  );
};

export default BuyProduct;
