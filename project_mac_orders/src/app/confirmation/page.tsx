"use client";
import React from "react";
import Link from "next/link";
import { useCartState, useCartDispatch } from "../../utils/context/CartContext";

// eslint-disable-next-line @next/next/no-async-client-component
export default function ConfirmationPage() {
  const dispatch = useCartDispatch();
  const state = useCartState();

  return (
    <div className="container mx-auto bg-white rounded-lg m-5 p-5 text-center">
      <h2 className="text-4xl text-center font-bold">Order Confirmation</h2>

      <div className="m-10">
        <p className="font-bold">Total: ${state.amount}</p>
        <p className="font-bold mt-2">Products:</p>
        {state?.items?.map((item: { id: string; name: string }) => {
          return <p key={item.id}>{item.name}</p>;
        })}
      </div>

      <div className="text-center m-2">
        <Link href="/">
          <button
            className="bg-yellow-macdonalds text-white border-b-4 rounded-xl py-2 w-[300px] hover:bg-gray-300 mt-2 hover:text-black"
            onClick={() =>
              dispatch({
                type: "CLEAN_PAYMENT",
                payload: { data: 0 },
              })
            }
          >
            New Order
          </button>
        </Link>
      </div>
    </div>
  );
}
