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
    { name: "Command Code", bin: "cmdc", flag: "--command-code" },
    { name: "Freebuff", bin: "freebuff", flag: "--freebuff" },
    { name: "Kiro CLI", bin: "kiro", flag: "--kiro-cli" },
    { name: "HeyGen CLI", bin: "heygen", flag: "--heygen" },
    { name: "Seedance CLI", bin: "seedance", flag: "--seedance" },
    { name: "Veo 3 SDK", bin: "veo3", flag: "--veo3" },
    { name: "Odysseus", bin: "odysseus", flag: "--odysseus" },
    { name: "Kimchi AI", bin: "kimchi", flag: "--kimchi-code" },
  ];

  return (
    <Layout>
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold font-mono mb-4">AI Development Tools</h1>
          <p className="text-lg text-muted-foreground mb-8">
            AI coding assistants and tools adapted for Termux. Boost your
            productivity with AI-powered code generation, debugging, and more.
          </p>

          <div className="bg-card border border-accent/50 rounded-lg p-6 mb-12">
            <h3 className="font-bold font-mono mb-4">Quick Install</h3>
            <CodeBlock
              code={`omni install ai`}
              language="bash"
              title="terminal"
            />
          </div>

          {/* AI Tools Grid */}
          <h2 className="text-2xl font-bold font-mono mb-6">Available AI Tools</h2>
          <p className="text-muted-foreground mb-8">{aiTools.length} AI coding assistants and tools — exact list from <code className="text-accent">omni list ai</code></p>

          <div className="bg-card border border-border rounded-lg overflow-hidden mb-12">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-secondary/30">
                    <th className="text-left py-3 px-4 font-mono">Tool</th>
                    <th className="text-left py-3 px-4 font-mono">Flag</th>
                    <th className="text-left py-3 px-4 font-mono">Command</th>
                    <th className="text-left py-3 px-4 font-mono">Install</th>
                  </tr>
                </thead>
                <tbody>
                  {aiTools.map((tool, i) => (
                    <tr key={i} className="border-b border-border hover:bg-secondary/20 transition-colors">
                      <td className="py-3 px-4 font-mono font-bold">{tool.name}</td>
                      <td className="py-3 px-4 text-accent font-mono text-xs">{tool.flag}</td>
                      <td className="py-3 px-4 font-mono text-xs">{tool.bin}</td>
                      <td className="py-3 px-4">
                        <CodeBlock code={`omni install ai ${tool.flag}`} language="bash" />
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
