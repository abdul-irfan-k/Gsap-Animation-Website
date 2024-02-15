import MagneticEffect from "@/components/Shared/TextFillAnimation/MagneticEffect";
import React, { forwardRef } from "react";

interface MenuButtonProps {
  menuButtonHovered: boolean;
}
const MenuButtonComponent = (
  { menuButtonHovered }: MenuButtonProps,
  ref: React.LegacyRef<HTMLDivElement>
) => {
  return (
    <div className="ml-3 relative  my-auto " ref={ref}>
      <MagneticEffect>
        {/* <div
          className="absolute border-2 w-full h-full block   "
          // style={{ scale: "6" }}
          {...useHover({ borderColor: "green",scale:"8" }, { scale: "2" ,borderColor:"red"})}
        ></div> */}
        <div className="relative  w-[16px] h-[20px]  flex flex-col">
          <span
            className="absolute w-full h-[2px]   bg-white"
            style={{
              top: menuButtonHovered ? "10px" : "5px",
              transform: menuButtonHovered ? "rotate(45deg)" : "rotateX(0deg)",
            }}
          ></span>
          <span
            className="absolute w-full h-[2px] top-[14px] bg-white"
            style={{
              top: menuButtonHovered ? "10px" : "15px",
              transform: menuButtonHovered ? "rotate(-45deg)" : "rotateX(0deg)",
            }}
          ></span>
        </div>
      </MagneticEffect>
    </div>
  );
};
//@ts-ignore
export default forwardRef<HTMLDivElement, MenuButtonProps>(MenuButtonComponent);
