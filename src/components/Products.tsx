import { getProducts } from "@/helpers";
import React from "react";
import Container from "./Container";
import ProductsData from "./ProductsData";
import { Products as ProductType } from "../../type";

const ProductsList = async () => {
  const products: ProductType[] = await getProducts();

  return (
    <Container className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 -mt-10">
      {products?.map((item) => (
        <ProductsData item={item} key={item._id} />
      ))}
    </Container>
  );
};

export default ProductsList;
