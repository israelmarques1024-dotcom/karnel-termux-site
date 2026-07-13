import CodeBlock from "@/components/CodeBlock";
import { AnimatedSection } from "@/components/AnimatedSection";

const plugins = [
  { name: "zsh-autosuggestions", desc: "Autocomplete ao estilo fish" },
  { name: "zsh-syntax-highlighting", desc: "Destaque de sintaxe nos comandos" },
  { name: "zsh-autocomplete", desc: "Autocomplete em tempo real" },
  { name: "fast-syntax-highlighting", desc: "Syntax highlight otimizado" },
  { name: "zsh-completions", desc: "Definições extras de completamento" },
  { name: "you-should-use", desc: "Lembra de aliases existentes" },
  { name: "zsh-history-substring-search", desc: "Busca no histórico like fish" },
];

export default function KarnelShell() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h1 className="text-4xl font-bold font-mono mb-4">Shell ZSH</h1>
          <p className="text-lg text-muted-foreground mb-8">
            ZSH com Oh My Zsh e plugins de produtividade para Termux.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="card-hover bg-card border border-accent/50 rounded-lg p-6 mb-12">
            <h3 className="font-bold font-mono mb-4">Instalação Rápida</h3>
            <CodeBlock code="karnel install shell" language="bash" title="terminal" />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <h2 className="text-2xl font-bold font-mono mb-6">Plugins Inclusos</h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-4 mb-12">
          {plugins.map((p, i) => (
            <AnimatedSection key={i} delay={250 + i * 40}>
              <div className="card-hover bg-card border border-border rounded-lg p-4">
                <h3 className="font-bold font-mono mb-1">{p.name}</h3>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={600}>
          <div className="card-hover bg-card border border-border rounded-lg p-6">
            <h3 className="font-bold font-mono mb-4">Gerenciamento</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Atualizar plugins:</p>
                <CodeBlock code="karnel update shell" language="bash" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">Remover:</p>
                <CodeBlock code="karnel uninstall shell" language="bash" />
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
