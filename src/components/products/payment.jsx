import React from "react";
import { FaQrcode } from "react-icons/fa";
import { Link } from "react-router-dom";
export function Payment({ total }) {
  return (
    <main class=" bg-gray-100 flex items-center justify-center p-4 sm:p-8 min-w-80">
      <div class="bg-white rounded-lg shadow-lg flex flex-col sm:flex-row max-w-2xl w-full mx-auto">
        
        <div class="bg-blue-800 text-white p-6 sm:p-8 flex flex-col items-center sm:w-1/3 ">
          <Link to="/AddToCart" class="border rounded-lg flex flex-col items-center p-4">
            <button className="p-2 text-yellow-50">Back</button>
            <FaQrcode className="mb-1 text-3xl sm:text-4xl" />
            <span class="text-sm">QR code</span>
          </Link>
        </div>
        <div class="p-6 sm:p-8 sm:w-2/3">
          <a href="/" className="flex justify-end ">
            <button
              type="button"
              className="relative z-0 inline-flex items-center group dark:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z"
                ></path>
              </svg>
            </button>
          </a>
          <p class="text-gray-600 mb-2 text-sm">You are about to pay</p>
          <h1 class="text-xl sm:text-2xl font-bold mb-4">
            your order to <span className="bg-gradient-to-r from-teal-400 to-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 bg-clip-text text-transparent font-[Poppins]">TechDeals</span>
          </h1>

          <div class="bg-gray-100 p-3 sm:p-4 rounded mb-4">
            <p class="text-gray-500 text-sm">
              Open your mobile payment app on your phone
              and scan the QR code to pay
            </p>
          </div>
          <section class="border rounded-lg">
            <div class="flex justify-center mb-4">
              <img
                alt="QR code for payment"
                class="p-2 w-48 h-48 sm:w-56 sm:h-56"
                src="./src/assets/qr-code.jpg"
              />
            </div>
            <p class="text-center text-gray-600 mb-4 text-sm">
              Scan for paying
            </p>
          </section>

          <div class="p-2">
            <p class="text-center text-gray-500 mt-2 text-xs">
              compatible partner apps
            </p>
          </div>
          <div class="flex justify-center items-center">
            <img
              class="w-10 h-10 sm:w-12 sm:h-12"
              src="./src/assets/aba.png"
              alt="aba-bank"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
export default Payment;
