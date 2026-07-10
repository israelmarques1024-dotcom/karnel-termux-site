import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import {
  RiMenu3Line,
  RiStarLine,
  RiHome4Line,
  RiBook3Line,
  RiCodeBoxLine,
  RiTerminalBoxLine,
  RiBrainLine,
  RiMicLine,
  RiDatabase2Line,
  RiArrowUpLine,
  RiGithubLine,
} from "@remixicon/react";

const navLinks = [
  { to: "/", icon: RiHome4Line, label: "Início" },
  { to: "/omni", icon: RiBook3Line, label: "Documentação" },
  { to: "/omni/ai", icon: RiCodeBoxLine, label: "IA" },
  { to: "/termux", icon: RiTerminalBoxLine, label: "Termux" },
  { to: "/omni/brain", icon: RiBrainLine, label: "Brain" },
  { to: "/omni/voice", icon: RiMicLine, label: "Voice" },
  { to: "/omni/pg", icon: RiDatabase2Line, label: "PostgreSQL" },
];

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg shadow-accent/20 transition-all duration-400 hover:scale-110 hover:shadow-xl hover:shadow-accent/30 active:scale-95 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
      aria-label="Voltar ao topo"
    >
      <RiArrowUpLine size={20} />
    </button>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [pathname] = useLocation();

  useEffect(() => {
    setSidebarOpen(false);
  }, [pathname]);

  return (
    <div className="flex min-h-dvh">
      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-64 flex-col border-r border-border bg-sidebar transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-16 items-center gap-2.5 border-b border-border px-5">
          <div className="brand-gem-sidebar relative flex h-8 w-8 shrink-0 items-center justify-center">
            <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-accent to-purple-600 opacity-20 blur-sm" />
            <div className="relative z-10 text-sm font-bold text-accent">O</div>
            <div
              className="gem-spin"
              style={{
                width: 32,
                height: 32,
                borderColor: "oklch(0.62 0.22 15 / 0.4)",
              }}
            />
            <div
              className="gem-spin"
              style={{
                width: 24,
                height: 24,
                borderColor: "oklch(0.62 0.22 15 / 0.25)",
                animationDirection: "reverse",
                animationDuration: "3s",
              }}
            />
          </div>
          <span className="text-base font-semibold tracking-tight">
            Kernel<span className="text-accent">Termux</span>
          </span>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-4">
          <ul className="space-y-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = link.to === "/"
                ? pathname === "/"
                : pathname.startsWith(link.to);

              return (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className={`group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-accent/10 text-accent"
                        : "text-muted-foreground hover:bg-accent/5 hover:text-foreground"
                    }`}
                  >
                    <Icon
                      size={18}
                      className={`transition-all duration-200 ${
                        isActive
                          ? "text-accent"
                          : "text-muted-foreground group-hover:text-foreground"
                      }`}
                    />
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="ml-auto h-1.5 w-1.5 rounded-full bg-accent" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="border-t border-border px-4 py-4">
          <div className="flex items-center justify-center gap-3">
            <a
              href="https://github.com/israel676767/kerneltermux"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-all duration-200 hover:text-accent hover:scale-110"
              aria-label="GitHub"
            >
              <RiGithubLine size={18} />
            </a>
          </div>
          <p className="mt-2 text-center text-[10px] text-muted-foreground/60">
            KernelTermux — MIT
          </p>
        </div>
      </aside>

      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className="flex flex-1 flex-col lg:pl-64">
        <header className="glass sticky top-0 z-20 flex h-16 items-center justify-between border-b border-border px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => setSidebarOpen(true)}
            className="flex items-center justify-center rounded-lg p-2 text-muted-foreground hover:bg-accent/5 hover:text-foreground lg:hidden"
            aria-label="Abrir menu"
          >
            <RiMenu3Line size={22} />
          </button>

          <div className="hidden lg:flex lg:flex-1" />

          <a
            href="https://github.com/israel676767/kerneltermux"
            target="_blank"
            rel="noopener noreferrer"
            className="star-btn group flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-200"
          >
            <RiStarLine size={16} />
            <span className="hidden sm:inline">Estrela no</span>
            <span>GitHub</span>
          </a>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="border-t border-border px-4 py-6 text-center text-xs text-muted-foreground sm:px-6 lg:px-8">
          KernelTermux {new Date().getFullYear()} — Feito com ❤️ pela comunidade
        </footer>
      </div>

      <ScrollToTop />
    </div>
  );
}
