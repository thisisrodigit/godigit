"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const pos = useRef({ x: 0, y: 0 });
  const raf = useRef<number | null>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pos.current.x = e.clientX;
      pos.current.y = e.clientY;
      if (raf.current) return;
      raf.current = window.requestAnimationFrame(() => {
        raf.current = null;
        if (!dotRef.current) return;
        dotRef.current.style.transform = `translate(${pos.current.x - 9}px, ${pos.current.y - 9}px)`;
      });
    };

    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (raf.current) window.cancelAnimationFrame(raf.current);
    };
  }, []);

  return <div ref={dotRef} className="cursor" aria-hidden="true" />;
}
