import { fetchPost } from "../../../middleware/fetchData";
import React from 'react';

interface PostProps {
  title: string;
  content: string;
}


export default async function PostPage({ params }: { params: { slug: string } }) {
  const product = await fetchPost(params?.slug);
  const {id, name, price, image, description, calorie, slug } = product;

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
    <div>
      <h1>Hello ${product.name}</h1>
    </div>
  );
}
