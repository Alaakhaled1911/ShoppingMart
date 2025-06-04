import Banner from "@/components/Banner";
import Image from "next/image";
import {getProducts} from "@/helpers"
import Products from "@/components/Products";

export default async function Home() {
  


  return (
<div>
  <Banner/>
  <Products />
</div>
  );
}
