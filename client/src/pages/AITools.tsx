import CodeBlock from "@/components/CodeBlock";
import { AnimatedSection } from "@/components/AnimatedSection";

const aiTools = [
  { name: "Cline CLI", bin: "cline", flag: "--cline", desc: "AI coding assistant for terminal" },
  { name: "Qwen Code", bin: "qwen", flag: "--qwen-code", desc: "Alibaba's code generation model" },
  { name: "Gemini CLI", bin: "gemini", flag: "--gemini-cli", desc: "Google Gemini in your terminal" },
  { name: "Claude Code", bin: "claude", flag: "--claude-code", desc: "Anthropic's Claude for coding" },
  { name: "Mistral Vibe", bin: "vibe", flag: "--mistral-vibe", desc: "Mistral AI coding agent" },
  { name: "OpenClaude", bin: "openclaude", flag: "--openclaude", desc: "Open-source Claude client" },
  { name: "OpenClaw", bin: "openclaw", flag: "--openclaw", desc: "Claude-powered dev tools" },
  { name: "Ollama", bin: "ollama", flag: "--ollama", desc: "Run LLMs locally on device" },
  { name: "Codex CLI", bin: "codex", flag: "--codex", desc: "OpenAI Codex for terminal" },
  { name: "OpenCode", bin: "opencode", flag: "--opencode", desc: "Terminal AI coding agent" },
  { name: "MiMoCode", bin: "mimo", flag: "--mimocode", desc: "Mistral-powered code assistant" },
  { name: "Engram", bin: "engram", flag: "--engram", desc: "Persistent memory for AI agents" },
  { name: "CodeGraph", bin: "codegraph", flag: "--codegraph", desc: "Code graph navigation tool" },
  { name: "Pi Coding Agent", bin: "pi", flag: "--pi", desc: "Privacy-first coding assistant" },
  { name: "Antigravity CLI", bin: "agy", flag: "--antigravity-cli", desc: "Agentic coding workflow tool" },
  { name: "Minimax CLI", bin: "mmx", flag: "--minimax-cli", desc: "Minimax AI coding agent" },
  { name: "Gentle AI", bin: "gentle-ai", flag: "--gentle-ai", desc: "Lightweight AI assistant for Termux" },
  { name: "GGA", bin: "gga", flag: "--gga", desc: "General-purpose AI agent" },
  { name: "Hermes Agent", bin: "hermes", flag: "--hermes-agent", desc: "Fast agent with tool execution" },
  { name: "Kimi Code", bin: "kimi", flag: "--kimi-code", desc: "Moonshot AI coding assistant" },
  { name: "Command Code", bin: "command-code", flag: "--command-code", desc: "Terminal-native AI coder" },
  { name: "Freebuff", bin: "freebuff", flag: "--freebuff", desc: "AI buffer manager for developers" },
  { name: "Kilo Code CLI", bin: "kilocode", flag: "--kilocode-cli", desc: "Multi-model AI coding agent" },
  { name: "Kiro CLI", bin: "kiro", flag: "--kiro", desc: "Fast iterative coding agent" },
  { name: "Crush CLI", bin: "crush", flag: "--crush", desc: "Context-aware code assistant" },
  { name: "Odysseus", bin: "odysseus", flag: "--odysseus", desc: "Long-context AI coding agent" },
  { name: "Kimchi CLI", bin: "kimchi", flag: "--kimchi-code", desc: "Korean AI coding tool" },
  { name: "omniRoute", bin: "omni-route", flag: "--omni-route", desc: "AI gateway routing proxy" },
  { name: "Context7", bin: "ctx7", flag: "--ctx7", desc: "Context manager for large codebases" },
  { name: "OpenSpec", bin: "openspec", flag: "--openspec", desc: "Open-source spec generator" },
];

export default function AITools() {
  return (
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <h1 className="text-4xl font-bold font-mono mb-4">AI Development Tools</h1>
            <p className="text-lg text-muted-foreground mb-8">
              AI coding assistants and tools adapted for Termux. Boost your
              productivity with code generation, debugging, and more.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="card-hover bg-card border border-accent/50 rounded-lg p-6 mb-12">
              <h3 className="font-bold font-mono mb-4">Quick Install</h3>
              <CodeBlock code={`karnel install ai`} language="bash" title="terminal" />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <h2 className="text-2xl font-bold font-mono mb-6">Available AI Tools</h2>
            <p className="text-muted-foreground mb-8">{aiTools.length} AI assistants and tools — exact list from <code className="text-accent">karnel list ai</code></p>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <div className="card-hover bg-card border border-border rounded-lg overflow-hidden mb-12">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border bg-secondary/30">
                      <th className="text-left py-3 px-4 font-mono">Tool</th>
                      <th className="text-left py-3 px-4 font-mono hidden lg:table-cell">Description</th>
                      <th className="text-left py-3 px-4 font-mono">Flag</th>
                      <th className="text-left py-3 px-4 font-mono hidden md:table-cell">Binary</th>
                      <th className="text-left py-3 px-4 font-mono">Install</th>
                    </tr>
                  </thead>
                  <tbody>
                    {aiTools.map((tool, i) => (
                      <tr key={i} className="border-b border-border hover:bg-accent/5 transition-colors">
                        <td className="py-3 px-4 font-mono font-bold text-xs sm:text-sm">{tool.name}</td>
                        <td className="py-3 px-4 text-muted-foreground text-xs hidden lg:table-cell max-w-[200px]">{tool.desc}</td>
                        <td className="py-3 px-4 text-accent font-mono text-xs">{tool.flag}</td>
                        <td className="py-3 px-4 font-mono text-xs hidden md:table-cell">{tool.bin}</td>
                        <td className="py-3 px-4">
                          <span className="inline md:hidden font-mono text-xs text-accent">karnel install ai {tool.flag}</span>
                          <span className="hidden md:inline">
                            <CodeBlock code={`karnel install ai ${tool.flag}`} language="bash" />
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
  );
}
