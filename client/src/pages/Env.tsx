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
karnel env get <chave>          # Mostra valor de uma variável
karnel env set <chave> <valor>  # Define uma variável
karnel env delete <chave>       # Remove uma variável
karnel env export               # Exporta tudo pro shell atual`}
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
              code: "karnel env set OPENAI_API_KEY sk-...",
              desc: "Salva sua chave da OpenAI com segurança.",
            },
            {
              code: "karnel env get OPENAI_API_KEY",
              desc: "Recupera a chave quando precisar.",
            },
            {
              code: "karnel env export",
              desc: "Exporta tudo pro ambiente atual.",
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
              As variáveis são armazenadas em{" "}
              <code className="text-accent">$KARNEL_CONFIG/env/</code> com
              permissões restritas. Nenhum dado é enviado pra fora do seu
              dispositivo.
            </p>
            <p className="text-muted-foreground">
              Use <code className="text-accent">karnel env export</code> no seu{" "}
              <code className="text-accent">~/.zshrc</code>
              pra carregar tudo automaticamente ao abrir o terminal.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
