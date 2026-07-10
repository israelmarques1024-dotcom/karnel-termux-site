import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, Router } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import useTransitionLocation from "./hooks/useTransitionLocation";
import TransitionOverlay from "./components/TransitionOverlay";

const Home = lazy(() => import("@/pages/Home"));
const Termux = lazy(() => import("@/pages/Termux"));
const TermuxAPI = lazy(() => import("@/pages/TermuxAPI"));
const OmniDocs = lazy(() => import("@/pages/OmniDocs"));
const AITools = lazy(() => import("@/pages/AITools"));
const CodeEditor = lazy(() => import("@/pages/CodeEditor"));
const Deploy = lazy(() => import("@/pages/Deploy"));
const Doctor = lazy(() => import("@/pages/Doctor"));
const ShowDocs = lazy(() => import("@/pages/ShowDocs"));
const Linux = lazy(() => import("@/pages/Linux"));
const Brain = lazy(() => import("@/pages/Brain"));
const Voice = lazy(() => import("@/pages/Voice"));
const PG = lazy(() => import("@/pages/PG"));
const Init = lazy(() => import("@/pages/Init"));
const Env = lazy(() => import("@/pages/Env"));

function RouterOutlet() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background" />}>
      <Switch>
        <Route path={"/"} component={Home} />
        <Route path={"/termux"} component={Termux} />
        <Route path={"/termux/api"} component={TermuxAPI} />
        <Route path={"/omni"} component={OmniDocs} />
        <Route path={"/omni/ai"} component={AITools} />
        <Route path={"/omni/editor"} component={CodeEditor} />
        <Route path={"/omni/deploy"} component={Deploy} />
        <Route path={"/omni/doctor"} component={Doctor} />
        <Route path={"/omni/show"} component={ShowDocs} />
        <Route path={"/omni/linux"} component={Linux} />
        <Route path={"/omni/brain"} component={Brain} />
        <Route path={"/omni/voice"} component={Voice} />
        <Route path={"/omni/pg"} component={PG} />
        <Route path={"/omni/init"} component={Init} />
        <Route path={"/omni/env"} component={Env} />
        <Route path={"/404"} component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Router hook={useTransitionLocation}>
            <Toaster />
            <RouterOutlet />
            <TransitionOverlay />
          </Router>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
