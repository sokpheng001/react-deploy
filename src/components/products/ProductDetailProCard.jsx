import { image } from "framer-motion/client";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductCard } from "./ProductCard";
import { getSingleproducts } from "../../services/product/productAction";
import { fetchProduct } from "../../services/CardProduct/CardProduct";
import { Link } from "react-router-dom";
export default function ProductDetailProCard(images, name, price,slug) {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [amount, setAmount] = useState(0);
  const [selected, setSelected] = useState("");
  const changeSelectOptionHandler = (event) => {
    setSelected(event.target.value);
  };
  console.log("slug", slug);
  const algorithm = [];
  const language = [];
  const dataStructure = [];
  let type = null;
  let options = null;
  if (selected === "Algorithm") {
    type = algorithm;
  } else if (selected === "Language") {
    type = language;
  } else if (selected === "Data Structure") {
    type = dataStructure;
  }

  console.log("product detaul", product);

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await getSingleproducts(slug);
      setProduct(data);
      setLoading(false);
    };

    fetchProduct();
  }, [slug]);
  useEffect(() => {
    console.log("hello: " + slug);
  }, []);

  console.log("Test:",product);

  

  return (
    <div>
      {/* Detail card */}
      <section>
        <div className="max-w-full px-4 mx-10 mt-20 sm:px-6 lg:px-8">
          <div className="flex flex-col -mx-4 md:flex-row">
            {/* images */}
            <div className="px-4 md:flex-1">
              <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                <img
                  alt="Product Image"
                  className="w-full h-[100%]  rounded-lg"
                  src={product?.images[0]?.url}
                />
              </div>
            </div>
            <div className="px-2 md:flex-1">
              <h2 className="mb-2 text-2xl font-bold text-black">
                {product?.name}
              </h2>
              <div className="grid grid-cols-2 mb-4">
                <div className="text-black ">
                  <h2 className="mb-2 text-sm">
                    Sku: <a href="">ADDA@31</a>{" "}
                  </h2>
                  <h2 className="text-sm">
                    Brand: <a href="">Laptop</a>
                  </h2>
                </div>
                <div className="text-black">
                  <h2 className="mb-2 text-sm">
                    Availability:{" "}
                    <a className="text-green-500" href="">
                      In Stock
                    </a>
                  </h2>
                  <h2 className="text-sm">
                    Category: <a href="">Electronics Devices</a>
                  </h2>
                </div>
              </div>
              <div className="mb-4 text-2xl ">
                <div className="mr-4">
                  <span className="text-gray-600 dark:text-gray-300">
                    ${product?.price}
                  </span>
                </div>
              </div>
              <div className="mb-5 border-b-2"> </div>
              <div className="grid grid-cols-1 mb-10 xl:grid-cols-2 ">
                <div className="">
                  <div className="grid grid-cols-2 mb-8 ">
                    <div className="">
                      <span className="font-bold text-gray-700 dark:text-gray-300">
                        Select Color:
                      </span>
                      <div className="flex items-center mt-2">
                        <button className="w-6 h-6 mr-2 bg-gray-800 rounded-full dark:bg-gray-200" />
                        <button className="w-6 h-6 mr-2 bg-red-500 rounded-full dark:bg-red-700" />
                        <button className="w-6 h-6 mr-2 bg-blue-500 rounded-full dark:bg-blue-700" />
                        <button className="w-6 h-6 mr-2 bg-yellow-500 rounded-full dark:bg-yellow-700" />
                      </div>
                    </div>
                    {/* selection menu */}

                    {/* selection menu */}

                    {/* selection menu */}
                  </div>
                  <div className="mb-4">
                    <div className="flex flex-wrap w-auto h-auto gap-5 xl:flex-nowrap ">
                      {/* select number */}
                      <div className="relative h-10 mb-2 mr-4 custom-number-input w-36 left-16 lg:left-0 ">
                        <div className="flex flex-row justify-between w-40 bg-transparent h-14 ring-slate-400 ring-1 ">
                          <button
                            className="w-4 px-3 py-2 text-3xl text-black round-lg"
                            onClick={() => setAmount((prev) => prev - 1)}
                          >
                            -
                          </button>
                          <span className="w-4 px-6 py-4 rounded-lg ">
                            {amount}
                          </span>
                          <button
                            className="w-4 px-4 py-2 text-black round-lg text-3x"
                            onClick={() => setAmount((prev) => prev + 1)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div>
                        <button className="relative bg-blue-500 h-14 w-72 left-14 md:left-0 lg:left-0 ">
                          Add to Card
                        </button>
                      </div>
                      <div>
                        <button className="relative w-40 text-blue-500 h-14 ring-1 left-16 xl:left-0">
                          BUY NOW
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Descrition */}

      {/* you also may like card */}
      <section>
        <div>
          <div className="mt-20 text-4xl text-center ">
            <p>You may also like</p>
          </div>
          <div className="grid grid-cols-2 gap-5 mx-10 mt-20 mb-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 justify-evenly ">
            <div className="rounded-lg ring-gray-300 ring-1 ">
              <img
                alt=""
                className="w-full h-52"
                src="https://benstore.com.ph/32415-medium_default/microsoft-surface-laptop-go-3-124-touch-i5-1235u-intel-iris-xe-8gb-lpddr5-256gb-ssd-.jpg"
              />
              <p className="mb-10 font-bold text-center">Laptop&Computer</p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-10 mx-20 mb-16 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-evenly">
            <div className="w-full h-20 ring-slate-200 ring-1">
              <div className="flex flex-row items-center justify-center gap-5 mt-4 ">
                <i
                  className="text-4xl fa-solid fa-box-open"
                  style={{
                    color: "#000000",
                  }}
                />
                <div>
                  <p>FASTED DELIVERY</p>
                  <p className="text-sm">DELIVERY in 24/H</p>
                </div>
              </div>
            </div>
            <div className="w-full h-20 ring-slate-200 ring-1 ">
              <div className="flex flex-row items-center justify-center gap-5 mt-4 ">
                <i
                  className="text-4xl fa-solid fa-headphones"
                  style={{
                    color: "#000000",
                  }}
                />
                <div>
                  <p>SUPPORT 24/7</p>
                  <p className="text-sm">Live contact/message</p>
                </div>
              </div>
            </div>
            <div className="w-full h-20 ring-slate-200 ring-1 ">
              <div className="flex flex-row items-center justify-center gap-5 mt-4 ">
                <i
                  className="text-4xl fa-solid fa-trophy"
                  style={{
                    color: "#000000",
                  }}
                />
                <div>
                  <p>24 HOURS RETURN</p>
                  <p className="text-sm">100% money-back </p>
                </div>
              </div>
            </div>
            <div className="w-full h-20 ring-slate-200 ring-1 ">
              <div className="flex flex-row items-center justify-center gap-5 mt-4 ">
                <i
                  className="text-4xl fa-regular fa-credit-card"
                  style={{
                    color: "#000000",
                  }}
                />
                <div>
                  <p>SECURE PAYMENT</p>
                  <p className="text-sm">Your money is safe</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
