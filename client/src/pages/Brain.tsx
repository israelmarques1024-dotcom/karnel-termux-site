import CodeBlock from "@/components/CodeBlock";
import { AnimatedSection } from "@/components/AnimatedSection";

const commands = [
  { cmd: "karnel brain init", desc: "Initialize the local memory store" },
  { cmd: "karnel brain save", desc: "Save a new memory interactively" },
  {
    cmd: "karnel brain search <query>",
    desc: "Search memories by keywords or tags",
  },
  { cmd: "karnel brain ls", desc: "List all saved entries" },
  { cmd: "karnel brain graph", desc: "Visualize idea connections as a graph" },
  { cmd: "karnel brain reset", desc: "Destroy the entire brain" },
];

export default function Brain() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h1 className="text-4xl font-bold font-mono mb-4">
            karnel brain — Second Brain
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Sistema de memória local com busca por palavras-chave e visualização
            em grafo. Salve ideias, comandos, trechos de código e encontre tudo
            rapidamente.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="card-hover bg-card border border-accent/50 rounded-lg p-6 mb-12">
            <h3 className="font-bold font-mono mb-4">Uso</h3>
            <CodeBlock
              code={"karnel brain <action> [args]"}
              language="bash"
              title="terminal"
            />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <h2 className="text-2xl font-bold font-mono mb-6">Commands</h2>
        </AnimatedSection>

        <AnimatedSection delay={250}>
          <div className="card-hover bg-card border border-border rounded-lg overflow-hidden mb-12">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-secondary/30">
                    <th className="text-left py-3 px-4 font-mono">Command</th>
                    <th className="text-left py-3 px-4 font-mono">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {commands.map((row, i) => (
                    <tr
                      key={i}
                      className="border-b border-border hover:bg-accent/5 transition-colors"
                    >
                      <td className="py-3 px-4 font-mono text-accent text-xs">
                        {row.cmd}
                      </td>
                      <td className="py-3 px-4 text-muted-foreground">
                        {row.desc}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={300}>
          <h2 className="text-2xl font-bold font-mono mb-6">Exemplos</h2>
        </AnimatedSection>

        <div className="space-y-6 mb-12">
          {[
            {
              code: "karnel brain init",
              desc: "Inicializa o armazenamento local antes de salvar ou buscar memórias.",
            },
            {
              code: `karnel brain search "como configurar postgres"`,
              desc: "Busca memórias por palavras-chave e tags.",
            },
            {
              code: `karnel brain graph`,
              desc: "Gera um grafo mostrando como suas ideias se conectam.",
            },
          ].map((ex, i) => (
            <AnimatedSection key={i} delay={400 + i * 80}>
              <div className="card-hover bg-card border border-border rounded-lg p-6">
                <CodeBlock code={ex.code} language="bash" title="terminal" />
                <p className="text-sm text-muted-foreground mt-3">{ex.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={600}>
          <h2 className="text-2xl font-bold font-mono mb-6">Como Funciona</h2>
          <div className="card-hover bg-card border border-border rounded-lg p-6">
            <p className="text-muted-foreground mb-4">
              O <code className="text-accent">karnel brain</code> armazena suas
              entradas como arquivos Markdown em{" "}
              <code className="text-accent">$KARNEL_DATA/brain/</code> e usa
              busca local por palavras-chave e tags. O grafo mostra as relações
              criadas entre memórias.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
