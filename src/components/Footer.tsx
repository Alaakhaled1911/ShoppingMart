"use client";
import {
  BsYoutube,
  BsGithub,
  BsLinkedin,
  BsFacebook,
  BsReddit,
} from "react-icons/bs";
import payment from "@/images/payment.png";
import Container from "./Container";
import Logo from "./Logo";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-full bg-customBackground text-slate-100">
      <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="flex flex-col gap-y-4">
          <Logo />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa in
            sint incidunt, minima quos voluptates, nobis autem laborum earum est
            pariatur aperiam. Delectus consectetur maxime quidem veniam,
            corporis.
          </p>
          <div className="flex items-center gap-x-4">
            <a href="" target="_blank">
              <span className="socialLink text-white">
                <BsYoutube />
              </span>
            </a>
            <a href="" target="_blank">
              <span className="socialLink text-white">
                <BsGithub />
              </span>
            </a>
            <a href="" target="_blank">
              <span className="socialLink text-white">
                <BsLinkedin />
              </span>
            </a>
            <a href="" target="_blank">
              <span className="socialLink text-white">
                <BsFacebook />
              </span>
            </a>
            <a href="" target="_blank">
              <span className="socialLink text-white">
                <BsReddit />
              </span>
            </a>
          </div>
        </div>

        <div>
          <p className="text-lg">Laset posts</p>
          <ul className="text-sm font-light mt-2 flex flex-col gap-y-2">
            <li className="flex flex-col">
              <span className="text-slate hover:text-orange-600 cursor-pointer duration-200">
                Where Music Is Headed Next
              </span>
              <span className="text-orange-600">January 31, 2022</span>
            </li>
            <li className="flex flex-col">
              <span className="text-slate hover:text-orange-600 cursor-pointer duration-200">
                Where Music Is Headed Next
              </span>
              <span className="text-orange-600">January 31, 2022</span>
            </li>
            <li className="flex flex-col">
              <span className="text-slate hover:text-orange-600 cursor-pointer duration-200">
                Where Music Is Headed Next
              </span>
              <span className="text-orange-600">January 31, 2022</span>
            </li>
            <li className="flex flex-col">
              <span className="text-slate hover:text-orange-600 cursor-pointer duration-200">
                Where Music Is Headed Next
              </span>
              <span className="text-orange-600">January 31, 2022</span>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-lg">Links</p>
          <ul className="text-base font-medium mt-2 flex flex-col gap-y-2">
            <li className="hover:text-orange-500 cursor-pointer duration-200">
              <Link href={"/"} className="text-white no-underline">
                Home
              </Link>
            </li>
            <li className="hover:text-orange-500 cursor-pointer duration-200">
              <Link href={"/cart"} className="text-white no-underline">
                Cart
              </Link>
            </li>
            <li className="hover:text-orange-500 cursor-pointer duration-200">
              <Link href={"/about"} className="text-white no-underline">
                About
              </Link>
            </li>
            <li className="hover:text-orange-500 cursor-pointer duration-200">
              Newsletter
            </li>
            <li className="hover:text-orange-500 cursor-pointer duration-200">
              Contact
            </li>
          </ul>
        </div>

        <div>
          <p className="text-lg mb-2">Pay us with your trusted services</p>
          <Image
            src={payment}
            alt="payment banner image"
            className="w-full h-10 object-cover"
          />
        </div>
      </Container>
    </div>
  );
};

export default Footer;
