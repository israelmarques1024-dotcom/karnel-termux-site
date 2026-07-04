import { Link } from "wouter";
import { ArrowRight, Zap, Code2, Cpu, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import CodeBlock from "@/components/CodeBlock";

export default function Home() {
  return (
    <Layout>
      {/* Epic Gem Banner */}
      <section
        className="relative py-32 px-4 overflow-hidden"
        style={{
          backgroundImage:
            "url('/omni-banner.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-background" />
        <div className="relative max-w-5xl mx-auto text-center">
            <div className="inline-block mb-6 px-4 py-2 bg-accent/20 border border-accent/50 rounded-full backdrop-blur-sm">
              <span className="text-accent font-mono text-sm font-semibold">
                ⚡ Omni Catalyst v4.7.0 — Android + Termux
              </span>
            </div>

          <h1 className="text-6xl lg:text-7xl font-bold font-mono mb-6 text-foreground leading-tight tracking-tight">
            Your Dev Environment
            <br />
            <span className="bg-gradient-to-r from-red-500 via-accent to-purple-500 bg-clip-text text-transparent animate-pulse">
              One Command Away
            </span>
          </h1>

          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed font-light">
            Transform your Android phone into a full-featured development workstation. 
            Install 26 AI agents, 8 programming languages, 4 databases, 19 dev tools, 
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
            <Link href="/core-termux">
              <a>
                <Button size="lg" variant="outline" className="font-semibold text-base">
                  Explore Docs
                </Button>
              </a>
            </Link>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-3 mt-16">
            {[
              { label: "AI Agents", value: "23", icon: "🤖" },
              { label: "Languages", value: "8", icon: "💻" },
              { label: "Databases", value: "4", icon: "🗄️" },
              { label: "Dev Tools", value: "19", icon: "🔧" },
              { label: "Deploy CLIs", value: "3", icon: "🚀" },
              { label: "Total Packages", value: "77", icon: "📦" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-card/60 backdrop-blur border border-border/50 rounded-lg p-4 hover:border-accent/50 transition-all duration-300 hover:bg-card/80"
              >
                <div className="text-2xl mb-1">{stat.icon}</div>
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
            <h2 className="text-4xl font-bold font-mono mb-4">
              Install in One Line
            </h2>
            <p className="text-muted-foreground text-lg">
              No dependencies. No bloat. Just pure development power.
            </p>
          </div>
          <CodeBlock
            code={`bash -c "$(curl -fsSL https://raw.githubusercontent.com/israel676767/omni/main/install.sh)"`}
            language="bash"
            title="terminal"
          />
          <p className="text-center text-muted-foreground text-sm mt-6">
            Works on any Termux Android device. Takes less than 2 minutes.
          </p>
        </div>
      </section>

      {/* Why Omni Section */}
      <section className="py-20 px-4 bg-card/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold font-mono mb-4 text-center">
            Why Developers Choose Omni
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            Built by developers, for developers who code on the go.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <Zap size={28} />,
                title: "Modular Architecture",
                desc: "Install exactly what you need. Skip the rest. Mix and match tools without conflicts.",
              },
              {
                icon: <Code2 size={28} />,
                title: "26 AI Coding Agents",
                desc: "Claude, Gemini, OpenCode, Ollama, and more. Pre-configured and ready to use.",
              },
              {
                icon: <Terminal size={28} />,
                title: "Professional Editor",
                desc: "Neovim + NvChad with LSP support for 20+ languages. GitHub Copilot included.",
              },
              {
                icon: <Cpu size={28} />,
                title: "Full Linux Stack",
                desc: "PostgreSQL, MongoDB, Node.js, Python, Go, Rust. Everything you need for real projects.",
              },
              {
                icon: "🧠",
                title: "Second Brain",
                desc: "Built-in memory system with AI search and graph visualization. Never lose an idea.",
              },
              {
                icon: "🚀",
                title: "Deploy Directly",
                desc: "Vercel, Railway, Netlify CLIs pre-configured. Ship to production from your phone.",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-background border border-border rounded-lg p-8 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
              >
                <div className="text-accent mb-4 text-3xl">{feature.icon}</div>
                <h3 className="text-lg font-bold font-mono mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Start Section */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold font-mono mb-12 text-center">
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
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center font-bold text-accent-foreground">
                  {item.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold font-mono mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-card/50 border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold font-mono mb-6">
            Ready to Code on Your Phone?
          </h2>
          <p className="text-muted-foreground mb-10 text-lg">
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
