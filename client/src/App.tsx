import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, Router } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import useTransitionLocation from "./hooks/useTransitionLocation";
import TransitionOverlay from "./components/TransitionOverlay";
import Layout from "@/components/Layout";

const Home = lazy(() => import("@/pages/Home"));
const Termux = lazy(() => import("@/pages/Termux"));
const TermuxAPI = lazy(() => import("@/pages/TermuxAPI"));
const KarnelDocs = lazy(() => import("@/pages/KarnelDocs"));
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
const KarnelLang = lazy(() => import("@/pages/KarnelLang"));
const KarnelDB = lazy(() => import("@/pages/KarnelDB"));
const KarnelDev = lazy(() => import("@/pages/KarnelDev"));
const KarnelNpm = lazy(() => import("@/pages/KarnelNpm"));
const KarnelShell = lazy(() => import("@/pages/KarnelShell"));
const KarnelUI = lazy(() => import("@/pages/KarnelUI"));
const KarnelAuto = lazy(() => import("@/pages/KarnelAuto"));
const KarnelCleanup = lazy(() => import("@/pages/KarnelCleanup"));
const KarnelBackup = lazy(() => import("@/pages/KarnelBackup"));
const Terms = lazy(() => import("@/pages/Terms"));

function RouterOutlet() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background" />}>
      <Switch>
        <Route path={"/"} component={Home} />
        <Route path={"/termux"} component={Termux} />
        <Route path={"/termux/api"} component={TermuxAPI} />
        <Route path={"/karnel"} component={KarnelDocs} />
        <Route path={"/karnel/ai"} component={AITools} />
        <Route path={"/karnel/editor"} component={CodeEditor} />
        <Route path={"/karnel/deploy"} component={Deploy} />
        <Route path={"/karnel/doctor"} component={Doctor} />
        <Route path={"/karnel/show"} component={ShowDocs} />
        <Route path={"/karnel/linux"} component={Linux} />
        <Route path={"/karnel/brain"} component={Brain} />
        <Route path={"/karnel/voice"} component={Voice} />
        <Route path={"/karnel/pg"} component={PG} />
        <Route path={"/karnel/init"} component={Init} />
        <Route path={"/karnel/env"} component={Env} />
        <Route path={"/karnel/lang"} component={KarnelLang} />
        <Route path={"/karnel/db"} component={KarnelDB} />
        <Route path={"/karnel/dev"} component={KarnelDev} />
        <Route path={"/karnel/npm"} component={KarnelNpm} />
        <Route path={"/karnel/shell"} component={KarnelShell} />
        <Route path={"/karnel/ui"} component={KarnelUI} />
        <Route path={"/karnel/auto"} component={KarnelAuto} />
        <Route path={"/karnel/cleanup"} component={KarnelCleanup} />
        <Route path={"/karnel/backup"} component={KarnelBackup} />
        <Route path={"/terms"} component={Terms} />
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
            <Layout>
              <RouterOutlet />
            </Layout>
            <TransitionOverlay />
          </Router>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
