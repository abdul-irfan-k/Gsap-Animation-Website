import Image from "next/image";
import React from "react";

const Project = () => {
  return (
    <div>
      <div className="px-20 flex justify-between">
        <div className="relative w-[35%] aspect-[9/12] ">
          <Image
            alt="image"
            src={"/Asset/01hero.jpg"}
            fill
            className="object-cover"
          />
        </div>
        <div className=" flex justify-between w-[38%]">
          <div className="relative w-[40%] h-[42vh]  overflow-hidden">
            <Image
              alt="image"
              src={"/Asset/02hero.jpg"}
              fill
              className="object-cover transition-all scale-[1.2] h-full duration-[0.2s] hover:scale-[1]"
            />
          </div>
          <div className="relative w-[40%] h-[42vh] overflow-hidden">
            <Image
              alt="image"
              src={"/Asset/02hero.jpg"}
              fill
              className="object-cover transition-all scale-[1.2] h-full duration-[0.2s] hover:scale-[1]"
            />
          </div>
        </div>
      </div>
      <div className="my-20 flex flex-col justify-center items-center text-center">
        <h2 className=" text-2xl ">IMMERSE YOURSELF IN OUR</h2>
        <h1 className=" text-2xl ">WORLD OF STUNNING DESIGNS</h1>
        <div className="mt-5 mx-auto px-6 py-2 self-start rounded-full border-2">View All Works</div>
      </div>
    </div>
  );
};

export default Project;
