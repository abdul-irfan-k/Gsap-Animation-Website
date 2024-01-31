import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const ServiceDescription = () => {
  const serviceDescriptionTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // gsap.registerPlugin(ScrollTrigger);
    const element = serviceDescriptionTextRef.current;
    if (element == null) return;

    const serviceDescriptionText = gsap.utils.selector(
      serviceDescriptionTextRef
    );
    gsap
      .timeline({
        scrollTrigger: {
          trigger: element,
          start: "1200 bottom",
          // start: "top-=100px",
          end: "1800 bottom",
          scrub: 1,
          // pinSpacing: true,

          // toggleActions: "restart none none none",
        },
      })
      .to(serviceDescriptionText(".main"), { translateY: "-50%" })
      .to(serviceDescriptionText(".span"), { backgroundSize: "100% 100%" });
  }, []);

  const spanStyle = {
    backgroundImage: "linear-gradient(#000, #000)",
    WebkitBackgroundClip: "text",
    WebkitBackgroundSize: `0% 100%`,
    WebkitTextFillColor: "rgba(0,0,0,0.4)",
    backgroundRepeat: "no-repeat",
    transition: "all 0.05s",
    display: "inline",
  };
  return (
    <div
      className=" px-20 py-10   text-black  w-full"
      ref={serviceDescriptionTextRef}
    >
      <div className="flex translate-y-[100%] main">
        <div className="flex-1 flex justify-evenly">
          <div className="px-32 w-full flex justify-between ">
            <div>
              <span style={spanStyle} className="span">
                2023
              </span>
            </div>
            <div>
              <span style={spanStyle} className="span">
                Portfolio website
              </span>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <span
            className="span flex-1 font-medium text-2xl   "
            ref={serviceDescriptionTextRef}
            style={{ ...spanStyle, fontWeight: "900" }}
          >
            our template pages are a playground for creativity, where we
            leverage an assortment of shortcuts to build captivating content.
            This enables us to demonstrate the limitless potential and showcase
            the impressive features of our template. impressive features of our
            template. impressive features of our template. impressive features
            of our template. impressive features of our template. impressive
            features of our template.
          </span>
        </div>
      </div>
    </div>
  );
};

export default ServiceDescription;
