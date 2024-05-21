/***
 *  The main function of this component
 * is getData from client-side using the url for API
 * you can reuse this one in each part of the app
 ***/

export const getData = async () => {
  try {
    const res = await fetch(
      `https://project-mac-orders.vercel.app/api/products`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (error) {
    console.error(`Error fetching get data: ${error}`);
    return null;
  }
};

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
