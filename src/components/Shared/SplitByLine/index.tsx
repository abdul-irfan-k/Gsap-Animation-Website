import { splitTextByLine } from "@/util/SplitTextByLine";
import React, { FC } from "react";

interface SplitByLineProps {
  children: React.ReactNode;
}

const SplitByLine: FC<SplitByLineProps> = ({ children }) => {
  const words = splitTextByLine(children,50);

  console.log('children',words)
  return words?.map((word, index) => {
    return <div key={index} style={{fontSize:"50px"}}>{word}</div>;
  });
};

export default SplitByLine;
