import Layout from "@/components/Layout";
import CodeBlock from "@/components/CodeBlock";

export default function AITools() {
  const aiTools = [
    { name: "Qwen Code", bin: "qwen", flag: "--qwen-code" },
    { name: "Gemini CLI", bin: "gemini", flag: "--gemini-cli" },
    { name: "Claude Code", bin: "claude", flag: "--claude-code" },
    { name: "Mistral Vibe", bin: "vibe", flag: "--mistral-vibe" },
    { name: "OpenClaude", bin: "openclaude", flag: "--openclaude" },
    { name: "OpenClaw", bin: "openclaw", flag: "--openclaw" },
    { name: "Ollama", bin: "ollama", flag: "--ollama" },
    { name: "Codex CLI", bin: "codex", flag: "--codex" },
    { name: "OpenCode", bin: "opencode", flag: "--opencode" },
    { name: "MiMoCode", bin: "mimo", flag: "--mimocode" },
    { name: "Engram", bin: "engram", flag: "--engram" },
    { name: "CodeGraph", bin: "codegraph", flag: "--codegraph" },
    { name: "Pi Coding Agent", bin: "pi", flag: "--pi" },
    { name: "Antigravity CLI", bin: "agy", flag: "--antigravity-cli" },
    { name: "Minimax CLI", bin: "mmx", flag: "--minimax-cli" },
    { name: "Gentle AI", bin: "gentle-ai", flag: "--gentle-ai" },
    { name: "GGA", bin: "gga", flag: "--gga" },
    { name: "Hermes Agent", bin: "hermes", flag: "--hermes-agent" },
    { name: "Kimi Code", bin: "kimi", flag: "--kimi-code" },
    { name: "Command Code", bin: "command-code", flag: "--command-code" },
    { name: "Freebuff", bin: "freebuff", flag: "--freebuff" },
    { name: "Kilo Code CLI", bin: "kilo", flag: "--kilocode-cli" },
    { name: "Kiro CLI", bin: "kiro", flag: "--kiro-cli" },
    { name: "HeyGen CLI", bin: "heygen", flag: "--heygen" },
    { name: "Seedance CLI", bin: "seedance", flag: "--seedance" },
    { name: "Veo 3 SDK", bin: "veo3", flag: "--veo3" },
    { name: "Odysseus", bin: "odysseus", flag: "--odysseus" },
    { name: "Kimchi CLI", bin: "kimchi", flag: "--kimchi-code" },
  ];

  return (
    <Layout>
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold font-mono mb-4">Ferramentas de Desenvolvimento com IA</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Assistentes de codificação com IA e ferramentas adaptadas para o Termux. Aumente sua
            produtividade com geração de código, depuração e muito mais com IA.
          </p>

          <div className="bg-card border border-accent/50 rounded-lg p-6 mb-12">
            <h3 className="font-bold font-mono mb-4">Instalação Rápida</h3>
            <CodeBlock
              code={`omni install ai`}
              language="bash"
              title="terminal"
            />
          </div>

          {/* AI Tools Grid */}
          <h2 className="text-2xl font-bold font-mono mb-6">Ferramentas de IA Disponíveis</h2>
          <p className="text-muted-foreground mb-8">{aiTools.length} assistentes e ferramentas de IA — lista exata do <code className="text-accent">omni list ai</code></p>

          <div className="bg-card border border-border rounded-lg overflow-hidden mb-12">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-secondary/30">
                    <th className="text-left py-3 px-4 font-mono">Ferramenta</th>
                    <th className="text-left py-3 px-4 font-mono">Flag</th>
                    <th className="text-left py-3 px-4 font-mono hidden md:table-cell">Comando</th>
                    <th className="text-left py-3 px-4 font-mono">Instalar</th>
                  </tr>
                </thead>
                <tbody>
                  {aiTools.map((tool, i) => (
                    <tr key={i} className="border-b border-border hover:bg-secondary/20 transition-colors">
                      <td className="py-3 px-4 font-mono font-bold text-xs sm:text-sm">{tool.name}</td>
                      <td className="py-3 px-4 text-accent font-mono text-xs">{tool.flag}</td>
                      <td className="py-3 px-4 font-mono text-xs hidden md:table-cell">{tool.bin}</td>
                      <td className="py-3 px-4">
                        <span className="inline md:hidden font-mono text-xs text-accent">omni install ai {tool.flag}</span>
                        <span className="hidden md:inline">
                          <CodeBlock code={`omni install ai ${tool.flag}`} language="bash" />
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
