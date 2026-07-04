import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Termux", href: "/termux" },
  { label: "Termux:API", href: "/termux/api" },
  { label: "Core-Termux", href: "/core-termux" },
  { label: "AI Tools", href: "/core-termux/ai" },
  { label: "Code Editor", href: "/core-termux/editor" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
          <Link href="/">
            <a className="flex items-center gap-3 mb-8 hover:opacity-90 transition-all duration-300 group">
              <img 
                src="/omni-logo-pixel.svg"
                alt="Omni Catalyst"
                className="w-10 h-10 drop-shadow-lg drop-shadow-accent/50 group-hover:drop-shadow-xl group-hover:drop-shadow-accent/70 transition-all duration-300"
              />
              <div>
                <h1 className="font-bold text-lg font-mono text-foreground group-hover:text-accent transition-colors">OMNI</h1>
                <p className="text-xs text-muted-foreground group-hover:text-accent/70 transition-colors">CATALYST</p>
              </div>
            </a>
          </Link>

          {/* Navigation */}
          <nav className="flex-1 space-y-1">
            {navItems.map((item) => {
              const isActive = location === item.href;
              return (
                <Link key={item.href} href={item.href}>
                  <a
                    className={`block px-4 py-2.5 rounded-md transition-all duration-200 font-mono text-sm font-medium ${
                      isActive
                        ? "bg-gradient-to-r from-accent/20 to-accent/10 text-accent border-l-2 border-accent shadow-sm shadow-accent/20"
                        : "text-sidebar-foreground hover:bg-sidebar-primary/15 hover:text-accent/80"
                    }`}
                    onClick={() => setSidebarOpen(false)}
                  >
                    {item.label}
                  </a>
                </Link>
              );
            })}
          </nav>

          {/* Footer */}
          <div className="pt-6 border-t border-sidebar-border/50">
            <p className="text-xs text-muted-foreground font-mono">
              <span className="text-accent">v4.7.0</span> • Android + Termux
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
            <Link href="/">
              <a className="flex items-center gap-2">
                <img 
                  src="/omni-logo-pixel.svg"
                  alt="Omni Catalyst"
                  className="w-8 h-8"
                />
                <span className="font-bold font-mono text-sm">OMNI CATALYST</span>
              </a>
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
            Omni Catalyst — Built with ❤️ by{" "}
            <a
              href="https://github.com/israel676767"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline font-semibold"
            >
              israel marques
            </a>
          </p>
          <p className="mt-3">
            <a
              href="https://github.com/israel676767/omni"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              Omni Repo
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
              href="https://github.com/israel676767/omni/blob/main/LICENSE"
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
