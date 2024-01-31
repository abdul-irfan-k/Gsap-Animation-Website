import gsap from "gsap";
import React, { FC, useEffect, useRef, useState } from "react";

interface ArticleScrollTextProps {
  articleContainerRef: React.MutableRefObject<HTMLDivElement | null> ;
}
const ArticleScrollText: FC<ArticleScrollTextProps> = ({
  articleContainerRef,
}) => {
  const scrollTextDiv1Ref = useRef<HTMLDivElement>(null);
  const scrollTextDiv2Ref = useRef<HTMLDivElement>(null);

  let direction: -1 | 1 = -1;
  let xPrecent = 0;
  const speed = 0.5;

  useEffect(() => {
    
    requestAnimationFrame(scrollAnimation)
  }, []);

  const scrollAnimation = () => {
    if (xPrecent > 0) {
      xPrecent = -100;
    }

    if (xPrecent < -100) {
      xPrecent = 0;
    }

    if (scrollTextDiv1Ref == null || scrollTextDiv2Ref == null) return;

    gsap.set(scrollTextDiv2Ref.current, { xPercent: xPrecent });
    gsap.set(scrollTextDiv1Ref.current, { xPercent: xPrecent });
    xPrecent = xPrecent + direction * speed;
    requestAnimationFrame(scrollAnimation);
  };

  

  useEffect(() => {
    if (articleContainerRef == null) return;
    const element = articleContainerRef.current;

    gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        // start: "top-=100px",
        end: `${window.innerHeight} top`,
        scrub: 1,
        // markers: true,
        onUpdate: (currentVal) => {
          const currentDirection = currentVal.direction == -1 ? 1 : -1
          direction = currentDirection;
        },
      },
    });
  }, []);

  return (
    <div className="relative w-full overflow-hidden ">
      <div
        style={{ textTransform: "uppercase", fontSize: "5.4vw", margin: "0" }}
        className="flex w-full"
      >
        <div className="w-full" ref={scrollTextDiv1Ref}>
          <span className="" style={{ fontWeight: "900" }}>
            The Buzz Feed.
          </span>
          <span>Stay Informed.</span>
        </div>
        <div ref={scrollTextDiv2Ref} className="w-full absolute left-[100%] ">
          <span style={{ fontWeight: "900" }}>The Buzz Feed.</span>
          <span>Stay Informed.</span>
        </div>
      </div>



    </div>
  );
};

export default ArticleScrollText;
