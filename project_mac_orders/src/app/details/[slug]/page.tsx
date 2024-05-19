
import { fetchPost } from "../../../middleware/fetchData";
import React from "react";
import Image from "next/image";
import DetailsProduct from "@/components/DetailsProduct";
import BuyProduct from "@/components/BuyProduct";
import BackButton from "@/components/BackButton";

// eslint-disable-next-line @next/next/no-async-client-component
export default async function DetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = await fetchPost(params?.slug);
  const { id, name, price, image, description, calorie } = product;

  if (!product) {
    // If the post doesn't exist, you can return null, which will lead to a 404 page
    return (
      <div>
        <h1>404 - Page Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto bg-white rounded-lg m-5">
      <div key={id} className="grid grid-cols-1 p-20">
        <BackButton />
        <div className="h-[400px] overflow-hidden">
          <Image
            src={image}
            alt={name}
            width={200}
            height={200}
            layout="responsive"
          />
        </div>
        <DetailsProduct
          name={name}
          price={price}
          description={description}
          calorie={calorie}
        />

        <BuyProduct product={product} />
      </div>
    </div>
  );
}
