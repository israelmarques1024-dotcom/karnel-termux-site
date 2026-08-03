import CodeBlock from "@/components/CodeBlock";
import { AnimatedSection } from "@/components/AnimatedSection";

export default function Env() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h1 className="text-4xl font-bold font-mono mb-4">
            karnel env — Environment Variable Manager
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Gerencia chaves de API e variáveis de ambiente de forma segura.
            Nunca mais hardcode secrets nos seus projetos.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="bg-card border border-accent/50 rounded-lg p-6 mb-12">
            <h3 className="font-bold font-mono mb-4">Uso</h3>
            <CodeBlock
              code={`karnel env                      # Mostra ajuda
karnel env list                 # Lista variáveis salvas
karnel env ls                   # Alias para list
karnel env set                  # Define uma variável interativamente
karnel env unset                # Remove uma variável interativamente`}
              language="bash"
              title="terminal"
            />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <h2 className="text-2xl font-bold font-mono mb-6">Exemplos</h2>
        </AnimatedSection>

        <div className="space-y-6 mb-12">
          {[
            {
              code: "karnel env set",
              desc: "Solicita o nome e o valor da variável sem exibir o segredo.",
            },
            {
              code: "karnel env list",
              desc: "Lista os nomes das variáveis configuradas.",
            },
            {
              code: "karnel env unset",
              desc: "Solicita qual variável deve ser removida.",
            },
          ].map((ex, i) => (
            <AnimatedSection key={i} delay={300 + i * 80}>
              <div className="card-hover bg-card border border-border rounded-lg p-6">
                <CodeBlock code={ex.code} language="bash" title="terminal" />
                <p className="text-sm text-muted-foreground mt-3">{ex.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={500}>
          <h2 className="text-2xl font-bold font-mono mb-6">Security</h2>
          <div className="card-hover bg-card border border-border rounded-lg p-6">
            <p className="text-muted-foreground mb-4">
              As variáveis são gravadas como exports no arquivo de shell ativo,
              <code className="text-accent"> ~/.zshrc</code> ou{" "}
              <code className="text-accent">~/.bashrc</code>. Nenhum dado é
              enviado para fora do dispositivo.
            </p>
            <p className="text-muted-foreground">
              Abra um novo shell ou execute{" "}
              <code className="text-accent">source</code> no arquivo
              correspondente para carregar alterações na sessão atual.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
