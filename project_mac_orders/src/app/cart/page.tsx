"use client";
import React from "react";
import Image from "next/image";
import BackButton from "@/components/BackButton";
import Link from "next/link";
import { useCartState, useCartDispatch } from "../../utils/context/CartContext";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

// eslint-disable-next-line @next/next/no-async-client-component
export default function CartPage() {
  const dispatch = useCartDispatch();
  const state = useCartState();
  const totalPrice = state?.items?.reduce((sum: any, item: { price: any; }) => sum + item.price, 0);

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
      <div className="grid grid-cols-4 gap-4 p-6 text-left mt-2">
        {state?.items?.map((item: { id: React.Key | null | undefined; image: string | StaticImport; name: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | Promise<React.AwaitedReactNode> | null | undefined; price: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; }) => {
          return (
            <>
              <div key={item.id}>
                <div className="rounded-2xl h-[400px] overflow-hidden container-image">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={200}
                    height={200}
                    layout="responsive"
                    className="rounded-2xl"
                  />
                </div>
                <div className="text-center">
                  <div className="p-2 font-bold"> {item.name} (1) </div>
                  <div className="text-yellow-macdonalds font-bold ">
                    {" "}
                    ${item.price}{" "}
                  </div>
                  <button
                    className="bg-gray-300 border-b-4 rounded-xl py-2 w-[300px] hover:bg-yellow-600 mt-2 hover:text-white"
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
            </>
          );
        })}
      </div>
    </div>
  );
}
