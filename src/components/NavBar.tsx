"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useCartState } from "../utils/context/CartContext";
/***
 * Functional component to render Links Navbar
 ***/

const NavBar: React.FC = () => {
  const state = useCartState();
  const amountProduct =  state?.items?.reduce(
    (sum: any, item: { quantity: any }) => sum + item.quantity,
    0
  );

  return (
    <nav className="bg-white shadow-2xl">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>

              <svg
                className="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <Link href="/">
                <Image
                  className="h-8 w-auto"
                  src="https://www.mcdonalds.com.mx/images/layout/mcdonalds-logo-footer-bg-white.png"
                  width={200}
                  height={200}
                  alt="MacDonalds"
                />
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4 text-gray-600">
                <Link
                  href="/"
                  className="bg-yellow-macdonalds text-white rounded-md px-3 py-2 text-sm font-medium"
                  aria-current="page"
                >
                  Menu
                </Link>
                <Link
                  href="/"
                  className=" hover:bg-yellow-macdonalds hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  Products
                </Link>
                <Link
                  href="https://www.linkedin.com/in/carinagonzalezruiz/"
                  className=" hover:bg-yellow-macdonalds hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  About Carina Gonzalez
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <Link href={"/cart"}>
              <button
                type="button"
                className="relative p-1 text-gray-400 hover:text-white focus:outline-none hover:outline-none"
              >
                <Image
                  className="h-8 w-auto"
                  src="https://www.mcdonalds.com.mx/uploads/Pedi_y_Retira_2_865e42ca74.png"
                  width={300}
                  height={300}
                  alt="MacDonalds"
                />
              </button>

              <div className="relative ml-10 -mt-14">
              <button
                    type="button"
                    className="relative flex rounded-full bg-yellow-macdonalds text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                  >
                    <div className="bg-red-macdonalds text-white rounded-full p-1">
                      {amountProduct}
                    </div>
                  </button>
              </div>
            </Link>

            <div className="relative ml-3">
              <div>
                <button
                  type="button"
                  className="relative flex rounded-full bg-yellow-macdonalds text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <div className="bg-yellow-macdonalds text-white rounded-full p-4">
                    CR
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sm:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <Link
            href="/"
            className="bg-yellow-macdonalds text-white rounded-md px-3 py-2 text-sm font-medium"
            aria-current="page"
          >
            Menu
          </Link>
          <Link
            href="/"
            className=" hover:bg-yellow-macdonalds hover:text-white rounded-md px-3 py-2 text-sm font-medium"
          >
            Products
          </Link>
          <Link
            href="https://www.linkedin.com/in/carinagonzalezruiz/"
            className=" hover:bg-yellow-macdonalds hover:text-white rounded-md px-3 py-2 text-sm font-medium"
          >
            About Carina Gonzalez
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
