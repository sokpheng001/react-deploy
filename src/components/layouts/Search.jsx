// // import { useState, useEffect } from "react";
// // import { fetchProduct } from "../../services/CardProduct/CardProduct";
// // import { ProductCard } from "../products/ProductCard";
// // export function Search() {
// //   const [products, setProducts] = useState([]); // For fetched products
// //   const [searchItem, setSearchItem] = useState("");
// //   const [loading,setloading]=useState() // For search input value
// //   useEffect(() => {
// //     async function Getproduct() {
// //       setloading(true)
// //       const fetchData = await fetchProduct();
// //       setProducts(fetchData);
// //       setloading(false)
// //     }
// //     Getproduct();
// //   }, []);

// //   return (
// //     <>
//       <div className="w-[80%] float-end sm:mt-20 md:mt-20 md:mr-10 sm:mr-10 m-10">
//         <form className="max-w-2xl mx-auto mt-7">
//           <label
//             htmlFor="default-search"
//             className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
//           >
//             Search
//           </label>
//           <div className="relative">
//             <div className="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-3">
//               <svg
//                 className="w-4 h-4 text-gray-500 dark:text-gray-400"
//                 aria-hidden="true"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 20 20"
//               >
//                 <path
//                   stroke="currentColor"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
//                 />
//               </svg>
//             </div>
//             <input
//               type="search"
//               id="default-search"
//               className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg ps-10 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//               placeholder="Search For Your val..."
//               value={searchItem}
//               onChange={(e) => setSearchItem(e.target.value)} // Update search input state
//               required
//             />
//           </div>
//         </form>
//       </div>
// //       <section className="flex justify-center w-full md:justify-end">
// //         <div className="w-[80%] ">
// //           <div className="grid justify-between grid-cols-1 gap-10 sm:grid-cols-2 xl:grid-cols-4">
// //             {loading == true && (
// //               <div className="w-[100%] h-[100%]">
// //                 <img
// //                   className="w-[80%] m-auto "
// //                   src="https://media.tenor.com/wpSo-8CrXqUAAAAi/loading-loading-forever.gif"
// //                 ></img>
// //               </div>
// //             )}
// //               {!loading && products
// //                 .filter((val) => {
// //                   if (searchItem === "") {
// //                     return val; // Return all products if searchItem is empty
// //                   } else if (
// //                     val.name.toLowerCase().includes(searchItem.toLowerCase()) // Check if val matches searchItem
// //                   ) {
// //                     return val;
// //                   }
// //                   return null;
// //                 })
// //                 .map((val) => {
// //                   return (
// //                     <ProductCard
// //                       images={val.images[0].url}
// //                       name={val.name}
// //                       // title={val.description}
// //                       price={val.price}
// //                       discount={val.price - (val.price * 10) / 100}
// //                       ratingCount={val.ratingCount}
// //                       slug={val.slug}
// //                     />
// //                   );
// //                 })}
// //             </div>
// //           </div>
// //       </section>
// //     </>
// //   );
// // }
