import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import {
  ArrowRight, Zap, Code2, Cpu, Terminal, Brain, Rocket,
  Stethoscope, Eye, Mic, Database, Puzzle, Shield, Check
} from "lucide-react";
import { RiStarLine, RiFlashlightFill } from "@remixicon/react";
import CodeBlock from "@/components/CodeBlock";
import SupportProject from "@/components/SupportProject";
import { AnimatedSection } from "@/components/AnimatedSection";
import { useInView } from "@/hooks/useInView";

const iconColors = [
  "text-red-400", "text-purple-400", "text-orange-400", "text-sky-400",
  "text-emerald-400", "text-pink-400", "text-amber-400", "text-indigo-400",
];

const stats = [
  { label: "AI Agents", value: 30, suffix: "+" },
  { label: "Languages", value: 7 },
  { label: "Databases", value: 4 },
  { label: "Dev Tools", value: 19 },
  { label: "Deploy CLIs", value: 3 },
  { label: "Total Packages", value: 88, suffix: "+" },
];

const installOptions = [
  { name: "curl", code: `bash -c "$(curl -fsSL https://raw.githubusercontent.com/israel676767/omni/main/install.sh)"` },
  { name: "npm", code: "npm install -g omni-catalyst" },
  { name: "pnpm", code: "pnpm add -g omni-catalyst" },
];

const features = [
  { href: "/omni", icon: <Zap size={22} />, title: "Modular Architecture", desc: "Install only what you need. No tool conflicts." },
  { href: "/omni/ai", icon: <Code2 size={22} />, title: "30 AI Agents", desc: "Claude, Gemini, OpenCode, Ollama and more. Pre-configured." },
  { href: "/omni/editor", icon: <Terminal size={22} />, title: "VS Code Editor", desc: "code-server (VS Code in browser) for 20+ languages. Copilot included." },
  { href: "/omni/linux", icon: <Cpu size={22} />, title: "Linux Stack", desc: "PostgreSQL, MongoDB, Node.js, Python, Go, Rust. Everything you need." },
  { href: "/omni/brain", icon: <Brain size={22} />, title: "Second Brain", desc: "Integrated memory with AI search and idea graph." },
  { href: "/omni/deploy", icon: <Rocket size={22} />, title: "Direct Deploy", desc: "Vercel, Railway, Netlify. Deploy from your phone." },
  { href: "/omni/doctor", icon: <Stethoscope size={22} />, title: "omni doctor", desc: "Diagnose your environment with 30+ automatic checks." },
  { href: "/omni/show", icon: <Eye size={22} />, title: "omni show", desc: "View any tool documentation without leaving terminal." },
  { href: "/omni/voice", icon: <Mic size={22} />, title: "omni voice", desc: "Talk to your AI agents. Hands-free coding." },
  { href: "/omni/pg", icon: <Database size={22} />, title: "omni pg", desc: "Manage PostgreSQL: init, start, stop, shell — one command." },
  { href: "/omni/init", icon: <Puzzle size={22} />, title: "omni init", desc: "Create Next.js, Express and other projects in seconds." },
  { href: "/omni/env", icon: <Shield size={22} />, title: "omni env", desc: "Manage API keys securely. Never hardcode secrets." },
];

const faqs = [
  { q: "Is it free?", a: "Yes! Omni is 100% free and open source (MIT)." },
  { q: "Requires root?", a: "No. Omni works on any Android with Termux, no root needed." },
  { q: "Works on any Android?", a: "Yes, Android 11+ recommended. Devices with 4GB+ RAM have better performance." },
  { q: "Is Omni open source?", a: "Yes! Omni is open source. In the future I plan to add ads similar to freebuff, but for now it's supported only through Pix donations." },
  { q: "Need internet?", a: "Yes, to install packages. After installation, most tools work offline." },
  { q: "Can use without Linux knowledge?", a: "Yes! Omni is designed to be simple. Portuguese commands and integrated assistant." },
];

const steps = [
  { step: "1", title: "Install Termux", desc: "Install Termux from GitHub or F-Droid." },
  { step: "2", title: "Run Installer", desc: "Paste the install command and let Omni configure everything." },
  { step: "3", title: "Choose Your Tools", desc: "Use 'omni install' to add AI agents, databases, editors and more." },
  { step: "4", title: "Start Coding", desc: "Open code-server, connect to database and build real projects." },
];

function AnimatedStat({ label, value, suffix = "", delay = 0 }: { label: string; value: number; suffix?: string; delay?: number }) {
  const { ref, inView } = useInView({ threshold: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    const startTime = performance.now();
    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value]);

  return (
    <div
      ref={ref}
      className="rounded-xl border border-border bg-card/50 p-4 text-center transition-all duration-500 hover:border-accent/30 hover:bg-card/80 hover:shadow-lg hover:shadow-accent/5"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="text-2xl sm:text-3xl font-bold font-mono text-gradient-accent">
        {count}{suffix}
      </div>
      <div className="text-xs mt-1 font-medium text-muted-foreground">
        {label}
      </div>
    </div>
  );
}

export default function Home() {
  const [installTab, setInstallTab] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div>
      <SupportProject />

      {/* Hero */}
      <section className="relative min-h-[90dvh] flex items-center justify-center overflow-hidden px-4 py-24">
        <div className="absolute inset-0 bg-[url(/omni-banner.svg)] bg-cover bg-center bg-no-repeat opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background" />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <AnimatedSection animation="fade-in-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-xs font-medium text-accent mb-8 animate-float">
              <RiFlashlightFill size={14} />
              Open Source — MIT License
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-up" delay={100}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] tracking-tight">
              Your Dev Environment
              <br />
              <span className="text-gradient inline-block animate-gradient">
                In One Command
              </span>
            </h1>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-up" delay={200}>
            <p className="text-base sm:text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Transform your Android into a complete development station.
              Install <span className="text-accent font-semibold">30 AI agents</span>,{" "}
              <span className="text-accent font-semibold">7 languages</span>,{" "}
              <span className="text-accent font-semibold">4 databases</span>,{" "}
              <span className="text-accent font-semibold">19 tools</span>{" "}
              and <span className="text-accent font-semibold">3 deploy CLIs</span> — in seconds.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-up" delay={300}>
            <div className="flex gap-4 justify-center mb-16 flex-wrap">
              <Link
                href="/termux"
                className="group inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-lg shadow-accent/25 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-accent/40 active:scale-95"
              >
                Get Started
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/omni"
                className="group inline-flex items-center gap-2 rounded-xl border border-border bg-card/50 px-6 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:border-accent/30 hover:bg-accent/5 hover:scale-105 active:scale-95"
              >
                Explore Docs
              </Link>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-up" delay={400}>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {stats.map((stat, i) => (
                <AnimatedStat key={stat.label} {...stat} delay={i * 80} />
              ))}
            </div>
          </AnimatedSection>
        </div>

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pb-8 text-muted-foreground animate-float">
          <span className="text-xs font-medium tracking-wider uppercase">Scroll</span>
          <div className="h-8 w-[1px] bg-gradient-to-b from-accent/50 to-transparent" />
        </div>
      </section>

      {/* Installation */}
      <section className="py-20 px-4 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">
              Install In <span className="text-gradient-accent">One Line</span>
            </h2>
            <p className="text-muted-foreground">
              No dependencies. No bloat. Pure development power.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="flex justify-center gap-1 mb-6">
              {installOptions.map((opt, i) => (
                <button
                  key={opt.name}
                  onClick={() => setInstallTab(i)}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    installTab === i
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent/5"
                  }`}
                >
                  {opt.name}
                </button>
              ))}
            </div>

            <div className="animate-fade-in" key={installTab}>
              <CodeBlock
                code={installOptions[installTab].code}
                language="bash"
                title={`${installOptions[installTab].name} install`}
              />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <p className="text-center text-muted-foreground text-sm mt-6">
              Works on any Termux Android. Takes less than 2 minutes.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-card/30 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">
              Why Developers Choose <span className="text-gradient-accent">Omni</span>
            </h2>
            <p className="text-muted-foreground">
              Built by developers, for developers coding anywhere.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <AnimatedSection key={i} delay={i * 60} animation="fade-in-up">
                  <Link
                    href={feature.href}
                    className="card-hover group block rounded-xl border border-border bg-card/30 p-6"
                  >
                    <div className={`mb-3 ${iconColors[i % iconColors.length]} transition-transform duration-300 group-hover:scale-110`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-base font-bold font-mono mb-2 group-hover:text-accent transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.desc}
                    </p>
                  </Link>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">
              Frequently Asked <span className="text-gradient-accent">Questions</span>
            </h2>
            <p className="text-muted-foreground">
              Get your questions answered about Omni Catalyst.
            </p>
          </AnimatedSection>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <div
                  className={`rounded-xl border bg-card/50 transition-all duration-300 ${
                    openFaq === i ? "border-accent/30 shadow-lg shadow-accent/5" : "border-border"
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left font-semibold text-sm"
                  >
                    <span>{faq.q}</span>
                    <ArrowRight
                      size={14}
                      className={`shrink-0 text-accent transition-transform duration-300 ${
                        openFaq === i ? "rotate-90" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openFaq === i ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-6 pb-4 text-sm text-muted-foreground border-t border-border pt-3">
                      {faq.a}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={500}>
            <div className="text-center mt-12">
              <a
                href="https://github.com/israel676767/omni"
                target="_blank"
                rel="noopener noreferrer"
                className="star-btn inline-flex items-center gap-2 sm:gap-3 px-5 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base"
              >
                <RiStarLine size={20} />
                Star on GitHub
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Quick Start */}
      <section className="py-20 px-4 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">
              Quick <span className="text-gradient-accent">Start</span>
            </h2>
            <p className="text-muted-foreground">
              Get coding on your phone in under 5 minutes.
            </p>
          </AnimatedSection>

          <div className="space-y-6">
            {steps.map((item, i) => (
              <AnimatedSection key={i} delay={i * 120}>
                <div className="group flex gap-5 sm:gap-8 items-start rounded-xl border border-border bg-card/30 p-5 transition-all duration-300 hover:border-accent/20 hover:bg-card/50">
                  <div className="relative flex shrink-0 items-center justify-center">
                    <div className="absolute inset-0 rounded-full bg-accent/20 blur-md transition-all duration-300 group-hover:blur-lg group-hover:bg-accent/30" />
                    <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-accent/20 border border-accent/30 font-bold text-accent font-mono text-sm">
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-1 pt-1.5">
                    <h3 className="text-base font-bold font-mono mb-1 group-hover:text-accent transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="hidden sm:flex flex-col items-center self-stretch pt-5">
                      <div className="h-full w-[1px] bg-gradient-to-b from-accent/20 to-transparent" />
                    </div>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 bg-card/50 border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection animation="scale-in">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-xs font-medium text-accent mb-6">
              <RiFlashlightFill size={14} />
              Start building today
            </div>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Ready to Code on Your <span className="text-gradient-accent">Phone</span>?
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <p className="text-muted-foreground mb-10 text-lg">
              Join thousands of developers building real apps with Omni.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                href="/termux"
                className="group inline-flex items-center gap-2 rounded-xl bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-lg shadow-accent/25 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-accent/40 active:scale-95 animate-pulse-glow"
              >
                Get Started Now
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <a
                href="https://github.com/israel676767/omni"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-xl border border-border bg-card/50 px-7 py-3.5 text-sm font-semibold text-foreground transition-all duration-300 hover:border-accent/30 hover:bg-accent/5 hover:scale-105 active:scale-95"
              >
                View on GitHub
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
