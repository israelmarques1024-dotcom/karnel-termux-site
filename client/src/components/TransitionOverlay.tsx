import { useEffect, useRef } from "react";
import { transitionControllerRef } from "@/hooks/transitionController";

const BLOB_PATH =
  "M50,-90 C65,-95 82,-78 92,-55 C102,-32 108,-5 105,22 C102,49 92,74 76,92 C60,110 38,120 15,115 C-8,110 -28,95 -38,72 C-48,49 -46,22 -34,-2 C-22,-26 -5,-48 15,-65 C35,-82 42,-87 50,-90 Z";

function ease(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * Math.max(0, Math.min(1, t));
}

function hexToRgb(hex: string) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return { r, g, b };
}

function rgbToHex(r: number, g: number, b: number) {
  const clamp = (n: number) => Math.max(0, Math.min(255, Math.round(n)));
  return `#${clamp(r).toString(16).padStart(2, "0")}${clamp(g).toString(16).padStart(2, "0")}${clamp(b).toString(16).padStart(2, "0")}`;
}

function lerpColor(a: string, b: string, t: number): string {
  const ca = hexToRgb(a);
  const cb = hexToRgb(b);
  return rgbToHex(
    ca.r + (cb.r - ca.r) * t,
    ca.g + (cb.g - ca.g) * t,
    ca.b + (cb.b - ca.b) * t
  );
}

interface ColorPalette {
  s1: string;
  s2: string;
  s3: string;
  s4: string;
}

const COVER_START: ColorPalette = {
  s1: "#1a0028",
  s2: "#0d001a",
  s3: "#080010",
  s4: "#040008",
};

const COVER_PEAK: ColorPalette = {
  s1: "#FF2D55",
  s2: "#eb1e5a",
  s3: "#A855F7",
  s4: "#7C3AED",
};

const REVEAL_END: ColorPalette = {
  s1: "#0d0015",
  s2: "#080010",
  s3: "#040008",
  s4: "#020005",
};

export default function TransitionOverlay() {
  const pathRef = useRef<SVGPathElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const textGroupRef = useRef<SVGGElement>(null);
  const textRevealRef = useRef<SVGRectElement>(null);
  const glowRef = useRef<SVGRectElement>(null);
  const rafRef = useRef(0);
  const stop1Ref = useRef<SVGStopElement>(null);
  const stop2Ref = useRef<SVGStopElement>(null);
  const stop3Ref = useRef<SVGStopElement>(null);
  const stop4Ref = useRef<SVGStopElement>(null);
  const textStop1Ref = useRef<SVGStopElement>(null);
  const textStop2Ref = useRef<SVGStopElement>(null);
  const textStop3Ref = useRef<SVGStopElement>(null);

  const setGradientColors = (palette: ColorPalette) => {
    stop1Ref.current?.setAttribute("stop-color", palette.s1);
    stop2Ref.current?.setAttribute("stop-color", palette.s2);
    stop3Ref.current?.setAttribute("stop-color", palette.s3);
    stop4Ref.current?.setAttribute("stop-color", palette.s4);
  };

  const lerpPalette = (a: ColorPalette, b: ColorPalette, t: number): ColorPalette => ({
    s1: lerpColor(a.s1, b.s1, t),
    s2: lerpColor(a.s2, b.s2, t),
    s3: lerpColor(a.s3, b.s3, t),
    s4: lerpColor(a.s4, b.s4, t),
  });

  useEffect(() => {
    setGradientColors(COVER_START);

    transitionControllerRef.current = {
      cover() {
        return new Promise<void>((resolve) => {
          try {
            const path = pathRef.current;
            const textGroup = textGroupRef.current;
            const textReveal = textRevealRef.current;
            const glow = glowRef.current;
            if (!path || !textGroup || !textReveal || !glow) {
              resolve();
              return;
            }
            const overlay = overlayRef.current;
            if (overlay) overlay.style.opacity = "1";
            const DURATION = 1200;
            const start = performance.now();
            path.style.transform = "scale(0)";
            textGroup.style.opacity = "0";
            textReveal.setAttribute("width", "0");
            glow.style.opacity = "0";
            const tick = (now: number) => {
              try {
                const t = Math.min((now - start) / DURATION, 1);
                const gradT = ease(Math.min(t / 0.6, 1));
                const palette = lerpPalette(COVER_START, COVER_PEAK, gradT);
                setGradientColors(palette);
                const blobT = Math.min(t / 0.6, 1);
                path.style.transform = `scale(${ease(blobT) * 3})`;
                const revealT = Math.max(0, Math.min((t - 0.25) / 0.6, 1));
                const textWidth = ease(revealT) * 120;
                textReveal.setAttribute("width", String(textWidth));
                textGroup.style.opacity = String(revealT < 0.01 ? 0 : Math.min(revealT * 1.5, 1));
                const glowOpacity = t < 0.3 ? 0 : (t - 0.3) / 0.3;
                glow.style.opacity = String(Math.min(glowOpacity, 0.7));
                if (t < 1) {
                  rafRef.current = requestAnimationFrame(tick);
                } else {
                  resolve();
                }
              } catch {
                resolve();
              }
            };
            rafRef.current = requestAnimationFrame(tick);
          } catch {
            resolve();
          }
        });
      },
      reveal() {
        return new Promise<void>((resolve) => {
          try {
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
            path.style.transform = "scale(3)";
            textGroup.style.opacity = "1";
            textReveal.setAttribute("width", "120");
            glow.style.opacity = "0.7";
            const tick = (now: number) => {
              try {
                const t = Math.min((now - start) / DURATION, 1);
                const gradT = ease(Math.min(t / 0.4, 1));
                const palette = lerpPalette(COVER_PEAK, REVEAL_END, gradT);
                setGradientColors(palette);
                const textT = Math.min(t / 0.4, 1);
                textGroup.style.opacity = String(1 - ease(textT));
                textReveal.setAttribute("width", String(120 * (1 - ease(textT))));
                glow.style.opacity = String(0.7 * (1 - ease(Math.min(t / 0.3, 1))));
                const blobT = Math.max(0, Math.min((t - 0.3) / 0.7, 1));
                path.style.transform = `scale(${3 * (1 - ease(blobT))})`;
                if (t < 1) {
                  rafRef.current = requestAnimationFrame(tick);
                } else {
                  if (overlayRef.current) overlayRef.current.style.opacity = "0";
                  resolve();
                }
              } catch {
                resolve();
              }
            };
            rafRef.current = requestAnimationFrame(tick);
          } catch {
            resolve();
          }
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
        position: "fixed" as const,
        inset: 0,
        zIndex: 9999,
        pointerEvents: "none" as const,
        overflow: "hidden" as const,
        opacity: 0,
      }}
    >
      <div className="absolute inset-0" style={{ backgroundColor: "#0a0a0f" }} />
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 w-full h-full"
      >
        <defs>
          <linearGradient id="liquid-grad" x1="0" y1="1" x2="0.3" y2="0">
            <stop ref={stop1Ref} offset="0%" stopColor="#1a0028" />
            <stop ref={stop2Ref} offset="40%" stopColor="#0d001a" />
            <stop ref={stop3Ref} offset="70%" stopColor="#080010" />
            <stop ref={stop4Ref} offset="100%" stopColor="#040008" />
          </linearGradient>
          <filter id="liquid-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur1" />
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur2" />
            <feMerge>
              <feMergeNode in="blur2" />
              <feMergeNode in="blur1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="text-fill-grad" x1="0" y1="1" x2="0" y2="0">
            <stop ref={textStop1Ref} offset="20%" stopColor="#FF2D55" />
            <stop ref={textStop2Ref} offset="60%" stopColor="#8B5CF6" />
            <stop ref={textStop3Ref} offset="100%" stopColor="#A855F7" />
          </linearGradient>
          <mask id="paint-mask">
            <rect width="100" height="100" fill="black" />
            <g style={{ transformOrigin: "50% 100%" }}>
              <path ref={pathRef} d={BLOB_PATH} fill="white" />
            </g>
            <g ref={textGroupRef}>
              <mask id="text-reveal-mask">
                <rect ref={textRevealRef} x="0" y="0" width="0" height="100" fill="white" />
              </mask>
              <g mask="url(#text-reveal-mask)" fill="white">
                <text x="50" y="42" textAnchor="middle" fontFamily="monospace, sans-serif" fontWeight="900" fontSize="18" letterSpacing="1">KERNELTERMUX</text>
                <text x="50" y="60" textAnchor="middle" fontFamily="monospace, sans-serif" fontWeight="700" fontSize="14" letterSpacing="1.5">TERMUX</text>
              </g>
            </g>
          </mask>
        </defs>
        <rect width="100" height="100" fill="url(#liquid-grad)" mask="url(#paint-mask)" />
        <rect ref={glowRef} width="100" height="100" fill="url(#liquid-grad)" mask="url(#paint-mask)" filter="url(#liquid-glow)" opacity="0" />
      </svg>
    </div>
  );
}
