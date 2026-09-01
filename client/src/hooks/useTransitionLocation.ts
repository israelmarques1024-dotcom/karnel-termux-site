import { useEffect, useCallback, useSyncExternalStore } from "react";
import { transitionControllerRef } from "./transitionController";

const getLocationPath = () =>
  typeof window !== "undefined" ? window.location.pathname : "/";

let currentLocation = getLocationPath();
let navigationVersion = 0;
const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot() {
  return currentLocation;
}

function emitChange() {
  listeners.forEach(l => l());
}

export default function useTransitionLocation(): [
  string,
  (to: string) => void,
] {
  const location = useSyncExternalStore(subscribe, getSnapshot);

  const navigate = useCallback((to: string) => {
    if (to === currentLocation) return;
    const version = ++navigationVersion;

    if (typeof window !== "undefined") {
      window.history.pushState(null, "", to);

      const ctrl = transitionControllerRef.current;
      if (!ctrl) {
        currentLocation = to;
        emitChange();
        return;
      }

      ctrl
        .cover()
        .then(() => {
          if (version !== navigationVersion) return;
          currentLocation = to;
          emitChange();
          return ctrl.reveal();
        })
        .then(() => {
          if (version === navigationVersion) return;
        })
        .catch(() => {
          if (version !== navigationVersion) return;
          currentLocation = to;
          emitChange();
        });
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const onPop = () => {
      navigationVersion += 1;
      void transitionControllerRef.current?.reveal();
      const newLoc = getLocationPath();
      if (newLoc !== currentLocation) {
        currentLocation = newLoc;
        emitChange();
      }
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  return [location, navigate];
}
