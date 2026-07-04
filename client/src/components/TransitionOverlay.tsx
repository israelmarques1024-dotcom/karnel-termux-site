import { useEffect, useRef } from "react";
import { transitionControllerRef } from "@/hooks/transitionController";
import { BLOB_PATH, easeInOutCubic } from "@/hooks/useTransitionLocation";

export default function TransitionOverlay() {
  const pathRef = useRef<SVGPathElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef(0);

  useEffect(() => {
    transitionControllerRef.current = {
      cover() {
        return new Promise((resolve) => {
          const path = pathRef.current;
          if (!path) { resolve(); return; }

          if (overlayRef.current) {
            overlayRef.current.style.opacity = "1";
          }

          path.style.transformOrigin = "50% 100%";
          path.style.transform = "scale(0)";

          const DURATION = 700;
          const start = performance.now();

          function tick(now: number) {
            const t = Math.min((now - start) / DURATION, 1);
            const eased = easeInOutCubic(t);
            path.style.transform = `scale(${eased * 3})`;

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
          if (!path) { resolve(); return; }

          path.style.transformOrigin = "50% 0%";
          path.style.transform = "scale(3)";

          const DURATION = 700;
          const start = performance.now();

          function tick(now: number) {
            const t = Math.min((now - start) / DURATION, 1);
            const eased = easeInOutCubic(t);
            path.style.transform = `scale(${3 * (1 - eased)})`;

            if (t < 1) {
              rafRef.current = requestAnimationFrame(tick);
            } else {
              if (overlayRef.current) {
                overlayRef.current.style.opacity = "0";
              }
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
        clipPath: "url(#paint-clip)",
        background: "var(--transition-color, #000)",
      }}
    >
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <clipPath id="paint-clip" clipPathUnits="objectBoundingBox">
            <path ref={pathRef} d={BLOB_PATH} />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}
