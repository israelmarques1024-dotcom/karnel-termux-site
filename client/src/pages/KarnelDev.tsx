import CodeBlock from "@/components/CodeBlock";
import { AnimatedSection } from "@/components/AnimatedSection";

const tools = [
  { name: "GitHub CLI", flag: "--gh", desc: "Manage GitHub from terminal" },
  { name: "Wget", flag: "--wget", desc: "Network downloader" },
  { name: "Curl", flag: "--curl", desc: "HTTP client" },
  { name: "LSD", flag: "--lsd", desc: "Modern ls with icons" },
  { name: "Bat", flag: "--bat", desc: "Modern cat with syntax highlight" },
  { name: "Proot", flag: "--proot", desc: "Isolated Linux environment without root" },
  { name: "Ncurses Utils", flag: "--ncurses", desc: "Terminal utilities" },
  { name: "Tmate", flag: "--tmate", desc: "Terminal sharing" },
  { name: "Cloudflared", flag: "--cloudflared", desc: "Cloudflare tunnel" },
  { name: "Translate Shell", flag: "--translate", desc: "Terminal translator" },
  { name: "html2text", flag: "--html2text", desc: "Convert HTML to text" },
  { name: "jq", flag: "--jq", desc: "JSON processor for terminal" },
  { name: "bc", flag: "--bc", desc: "Precision calculator" },
  { name: "Tree", flag: "--tree", desc: "Display directory tree" },
  { name: "Fzf", flag: "--fzf", desc: "Fuzzy file finder" },
  { name: "ImageMagick", flag: "--imagemagick", desc: "Image editing in terminal" },
  { name: "Shfmt", flag: "--shfmt", desc: "Shell script formatter" },
  { name: "Make", flag: "--make", desc: "Build system" },
  { name: "Udocker", flag: "--udocker", desc: "Rootless containers" },
  { name: "Snyk", flag: "--snyk", desc: "Security scanning tool" },
  { name: "Httptmux", flag: "--httptmux", desc: "HTTP traffic sharing via tmux" },
  { name: "Zork", flag: "--zork", desc: "Zork game for terminal" },
  { name: "OpenSSH", flag: "--openssh", desc: "Secure shell client and server" },
  { name: "Tmux", flag: "--tmux", desc: "Terminal multiplexer" },
];

export default function KarnelDev() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h1 className="text-4xl font-bold font-mono mb-4">Development Tools</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Essential utilities for daily development in Termux.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="card-hover bg-card border border-accent/50 rounded-lg p-6 mb-12">
            <h3 className="font-bold font-mono mb-4">Quick Install</h3>
            <CodeBlock code="karnel install dev" language="bash" title="terminal" />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <h2 className="text-2xl font-bold font-mono mb-6">Available Tools</h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {tools.map((tool, i) => (
            <AnimatedSection key={i} delay={300 + i * 40}>
              <div className="card-hover bg-card border border-border rounded-lg p-6">
                <h3 className="font-bold font-mono mb-2">{tool.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{tool.desc}</p>
                <CodeBlock code={`karnel install dev ${tool.flag}`} language="bash" />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
