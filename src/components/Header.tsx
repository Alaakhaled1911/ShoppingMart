"use client";
import React, { useEffect, useState } from "react";
import Container from "./Container";
import Logo from "./Logo";
import { IoMdCart } from "react-icons/io";
import { FiSearch, FiLogOut } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { BsBookmarks } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { StateProps } from "../../type";
import FormattedPrice from "./FormattedPrice";
import { addUser, deleteUser } from "@/redux/shoppingSlice";

const Header = () => {
const dispatch = useDispatch()
  const { data: session } = useSession();
  const { productData }  = useSelector(
    (state: StateProps) => state.shopping);
  const [totalAmt, setTotalAmt] = useState(0);
  useEffect(() => {
    if (session) {
      dispatch(
        addUser({
          name: session?.user?.name,
          email: session?.user?.email,
          image: session?.user?.image,
        })
      );
    } else {
      dispatch(deleteUser());
    }
  }, [session, dispatch]);


useEffect(() => {
let amt =0 ;
productData.map((item:Products) => {
amt+=item.price * item.quantity
return
})
setTotalAmt(amt)
},[productData])

// })
  return (
    <div className="bg-bodyColor h-20 top-0 sticky z-50">
      <Container className="h-full flex items-center md:gap-x-5 justify-between md:justify-start">
        <Logo />
        {/* Search Field */}
        <div className="w-full hidden md:flex items-center gap-x-1 ">
        </div>
        {/* Login/Register */}
        {!session && (
          <div onClick={() => signIn()} className="headerDiv bg-gray-100 rounded-full cursor-pointer flex align-items-center px-4  h-10">
            <AiOutlineUser className="text-2xl mx-1" />
            <p className="text-sm font-semibold pt-3 mx-1">Login/Register</p>
          </div>
        )}
        {/* Cart button */}
        <Link href={"/Cart"} className="no-underline">
          <div className="bg-black hover:bg-slate-950 rounded-full text-slate-100 hover:text-white flex gap-x-1 px-4 pt-2 border-[1px] border-black hover:border-orange-600 duration-200 relative h-10">
            <IoMdCart className="text-xl" />
            <p className="text-sm font-semibold ">
              <FormattedPrice amount={totalAmt ? totalAmt : 0} />
            </p>
            <span className="bg-white text-orange-600 rounded-full text-xs font-semibold absolute -right-2 -top-1 w-5 h-5 flex items-center justify-center shadow-xl shadow-black">
              {productData ? productData?.length : 0}
            </span>
          </div>
        </Link>
        {/* user Image */}
        {session && (
          <Image
            src={session?.user?.image as string}
            alt="user image"
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
        )}
      
      
        {/* Logout button */}
        {session && (
          <div
            onClick={() => signOut()}
            className="headerDiv px-2 gap-x-1 cursor-pointer pt-4"
          >
            <FiLogOut className="text-xl" />
            <p className="text-sm font-semibold ">Logout</p>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Header;
