import { getSingleProduct, getTrendingProducts } from "@/helpers";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

import Container from "@/components/Container";
import { Products } from "../../../type";
import SingleProduct from "@/components/SingleProduct";
import ProductsData from "@/components/ProductsData";

const ProductPage = async ({ searchParams }: Props) => {
  const _idString = searchParams?._id;
  const _id = Number(_idString);
  const product = await getSingleProduct(_id);
  const data = await getTrendingProducts();

  if (!product) {
    return (
      <Container>
        <p className="text-red-500 text-lg font-medium py-10">Product not found.</p>
      </Container>
    );
  }

  return (
    <div>
      <Container>
        <SingleProduct product={product} />
        <div>
          <p className="text-xl py-1 font-semibold">Trending Products</p>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {data?.map((item: Products) => (
              <ProductsData key={item._id} item={item} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductPage;
