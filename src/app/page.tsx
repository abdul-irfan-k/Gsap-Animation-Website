"use client";
import Header from "@/components/Header";
import MainContent from "@/components/MainContent";
import Test from "@/components/test";
import React, { useEffect } from "react";
// import LocoMotiveScroll from "locomotive-scroll";

const HomePage = () => {
  useEffect(() => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();

      }
    )()
  }, []);
  return (
    <div>
      <Header />
      <MainContent />
      {/* <Test /> */}
    </div>
  );
};

export default HomePage;
