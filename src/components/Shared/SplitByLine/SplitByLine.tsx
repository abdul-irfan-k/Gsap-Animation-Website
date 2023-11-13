import React, { FC } from "react";

interface SplitByLineProps {
  children: React.ReactNode;
}

const SplitByLine: FC<SplitByLineProps> = ({ children }) => {
  const words = children?.toString().split(/\r?\n/);

  console.log('children',children)
  return words?.map((word, index) => {
    return <div key={index} style={{fontSize:"50px"}}>{word}</div>;
  });
};

export default SplitByLine;
