import { Link } from "wouter";
import { ArrowRight, Zap, Code2, Cpu, Terminal, Brain, Rocket, Stethoscope, Eye, Mic, Database, Puzzle, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import CodeBlock from "@/components/CodeBlock";

export default function Home() {

  const stats = [
    { label: "AI Agents", value: "28" },
    { label: "Languages", value: "8" },
    { label: "Databases", value: "4" },
    { label: "Dev Tools", value: "19" },
    { label: "Deploy CLIs", value: "3" },
    { label: "Total Packages", value: "77" },
  ];

  const iconColors = ["text-red-500", "text-purple-500", "text-orange-500", "text-sky-500", "text-emerald-500", "text-pink-500", "text-amber-500", "text-indigo-500"];

  return (
    <Layout>
      {/* Hero Banner */}
      <section className="relative min-h-screen py-24 px-4 bg-gradient-to-b from-accent/5 via-background to-background overflow-hidden">
        {/* Background logo watermark */}
        <img
          src="/omni-logo-pixel.svg"
          alt=""
          className="hero-bg-logo"
        />

        <div className="relative max-w-5xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-1.5 bg-accent/10 border border-accent/20 rounded-full">
            <span className="text-accent font-mono text-sm font-semibold">
              Omni Catalyst v1.0.1 — Android + Termux
            </span>
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold font-mono mb-6 text-foreground leading-tight tracking-tight">
            Your Dev Environment
            <br />
            <span className="text-accent">
              One Command Away
            </span>
          </h1>

          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Transform your Android phone into a full-featured development workstation.
            Install 28 AI agents, 8 programming languages, 4 databases, 19 dev tools,
            and 3 deployment CLIs — all in seconds.
          </p>

          <div className="flex gap-4 justify-center mb-16 flex-wrap">
            <Link href="/termux">
              <a>
                <Button size="lg" className="gap-2 font-semibold text-base">
                  Get Started <ArrowRight size={20} />
                </Button>
              </a>
            </Link>
            <Link href="/omni">
              <a>
                <Button size="lg" variant="outline" className="font-semibold text-base">
                  Explore Docs
                </Button>
              </a>
            </Link>
          </div>

          <div className="grid grid-cols-3 lg:grid-cols-6 gap-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-card border border-border/50 rounded-lg p-4 hover:border-accent/30 transition-colors"
              >
                <div className="text-2xl font-bold text-accent font-mono">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground mt-1 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Section */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-mono mb-3">
              Install in One Line
            </h2>
            <p className="text-muted-foreground">
              No dependencies. No bloat. Just pure development power.
            </p>
          </div>
          <div className="space-y-3">
            <CodeBlock
              code={`bash -c "$(curl -fsSL https://raw.githubusercontent.com/israel676767/omni/main/install.sh)"`}
              language="bash"
              title="quick install"
            />
            <p className="text-center text-xs text-muted-foreground">or</p>
            <CodeBlock
              code={`npm install -g omni-catalyst`}
              language="bash"
              title="npm install"
            />
            <p className="text-center text-xs text-muted-foreground">or</p>
            <CodeBlock
              code={`pnpm add -g omni-catalyst`}
              language="bash"
              title="pnpm install"
            />
          </div>
          <p className="text-center text-muted-foreground text-sm mt-6">
            Works on any Termux Android device. Takes less than 2 minutes.
          </p>
        </div>
      </section>

      {/* Why Omni Section */}
      <section className="py-20 px-4 bg-card/30 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold font-mono mb-3 text-center">
            Why Developers Choose Omni
          </h2>
          <p className="text-center text-muted-foreground mb-14">
            Built by developers, for developers who code on the go.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                href: "/omni",
                icon: <Zap size={22} />,
                title: "Modular Architecture",
                desc: "Install exactly what you need. Skip the rest. Mix and match tools without conflicts.",
              },
              {
                href: "/omni/ai",
                icon: <Code2 size={22} />,
                title: "28 AI Coding Agents",
                desc: "Claude, Gemini, OpenCode, Ollama, and more. Pre-configured and ready to use.",
              },
              {
                href: "/omni/editor",
                icon: <Terminal size={22} />,
                title: "Professional Editor",
                desc: "Neovim + NvChad with LSP support for 20+ languages. GitHub Copilot included.",
              },
              {
                href: "/omni",
                icon: <Cpu size={22} />,
                title: "Full Linux Stack",
                desc: "PostgreSQL, MongoDB, Node.js, Python, Go, Rust. Everything you need for real projects.",
              },
              {
                href: "/omni",
                icon: <Brain size={22} />,
                title: "Second Brain",
                desc: "Built-in memory system with AI search and graph visualization. Never lose an idea.",
              },
              {
                href: "/omni/deploy",
                icon: <Rocket size={22} />,
                title: "Deploy Directly",
                desc: "Vercel, Railway, Netlify CLIs pre-configured. Ship to production from your phone.",
              },
              {
                href: "/omni/doctor",
                icon: <Stethoscope size={22} />,
                title: "omni doctor",
                desc: "Diagnose your entire environment with 20 automated checks and one-command fixes.",
              },
              {
                href: "/omni/show",
                icon: <Eye size={22} />,
                title: "omni show",
                desc: "Browse documentation for every tool and module without leaving the terminal.",
              },
              {
                href: "/omni",
                icon: <Mic size={22} />,
                title: "omni voice",
                desc: "Talk to your AI agents using voice commands. Hands-free coding on the go.",
              },
              {
                href: "/omni",
                icon: <Database size={22} />,
                title: "omni pg",
                desc: "Manage PostgreSQL databases: init, start, stop, shell — all from one command.",
              },
              {
                href: "/omni",
                icon: <Puzzle size={22} />,
                title: "omni init",
                desc: "Scaffold Next.js, Express, and other project templates in seconds.",
              },
              {
                href: "/omni",
                icon: <Shield size={22} />,
                title: "omni env",
                desc: "Manage API keys and environment variables securely. Never hardcode secrets.",
              },
            ].map((feature, i) => (
              <Link key={i} href={feature.href}>
                <a className="block bg-background border border-border rounded-lg p-6 hover:border-accent/30 transition-colors cursor-pointer">
                  <div className={`mb-3 ${iconColors[i % iconColors.length]}`}>{feature.icon}</div>
                  <h3 className="text-base font-bold font-mono mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.desc}
                  </p>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Start Section */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold font-mono mb-12 text-center">
            Quick Start
          </h2>

          <div className="space-y-8">
            {[
              {
                step: "1",
                title: "Download Termux",
                desc: "Get the Termux app from GitHub or F-Droid.",
              },
              {
                step: "2",
                title: "Run the Installer",
                desc: "Paste the one-liner above and let Omni set everything up.",
              },
              {
                step: "3",
                title: "Choose Your Tools",
                desc: "Use 'omni install' to add AI agents, databases, editors, and more.",
              },
              {
                step: "4",
                title: "Start Coding",
                desc: "Open Neovim, connect to your database, and build real projects.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center font-bold text-accent font-mono text-sm">
                  {item.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-bold font-mono mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-card/50 border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold font-mono mb-4">
            Ready to Code on Your Phone?
          </h2>
          <p className="text-muted-foreground mb-8">
            Join thousands of developers building real applications with Omni.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/termux">
              <a>
                <Button size="lg" className="gap-2 font-semibold">
                  Get Started Now <ArrowRight size={20} />
                </Button>
              </a>
            </Link>
            <a
              href="https://github.com/israel676767/omni"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="outline" className="font-semibold">
                View on GitHub
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
