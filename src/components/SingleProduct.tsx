"use client";
import { useDispatch } from "react-redux";
import Image from "next/image";
import FormattedPrice from "./FormattedPrice";
import { IoMdCart } from "react-icons/io";
import toast, { Toaster } from "react-hot-toast";
import { addToCart } from "@/redux/shoppingSlice";
import { Products } from "../../type";

interface SingleProductProps {
  product: Products;
}

const SingleProduct = ({ product }: SingleProductProps) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity: 1 }));
    toast.success(`${product?.title.substring(0, 15)} added`);
  };

  return (
    <div className="grid lg:grid-cols-2 gap-5 bg-white p-4 rounded-lg">
      <div>
        <Image
          src={product?.image}
          alt="product image"
          width={500}
          height={500}
          className="w-full max-h-[700px] object-cover rounded-lg"
        />
      </div>
      <div className="flex flex-col justify-center gap-y-10">
        <div>
          <p className="text-3xl font-semibold">{product?.title}</p>
          <p className="text-xl font-semibold">
            <FormattedPrice amount={product?.price} />
          </p>
        </div>
        <p className="text-lightText">{product?.description}</p>
        <div className="text-sm text-lightText flex flex-col">
          <span>
            SKU: <span className="text-darkText">{product?._id}</span>
          </span>
          <span>
            Category:{" "}
            <span className="text-customBackground">{product?.category}</span>
          </span>
        </div>
        <div className="flex items-center cursor-pointer group">
          <button
            onClick={handleAddToCart}
            className="bg-customBackground text-slate-100 px-6 py-3 text-sm uppercase flex items-center border-r-[1px] border-r-slate-500"
          >
            add to cart
          </button>
          <span className="bg-customBackground text-xl text-slate-100 w-12 flex items-center justify-center group-hover:bg-orange-500 duration-200 py-3">
            <IoMdCart />
          </span>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default SingleProduct;