import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Payment from "./Payment";
export function AddToCart() {
  const [quantity1, setQuantity1] = useState(1);
  const [quantity2, setQuantity2] = useState(1);
  const basePrice1 = 70;
  const basePrice2 = 250;
  const discount = 99;
  const taxRate = 0.1;

  const [subTotal, setSubTotal] = useState(0);
  const [taxAmount, setTaxAmount] = useState(0);
  const [finalTotal, setFinalTotal] = useState(0);
  const updateQuantity = (change, setQuantity) => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + change));
  };

  const calculatePrice = (basePrice, quantity) => basePrice * quantity;

  useEffect(() => {
    const totalPrice1 = calculatePrice(basePrice1, quantity1);
    const totalPrice2 = calculatePrice(basePrice2, quantity2);
    const newSubTotal = totalPrice1 + totalPrice2;
    const newTaxAmount = newSubTotal * taxRate;
    const newFinalTotal = newSubTotal - discount + newTaxAmount;

    setSubTotal(newSubTotal);
    setTaxAmount(newTaxAmount);
    setFinalTotal(newFinalTotal);
  }, [quantity1, quantity2]);

  return (
  
    <main className="flex flex-col max-w-6xl p-6 mx-auto md:flex-row">
      {/* Shopping cart table */}
      <div className="p-5 mx-6 bg-white border rounded-lg p-26 fa-border md:w-2/3">
        <h2 className="mb-4 text-xl font-bold">Shopping Cart</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            {/* Table head */}
            <thead>
              <tr className="w-full text-left bg-gray-100">
                <th className="w-2/5 px-4 py-2">Products</th>
                <th className="w-1/5 px-4 py-2">Price</th>
                <th className="w-1/5 px-4 py-2">Quantity</th>
                <th className="w-1/5 px-4 py-2 text-right">Subtotal</th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody>
              {/* Product 1 */}
              <tr className="border-b">
                <td className="flex items-center px-8 py-4 space-x-4">
                  <svg
                    className="flex-shrink-0 w-6 h-12"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="#808080"
                      d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"
                    />
                  </svg>
                  <img
                    alt="Smart-TV"
                    className="w-12 h-12"
                    src="./src/assets/tv.png"
                    width="50"
                    height="50"
                  />
                  <span className="text-xs font-bold">
                    4K UHD LED Smart TV with Chromecast Built-in
                  </span>
                </td>
                <td className="px-4 py-4">
                  <span className="text-gray-500 line-through">$99</span> $70
                </td>
                <td className="flex items-center px-4 py-4 space-x-2">
                  <button
                    onClick={() => updateQuantity(-1, setQuantity1)}
                    className="px-2 border"
                  >
                    -
                  </button>
                  <span className="w-12 text-center border">{quantity1}</span>
                  <button
                    onClick={() => updateQuantity(1, setQuantity1)}
                    className="px-2 border"
                  >
                    +
                  </button>
                </td>
                <td className="px-10 py-4">
                  ${calculatePrice(basePrice1, quantity1)}
                </td>
              </tr>
              {/* Product 2 */}
              <tr className="border-b">
                <td className="flex items-center px-8 py-4 space-x-4">
                  <svg
                    className="flex-shrink-0 w-6 h-12"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="#e11919"
                      d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"
                    />
                  </svg>
                  <img
                    alt="Wired Over-Ear Gaming Headphones with USB"
                    className="w-12 h-12"
                    src="./src/assets/headphone.png"
                    width="50"
                    height="50"
                  />
                  <span className="text-xs font-bold">
                    Wired Over-Ear Gaming Headphones with USB
                  </span>
                </td>
                <td className="px-5 py-4">$250</td>
                <td className="flex items-center px-4 py-4 space-x-2">
                  <button
                    onClick={() => updateQuantity(-1, setQuantity2)}
                    className="px-2 border"
                  >
                    -
                  </button>
                  <span className="w-12 text-center border">{quantity2}</span>
                  <button
                    onClick={() => updateQuantity(1, setQuantity2)}
                    className="px-2 border"
                  >
                    +
                  </button>
                </td>
                <td className="px-10 py-4">
                  ${calculatePrice(basePrice2, quantity2)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Cart action buttons */}
        <div className="flex flex-col items-center mt-4 xl:justify-between md:justify-between md:flex-row">
          <Link to="/" className="flex items-center px-4 py-2 m-10 space-x-2 border rounded text-cyan-500 border-cyan-500">
            <svg
              className="w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="#71cad1"
                d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
              />
            </svg>
            <span>RETURN TO SHOP</span>
          </Link>
          <button className="px-4 py-2 border rounded text-cyan-500 border-cyan-500">
            UPDATE CART
          </button>
        </div>
      </div>
      {/* Cart totals */}
      <div className="p-6 mt-6 bg-white border rounded-lg md:mt-0 md:w-1/3">
        <h2 className="mb-4 text-xl font-bold">Cart Totals</h2>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-500">Sub-total</span>
            <span>${subTotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Shipping</span>
            <span>Free</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Discount</span>
            <span>${discount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Tax</span>
            <span>${taxAmount.toFixed(2)}</span>
          </div>
          <hr />
        </div>
        <div className="flex justify-between text-lg font-bold">
          <span>Total</span>
          <span>${finalTotal.toFixed(2)}
          </span>
        </div>
        <Link to="/Payment" className="block w-full py-3 mt-4 text-center text-white rounded bg-gradient-to-r from-teal-400 to-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 hover:bg-blue-800">
          <span>PROCEED TO CHECKOUT</span>
        </Link>
      </div>
    </main>
  );
}
export default AddToCart;
