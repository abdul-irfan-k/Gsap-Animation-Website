import { splitTextByLine } from "@/util/SplitTextByLine";
import React, { FC } from "react";

interface TextFillAnimationProps {
  children: React.ReactNode;
  textFillProgress: number;
}

const TextFillAnimation: FC<TextFillAnimationProps> = ({
  children,
  textFillProgress,
}) => {
  const lines = splitTextByLine(children?.toString(), 35);
  // const lines = splitTextByLine(words, 35);

  return lines?.map((word, index) => {
    return (
      <div key={index} style={{ fontSize: "50px" }}>
        {word}
      </div>
    );
  });
};

export default TextFillAnimation;
