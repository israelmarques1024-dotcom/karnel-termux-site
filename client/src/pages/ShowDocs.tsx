import CodeBlock from "@/components/CodeBlock";
import { AnimatedSection } from "@/components/AnimatedSection";

const examples = [
  { cmd: "karnel show ai --opencode", desc: "Mostrar README do OpenCode no módulo de IA" },
  { cmd: "karnel show ai --ollama", desc: "Mostrar documentação do Ollama" },
  { cmd: "karnel show db --postgresql", desc: "Mostrar guia de configuração do PostgreSQL" },
  { cmd: "karnel show dev --gh", desc: "Mostrar docs do GitHub CLI" },
  { cmd: "karnel show npm --typescript", desc: "Mostrar guia do pacote npm TypeScript" },
  { cmd: "karnel show all --<tool>", desc: "Pesquisar uma ferramenta em todos os módulos" },
];

const renderers = [
  { name: "glow", desc: "Renderiza Markdown com destaque de sintaxe e estilo" },
  { name: "pygmentize", desc: "Markdown com destaque de sintaxe via less -R" },
  { name: "cat", desc: "Texto simples quando nenhuma ferramenta está disponível" },
];

const modules = [
  { mod: "ai", cmd: "karnel show ai --opencode", tools: "opencode, ollama, claude, gemini" },
  { mod: "lang", cmd: "karnel show lang --nodejs", tools: "nodejs, python, rust, golang" },
  { mod: "db", cmd: "karnel show db --postgresql", tools: "postgresql, mariadb, sqlite, mongodb" },
  { mod: "dev", cmd: "karnel show dev --gh", tools: "gh, wget, curl, fzf" },
  { mod: "npm", cmd: "karnel show npm --typescript", tools: "typescript, nestjs, prettier" },
  { mod: "shell", cmd: "karnel show shell --powerlevel10k", tools: "powerlevel10k, zsh-syntax-highlighting" },
  { mod: "editor", cmd: "karnel show editor --code-server", tools: "code-server" },
  { mod: "deploy", cmd: "karnel show deploy --vercel", tools: "vercel, railway, netlify" },
  { mod: "ui", cmd: "karnel show ui --font", tools: "font, cursor, extra-keys, banner" },
  { mod: "auto", cmd: "karnel show auto --n8n", tools: "n8n" },
  { mod: "voice", cmd: "karnel show voice --termux-api", tools: "termux-api" },
];

export default function ShowDocs() {
  return (
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h1 className="text-4xl font-bold font-mono mb-4">karnel show</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Exibe documentação README para qualquer ferramenta instalada via Karnel. Suporta
              renderização via glow (quando disponível), pygmentize ou cat simples.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="card-hover bg-card border border-accent/50 rounded-lg p-6 mb-12">
              <h3 className="font-bold font-mono mb-4">Uso</h3>
              <CodeBlock code={"karnel show <module> --<tool>"} language="bash" title="terminal" />
              <p className="text-sm text-muted-foreground mt-4">
                Execute <code className="text-accent">karnel list &lt;module&gt;</code> primeiro para ver as ferramentas
                disponíveis em um módulo.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <h2 className="text-2xl font-bold font-mono mb-6">Como Funciona</h2>
          </AnimatedSection>

          <AnimatedSection delay={250}>
            <div className="card-hover bg-card border border-border rounded-lg p-6 mb-12">
              <p className="text-muted-foreground mb-6">
                O comando procura <code className="text-accent">$KARNEL_PATH/tools/&lt;module&gt;/&lt;tool&gt;/README.md</code>
                e o exibe. Se o <code className="text-accent">glow</code> estiver instalado, ele renderiza
                com destaque de sintaxe. Caso contrário, usa pygmentize ou cat simples.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {renderers.map((r, i) => (
                  <div key={i} className="bg-background border border-border rounded p-3">
                    <span className="font-mono text-accent font-bold">{r.name}</span>
                    <p className="text-sm text-muted-foreground mt-1">{r.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <h2 className="text-2xl font-bold font-mono mb-6">Exemplos</h2>
          </AnimatedSection>

          <div className="space-y-6 mb-12">
            {examples.map((ex, i) => (
              <AnimatedSection key={i} delay={400 + i * 80}>
                <div className="card-hover bg-card border border-border rounded-lg p-6">
                  <CodeBlock code={ex.cmd} language="bash" title="terminal" />
                  <p className="text-sm text-muted-foreground mt-3">{ex.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={800}>
            <h2 className="text-2xl font-bold font-mono mb-6">Listar Ferramentas em um Módulo</h2>
          </AnimatedSection>

          <AnimatedSection delay={850}>
            <div className="card-hover bg-card border border-border rounded-lg p-6 mb-12">
              <p className="text-muted-foreground mb-4">
                Execute <code className="text-accent">karnel show &lt;module&gt;</code> sem uma flag de ferramenta para listar
                todas as ferramentas disponíveis nesse módulo:
              </p>
              <CodeBlock
                code={`karnel show ai

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
          </AnimatedSection>

          <AnimatedSection delay={900}>
            <h2 className="text-2xl font-bold font-mono mb-6">Módulos Disponíveis</h2>
          </AnimatedSection>

          <AnimatedSection delay={950}>
            <div className="card-hover bg-card border border-border rounded-lg overflow-hidden">
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
                    {modules.map((row, i) => (
                      <tr key={i} className="border-b border-border hover:bg-accent/5 transition-colors">
                        <td className="py-3 px-4 font-mono font-bold">{row.mod}</td>
                        <td className="py-3 px-4 font-mono text-accent text-xs">{row.cmd}</td>
                        <td className="py-3 px-4 text-muted-foreground text-sm">{row.tools}</td>
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
