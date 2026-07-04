import Layout from "@/components/Layout";
import CodeBlock from "@/components/CodeBlock";

export default function ShowDocs() {
  const examples = [
    { cmd: "omni show ai --opencode", desc: "Show OpenCode README in the AI module" },
    { cmd: "omni show ai --ollama", desc: "Show Ollama documentation" },
    { cmd: "omni show db --postgresql", desc: "Show PostgreSQL setup guide" },
    { cmd: "omni show dev --gh", desc: "Show GitHub CLI docs" },
    { cmd: "omni show npm --typescript", desc: "Show TypeScript npm package guide" },
    { cmd: "omni show all --<tool>", desc: "Search for a tool across all modules" },
  ];

  return (
    <Layout>
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold font-mono mb-4">omni show</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Display README documentation for any tool installed via Omni. Supports
            rendering via glow (when available), pygmentize, or plain cat.
          </p>

          <div className="bg-card border border-accent/50 rounded-lg p-6 mb-12">
            <h3 className="font-bold font-mono mb-4">Usage</h3>
            <CodeBlock
              code={"omni show <module> --<tool>"}
              language="bash"
              title="terminal"
            />
            <p className="text-sm text-muted-foreground mt-4">
              Run <code className="text-accent">omni list &lt;module&gt;</code> first to see available
              tools in a module.
            </p>
          </div>

          <h2 className="text-2xl font-bold font-mono mb-6">How It Works</h2>

          <div className="bg-card border border-border rounded-lg p-6 mb-12">
            <p className="text-muted-foreground mb-6">
              The command looks up <code className="text-accent">$OMNI_PATH/tools/&lt;module&gt;/&lt;tool&gt;/README.md</code>
              and displays it. If <code className="text-accent">glow</code> is installed, it renders
              with syntax highlighting. Falls back to pygmentize or plain cat.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                { name: "glow", desc: "Renders Markdown with syntax highlighting and styling" },
                { name: "pygmentize", desc: "Syntax-highlighted Markdown via less -R" },
                { name: "cat", desc: "Plain text fallback when neither tool is available" },
              ].map((renderer, i) => (
                <div key={i} className="bg-background border border-border rounded p-3">
                  <span className="font-mono text-accent font-bold">{renderer.name}</span>
                  <p className="text-sm text-muted-foreground mt-1">{renderer.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <h2 className="text-2xl font-bold font-mono mb-6">Examples</h2>

          <div className="space-y-6 mb-12">
            {examples.map((ex, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-6">
                <CodeBlock code={ex.cmd} language="bash" title="terminal" />
                <p className="text-sm text-muted-foreground mt-3">{ex.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold font-mono mb-6">Listing Tools in a Module</h2>

          <div className="bg-card border border-border rounded-lg p-6 mb-12">
            <p className="text-muted-foreground mb-4">
              Run <code className="text-accent">omni show &lt;module&gt;</code> without a tool flag to list
              all available tools in that module:
            </p>
            <CodeBlock
              code={`omni show ai

── ai - Available Tools ──
opencode          OpenCode - AI coding agent
ollama            Ollama - Local LLM runner
claude            Claude Code by Anthropic
gemini            Google Gemini CLI`}
              language="bash"
              title="example"
            />
            <p className="text-sm text-muted-foreground mt-4">
              Each tool's README first line is shown as its description.
            </p>
          </div>

          <h2 className="text-2xl font-bold font-mono mb-6">Available Modules</h2>

          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-secondary/30">
                    <th className="text-left py-3 px-4 font-mono">Module</th>
                    <th className="text-left py-3 px-4 font-mono">Command</th>
                    <th className="text-left py-3 px-4 font-mono">Examples</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { mod: "ai", cmd: "omni show ai --opencode", tools: "opencode, ollama, claude, gemini" },
                    { mod: "db", cmd: "omni show db --postgresql", tools: "postgresql, mariadb, sqlite, mongodb" },
                    { mod: "dev", cmd: "omni show dev --gh", tools: "gh, wget, curl, fzf" },
                    { mod: "npm", cmd: "omni show npm --typescript", tools: "typescript, prettier, eslint" },
                    { mod: "editor", cmd: "omni show editor --neovim", tools: "neovim, nvchad" },
                    { mod: "deploy", cmd: "omni show deploy --vercel", tools: "vercel, railway, netlify" },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-border hover:bg-secondary/20 transition-colors">
                      <td className="py-3 px-4 font-mono font-bold">{row.mod}</td>
                      <td className="py-3 px-4 font-mono text-accent text-xs">{row.cmd}</td>
                      <td className="py-3 px-4 text-muted-foreground text-sm">{row.tools}</td>
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
