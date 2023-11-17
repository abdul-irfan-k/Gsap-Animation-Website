import React from "react";

const Service = () => {
  const arr: Array<{ light: string; bold: string }> = [
    { light: "WEB", bold: "DESIGN" },
    {light:"MOBILE",bold:"APP DEVELOPMENT"},
    {light:"E COMMERCE",bold:"SOLUTIONS"},
    {light:"DIGITAL",bold:"MARKETING"},
    {light:"UI/UX",bold:"DESIGN"},
    {light:"BRAND",bold:"STRATEGY"},
    {light:"CEO",bold:"OPTIMIZATION"},
    {light:"SOCIAL",bold:"MEDIA MANAGEMENT"},
    {light:"CONTENT",bold:"CREATIONG"},
    {light:"DATA",bold:"ANALYST"},
  ];
  const translateZValue = [186, 175, 143, 93, 32, -32, -93, -143, -175, -186];
  const translateYValue = [0, 57, 119, 161, 183, 183, 161, 119, 63, -50];

  return (
    <div className="h-screen bg-[#F9F9F9] text-black">
      <div>our services</div>
      <div className="flex justify-center overflow-hidden">
        <ul
          className="w-full flex flex-col h-screen"
          style={{
            transformStyle: "preserve-3d",
            transform: "rotateX(-20deg)",
            height: "300px",
          }}
        >
          {arr.map((elm, index) => {
            return (
              <li
                style={{
                  transform: `translate3d(0px,${translateYValue[index]}px,${
                    translateZValue[index]
                  }px) rotateX(${index * -20}deg) `,
                  backfaceVisibility: "hidden",
                  position: "absolute",
                  width: "100%",
                  zIndex: `${arr.length + 1 - index}`,
                }}
                className="gap-1 flex items-center justify-center text-5xl"
                key={index}
              >
                <span className="font-normal">{elm.light}</span>
                <span className="font-extrabold">{elm.bold}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Service;
