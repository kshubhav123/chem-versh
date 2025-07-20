import products from "../../../productcopy.js";
import ProductPageComponent from "../../../screens/product/ProductPage"; // renamed

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return <ProductPageComponent productDetail={product} />;
}
