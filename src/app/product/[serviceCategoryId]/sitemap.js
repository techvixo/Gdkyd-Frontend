import { BASEURL } from "../../../../Constant";

// Function to fetch products from your API
async function getProducts() {
  const result = await fetch(`${BASEURL}/product/retrieve/for-sitemap`);

  if (!result.ok) {
    throw new Error("There was an error fetching Product for the sitemap");
  }
  return result.json();
}


// Function to replace spaces with hyphens, convert text to lowercase, and escape special characters
function formatProductNameForURL(title) {
  return title
    .toLowerCase() // Convert the entire string to lowercase
    .replace(/&/g, "-and-") // Replace "&" with "-and-"
    .replace(/[^\w\s-]/g, "") // Remove special characters (keep letters, numbers, spaces, and hyphens)
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-"); // Ensure no multiple hyphens in a row
}

// Generate the sitemap
export default async function sitemap() {
  const products = await getProducts();

  return products?.data?.map((product) => ({
    url: `https://gdkyd.com/product/${formatProductNameForURL(product.category)}/${product.product_id}`,
    // lastModified: product?.createdAt,
  }));
}