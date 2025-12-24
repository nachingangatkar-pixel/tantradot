"use client";

import React, { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  animation?: string;
  className?: string;
  delay?: string; // e.g. "120ms"
  rootMargin?: string;
  threshold?: number | number[];
  once?: boolean;
};

export default function AnimateOnView({
  children,
  animation = "animate-zoom-in",
  className = "",
  delay = "7000ms",
  rootMargin = "0px",
  threshold = 0.12,
  once = false,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            if (once && el) observer.unobserve(el);
          } else {
            if (!once) setInView(false);
          }
        });
      },
      { root: null, rootMargin, threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin, threshold, once]);

  const style: React.CSSProperties = {
    // pass animation delay to CSS via variable
    ["--anim-delay" as any]: delay,
    opacity: inView ? undefined : 0,
    transform: inView ? undefined : "translateY(8px)",
  };

  return (
    <div ref={ref} className={className} style={style}>
      <div className={inView ? animation : undefined}>{children}</div>
    </div>
  );
}
