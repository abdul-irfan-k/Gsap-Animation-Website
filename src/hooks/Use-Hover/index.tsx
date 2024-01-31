"use client";
import { CSSProperties, useState } from "react";

const useHover = (
  styleHover: CSSProperties,
  styleOnNotHover: CSSProperties = {}
) => {
  const [style, setStyle] = useState<CSSProperties>(styleOnNotHover);

  const onMouseEnter = () => setStyle(styleHover);
  const onMouseLeave = () => setStyle(styleOnNotHover);

  return { style, onMouseEnter, onMouseLeave };
};

export default useHover;
