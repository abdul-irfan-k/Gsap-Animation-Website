import { splitTextByLine } from "@/util/SplitTextByLine";
import { MotionValue, frame, motion, useTransform } from "framer-motion";
import { animate, stagger } from "framer-motion/dom";
import React, { FC, useEffect, useState } from "react";
import { useScrollTriggerContext } from "../MainContent";
import { ArrayTextFillCalculation } from "@/util/ArrayTextFillCalculation";

interface PopUpTextProps {
  isInViewTextContainer: boolean;
}
const PopUpText: FC<PopUpTextProps> = ({ isInViewTextContainer }) => {
  const progress = useScrollTriggerContext();
  const [textFillProgress, setTextFillProgress] = useState<number>(-1);
  const bg = useTransform(progress, [0, 1], [0, 100]);
 
  const animationText = `Stand out from the crowd and make a statement with our sleek and stylish
    portfolio template that speaks volumes about your creativity.`;
  const lines = splitTextByLine(animationText, 35);

  useEffect(() => {
    // setLines(line)
    bg.on("change", (vl) => {
      // console.log('change',bg.get())
      setTextFillProgress(bg.get());
    });
  }, []);


  return (
    <div>
      {lines.map((line, index) => {
        const fillState = ArrayTextFillCalculation(
          lines.length,
          index,
          textFillProgress
        );

        return (
          <span
            key={index}
            custom={index}
            style={{
              backgroundImage: "linear-gradient(#fff, #fff)",
              WebkitBackgroundClip: "text",
              WebkitBackgroundSize: `${fillState}% 100%`,
              WebkitTextFillColor: "rgba(255,255,255,0.1)",
              color: "red",
              backgroundRepeat: "no-repeat",
              transition:"all 0.05s"
            }}
            className="item"
          >
            {line.split(" ").map((word, wordIndex) => {
              return <span key={wordIndex}>{word + " "}</span>;
            })}
          </span>
        );
      })}
    </div>
  );
};

export default PopUpText;
