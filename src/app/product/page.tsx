
import { getSingleProduct, getTrendingProducts } from "@/helpers";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

import Container from "@/components/Container";
import { Products } from "../../../type";
import SingleProduct from "@/components/SingleProduct";
import ProductsData from "@/components/ProductsData";



const ProuctPage = async ({ searchParams }: Props) => {
  const _idString = searchParams?._id;
  const _id = Number(_idString);
  const product = await getSingleProduct(_id);
  const data = await getTrendingProducts();
 
  

  return (
    <div>
      <Container>
        <SingleProduct product={product} />
        <div>
          <p className="text-xl py-1 font-semibold">Tranding Products</p>
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

export default ProuctPage;