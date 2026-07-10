import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location, navigate] = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
    { label: "Support Project", action: scrollToSupport },
    { label: "Termux", href: "/termux" },
    { label: "Termux:API", href: "/termux/api" },
    { label: "Karnel", href: "/karnel" },
    { label: "AI Tools", href: "/karnel/ai" },
    { label: "Editor", href: "/karnel/editor" },
    { label: "Linux Stack", href: "/karnel/linux" },
    { label: "Second Brain", href: "/karnel/brain" },
    { label: "Voice", href: "/karnel/voice" },
    { label: "PG", href: "/karnel/pg" },
    { label: "Init", href: "/karnel/init" },
    { label: "Env", href: "/karnel/env" },
    { label: "Deploy", href: "/karnel/deploy" },
    { label: "Doctor", href: "/karnel/doctor" },
    { label: "Show", href: "/karnel/show" },
  ];

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-40 h-screen w-64 bg-sidebar border-r border-sidebar-border transition-transform duration-300 lg:relative lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-6">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 mb-8 hover:opacity-90 transition-all duration-300 group"
          >
            <img
              src="/karnel-logo-pixel.svg"
              alt="Karnel Termux"
              className="w-12 h-12 drop-shadow-[0_0_12px_rgba(168,85,247,0.5)] group-hover:drop-shadow-[0_0_20px_rgba(168,85,247,0.8)] transition-all duration-300"
            />
            <div>
              <h1 className="font-bold text-lg font-mono text-foreground group-hover:text-accent transition-colors">KARNEL</h1>
              <p className="text-xs text-muted-foreground group-hover:text-accent/70 transition-colors">TERMUX</p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="flex-1 space-y-1">
            {navItems.map((item) => {
              const isActive = item.href && location === item.href;
              const isAction = !item.href && item.action;
              return isAction ? (
                <button
                  key={item.label}
                  onClick={(e) => {
                    item.action?.();
                    setSidebarOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-2.5 rounded-md transition-all duration-200 font-mono text-sm font-medium ${
                    isActive
                      ? "bg-gradient-to-r from-accent/20 to-accent/10 text-accent border-l-2 border-accent shadow-sm shadow-accent/20"
                      : "text-sidebar-foreground hover:bg-sidebar-primary/15 hover:text-accent/80"
                  }`}
                >
                  {item.label}
                </button>
              ) : (
                <Link
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
                </Link>
              );
            })}
          </nav>

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
              <span className="text-accent">v1.0.0</span> • Android + Termux
            </p>
            <p className="text-xs text-muted-foreground/60 mt-2">Built for developers</p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="sticky top-0 z-30 bg-card border-b border-border">
          <div className="flex items-center justify-between p-4 lg:hidden">
            <Link
              href="/"
              className="flex items-center gap-2"
            >
              <img
                src="/karnel-logo-pixel.svg"
                alt="Karnel Termux"
                className="w-9 h-9 drop-shadow-[0_0_8px_rgba(168,85,247,0.4)]"
              />
              <span className="font-bold font-mono text-sm">KARNEL</span>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto">
          <div className="max-w-6xl mx-auto">{children}</div>
        </main>

        {/* Footer */}
        <footer className="bg-card border-t border-border p-6 text-center text-sm text-muted-foreground">
          <p>
            Karnel Termux — Built by{" "}
            <a
              href="https://github.com/israel676767"
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
              href="https://github.com/israel676767/karnel"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              Karnel Repo
            </a>
            {" · "}
            <a
              href="https://github.com/israel676767"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              GitHub Profile
            </a>
            {" · "}
            <a
              href="https://github.com/israel676767/karnel/blob/main/LICENSE"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              MIT License
            </a>
          </p>
        </footer>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}
