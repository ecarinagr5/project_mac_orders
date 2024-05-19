"use client";
import React from "react";
import Image from "next/image";
import BackButton from "@/components/BackButton";
import { useCartState, useCartDispatch } from "../../utils/context/CartContext";

// eslint-disable-next-line @next/next/no-async-client-component
export default function CartPage() {
  const dispatch = useCartDispatch();
  const state = useCartState();

  return (
    <div className="container mx-auto bg-white rounded-lg m-5 text-center p-5">
      <BackButton />
      <h1 className="text-lg">Shopping Cart</h1>
      <div className="grid grid-cols-4 p-6 text-left">
        {state?.items?.map((item) => {
          return (
            <>
              <div key={item.id}>
                <div>
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={200}
                    height={200}
                    layout="responsive"
                  />
                </div>
                <div> {item.name} (2) </div>
                <div>{item.price} </div>
                <button
                  className="bg-gray-300 border-b-4 rounded-xl py-2 w-[300px] hover:bg-yellow-600"
                  onClick={() =>
                    dispatch({ type: "REMOVE_ITEM", payload: { id: item.id } })
                  }
                >
                  Remove
                </button>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
