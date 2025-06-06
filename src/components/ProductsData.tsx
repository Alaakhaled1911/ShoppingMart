"use client";
import Image from "next/image";
import { IoIosStar } from "react-icons/io";
import Link from "next/link";
import { ItemProps } from "../../type";
import { calculatePercentage } from "@/helpers";
import FormattedPrice from "./FormattedPrice";
import { useDispatch } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { addToCart } from "@/redux/shoppingSlice";

const ProductsData = ({ item }: ItemProps) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ ...item, quantity: 1 }));
    toast.success(`${item?.title.substring(0, 15)} added`);
  };

  const startArray = Array.from({ length: item?.rating }, (_, index) => (
    <span key={index} className="text-yellow-400">
      <IoIosStar />
    </span>
  ));

  return (
    <div className="w-full rounded-lg overflow-hidden">
      <div>
        <Link
          href={{
            pathname: "/product",
            query: { _id: item?._id },
          }}
        >
          <div className="w-full h-96 group overflow-hidden relative">
            <Image
              src={item?.image}
              alt="product image"
              width={500}
              height={500}
              className="w-full h-full object-cover group-hover:scale-110 duration-200 rounded-t-lg"
            />
            {item?.isNew && (
              <span className="absolute top-2 right-2 font-medium text-xs py-1 px-3 rounded-full bg-white text-gray-500 duration-200">
                New Arrival
              </span>
            )}
          </div>
        </Link>
        <div className="border-[1px] border-slate-300 border-t-0 px-2 py-4 flex flex-col gap-y-2 bg-white rounded-b-lg">
          <p>{item?.title}</p>
          <div className="flex justify-between items-center">
            <div className="border-[1px] border-orange-600 pt-3 px-3 h-8 rounded-full text-xs flex justify-center items-center">
              <p className="text-center">
                {calculatePercentage(item.oldPrice, item.price)}% off
              </p>
            </div>
            <div className="flex items-center gap-x-2">
              <p className="text-slate-500 line-through text-sm">
                <FormattedPrice amount={item.oldPrice} />
              </p>
              <p className="font-semibold">
                <FormattedPrice amount={item?.price} />
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button
              onClick={handleAddToCart}
              className="bg-orange-600 px-4 py-2 text-sm tracking-wide rounded-full mt-4 text-gray-300 hover:bg-orange-800 hover:text-white duration-200"
            >
              add to cart
            </button>
            <div className="flex items-center gap-x-1">{startArray}</div>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default ProductsData;
