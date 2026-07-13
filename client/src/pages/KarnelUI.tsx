import CodeBlock from "@/components/CodeBlock";
import { AnimatedSection } from "@/components/AnimatedSection";

export default function KarnelUI() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h1 className="text-4xl font-bold font-mono mb-4">Interface Termux</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Customize a aparência do Termux com banner, fonte, cores e teclas extras.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="card-hover bg-card border border-accent/50 rounded-lg p-6 mb-12">
            <h3 className="font-bold font-mono mb-4">Instalação Rápida</h3>
            <CodeBlock code="karnel install ui" language="bash" title="terminal" />
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <AnimatedSection delay={200}>
            <div className="card-hover bg-card border border-border rounded-lg p-6">
              <h3 className="font-bold font-mono mb-2">Banner</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Banner ASCII com efeito metálico diagonal e painel de status (IA, Lang, DB, Uptime, RAM).
              </p>
              <CodeBlock code="karnel install ui --banner" language="bash" />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={250}>
            <div className="card-hover bg-card border border-border rounded-lg p-6">
              <h3 className="font-bold font-mono mb-2">Customização</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Propriedades Termux, cores, fonte e extra-keys configuradas.
              </p>
              <CodeBlock code="karnel install ui --customize" language="bash" />
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={300}>
          <div className="card-hover bg-card border border-border rounded-lg p-6">
            <h3 className="font-bold font-mono mb-4">Recursos do Banner</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Logo KARNEL + TERMUX em figlet com gradiente vermelho-preto</li>
              <li>Efeito metálico diagonal (ouro/branco/âmbar)</li>
              <li>Painel de status: AI, Linguagens, DB, Uptime, RAM</li>
              <li>Dicas aleatórias a cada sessão</li>
            </ul>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
