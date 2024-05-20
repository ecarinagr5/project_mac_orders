"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
/***
 * Functional component to render Links Navbar
 ***/

const Footer: React.FC = () => {
  return (
    <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800 ">
      <div className="container mx-auto bg-yellow-macdonalds p-10 text-center">
        <div className="w-[100px]">
          <Link href="/" className="hover:underline me-4 md:me-6">
            <Image
              src={
                "https://www.mcdonalds.com.mx/images/layout/mcdonalds-logo-bg-red.png"
              }
              alt={"MacDonalds"}
              width={100}
              height={100}
              layout="responsive"
            />
          </Link>
        </div>
      </div>
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between bg-white">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024 . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <Link href="/" className="hover:underline me-4 md:me-6">
              Menu
            </Link>
          </li>
          <li>
            <Link
              href="https://github.com/ecarinagr5"
              className="hover:underline me-4 md:me-6"
            >
              GitHub Carina Gonzalez
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
