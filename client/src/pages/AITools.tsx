import Layout from "@/components/Layout";
import CodeBlock from "@/components/CodeBlock";

export default function AITools() {
  const aiTools = [
    { name: "Qwen Code", desc: "Alibaba's AI coding assistant", cmd: "omni install ai --qwen-code" },
    { name: "Gemini CLI", desc: "Google's AI assistant with Gemini", cmd: "omni install ai --gemini-cli" },
    { name: "Claude Code", desc: "Anthropic's CLI tool with Claude AI", cmd: "omni install ai --claude-code" },
    { name: "Mistral Vibe", desc: "Mistral's command-line coding assistant", cmd: "omni install ai --mistral-vibe" },
    { name: "OpenClaude", desc: "Open source Claude Code alternative", cmd: "omni install ai --openclaude" },
    { name: "OpenClaw", desc: "Personal AI Assistant", cmd: "omni install ai --openclaw" },
    { name: "OpenCode", desc: "Open-source agent for terminal coding", cmd: "omni install ai --opencode" },
    { name: "Codex CLI", desc: "OpenAI's coding agent for local execution", cmd: "omni install ai --codex" },
    { name: "Kilo Code CLI", desc: "Open source coding agent for building with AI", cmd: "omni install ai --kilocode-cli" },
    { name: "Kimchi", desc: "Terminal coding agent with multi-model orchestration", cmd: "omni install ai --kimchi" },
    { name: "Ollama", desc: "Run open-source LLMs locally on Termux", cmd: "omni install ai --ollama" },
    { name: "Engram", desc: "Persistent memory system for coding agents", cmd: "omni install ai --engram" },
    { name: "CodeGraph", desc: "Analyzes codebase structure and dependencies", cmd: "omni install ai --codegraph" },
    { name: "Pi", desc: "Minimal terminal coding harness", cmd: "omni install ai --pi" },
    { name: "Antigravity CLI", desc: "Lightweight terminal-first surface for Antigravity agents", cmd: "omni install ai --antigravity-cli" },
    { name: "MiniMax CLI", desc: "Generate text, images, video, speech, and music from terminal", cmd: "omni install ai --minimax-cli" },
    { name: "Gentle AI", desc: "Ecosystem for AI coding agents", cmd: "omni install ai --gentle-ai" },
    { name: "GGA", desc: "Provider-agnostic code review using AI", cmd: "omni install ai --gga" },
    { name: "Hermes Agent", desc: "Self-improving AI agent by Nous Research", cmd: "omni install ai --hermes-agent" },
    { name: "MiMo Code", desc: "Xiaomi's AI coding agent", cmd: "omni install ai --mimocode" },
    { name: "Kimi Code", desc: "AI coding agent that reads and edits code", cmd: "omni install ai --kimi-code" },
    { name: "Command Code", desc: "Coding agent that learns your coding style", cmd: "omni install ai --command-code" },
    { name: "Freebuff", desc: "100% free coding agent, no subscription", cmd: "omni install ai --freebuff" },
  ];

  const ollamaModels = [
    { name: "llama3", size: "4.7GB", desc: "Meta's latest 8B model, optimized for dialogue and coding" },
    { name: "qwen2.5-coder", size: "4.7GB", desc: "State-of-the-art coding model from Alibaba" },
    { name: "codegemma", size: "4.8GB", desc: "Google's lightweight model for code generation" },
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
          <p className="text-muted-foreground mb-8">{aiTools.length} AI coding assistants and tools</p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {aiTools.map((tool, i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-lg p-6 hover:border-accent/50 transition-colors"
              >
                <h3 className="font-bold font-mono mb-2">{tool.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{tool.desc}</p>
                <CodeBlock code={tool.cmd} language="bash" />
              </div>
            ))}
          </div>

          {/* Ollama Section */}
          <div className="bg-card border border-border rounded-lg p-8">
            <h2 className="text-2xl font-bold font-mono mb-6">Ollama - Run LLMs Locally</h2>
            <p className="text-muted-foreground mb-6">
              Run open-source language models directly on your Termux environment.
            </p>

            <div className="mb-8">
              <h3 className="font-bold font-mono mb-4">Available Models</h3>
              <div className="space-y-4">
                {ollamaModels.map((model, i) => (
                  <div key={i} className="bg-background border border-border rounded p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-mono font-bold text-accent">{model.name}</h4>
                      <span className="text-xs text-muted-foreground">{model.size}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{model.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="font-bold font-mono mb-3">Pull a Model</h3>
                <CodeBlock code={`ollama pull llama3`} language="bash" />
              </div>
              <div>
                <h3 className="font-bold font-mono mb-3">Run a Model</h3>
                <CodeBlock code={`ollama run llama3`} language="bash" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
