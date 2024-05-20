export async function GET() {
  try {
    const response = await fetch(
      "https://burgerhub00.github.io/data/products.json"
    );
    const responsFull = await response.json();
    return { statusCode: 200, body: JSON.stringify({ data: responsFull }) };
  } catch (error) {
    console.log("Error fetching post data");
    return { statusCode: 400, error: error };
  }
}
