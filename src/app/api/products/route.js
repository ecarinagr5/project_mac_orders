export async function GET(req, res) {
  try {
    const response = await fetch(
      "https://burgerhub00.github.io/data/products.json"
    );
    const responsFull = await response.json();
    res.status(200).json({ data: responsFull });
  } catch (error) {
    console.error("Error fetching product data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
