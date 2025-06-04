import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./css/globals.css";
import Header from "@/components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Layuot from "@/components/Layuot";
import "slick-carousel/slick/slick.css";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "shopping_mart",
  description: "Shopping Mart - A place for all !",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layuot>
          <Header />
{children}
<Footer/>
        </Layuot>
        </body>
    </html>
  );
}
