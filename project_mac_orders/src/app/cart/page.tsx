import React from "react";
import Image from "next/image";
import BackButton from "@/components/BackButton";

export default async function CartPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <div className="container mx-auto bg-white rounded-lg m-5 text-center p-5">
      <BackButton />
      <h1 className="text-lg">Shopping Cart</h1>
      <div className="grid grid-cols-4 p-6 text-left">
        <div>
          <Image src="" />
        </div>
        <div> Hamburguesa (2) </div>
        <div> $12.39 </div>
        <div> borrar </div>
      </div>
    </div>
  );
}
