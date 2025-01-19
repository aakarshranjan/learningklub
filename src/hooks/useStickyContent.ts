"use client";
import { useLayoutEffect, useRef, useState } from "react";

export const useStickyContent = () => {
  const contentRef = useRef<HTMLElement>(null);
  const [isSticky, setIsSticky] = useState<boolean>(false);

  useLayoutEffect(() => {
    const handleScroll = () => {
      const el = contentRef.current;
      if (!el) return;
      setIsSticky(window.scrollY > el.offsetTop);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setIsSticky, contentRef]);

  return { contentRef, isSticky };
};
