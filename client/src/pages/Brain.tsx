import Layout from "@/components/Layout";
import CodeBlock from "@/components/CodeBlock";

export default function Brain() {
  return (
    <Layout>
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold font-mono mb-4">omni brain — Segundo Cérebro</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Sistema de memória integrado com busca por IA e visualização em grafo.
            Salve ideias, comandos, trechos de código e encontre tudo rapidamente.
          </p>

          <div className="bg-card border border-accent/50 rounded-lg p-6 mb-12">
            <h3 className="font-bold font-mono mb-4">Uso</h3>
            <CodeBlock code={"omni brain <action> [args]"} language="bash" title="terminal" />
          </div>

          <h2 className="text-2xl font-bold font-mono mb-6">Comandos</h2>

          <div className="bg-card border border-border rounded-lg overflow-hidden mb-12">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-secondary/30">
                    <th className="text-left py-3 px-4 font-mono">Comando</th>
                    <th className="text-left py-3 px-4 font-mono">Descrição</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { cmd: "omni brain add <text>", desc: "Salva um novo pensamento ou ideia" },
                    { cmd: "omni brain search <query>", desc: "Busca na memória com IA semântica" },
                    { cmd: "omni brain list", desc: "Lista todas as entradas salvas" },
                    { cmd: "omni brain graph", desc: "Visualiza conexões entre ideias num grafo" },
                    { cmd: "omni brain delete <id>", desc: "Remove uma entrada específica" },
                    { cmd: "omni brain clear", desc: "Limpa todas as entradas" },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-border hover:bg-secondary/20 transition-colors">
                      <td className="py-3 px-4 font-mono text-accent text-xs">{row.cmd}</td>
                      <td className="py-3 px-4 text-muted-foreground">{row.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <h2 className="text-2xl font-bold font-mono mb-6">Exemplos</h2>

          <div className="space-y-6 mb-12">
            <div className="bg-card border border-border rounded-lg p-6">
              <CodeBlock code={`omni brain add "Ideia: app de tarefas usando Electron + SQLite"`} language="bash" title="terminal" />
              <p className="text-sm text-muted-foreground mt-3">Salva uma ideia no cérebro.</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <CodeBlock code={`omni brain search "como configurar postgres"`} language="bash" title="terminal" />
              <p className="text-sm text-muted-foreground mt-3">Busca inteligente por contexto, não por palavra exata.</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <CodeBlock code={`omni brain graph`} language="bash" title="terminal" />
              <p className="text-sm text-muted-foreground mt-3">Gera um grafo mostrando como suas ideias se conectam.</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold font-mono mb-6">Como Funciona</h2>
          <div className="bg-card border border-border rounded-lg p-6">
            <p className="text-muted-foreground mb-4">
              O <code className="text-accent">omni brain</code> armazena suas entradas em um banco local
              (<code className="text-accent">$OMNI_DATA/brain/</code>) e usa embeddings de IA para
              buscar por similaridade semântica. O grafo mostra conexões entre ideias
              baseadas em palavras-chave e contexto compartilhado.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
