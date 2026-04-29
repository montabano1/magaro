"use client";

import { useEffect, useRef, useState } from "react";

export default function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setTimeout(() => setShown(true), delay);
            io.disconnect();
            break;
          }
        }
      },
      { rootMargin: "-10% 0px -10% 0px", threshold: 0.05 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  const Element = Tag as React.ElementType;
  return (
    <Element
      ref={ref as React.RefObject<HTMLElement>}
      className={[
        "transition-all duration-[900ms] ease-[cubic-bezier(0.2,0.7,0.2,1)] will-change-transform",
        shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
        className,
      ].join(" ")}
    >
      {children}
    </Element>
  );
}
