import { fetchProduct } from "../../services/CardProduct/CardProduct";
import { useState, useEffect } from "react";
import { ProductCard } from "./ProductCard";
import { Carousel2 } from "../carousel/Carousel2";
import {Carousel3} from"../carousel/Carousel3"
import "flowbite";
export default function Promotion() {
  const [productPro, setproductPro] = useState([]);
  console.log("PromotionPag", productPro);
  useEffect(() => {
    async function bringProduct() {
      const productPro = await fetchProduct();
      setproductPro(productPro);
    }
    bringProduct();
  }, []);
  return (
    <section className="w-full m-auto max-w-screen-2xl">
      <div className="w-[80%] m-auto">
        <Carousel2/>
      </div>
      <section className="flex flex-col min-w-80">
        <h1 class="text-white bg-gradient-to-r from-teal-400 to-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center w-[80%] m-auto my-10">Get Tranding Product here</h1>
        <div className="grid grid-cols-1 w-[80%] m-auto gap-10 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          {productPro.slice(0,8).map((productPro) => (
            <ProductCard
              images={productPro.images[0].url}
              name={productPro.name}
              //title={productPro.description}
              price={productPro.price}
              discountValue={productPro.discountValue}
              discount={(productPro.price - (productPro.price * parseFloat(productPro.discountValue)) / 100).toFixed(2)}
              ratingCount={productPro.ratingAvg}
              slug={productPro.slug}
            />
          ))}
        </div>
        <div className="w-[80%] m-auto">
          <img className="w-full my-10" src="https://dealkh-api.istad.co/images/078f2408-d232-4e0b-94f5-2a6336bc3e58.jpg" alt="" />
        </div>
        <h1 class="text-white bg-gradient-to-r from-teal-400 to-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center w-[80%] m-auto my-10">Lastest Product</h1>
        <div className="grid grid-cols-1 w-[80%] m-auto gap-10 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          {productPro.slice(8,16).map((productPro) => (
            <ProductCard
              images={productPro.images[0].url}
              name={productPro.name}
              // title={productPro.description}
              price={productPro.price}
              discountValue={productPro.discountValue}
              discount={(productPro.price - (productPro.price * parseFloat(productPro.discountValue ? productPro.discountValue : 10)) / 100).toFixed(2)}
              ratingCount={productPro.ratingAvg}
              slug={productPro.slug}
            />
          ))}
        </div>

        <h1 class="text-white bg-gradient-to-r from-teal-400 to-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center w-[80%] m-auto my-10">Nearly Out of stock</h1>
        <div className="grid grid-cols-1 w-[80%] m-auto gap-10 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          {productPro.slice(16,24).map((productPro) => (
            <ProductCard
              images={productPro.images[0].url}
              name={productPro.name}
              // title={productPro.description}
              price={productPro.price}
              discountValue={productPro.discountValue}
              discount={(productPro.price - (productPro.price * parseFloat(productPro.discountValue ? productPro.discountValue : 10)) / 100).toFixed(2)}
              ratingCount={productPro.ratingAvg}
              slug={productPro.slug}
            />
          ))}
        </div>
      </section>
      
    </section>
  );
}
