"use client";
import React from "react";
import Image from "next/image";
import BackButton from "@/components/BackButton";
import Link from "next/link";
import { useCartState, useCartDispatch } from "../../utils/context/CartContext";
import { ICartProps } from "../../utils/interfaces";

// eslint-disable-next-line @next/next/no-async-client-component
export default function CartPage() {
  const dispatch = useCartDispatch();
  const state = useCartState();
  const totalPrice = state?.items?.reduce(
    (sum: any, item: {
      quantity: any; price: any 
}) => sum + (item.price * item?.quantity),
    0
  );

  return (
    <div className="container mx-auto bg-white rounded-lg m-5 p-5">
      <BackButton />
      <h2 className="text-4xl text-center font-bold">Shopping Cart</h2>
      <h2 className="text-xl text-center font-bold mt-2 text-yellow-macdonalds">
        Total Payment: ${totalPrice}
      </h2>
      <div className="text-center m-2">
        <Link href="/confirmation">
          <button
            className="bg-yellow-macdonalds text-white border-b-4 rounded-xl py-2 w-[300px] hover:bg-gray-300 mt-2 hover:text-black"
            onClick={() =>
              dispatch({
                type: "TOTAL_AMOUNT",
                payload: { amount: totalPrice },
              })
            }
          >
            Pay Order
          </button>
        </Link>
      </div>
      <div className="container mx-auto">
        {state?.items?.map((item: ICartProps) => {
          const total = item?.quantity * item?.price
          return (
            <>
              <div key={item.id} className="flex container-image-cart">
                <Link href={`/details/${encodeURIComponent(item?.slug)}`}>
                <div className="max-w-sm flex-col justify-star">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={150}
                    height={150}
                    className="rounded-full image-cart"
                  />
                </div>
                </Link>
                <div className="text-center flex-col p-10">
                  <div className="flex p-5">
                    <div className="w-[200px]">
                      <div className="p-2 font-bold"> {item.name} ({item?.quantity})  </div>
                      <div className="text-yellow-macdonalds font-bold ">
                        {" "}
                        ${total}{" "}
                      </div>
                    </div>
                    <button
                      className="bg-gray-300 border-b-4 rounded-xl w-[100px] hover:bg-yellow-600 ml-10 hover:text-white text-xs py-1"
                      onClick={() =>
                        dispatch({
                          type: "REMOVE_ITEM",
                          payload: { id: item.id },
                        })
                      }
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
