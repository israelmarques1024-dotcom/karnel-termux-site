import CodeBlock from "@/components/CodeBlock";
import { AnimatedSection } from "@/components/AnimatedSection";

const tools = [
  { name: "GitHub CLI", flag: "--gh", desc: "Gerencie GitHub pelo terminal" },
  { name: "fzf", flag: "--fzf", desc: "Buscador fuzzy de arquivos" },
  { name: "bat", flag: "--bat", desc: "Cat moderno com syntax highlight" },
  { name: "lsd", flag: "--lsd", desc: "Ls moderno com ícones" },
  { name: "jq", flag: "--jq", desc: "Processador JSON no terminal" },
  { name: "shfmt", flag: "--shfmt", desc: "Formatador de shell script" },
  { name: "fd", flag: "--fd", desc: "Busca rápida de arquivos" },
  { name: "ripgrep", flag: "--rg", desc: "Grep recursivo ultra-rápido" },
  { name: "htop", flag: "--htop", desc: "Monitor interativo de processos" },
  { name: "tmux", flag: "--tmux", desc: "Multiplexador de terminal" },
  { name: "curl", flag: "--curl", desc: "Cliente HTTP" },
  { name: "wget", flag: "--wget", desc: "Download por rede" },
];

export default function KarnelDev() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h1 className="text-4xl font-bold font-mono mb-4">Ferramentas de Desenvolvimento</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Utilitários essenciais para o dia a dia de desenvolvimento no Termux.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="card-hover bg-card border border-accent/50 rounded-lg p-6 mb-12">
            <h3 className="font-bold font-mono mb-4">Instalação Rápida</h3>
            <CodeBlock code="karnel install dev" language="bash" title="terminal" />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <h2 className="text-2xl font-bold font-mono mb-6">Ferramentas Disponíveis</h2>
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
