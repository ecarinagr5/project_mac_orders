import { Suspense } from "react";
import Card from "../components/Card";
import { ICardProps } from "../utils/interfaces";
import { getData } from "../middleware/fetchData";

export default async function Page() {
  const data = await getData();
  const productos = data?.data?.products;
  return (
    <>
        <div className="container mx-auto bg-white mt-10 rounded-md">
          <Suspense fallback={<div>Loading...</div>}>
            <div className="grid grid-cols-4 gap-4 p-6">
              {productos.map((product: ICardProps) => (
                <Card
                  key={product.id}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  description={product.description}
                  slug={product.slug}
                />
              ))}
            </div>
          </Suspense>
        </div>
    </>
  );
}
