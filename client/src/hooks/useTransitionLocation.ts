import { useState, useCallback, useEffect } from "react";
import { transitionControllerRef } from "./transitionController";

const BLOB_PATH =
  "M0.5,-0.9 C0.65,-0.95 0.82,-0.78 0.92,-0.55 C1.02,-0.32 1.08,-0.05 1.05,0.22 C1.02,0.49 0.92,0.74 0.76,0.92 C0.6,1.1 0.38,1.2 0.15,1.15 C-0.08,1.1 -0.28,0.95 -0.38,0.72 C-0.48,0.49 -0.46,0.22 -0.34,-0.02 C-0.22,-0.26 -0.05,-0.48 0.15,-0.65 C0.35,-0.82 0.42,-0.87 0.5,-0.9 Z";

function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

export default function useTransitionLocation(): [string, (to: string) => void] {
  const [location, setLocation] = useState(window.location.pathname);

  const navigate = useCallback(
    (to: string) => {
      if (to === location) return;

      const ctrl = transitionControllerRef.current;
      if (!ctrl) {
        window.history.pushState(null, "", to);
        setLocation(to);
        return;
      }

      window.history.pushState(null, "", to);
      ctrl.cover().then(() => {
        setLocation(to);
        return ctrl.reveal();
      });
    },
    [location]
  );

  useEffect(() => {
    const onPop = () => {
      const newLoc = window.location.pathname;
      if (newLoc !== location) {
        navigate(newLoc);
      }
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, [location, navigate]);

  return [location, navigate];
}

export { BLOB_PATH, easeInOutCubic };
