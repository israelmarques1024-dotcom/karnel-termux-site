import Layout from "@/components/Layout";
import CodeBlock from "@/components/CodeBlock";

export default function ShowDocs() {
  const examples = [
    { cmd: "omni show ai --opencode", desc: "Mostrar README do OpenCode no módulo de IA" },
    { cmd: "omni show ai --ollama", desc: "Mostrar documentação do Ollama" },
    { cmd: "omni show db --postgresql", desc: "Mostrar guia de configuração do PostgreSQL" },
    { cmd: "omni show dev --gh", desc: "Mostrar docs do GitHub CLI" },
    { cmd: "omni show npm --typescript", desc: "Mostrar guia do pacote npm TypeScript" },
    { cmd: "omni show all --<tool>", desc: "Pesquisar uma ferramenta em todos os módulos" },
  ];

  return (
    <Layout>
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold font-mono mb-4">omni show</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Exibe documentação README para qualquer ferramenta instalada via Omni. Suporta
            renderização via glow (quando disponível), pygmentize ou cat simples.
          </p>

          <div className="bg-card border border-accent/50 rounded-lg p-6 mb-12">
            <h3 className="font-bold font-mono mb-4">Uso</h3>
            <CodeBlock
              code={"omni show <module> --<tool>"}
              language="bash"
              title="terminal"
            />
            <p className="text-sm text-muted-foreground mt-4">
              Execute <code className="text-accent">omni list &lt;module&gt;</code> primeiro para ver as ferramentas
              disponíveis em um módulo.
            </p>
          </div>

          <h2 className="text-2xl font-bold font-mono mb-6">Como Funciona</h2>

          <div className="bg-card border border-border rounded-lg p-6 mb-12">
            <p className="text-muted-foreground mb-6">
              O comando procura <code className="text-accent">$OMNI_PATH/tools/&lt;module&gt;/&lt;tool&gt;/README.md</code>
              e o exibe. Se o <code className="text-accent">glow</code> estiver instalado, ele renderiza
              com destaque de sintaxe. Caso contrário, usa pygmentize ou cat simples.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                { name: "glow", desc: "Renderiza Markdown com destaque de sintaxe e estilo" },
                { name: "pygmentize", desc: "Markdown com destaque de sintaxe via less -R" },
                { name: "cat", desc: "Texto simples quando nenhuma ferramenta está disponível" },
              ].map((renderer, i) => (
                <div key={i} className="bg-background border border-border rounded p-3">
                  <span className="font-mono text-accent font-bold">{renderer.name}</span>
                  <p className="text-sm text-muted-foreground mt-1">{renderer.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <h2 className="text-2xl font-bold font-mono mb-6">Exemplos</h2>

          <div className="space-y-6 mb-12">
            {examples.map((ex, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-6">
                <CodeBlock code={ex.cmd} language="bash" title="terminal" />
                <p className="text-sm text-muted-foreground mt-3">{ex.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold font-mono mb-6">Listar Ferramentas em um Módulo</h2>

          <div className="bg-card border border-border rounded-lg p-6 mb-12">
            <p className="text-muted-foreground mb-4">
              Execute <code className="text-accent">omni show &lt;module&gt;</code> sem uma flag de ferramenta para listar
              todas as ferramentas disponíveis nesse módulo:
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
              A primeira linha do README de cada ferramenta é mostrada como sua descrição.
            </p>
          </div>

          <h2 className="text-2xl font-bold font-mono mb-6">Módulos Disponíveis</h2>

          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-secondary/30">
                    <th className="text-left py-3 px-4 font-mono">Módulo</th>
                    <th className="text-left py-3 px-4 font-mono">Comando</th>
                    <th className="text-left py-3 px-4 font-mono">Exemplos</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { mod: "ai", cmd: "omni show ai --opencode", tools: "opencode, ollama, claude, gemini" },
                    { mod: "db", cmd: "omni show db --postgresql", tools: "postgresql, mariadb, sqlite, mongodb" },
                    { mod: "dev", cmd: "omni show dev --gh", tools: "gh, wget, curl, fzf" },
                    { mod: "npm", cmd: "omni show npm --typescript", tools: "typescript, prettier, eslint" },
                    { mod: "editor", cmd: "omni show editor --code-server", tools: "code-server" },
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
