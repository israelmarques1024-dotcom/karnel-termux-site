import Layout from "@/components/Layout";
import CodeBlock from "@/components/CodeBlock";
import { AnimatedSection } from "@/components/AnimatedSection";

export default function PG() {
  return (
    <Layout>
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h1 className="text-4xl font-bold font-mono mb-4">omni pg — Gerenciador PostgreSQL</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Gerencie bancos PostgreSQL diretamente do terminal: inicie, pare, crie,
              drope e entre no shell psql com um comando.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="card-hover bg-card border border-accent/50 rounded-lg p-6 mb-12">
              <h3 className="font-bold font-mono mb-4">Uso</h3>
              <CodeBlock
                code={`omni pg                       # Mostra ajuda
omni pg start                 # Inicia o servidor
omni pg stop                  # Para o servidor
omni pg restart               # Reinicia o servidor
omni pg status                # Verifica status
omni pg init                  # Inicializa o banco de dados
omni pg create <nome>         # Cria um banco
omni pg drop <nome>           # Remove um banco
omni pg list                  # Lista bancos
omni pg shell                 # Abre o console psql`}
                language="bash"
                title="terminal"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <h2 className="text-2xl font-bold font-mono mb-6">Exemplo Rápido</h2>
            <div className="card-hover bg-card border border-border rounded-lg p-6 mb-12">
              <CodeBlock
                code={`omni pg init && omni pg start && omni pg create meuapp`}
                language="bash"
                title="terminal"
              />
              <p className="text-sm text-muted-foreground mt-3">
                Inicializa o PostgreSQL, sobe o servidor e cria um banco chamado "meuapp".
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <h2 className="text-2xl font-bold font-mono mb-6">Pré-requisitos</h2>
            <div className="card-hover bg-card border border-border rounded-lg p-6">
              <p className="text-muted-foreground mb-4">
                O PostgreSQL precisa estar instalado. Instale com:
              </p>
              <CodeBlock code="omni install db --postgresql" language="bash" title="terminal" />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
