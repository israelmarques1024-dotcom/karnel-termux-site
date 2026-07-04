import { useEffect, useRef } from "react";
import { transitionControllerRef } from "@/hooks/transitionController";

const BLOB_PATH =
  "M0.5,-0.9 C0.65,-0.95 0.82,-0.78 0.92,-0.55 C1.02,-0.32 1.08,-0.05 1.05,0.22 C1.02,0.49 0.92,0.74 0.76,0.92 C0.6,1.1 0.38,1.2 0.15,1.15 C-0.08,1.1 -0.28,0.95 -0.38,0.72 C-0.48,0.49 -0.46,0.22 -0.34,-0.02 C-0.22,-0.26 -0.05,-0.48 0.15,-0.65 C0.35,-0.82 0.42,-0.87 0.5,-0.9 Z";

function ease(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * Math.max(0, Math.min(1, t));
}

export default function TransitionOverlay() {
  const pathRef = useRef<SVGPathElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const textGroupRef = useRef<SVGGElement>(null);
  const textRevealRef = useRef<SVGRectElement>(null);
  const glowRef = useRef<SVGRectElement>(null);
  const rafRef = useRef(0);

  useEffect(() => {
    transitionControllerRef.current = {
      cover() {
        return new Promise((resolve) => {
          const path = pathRef.current;
          const textGroup = textGroupRef.current;
          const textReveal = textRevealRef.current;
          const glow = glowRef.current;
          if (!path || !textGroup || !textReveal || !glow) {
            resolve();
            return;
          }

          if (overlayRef.current) overlayRef.current.style.opacity = "1";

          const DURATION = 1200;
          const start = performance.now();

          path.style.transformOrigin = "50% 100%";
          path.style.transform = "scale(0)";
          textGroup.style.opacity = "0";
          textReveal.setAttribute("width", "0");

          function tick(now: number) {
            const t = Math.min((now - start) / DURATION, 1);

            // Blob: grows from 0→3 during first 60%
            const blobT = Math.min(t / 0.6, 1);
            path.style.transform = `scale(${ease(blobT) * 3})`;

            // Text reveal: left-to-right, starts at 25%, finishes at 85%
            const revealT = Math.max(0, Math.min((t - 0.25) / 0.6, 1));
            const textWidth = ease(revealT) * 120;
            textReveal.setAttribute("width", String(textWidth));
            textGroup.style.opacity = String(revealT < 0.01 ? 0 : Math.min(revealT * 1.5, 1));

            // Glow intensity
            const glowOpacity = t < 0.3 ? 0 : (t - 0.3) / 0.3;
            glow.style.opacity = String(Math.min(glowOpacity, 0.7));

            if (t < 1) {
              rafRef.current = requestAnimationFrame(tick);
            } else {
              resolve();
            }
          }

          rafRef.current = requestAnimationFrame(tick);
        });
      },

      reveal() {
        return new Promise((resolve) => {
          const path = pathRef.current;
          const textGroup = textGroupRef.current;
          const textReveal = textRevealRef.current;
          const glow = glowRef.current;
          if (!path || !textGroup || !textReveal || !glow) {
            resolve();
            return;
          }

          const DURATION = 1000;
          const start = performance.now();

          path.style.transformOrigin = "50% 0%";
          path.style.transform = "scale(3)";
          textGroup.style.opacity = "1";
          textReveal.setAttribute("width", "120");

          function tick(now: number) {
            const t = Math.min((now - start) / DURATION, 1);

            // Text fades out first (0→40%)
            const textT = Math.min(t / 0.4, 1);
            textGroup.style.opacity = String(1 - ease(textT));
            textReveal.setAttribute("width", String(120 * (1 - ease(textT))));

            // Glow fades
            glow.style.opacity = String(0.7 * (1 - ease(Math.min(t / 0.3, 1))));

            // Blob shrinks (starts at 30%, finishes at 100%)
            const blobT = Math.max(0, Math.min((t - 0.3) / 0.7, 1));
            path.style.transform = `scale(${3 * (1 - ease(blobT))})`;

            if (t < 1) {
              rafRef.current = requestAnimationFrame(tick);
            } else {
              if (overlayRef.current) overlayRef.current.style.opacity = "0";
              resolve();
            }
          }

          rafRef.current = requestAnimationFrame(tick);
        });
      },
    };

    return () => {
      cancelAnimationFrame(rafRef.current);
      transitionControllerRef.current = null;
    };
  }, []);

  return (
    <div
      ref={overlayRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        pointerEvents: "none",
        overflow: "hidden",
        opacity: 0,
      }}
    >
      {/* Black background */}
      <div className="absolute inset-0 bg-black" />

      {/* SVG liquid layer */}
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 w-full h-full"
      >
        <defs>
          {/* Liquid gradient: red → purple */}
          <linearGradient id="liquid-grad" x1="0" y1="1" x2="0.3" y2="0">
            <stop offset="0%" stopColor="#FF2D55" />
            <stop offset="40%" stopColor="#e01e5a" />
            <stop offset="70%" stopColor="#9b4df5" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>

          {/* Glow filter */}
          <filter id="liquid-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur1" />
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur2" />
            <feMerge>
              <feMergeNode in="blur2" />
              <feMergeNode in="blur1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Text fill gradient: rises from bottom */}
          <linearGradient id="text-fill-grad" x1="0" y1="1" x2="0" y2="0">
            <stop offset="20%" stopColor="#FF2D55" />
            <stop offset="60%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#A855F7" />
          </linearGradient>

          {/* Main mask: blob + text */}
          <mask id="paint-mask">
            {/* Black = transparent (page visible) */}
            <rect width="100" height="100" fill="black" />

            {/* Organic blob (white = liquid visible) */}
            <g transformOrigin="50 100">
              <path ref={pathRef} d={BLOB_PATH} fill="white" />
            </g>

            {/* Text revealed left-to-right */}
            <g ref={textGroupRef}>
              <mask id="text-reveal-mask">
                <rect
                  ref={textRevealRef}
                  x="0"
                  y="0"
                  width="0"
                  height="100"
                  fill="white"
                />
              </mask>
              <g mask="url(#text-reveal-mask)" fill="white">
                <text
                  x="50"
                  y="42"
                  textAnchor="middle"
                  fontFamily="monospace, sans-serif"
                  fontWeight="900"
                  fontSize="21"
                  letterSpacing="2"
                >
                  OMNI
                </text>
                <text
                  x="50"
                  y="60"
                  textAnchor="middle"
                  fontFamily="monospace, sans-serif"
                  fontWeight="700"
                  fontSize="13"
                  letterSpacing="3"
                >
                  CATALYST
                </text>
              </g>
            </g>
          </mask>
        </defs>

        {/* Main liquid color visible through mask */}
        <rect
          width="100"
          height="100"
          fill="url(#liquid-grad)"
          mask="url(#paint-mask)"
        />

        {/* Glow layer */}
        <rect
          ref={glowRef}
          width="100"
          height="100"
          fill="url(#liquid-grad)"
          mask="url(#paint-mask)"
          filter="url(#liquid-glow)"
          opacity="0"
        />
      </svg>
    </div>
  );
}
