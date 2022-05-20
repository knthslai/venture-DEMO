// @ts-nocheck
import React, { createContext, useEffect, useState } from 'react'

export const ResizeContext = createContext({
  width: 0,
  height: 0,
  isMobile: false,
  isTablet: false,
  isDesktop: false,
})

export default function ResizeContextProvider({ children }) {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    getDimensions();
    window.addEventListener('resize', getDimensions);
    return () => window.removeEventListener('resize', getDimensions);
  }, []);

  const getDimensions = () => {
    const w = window;
    const d = document;
    const documentElement = d.documentElement;
    const body = d.getElementsByTagName('body')[0];
    const currWidth =
      w.innerWidth || documentElement.clientWidth || body.clientWidth;
    const currHeight =
      w.innerHeight || documentElement.clientHeight || body.clientHeight;
    const bools = [false, false, false];
    if (currWidth < 768) {
      if (isMobile) return false;
      bools[0] = true;
    } else if (currWidth < 1024) {
      if (isTablet) return false;
      bools[1] = true;
    } else {
      if (isDesktop) return false;
      bools[2] = true;
    }
    setWidth(currWidth);
    setHeight(currHeight);
    bools.forEach((r, idx) => {
      switch (idx) {
        case 0:
          setIsMobile(r);
          break;
        case 1:
          setIsTablet(r);
          break;
        case 2:
          setIsDesktop(r);
          break;
      }
    });
  };

  return (
    <ResizeContext.Provider
      value={{ width, height, isMobile, isTablet, isDesktop }}
    >
      {children}
    </ResizeContext.Provider>
  );
}
