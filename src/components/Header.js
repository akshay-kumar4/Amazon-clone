import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <header>
      <div className="flex items-center bg-amazon_blue-light">
        <div>
          <Image
            src="https://links.papareact.com/f90"
            width={140}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
      </div>
      <div></div>
    </header>
  );
};

export default Header;
