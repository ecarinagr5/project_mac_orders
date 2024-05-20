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
  const value = state?.items?.find(
    (item: { id: any }) => item.id === product.id
  );

  const handleBuy = (product: any) => {
    const isProductInCart = state?.items?.find(
      (item: { id: any }) => item.id === product.id
    );
    if (isProductInCart)
      dispatch({ type: "INCREASE_QUANTITY", payload: { id: product.id } });
    else dispatch({ type: "ADD_ITEM", payload: product });
  };

  return (
    <div className="mx-auto">
      <Link href={"/cart"}>
        <button
          className="bg-gray-300 border-b-4 rounded-xl py-2 w-[300px] hover:bg-yellow-600 hover:text-white"
          onClick={() => handleBuy(product)}
        >
          Add Cart {value ? `(${value.quantity})` : ""}
        </button>
      </Link>
    </div>
  );
};

export default BuyProduct;
