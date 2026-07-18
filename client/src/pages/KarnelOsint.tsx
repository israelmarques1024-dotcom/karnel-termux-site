import { AnimatedSection } from "@/components/AnimatedSection";
import CodeBlock from "@/components/CodeBlock";
import {
  AlertTriangle,
  Bot,
  CheckCircle2,
  Database,
  ExternalLink,
  LockKeyhole,
  Network,
  Search,
  ShieldCheck,
} from "lucide-react";

const workflow = [
  {
    icon: Search,
    title: "Refine",
    desc: "Turn an investigation question into focused search terms.",
  },
  {
    icon: Network,
    title: "Search",
    desc: "Reach supported sources through the local Tor SOCKS proxy.",
  },
  {
    icon: ShieldCheck,
    title: "Filter",
    desc: "Reduce noise and keep relevant sources for review.",
  },
  {
    icon: Bot,
    title: "Analyze",
    desc: "Send selected context to the LLM provider you configured.",
  },
  {
    icon: Database,
    title: "Preserve",
    desc: "Save the report and follow-up context locally as JSON.",
  },
];

const commands = [
  [
    "karnel robin start",
    "Start Tor when needed and wait for a healthy local UI",
  ],
  ["karnel robin stop", "Stop only the managed Streamlit process"],
  [
    "karnel robin status",
    "Inspect source pin, Tor, Streamlit, config, and saved reports",
  ],
  ["karnel robin config", "Locate and protect provider configuration"],
  ["karnel robin doctor", "Run local checks without calling an LLM"],
  ["karnel robin doctor --network", "Also verify an HTTPS request through Tor"],
  ["karnel robin update", "Reconcile with Karnel's pinned, tested release"],
  ["karnel robin purge-data", "Explicitly delete config and investigations"],
];

const dataLocations = [
  ["Source", "$KARNEL_TOOLS/osint/robin/app"],
  ["Python environment", "$KARNEL_TOOLS/osint/robin/.venv"],
  ["Provider configuration", "$KARNEL_CONFIG/robin/.env"],
  ["Investigations", "$KARNEL_DATA/robin/investigations"],
  ["Runtime log", "$KARNEL_LOGS/robin.log"],
];

export default function KarnelOsint() {
  return (
    <section className="relative overflow-hidden px-4 py-12">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_50%_0%,oklch(0.55_0.2_15_/_0.14),transparent_65%)]" />
      <div className="relative mx-auto max-w-5xl">
        <AnimatedSection>
          <div className="mb-4 flex flex-wrap gap-2 font-mono text-xs">
            <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-accent">
              OSINT module
            </span>
            <span className="rounded-full border border-border bg-card px-3 py-1 text-muted-foreground">
              Robin v2.8 pinned
            </span>
            <span className="rounded-full border border-border bg-card px-3 py-1 text-muted-foreground">
              127.0.0.1 only
            </span>
          </div>
          <h1 className="mb-5 font-mono text-4xl font-bold sm:text-5xl">
            Robin OSINT
          </h1>
          <p className="mb-8 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            A controlled local workspace for lawful dark-web research. Karnel
            verifies Robin's source, routes searches through Tor, waits for a
            healthy Streamlit interface, and keeps provider secrets and
            investigations outside executable code.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="mb-10 border-l-4 border-amber-400 bg-amber-400/10 p-6 shadow-lg shadow-amber-950/10">
            <div className="mb-3 flex items-center gap-3 text-amber-300">
              <AlertTriangle size={22} />
              <h2 className="font-mono text-lg font-bold">
                Responsible use is mandatory
              </h2>
            </div>
            <div className="grid gap-3 text-sm leading-relaxed text-muted-foreground md:grid-cols-2">
              <p>
                Use Robin only for legal, authorized, and ethical
                investigations. Tor improves connection privacy but does not
                guarantee anonymity.
              </p>
              <p>
                Robin retrieves pages automatically. Never execute unknown
                files, expose port 8501, or submit credentials and unnecessary
                personal data.
              </p>
              <p>
                Queries, URLs, collected content, and summaries can be sent
                directly to your LLM provider outside Tor and may be retained by
                that provider.
              </p>
              <p>
                Investigations are stored locally in plain JSON. AI output can
                be inaccurate and must not be treated as verified evidence.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={150}>
          <div className="mb-12 rounded-xl border border-accent/40 bg-card/80 p-6 backdrop-blur">
            <h2 className="mb-4 font-mono text-xl font-bold">
              Verified quick start
            </h2>
            <CodeBlock
              code={`karnel install osint --robin
karnel robin config
karnel robin start
karnel robin doctor --network`}
              language="bash"
              title="terminal"
            />
            <p className="mt-4 text-sm text-muted-foreground">
              Open <code className="text-accent">http://127.0.0.1:8501</code>{" "}
              only after the CLI reports that the health endpoint is ready. The
              first start records a versioned responsible-use acknowledgement.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <h2 className="mb-6 font-mono text-2xl font-bold">
            Investigation pipeline
          </h2>
          <div className="mb-12 grid gap-4 md:grid-cols-5">
            {workflow.map(({ icon: Icon, title, desc }, index) => (
              <div
                key={title}
                className="relative rounded-lg border border-border bg-card p-5"
              >
                <span className="absolute right-3 top-2 font-mono text-xs text-muted-foreground/50">
                  0{index + 1}
                </span>
                <Icon className="mb-4 text-accent" size={22} />
                <h3 className="mb-2 font-mono font-bold">{title}</h3>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <div className="mb-12 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <AnimatedSection delay={250}>
            <div className="h-full rounded-xl border border-border bg-card p-6">
              <h2 className="mb-5 font-mono text-xl font-bold">
                Command reference
              </h2>
              <div className="divide-y divide-border">
                {commands.map(([command, description]) => (
                  <div
                    key={command}
                    className="grid gap-1 py-3 sm:grid-cols-[minmax(190px,auto)_1fr] sm:gap-4"
                  >
                    <code className="text-xs text-accent">{command}</code>
                    <span className="text-sm text-muted-foreground">
                      {description}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <div className="h-full rounded-xl border border-border bg-card p-6">
              <div className="mb-5 flex items-center gap-3">
                <LockKeyhole className="text-accent" size={22} />
                <h2 className="font-mono text-xl font-bold">Data boundaries</h2>
              </div>
              <div className="space-y-4">
                {dataLocations.map(([label, path]) => (
                  <div key={label}>
                    <p className="mb-1 text-xs uppercase tracking-wider text-muted-foreground">
                      {label}
                    </p>
                    <code className="break-all text-xs text-accent">
                      {path}
                    </code>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                Uninstall and reinstall preserve configuration and reports.
                Ordinary Karnel backups exclude Robin API keys and
                investigations. Permanent deletion requires an explicit purge.
              </p>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={350}>
          <div className="mb-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-border bg-card p-6">
              <h2 className="mb-4 font-mono text-xl font-bold">
                Provider configuration
              </h2>
              <CodeBlock
                code={`OPENAI_API_KEY=
ANTHROPIC_API_KEY=
GOOGLE_API_KEY=
OPENROUTER_API_KEY=
OPENROUTER_BASE_URL=https://openrouter.ai/api/v1
OLLAMA_BASE_URL=http://127.0.0.1:11434
LLAMA_CPP_BASE_URL=http://127.0.0.1:8080/v1
CUSTOM_API_BASE_URL=
CUSTOM_API_KEY=
CUSTOM_API_MODEL=`}
                language="bash"
                title=".env"
              />
              <p className="mt-4 text-sm text-muted-foreground">
                The doctor counts configured providers without displaying their
                values. The file is forced to mode 0600.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <h2 className="mb-4 font-mono text-xl font-bold">
                What Karnel verifies
              </h2>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {[
                  "Exact upstream v2.8 commit before activation",
                  "All Robin, LangChain, Streamlit, and native imports",
                  "A temporary loopback Streamlit health endpoint",
                  "PID start time, command identity, and working directory",
                  "Tor SOCKS readiness and optional external traffic",
                  "Private permissions and writable persistent storage",
                ].map(item => (
                  <li key={item} className="flex gap-3">
                    <CheckCircle2
                      className="mt-0.5 shrink-0 text-emerald-400"
                      size={17}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={400}>
          <div className="flex flex-col items-start justify-between gap-5 rounded-xl border border-accent/30 bg-accent/5 p-7 sm:flex-row sm:items-center">
            <div>
              <h2 className="mb-2 font-mono text-xl font-bold">
                Independent upstream project
              </h2>
              <p className="max-w-2xl text-sm text-muted-foreground">
                Robin is third-party MIT-licensed software. Karnel pins and
                integrates it but is not affiliated with its author or any LLM
                provider.
              </p>
            </div>
            <a
              href="https://github.com/apurvsinghgautam/robin"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-accent/40 px-4 py-2 font-mono text-sm text-accent transition-colors hover:bg-accent/10"
            >
              View source <ExternalLink size={15} />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
