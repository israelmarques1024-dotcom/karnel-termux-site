import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, Router } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import useTransitionLocation from "./hooks/useTransitionLocation";
import TransitionOverlay from "./components/TransitionOverlay";
import Home from "./pages/Home";
import Termux from "./pages/Termux";
import TermuxAPI from "./pages/TermuxAPI";
import OmniDocs from "./pages/OmniDocs";
import AITools from "./pages/AITools";
import CodeEditor from "./pages/CodeEditor";
import Deploy from "./pages/Deploy";
import Doctor from "./pages/Doctor";
import ShowDocs from "./pages/ShowDocs";
import Linux from "./pages/Linux";
import Brain from "./pages/Brain";
import Voice from "./pages/Voice";
import PG from "./pages/PG";
import Init from "./pages/Init";
import Env from "./pages/Env";

function RouterOutlet() {
  return (
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
