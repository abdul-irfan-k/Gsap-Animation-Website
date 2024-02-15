import { motion } from "framer-motion";
import React, { FC } from "react";

interface ArticleCardProps {
  date: string;
  topic: string;
  contentHeading: string;
  content: string;
  isCurrentlyVisible?: boolean;
}
const ArticleCard: FC<ArticleCardProps> = ({
  content,
  contentHeading,
  date,
  topic,
  isCurrentlyVisible,
}) => {
  return (
    <div
      className={" p-14 px-20 flex   w-full  "}
      style={{
        // padding: "3.5rem 5rem",
        height: "auto",
        marginTop: "0px",
        opacity: isCurrentlyVisible ? "1" : "0.7",
      }}
    >
      <div className=" flex-1 flex justify-between">
        <div className="px-32 w-full flex justify-between ">
          <div className="text-[#777777]">{date}</div>
          <div className="text-[#777777]">{topic}</div>
        </div>
      </div>
      <div className="gap-2 flex-1 flex flex-col font-medium text-lg">
        <div className="gap-2 flex flex-col ">
          <div className="text-2xl font-semibold" style={{ color: "inherit" }}>
            {contentHeading}
          </div>
          <motion.div
            className="text-[#777777]"
            style={{
              overflow: "hidden",
              // opacity: 0,
            }}
            variants={{
              intial: {
                opacity: 0,
                height: 0,
              },
              start: {
                opacity: 1,
                height: "auto",
              },
              other: {
                opacity: 0,
                height: 0,
              },
            }}
            initial="intial"
            animate={isCurrentlyVisible ? "start" : "other"}
            transition={{ duration: 0.2 }}
          >
            {content}
          </motion.div>
        </div>
        <div className="relative gap-2 flex ">
          <div style={{ color: "inherit" }}>Read Article</div>
          <div className="relative flex items-center">
            <div
              className="w-2 aspect-square rounded-full "
              style={{ background: isCurrentlyVisible ? "#FFF" : "#777" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
