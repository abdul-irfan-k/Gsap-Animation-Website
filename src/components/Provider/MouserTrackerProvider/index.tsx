import React, { FC, useState } from "react";

interface mouseTrackerContextInterface {
  mouseTrackerSpecialStyle: React.CSSProperties | undefined;
  setMouseTrackerSpecialStyle: React.Dispatch<
    React.SetStateAction<React.CSSProperties | undefined>
  >;
  mouseTrackerSpecialPosition: specialPositionStateInterface | undefined;
  setMouseTrackerSpecialPosition: React.Dispatch<
    React.SetStateAction<specialPositionStateInterface | undefined>
  >;
}

export type mouseTrackerContextType = mouseTrackerContextInterface | null;
export const MouseTrackerContext =
  React.createContext<mouseTrackerContextType>(null);
export const useMouseTrackerContext = () =>
  React.useContext(MouseTrackerContext);

interface MouseTrackerProviderProps {
  children: React.ReactNode;
}

interface specialPositionStateInterface {
  xPosition: number;
  yPosition: number;
}
const MouseTrackerProvider: FC<MouseTrackerProviderProps> = ({ children }) => {
  const [mouseTrackerSpecialStyle, setMouseTrackerSpecialStyle] =
    useState<React.CSSProperties>();
  const [mouseTrackerSpecialPosition, setMouseTrackerSpecialPosition] =
    useState<specialPositionStateInterface | undefined>(undefined);

  return (
    <div>
      <MouseTrackerContext.Provider
        value={{
          mouseTrackerSpecialPosition,
          mouseTrackerSpecialStyle,
          setMouseTrackerSpecialPosition,
          setMouseTrackerSpecialStyle,
        }}
      >
        {children}
      </MouseTrackerContext.Provider>
    </div>
  );
};

export default MouseTrackerProvider;
