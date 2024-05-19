import { IFetchData } from "../utils/interfaces";

export const getData = async () => {
  try {
  const res = await fetch("http://localhost:3000/api/products");

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
} catch (error) {
  console.error(`Error fetching get data: ${error}`);
  return null;
}
};

// Mock function to simulate fetching post data
export const fetchPost = async (slug: string) => {
  try {
    const res = await getData();
    if (!res) {
      console.error(`Failed to fetch post data for slug: ${slug}`);
      return null;
    }

    const products = res?.data?.products;
    if (!products || !Array.isArray(products)) {
      console.error(`Invalid response data format for slug: ${slug}`);
      return null;
    }

    const product = products.find(
      (prod: { slug: string }) => prod.slug === slug
    );

    return product;
  } catch (error) {
    console.error(`Error fetching post data for slug: ${slug}`, error);
    return null;
  }
};
