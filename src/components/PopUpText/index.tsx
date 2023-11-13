import { splitTextByLine } from "@/util/SplitTextByLine";
import { motion } from "framer-motion";
import { animate, stagger } from "framer-motion/dom";
import React, { FC, useEffect } from "react";

interface PopUpTextProps {
  isInViewTextContainer: boolean;
}
const PopUpText: FC<PopUpTextProps> = ({ isInViewTextContainer }) => {
  useEffect(() => {
    (() => {
      //@ts-ignore
      animate(
        ".item",
        isInViewTextContainer ? { WebkitBackgroundSize: "100% 100%" } : {},
        {
          duration: 0.6,
          delay: isInViewTextContainer
            ? stagger(0.5, { startDelay: 0, from: "first" })
            : 0,
        }
      );
    })();
  }, [isInViewTextContainer]);

  const animationText = `Stand out from the crowd and make a statement with our sleek and stylish
    portfolio template that speaks volumes about your creativity.`;
  return (
    <div>
      {splitTextByLine(animationText, 35).map((line, index) => {
        return (
          <motion.span
            key={index}
            initial={false}
            custom={index}
            style={{
              backgroundImage: "linear-gradient(#fff, #fff)",
              WebkitBackgroundClip: "text",
              WebkitBackgroundSize: "0% 100%",
              WebkitTextFillColor: "rgba(255,255,255,0.1)",
              color: "red",
              backgroundRepeat: "no-repeat",
            }}
            className="item"
          >
            {line.split(" ").map((word, wordIndex) => {
              return <span key={wordIndex}>{word + " "}</span>;
            })}
          </motion.span>
        );
      })}
    </div>
  );
};

export default PopUpText;
