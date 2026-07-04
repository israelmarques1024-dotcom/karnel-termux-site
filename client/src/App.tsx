import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Termux from "./pages/Termux";
import TermuxAPI from "./pages/TermuxAPI";
import CoreTermux from "./pages/CoreTermux";
import AITools from "./pages/AITools";
import CodeEditor from "./pages/CodeEditor";
import Deploy from "./pages/Deploy";
import Doctor from "./pages/Doctor";
import ShowDocs from "./pages/ShowDocs";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/termux"} component={Termux} />
      <Route path={"/termux/api"} component={TermuxAPI} />
      <Route path={"/core-termux"} component={CoreTermux} />
      <Route path={"/core-termux/ai"} component={AITools} />
      <Route path={"/core-termux/editor"} component={CodeEditor} />
      <Route path={"/core-termux/deploy"} component={Deploy} />
      <Route path={"/core-termux/doctor"} component={Doctor} />
      <Route path={"/core-termux/show"} component={ShowDocs} />
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
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
