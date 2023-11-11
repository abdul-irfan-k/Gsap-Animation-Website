import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="px-20 py-4 flex items-center">
      <div className="relative w-10 aspect-square ">
        <Image alt="logo" src={"/Asset/logo.png"} fill />
      </div>

      <div className="ml-auto text-lg font-medium ">menu</div>
      <div className=""></div>
    </div>
  );
};

export default Header;
