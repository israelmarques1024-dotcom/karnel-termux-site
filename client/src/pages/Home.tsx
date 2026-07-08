import { useState, useEffect } from "react";
import { Link } from "wouter";
import { ArrowRight, Zap, Code2, Cpu, Terminal, Brain, Rocket, Stethoscope, Eye, Mic, Database, Puzzle, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import CodeBlock from "@/components/CodeBlock";
import SupportProject from "@/components/SupportProject";

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

export default function Home() {
  const [p, setP] = useState(0);

  useEffect(() => {
    const DISTANCE = 700;
    let raf: number | null = null;
    const onScroll = () => {
      if (raf !== null) return;
      raf = requestAnimationFrame(() => {
        setP(Math.min(window.scrollY / DISTANCE, 1));
        raf = null;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf !== null) cancelAnimationFrame(raf);
    };
  }, []);


  const fg = `rgb(${lerp(25, 235, p) | 0}, ${lerp(25, 235, p) | 0}, ${lerp(25, 235, p) | 0})`;
  const accent = `rgb(${lerp(160, 235, p) | 0}, ${lerp(35, 85, p) | 0}, ${lerp(30, 75, p) | 0})`;
  const muted = `rgb(${lerp(90, 155, p) | 0}, ${lerp(90, 155, p) | 0}, ${lerp(95, 160, p) | 0})`;

  const stats = [
    { label: "AI Agents", value: "28" },
    { label: "Languages", value: "7" },
    { label: "Databases", value: "4" },
    { label: "Dev Tools", value: "19" },
    { label: "Deploy CLIs", value: "3" },
    { label: "Total Packages", value: "88" },
  ];

  const iconColors = ["text-red-500", "text-purple-500", "text-orange-500", "text-sky-500", "text-emerald-500", "text-pink-500", "text-amber-500", "text-indigo-500"];

  const faqs = [
    { q: "Is it free?", a: "Yes! Omni is 100% free and open source (MIT)." },
    { q: "Requires root?", a: "No. Omni works on any Android with Termux, no root needed." },
    { q: "Works on any Android?", a: "Yes, Android 11+ recommended. Devices with 4GB+ RAM have better performance." },
    { q: "Is Omni open source?", a: "Yes! Omni is open source. In the future I plan to add ads similar to freebuff, but for now it's supported only through Pix donations." },
    { q: "Need internet?", a: "Yes, to install packages. After installation, most tools work offline." },
    { q: "Can use without Linux knowledge?", a: "Yes! Omni is designed to be simple. Portuguese commands and integrated assistant." },
  ];

  return (
    <Layout>
      {/* Support Project */}
      <SupportProject />

      {/* Hero Banner */}
      <section className="relative min-h-screen py-16 md:py-24 px-4 overflow-hidden">
        {/* Banner background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none z-0"
          style={{ backgroundImage: "url(/omni-banner.svg)" }}
        />


        <div className="relative max-w-5xl mx-auto text-center z-10">

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-mono mb-6 leading-tight tracking-tight" style={{ color: fg }}>
            Your Dev Environment
            <br />
            <span style={{ color: accent }}>
              In One Command
            </span>
          </h1>

          <p className="text-lg mb-10 max-w-2xl mx-auto leading-relaxed" style={{ color: muted }}>
            Transform your Android into a complete development station.
            Install 28 AI agents, 7 languages, 4 databases, 19 tools
            and 3 deploy CLIs — in seconds.
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

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg p-4 transition-colors"
                style={{
                  backgroundColor: p < 1 ? `rgba(255,255,255,${0.8 * (1 - p)})` : undefined,
                  border: p < 1 ? `1px solid rgba(0,0,0,${0.1 * (1 - p)})` : undefined,
                }}
              >
                <div className="text-2xl font-bold font-mono" style={{ color: accent }}>
                  {stat.value}
                </div>
                <div className="text-xs mt-1 font-medium" style={{ color: muted }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation */}
      <section className="py-16 md:py-20 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl font-bold font-mono mb-3">
              Install In One Line
            </h2>
            <p className="text-muted-foreground">
              No dependencies. No bloat. Pure development power.
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
            Works on any Termux Android. Takes less than 2 minutes.
          </p>
        </div>
      </section>

      {/* Why Omni */}
      <section className="py-16 md:py-20 px-4 bg-card/30 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold font-mono mb-3 text-center">
            Why Developers Choose Omni
          </h2>
          <p className="text-center text-muted-foreground mb-14">
            Built by developers, for developers coding anywhere.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                href: "/omni",
                icon: <Zap size={22} />,
                title: "Modular Architecture",
                desc: "Install only what you need. No tool conflicts.",
              },
              {
                href: "/omni/ai",
                icon: <Code2 size={22} />,
                title: "28 AI Agents",
                desc: "Claude, Gemini, OpenCode, Ollama and more. Pre-configured.",
              },
              {
                href: "/omni/editor",
                icon: <Terminal size={22} />,
                title: "VS Code Editor",
                desc: "code-server (VS Code in browser) for 20+ languages. Copilot included.",
              },
              {
                href: "/omni/linux",
                icon: <Cpu size={22} />,
                title: "Linux Stack",
                desc: "PostgreSQL, MongoDB, Node.js, Python, Go, Rust. Everything you need.",
              },
              {
                href: "/omni/brain",
                icon: <Brain size={22} />,
                title: "Second Brain",
                desc: "Integrated memory with AI search and idea graph.",
              },
              {
                href: "/omni/deploy",
                icon: <Rocket size={22} />,
                title: "Direct Deploy",
                desc: "Vercel, Railway, Netlify. Deploy from your phone.",
              },
              {
                href: "/omni/doctor",
                icon: <Stethoscope size={22} />,
                title: "omni doctor",
                desc: "Diagnose your environment with 20 automatic checks.",
              },
              {
                href: "/omni/show",
                icon: <Eye size={22} />,
                title: "omni show",
                desc: "View any tool documentation without leaving terminal.",
              },
              {
                href: "/omni/voice",
                icon: <Mic size={22} />,
                title: "omni voice",
                desc: "Talk to your AI agents. Hands-free coding.",
              },
              {
                href: "/omni/pg",
                icon: <Database size={22} />,
                title: "omni pg",
                desc: "Manage PostgreSQL: init, start, stop, shell — one command.",
              },
              {
                href: "/omni/init",
                icon: <Puzzle size={22} />,
                title: "omni init",
                desc: "Create Next.js, Express and other projects in seconds.",
              },
              {
                href: "/omni/env",
                icon: <Shield size={22} />,
                title: "omni env",
                desc: "Manage API keys securely. Never hardcode secrets.",
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

      {/* FAQ */}
      <section className="py-16 md:py-20 px-4 bg-background border-t border-border">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold font-mono mb-3 text-center">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-muted-foreground mb-14">
            Get your questions answered about Omni Catalyst.
          </p>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-card border border-border rounded-lg group open:border-accent/30 transition-colors">
                <summary className="px-6 py-4 font-mono font-semibold text-sm cursor-pointer list-none flex items-center justify-between gap-4">
                  <span>{faq.q}</span>
                  <ArrowRight size={14} className="shrink-0 transition-transform duration-200 group-open:rotate-90 text-accent" />
                </summary>
                <div className="px-6 pb-4 text-sm text-muted-foreground border-t border-border pt-3">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>

          {/* GitHub Star Button */}
          <div className="text-center mt-12">
            <a
              href="https://github.com/israel676767/omni"
              target="_blank"
              rel="noopener noreferrer"
              className="star-btn inline-flex items-center gap-2 sm:gap-3 px-5 sm:px-8 py-3 sm:py-4 rounded-xl font-bold font-mono text-sm sm:text-base transition-all duration-300"
            >
              <svg viewBox="0 0 16 16" className="w-6 h-6" fill="currentColor">
                <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25z" />
              </svg>
              Star on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold font-mono mb-12 text-center">
            Quick Start
          </h2>

          <div className="space-y-8">
            {[
              {
                step: "1",
                title: "Install Termux",
                desc: "Install Termux from GitHub or F-Droid.",
              },
              {
                step: "2",
                title: "Run Installer",
                desc: "Paste the install command and let Omni configure everything.",
              },
              {
                step: "3",
                title: "Choose Your Tools",
                desc: "Use 'omni install' to add AI agents, databases, editors and more.",
              },
              {
                step: "4",
                title: "Start Coding",
                desc: "Open code-server, connect to database and build real projects.",
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

      {/* CTA */}
      <section className="py-20 px-4 bg-card/50 border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold font-mono mb-4">
            Ready to Code on Your Phone?
          </h2>
          <p className="text-muted-foreground mb-8">
            Join thousands of developers building real apps with Omni.
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