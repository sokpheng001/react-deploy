import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import GetNewProdcut from "../products/NewProduct";
export function Aside() {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev); // This toggles the sidebar open/closed
  };

  const handleClickOutside = (event) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target) &&
      isOpen
    ) {
      setIsOpen(false); // Close the sidebar if clicking outside and it's open
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <button
        onClick={toggleSidebar}
        className="inline-flex items-center p-2 mt-2 text-sm text-gray-500 rounded-lg ms-3 lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
      >
        <span className="sr-only">Toggle sidebar</span>
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        ref={sidebarRef}
        className={`absolute top-[3.7rem] left-0 w-64 h-96 bg-gray-50 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0 z-20" : "-translate-x-full"
        } lg:translate-x-0 `}
        aria-label="Sidebar"
      >
        <div className="h-[25rem] lg:h-[40rem] px-3 py-4 overflow-y-auto bg-slate-50 dark:bg-gray-900">
          <ul className="space-y-2 font-medium">
            {/* Your list items go here */}
            {/* Add more items as needed */}
            <li>
              <div class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group ">
                <svg
                  class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-7 dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 20"
                >
                  <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                </svg>
                <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap dark:text-white">
                  All Promotion
                </span>
                {/* <svg
                  class="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg> */}
              </div>
            </li>
            <ul class=" py-2 space-y-2">
              <li>
                <Link
                  to="/NewProduct"
                  href="#"
                  class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700"
                >
                  NewProduct
                </Link>
              </li>
              <li>
                <Link
                  to="/D2Percents"
                  href="#"
                  class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700"
                >
                  2% OFF
                </Link>
              </li>
              <li>
                <Link
                  to="/D4Percents"
                  href="#"
                  class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700"
                >
                  4% OFF
                </Link>
              </li>
              <li>
                <Link to="/D5Percents"
                  href="#"
                  class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700"
                >
                  5% OFF
                </Link>
              </li>
              <li>
                <Link to="/D10Percents"
                  href="#"
                  class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700"
                >
                  10% OFF
                </Link>
              </li>
              <li>
                <Link to="/D15Percents"
                  href="#"
                  class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700"
                >
                  15% OFF
                </Link>
              </li>
              <li>
                <Link to="/D20Percents"
                  href="#"
                  class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700"
                >
                  20% OFF
                </Link>
              </li>
              <li>
                <Link to="/D35Percents"
                  href="#"
                  class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700"
                >
                  35% OFF
                </Link>
              </li>
              <li>
                <Link to="/D40Percents"
                  href="#"
                  class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700"
                >
                  40% OFF
                </Link>
              </li>
              <li>
                <Link to="/D50Percents"
                  href="#"
                  class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700"
                >
                  50% OFF
                </Link>
              </li>
            </ul>
          </ul>
        </div>
      </aside>
    </>
  );
}
