"use client"
import React from "react";
import { IBuyProduct } from "../utils/interfaces";
import { useCartState, useCartDispatch } from '../utils/context/CartContext'

/***
 * Functional component to render the product
 * Details product
 * @{name} receive the name of the product
 * @{price} receive the price of the product
 * @{image} receive the price of the product
 ***/

const BuyProduct: React.FC<IBuyProduct> = ({ product }) => {
  const dispatch = useCartDispatch();

  return (
    <div className="mx-auto">
        <button className="bg-gray-300 border-b-4 rounded-xl py-2 w-[300px] hover:bg-yellow-600" onClick={() => dispatch({ type: 'ADD_ITEM', payload: product })}>
          Add Cart
        </button>
    </div>
  );
};

export default BuyProduct;
