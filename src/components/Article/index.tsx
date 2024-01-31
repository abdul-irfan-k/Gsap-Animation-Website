import React, { useEffect, useRef, useState } from "react";
import ArticleScrollText from "./ArticleScrollText";
import ArticleCard from "./ArticleCard";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";

const Article = () => {
  const articleCardRef = useRef<HTMLDivElement>(null);
  const articleContainerRef = useRef<HTMLDivElement>(null);
  const [isCurrentlyVisible, setIsCurrentVisible] = useState<Array<boolean>>([
    false,
    true,
    false,
    false,
    false,
  ]);

  useEffect(() => {
    ScrollTrigger.batch(".articlerow", {
      start: "top bottom-=200",
      end: `bottom bottom-=100`,
      onEnter: (target, val) => {
        if (target.length > 0) {
          const className = target[0].className.split(" ");
          const index = className[className.length - 1];
          // console.log("enter", index);
          if (index != undefined) changeCurrentVisibleCard(Number(index), true);
        }
      },
      onEnterBack: (target, val) => {
        if (target.length > 0) {
          const className = target[0].className.split(" ");
          const index = className[className.length - 1];
          console.log("target", index, className);
          if (index != undefined) changeCurrentVisibleCard(Number(index), true);
        }
      },
    });
  }, []);

  const changeCurrentVisibleCard = (index: number, val: boolean) => {
    const updatedVisibleArray = isCurrentlyVisible.map((elm, i) => {
      if (index == 0) return elm;
      if (index == i) return val;
      else return false;
    });
    // console.log("updated", updatedVisibleArray);
    setIsCurrentVisible(updatedVisibleArray);
  };
  return (
    <div
      className="mt-28 bg-black text-white h-screen"
      ref={articleContainerRef}
    >
      <ArticleScrollText articleContainerRef={articleContainerRef} />

      <div className="flex flex-col ">
        <div
          className="mt-28 articlerow block h-1 0"
          style={{ color: "#777777" }}
        ></div>
        <div
          className=" articlerow 1"
          style={{ color: isCurrentlyVisible[1] ? "#FFF" : "#777777" }}
          ref={articleCardRef}
        >
          <ArticleCard
            content="Explore the creative and technical aspects of web animation, and discover how it can enhance user engagement and bring your website to life..."
            date={"13 June 2023"}
            topic="UX and UI, Design, Javascript"
            contentHeading="THE ART OF WEB ANIMATION"
            isCurrentlyVisible={isCurrentlyVisible[1]}
          />
        </div>
        <div
          className="articlerow 2"
          style={{ color: isCurrentlyVisible[2] ? "#FFF" : "#777777" }}
        >
          <ArticleCard
            content="Unlock the secrets of effective SEO optimization with practical tips and strategies to improve your website's visibility and organic search rankings..."
            date={"13 June 2023"}
            topic="Marketing, UX and UI, Design"
            contentHeading="SEO OPTIMIZATION TIPS"
            isCurrentlyVisible={isCurrentlyVisible[2]}
          />
        </div>
        <div
          className="articlerow 3"
          style={{ color: isCurrentlyVisible[3] ? "#FFF" : "#777777" }}
        >
          <ArticleCard
            content="Stay ahead of the curve with an overview of the latest web design trends shaping the digital landscape in 2023, and learn how to implement them in your projects..."
            date={"13 June 2023"}
            topic="UX and UI, Design, Inspiration"
            contentHeading="WEB DESIGN TRENDS 2023"
            isCurrentlyVisible={isCurrentlyVisible[3]}
          />
        </div>
        <div
          className="articlerow 4"
          style={{ color: isCurrentlyVisible[4] ? "#FFF" : "#777777" }}
        >
          <ArticleCard
            content="Dive into the fundamentals of JavaScript and gain mastery over the core concepts, syntax, and techniques to build dynamic and interactive web experiences..."
            date={"13 June 2023"}
            topic="UX and UI, Design, Web Development"
            contentHeading="MASTERING JAVASCRIPT BASICS"
            isCurrentlyVisible={isCurrentlyVisible[4]}
          />
        </div>
      </div>

      <div className="block h-40"></div>
    </div>
  );
};

export default Article;
