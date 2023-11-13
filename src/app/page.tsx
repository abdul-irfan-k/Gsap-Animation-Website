"use client";
import Header from "@/components/Header";
import MainContent from "@/components/MainContent";
import React, { useEffect } from "react";

//@ts-ignore
import LocoMotiveScroll from "locomotive-scroll";

const HomePage = () => {
  useEffect(() => {
    (async () => {
      if (typeof window === "undefined") return;
      const locomotiveScroll = new LocoMotiveScroll();
    })();
  });
  return (
    <div>
      <Header />
      <MainContent />
      {/* <Test /> */}
    </div>
  );
};

export default HomePage;
