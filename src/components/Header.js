import React from "react";
import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

const Header = () => {
  return (
    <header>
      <div className="flex items-center bg-amazon_blue-light p-1">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            src="https://links.papareact.com/f90"
            width={140}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
        <div className="hidden bg-yellow-400 rounded-md sm:flex items-center h-10 flex-grow hover:bg-yellow-500">
          <input
            className="flex-grow flex-shrink p-2 rounded-l-md focus:outline-none"
            type="text"
          />
          <SearchIcon className="h-12 p-4" />
        </div>
        <div className="text-white flex items-center space-x-6 text-xs mx-6 whitespace-nowrap">
          <div className="link">
            <p>Hello</p>
            <p className="font-extrabold md:text-sm">Account & lists</p>
          </div>
          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>
          <div className="link relative flex items-center">
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full font-bold text-black">
              0
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="hidden font-extrabold md:inline mt-2 md:text-sm">
              Basket
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center p-2 pl-6 bg-amazon_blue-light text-white space-x-3">
        <p className="flex items-center link">
          <MenuIcon className="h-6 mr-1" />
          All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today's Deals</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">Food & Grocery</p>
        <p className="link hidden lg:inline-flex">Health & Personal Care</p>
      </div>
    </header>
  );
};

export default Header;
