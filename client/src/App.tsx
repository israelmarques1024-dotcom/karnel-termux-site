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
import { ROUTES } from "@/lib/routes";

const Home = lazy(() => import("@/pages/Home"));
const Termux = lazy(() => import("@/pages/Termux"));
const TermuxAPI = lazy(() => import("@/pages/TermuxAPI"));
const KarnelDocs = lazy(() => import("@/pages/KarnelDocs"));
const AITools = lazy(() => import("@/pages/AITools"));
const KarnelOsint = lazy(() => import("@/pages/KarnelOsint"));
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

const APP_ROUTES = [
  { path: ROUTES.home, component: Home },
  { path: ROUTES.termux, component: Termux },
  { path: ROUTES.termuxApi, component: TermuxAPI },
  { path: ROUTES.karnel, component: KarnelDocs },
  { path: ROUTES.ai, component: AITools },
  { path: ROUTES.osint, component: KarnelOsint },
  { path: ROUTES.editor, component: CodeEditor },
  { path: ROUTES.deploy, component: Deploy },
  { path: ROUTES.doctor, component: Doctor },
  { path: ROUTES.show, component: ShowDocs },
  { path: ROUTES.linux, component: Linux },
  { path: ROUTES.brain, component: Brain },
  { path: ROUTES.voice, component: Voice },
  { path: ROUTES.pg, component: PG },
  { path: ROUTES.init, component: Init },
  { path: ROUTES.env, component: Env },
  { path: ROUTES.lang, component: KarnelLang },
  { path: ROUTES.db, component: KarnelDB },
  { path: ROUTES.dev, component: KarnelDev },
  { path: ROUTES.npm, component: KarnelNpm },
  { path: ROUTES.shell, component: KarnelShell },
  { path: ROUTES.ui, component: KarnelUI },
  { path: ROUTES.auto, component: KarnelAuto },
  { path: ROUTES.cleanup, component: KarnelCleanup },
  { path: ROUTES.backup, component: KarnelBackup },
  { path: ROUTES.terms, component: Terms },
  { path: ROUTES.notFound, component: NotFound },
] as const;

export const APP_ROUTE_PATHS = APP_ROUTES.map(route => route.path);

function RouterOutlet() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background" />}>
      <Switch>
        {APP_ROUTES.map(route => (
          <Route
            key={route.path}
            path={route.path}
            component={route.component}
          />
        ))}
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
