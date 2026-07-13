import CodeBlock from "@/components/CodeBlock";
import { AnimatedSection } from "@/components/AnimatedSection";

export default function KarnelAuto() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h1 className="text-4xl font-bold font-mono mb-4">Automação</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Ferramentas de automação para otimizar seu workflow no Termux.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="card-hover bg-card border border-accent/50 rounded-lg p-6 mb-8">
            <h3 className="font-bold font-mono mb-4">Instalação Rápida</h3>
            <CodeBlock code="karnel install auto" language="bash" title="terminal" />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <div className="card-hover bg-card border border-border rounded-lg p-6 mb-8">
            <h3 className="font-bold font-mono mb-2">n8n</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Plataforma de automação de workflows. Conecte apps e serviços com fluxos visuais.
            </p>
            <div className="space-y-2">
              <CodeBlock code="karnel install auto --n8n" language="bash" />
              <CodeBlock code="# Após instalar:\nn8n start\n# Acessar UI: http://localhost:5678" language="bash" />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
