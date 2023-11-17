"use client";
import Header from "@/components/Header";
import MainContent from "@/components/MainContent";
import Project from "@/components/Project";
import Service from "@/components/Service";
import React, { useEffect } from "react";

// import LocoMotiveScroll from "locomotive-scroll";

const HomePage = () => {
  useEffect(() => {
    (async () => {
      if (typeof window === "undefined") return;
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  });
  return (
    <div>
      {/* <Header /> */}
      {/* <MainContent /> */}
      {/* <Test /> */}
      <Project />
      <Service />
    </div>
  );
};

export default HomePage;
