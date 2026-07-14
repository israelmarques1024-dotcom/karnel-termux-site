import { useLocation } from "wouter";
import { useState } from "react";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location, navigate] = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(true);
  const [desktopOpen, setDesktopOpen] = useState(false);

  const scrollToSupport = () => {
    if (location !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById("support-project")?.scrollIntoView({ behavior: "smooth" });
      }, 120);
    } else {
      document.getElementById("support-project")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { label: "Get Started", href: "/" },
  ];

  const termuxItems = [
    { label: "Termux", href: "/termux" },
    { label: "Termux:API", href: "/termux/api" },
    { label: "Karnel", href: "/karnel" },
    { label: "AI Tools", href: "/karnel/ai" },
    { label: "Languages", href: "/karnel/lang" },
    { label: "Databases", href: "/karnel/db" },
    { label: "Editor", href: "/karnel/editor" },
    { label: "Dev Tools", href: "/karnel/dev" },
    { label: "npm", href: "/karnel/npm" },
    { label: "Shell", href: "/karnel/shell" },
    { label: "UI", href: "/karnel/ui" },
    { label: "Auto", href: "/karnel/auto" },
    { label: "Linux Stack", href: "/karnel/linux" },
    { label: "Second Brain", href: "/karnel/brain" },
    { label: "Voice", href: "/karnel/voice" },
    { label: "PG", href: "/karnel/pg" },
    { label: "Init", href: "/karnel/init" },
    { label: "Env", href: "/karnel/env" },
    { label: "Deploy", href: "/karnel/deploy" },
    { label: "Cleanup", href: "/karnel/cleanup" },
    { label: "Doctor", href: "/karnel/doctor" },
    { label: "Show", href: "/karnel/show" },
    { label: "Backup", href: "/karnel/backup" },
  ];

  const desktopItems = [
    { label: "Documentation", href: "/desktop" },
    { label: "Install", href: "/desktop" },
    { label: "Commands", href: "/desktop" },
    { label: "Categories", href: "/desktop" },
    { label: "Platforms", href: "/desktop" },
  ];

  const renderNavSection = (
    title: string,
    items: { label: string; href?: string; action?: () => void }[],
    isOpen: boolean,
    setIsOpen: (v: boolean) => void
  ) => (
    <div className="space-y-1 mb-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between px-4 py-2.5 rounded-md font-mono text-sm font-medium text-sidebar-foreground hover:bg-sidebar-primary/15 hover:text-accent/80 transition-all duration-200"
      >
        <span>{title}</span>
        <span className="flex items-center gap-1">
          {isOpen ? (
            <ChevronDown size={12} className="text-accent/70" />
          ) : (
            <ChevronRight size={12} className="text-muted-foreground" />
          )}
        </span>
      </button>
      {isOpen && (
        <div className="ml-4 mt-1 space-y-1 border-l border-sidebar-border/30 pl-3 animate-slide-down">
          {items.map((item) => {
            const isActive = item.href && location === item.href;
            const isAction = !item.href && item.action;
            return isAction ? (
              <button
                key={item.label}
                onClick={(e) => {
                  e.preventDefault();
                  item.action?.();
                  setSidebarOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 rounded-md transition-all duration-200 font-mono text-xs font-medium ${
                  isActive
                    ? "bg-gradient-to-r from-accent/20 to-accent/10 text-accent border-l border-accent shadow-sm shadow-accent/20"
                    : "text-sidebar-foreground hover:bg-sidebar-primary/15 hover:text-accent/80"
                }`}
              >
                {item.label}
              </button>
            ) : (
              <a
                key={item.href}
                href={item.href || "/"}
                className={`block px-3 py-2 rounded-md transition-all duration-200 font-mono text-xs font-medium pointer-events-auto ${
                  isActive
                    ? "bg-gradient-to-r from-accent/20 to-accent/10 text-accent border-l border-accent shadow-sm shadow-accent/20"
                    : "text-sidebar-foreground hover:bg-sidebar-primary/15 hover:text-accent/80"
                }`}
                onClick={() => setSidebarOpen(false)}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      )}
    </div>
  );

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      {/* Sidebar - responsive width */}
      <aside
        className={`fixed left-0 top-0 z-40 h-screen bg-sidebar border-r border-sidebar-border transition-all duration-300 lg:relative lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } w-full sm:w-72 lg:w-64 xl:w-72 max-w-[85vw]`}
      >
        <div className="flex flex-col h-full p-4 sm:p-6">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-3 mb-8 hover:opacity-90 transition-all duration-300 group"
          >
            <img
              src="/karnel-logo.png"
              alt="Karnel Termux"
              className="w-10 h-10 sm:w-12 sm:h-12 drop-shadow-[0_0_12px_rgba(168,85,247,0.5)] group-hover:drop-shadow-[0_0_20px_rgba(168,85,247,0.8)] transition-all duration-300"
            />
            <div className="hidden sm:block">
              <h1 className="font-bold text-lg font-mono text-foreground group-hover:text-accent transition-colors">KARNEL</h1>
              <p className="text-xs text-muted-foreground group-hover:text-accent/70 transition-colors">TERMUX</p>
            </div>
          </a>

          {/* Navigation */}
          <nav className="flex-1 space-y-1 overflow-y-auto pr-2">
            {/* Core Items (always visible) */}
            {navItems.map((item) => {
              const isActive = location === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href || "/"}
                  className={`block px-4 py-2.5 rounded-md transition-all duration-200 font-mono text-sm font-medium ${
                    isActive
                      ? "bg-gradient-to-r from-accent/20 to-accent/10 text-accent border-l-2 border-accent shadow-sm shadow-accent/20"
                      : "text-sidebar-foreground hover:bg-sidebar-primary/15 hover:text-accent/80"
                  }`}
                  onClick={() => setSidebarOpen(false)}
                >
                  {item.label}
                </a>
              );
            })}

            <div className="my-4 h-px bg-sidebar-border/30" />

            {/* Mobile/Termux Section (collapsible) */}
            {renderNavSection("📱 KARNEL MOBILE", termuxItems, mobileOpen, setMobileOpen)}

            {/* Desktop Section (collapsible) */}
            {renderNavSection("💻 KARNEL DESKTOP", desktopItems, desktopOpen, setDesktopOpen)}

            {/* Footer */}
            <div className="pt-6 border-t border-sidebar-border/50 space-y-3">
              <button
                onClick={() => {
                  scrollToSupport();
                  setSidebarOpen(false);
                }}
                className="block w-full text-center px-4 py-2 bg-accent/20 text-accent rounded-lg font-mono text-sm font-medium hover:bg-accent/30 transition-colors"
              >
                Support Project
              </button>
              <p className="text-xs text-muted-foreground font-mono">
                <span className="text-accent">v4.7.6</span> • Android + Termux
              </p>
              <p className="text-xs text-muted-foreground/60 mt-2">Built for developers</p>
            </div>
          </nav>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header - always visible on mobile, hidden on lg+ */}
        <header className="sticky top-0 z-30 bg-card border-b border-border lg:hidden">
          <div className="flex items-center justify-between p-4">
            <a href="/" className="flex items-center gap-2">
              <img
                alt="Karnel Termux"
                className="w-9 h-9 drop-shadow-[0_0_8px_rgba(168,85,247,0.4)]"
                src="/karnel-logo.png"
              />
              <span className="font-bold font-mono text-sm">KARNEL</span>
            </a>
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent dark:hover:bg-accent/50 size-9"
            >
              {sidebarOpen ? (
                <X size={20} className="text-foreground" />
              ) : (
                <Menu size={20} className="text-foreground" />
              )}
            </button>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto min-h-0">
          <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">{children}</div>
        </main>

        {/* Footer */}
        <footer className="bg-card border-t border-border p-6 text-center text-sm text-muted-foreground">
          <p>
            Karnel Termux & Desktop — Built by{" "}
            <a
              href="https://github.com/israelmarques1024-dotcom"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline font-semibold"
            >
              israel marques
            </a>
          </p>
          <p className="mt-2 text-xs">
            <a href="mailto:israelmarques1024@gmail.com" className="text-accent/70 hover:text-accent transition-colors">
              israelmarques1024@gmail.com
            </a>
          </p>
          <p className="mt-3">
            <a
              href="https://kerneltermux.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              Documentação
            </a>
            {" · "}
            <a
              href="https://github.com/israelmarques1024-dotcom/karnel-termux"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              Karnel Mobile Repo
            </a>
            {" · "}
            <a
              href="https://github.com/israelmarques1024-dotcom/karnel-termux-desktop-cli"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              Karnel Desktop Repo
            </a>
            {" · "}
            <a
              href="https://github.com/israelmarques1024-dotcom/karnel-termux/blob/main/LICENSE"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              MIT License
            </a>
            {" · "}
            <a href="/terms" className="text-accent hover:underline">
              Terms
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}