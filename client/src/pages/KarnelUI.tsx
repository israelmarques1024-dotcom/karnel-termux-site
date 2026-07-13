import CodeBlock from "@/components/CodeBlock";
import { AnimatedSection } from "@/components/AnimatedSection";

const components = [
  { name: "Meslo Nerd Font", flag: "--font", desc: "Fonte com ligaduras e ícones" },
  { name: "Extra Keys", flag: "--extra-keys", desc: "Teclas adicionais no teclado Termux" },
  { name: "Cursor Color", flag: "--cursor", desc: "Cursor estilizado com gradiente" },
  { name: "Startup Banner", flag: "--banner", desc: "Banner ASCII com efeito metálico ao iniciar" },
];

export default function KarnelUI() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h1 className="text-4xl font-bold font-mono mb-4">Interface Termux</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Customize a aparência do Termux com fonte, teclas extras, cursor e banner.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="card-hover bg-card border border-accent/50 rounded-lg p-6 mb-12">
            <h3 className="font-bold font-mono mb-4">Instalação Rápida</h3>
            <CodeBlock code="karnel install ui" language="bash" title="terminal" />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <h2 className="text-2xl font-bold font-mono mb-6">Componentes</h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {components.map((c, i) => (
            <AnimatedSection key={i} delay={250 + i * 50}>
              <div className="card-hover bg-card border border-border rounded-lg p-6">
                <h3 className="font-bold font-mono mb-2">{c.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{c.desc}</p>
                <CodeBlock code={`karnel install ui ${c.flag}`} language="bash" />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
