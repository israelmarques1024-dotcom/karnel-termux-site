import { type ReactNode } from "react";
import { useInView } from "../hooks/useInView";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  animation?:
    "fade-in" | "fade-in-up" | "fade-in-left" | "fade-in-right" | "scale-in";
}

export function AnimatedSection({
  children,
  className = "",
  delay = 0,
  animation = "fade-in-up",
}: Props) {
  const { ref, inView } = useInView({ threshold: 0.05 });

  return (
    <div
      ref={ref}
      className={`${className} ${inView ? `animate-${animation}` : "opacity-0 translate-y-8"}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
