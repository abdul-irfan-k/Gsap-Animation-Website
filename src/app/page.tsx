"use client";
import Header from "@/components/Header";
import MainContent from "@/components/MainContent";
import Project from "@/components/Project";
import Service from "@/components/Service";
import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Article from "@/components/Article";
import MouseTracker from "@/components/MouseTracker";
import MouseTrackerProvider from "@/components/Provider/MouserTrackerProvider";

// import LocoMotiveScroll from "locomotive-scroll";

const HomePage = () => {
  useEffect(() => {
    (async () => {
      if (typeof window === "undefined") return;
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();

      gsap.registerPlugin(ScrollTrigger);
    })();
  });
  return (
    <div>
      <MouseTrackerProvider>
        <MouseTracker />
        <Header />
        <MainContent />
        {/* <Test /> */}
        <Project />
        <Service />
        <Article />
      </MouseTrackerProvider>
    </div>
  );
};

export default HomePage;
