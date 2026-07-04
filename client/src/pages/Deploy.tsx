import Layout from "@/components/Layout";
import CodeBlock from "@/components/CodeBlock";

export default function Deploy() {
  const tools = [
    { name: "Vercel", bin: "vercel", flag: "--vercel", desc: "Deploy de frontend & serverless" },
    { name: "Railway", bin: "railway", flag: "--railway", desc: "Full-stack com bancos de dados" },
    { name: "Netlify", bin: "netlify", flag: "--netlify", desc: "Sites estáticos & edge functions" },
  ];

  return (
    <Layout>
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold font-mono mb-4">CLIs de Deploy</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Envie para produção diretamente do seu celular. Vercel, Railway e
            Netlify — todos pré-configurados e prontos para deploy.
          </p>

          <div className="bg-card border border-accent/50 rounded-lg p-6 mb-12">
            <h3 className="font-bold font-mono mb-4">Instalação Rápida</h3>
            <CodeBlock code={`omni install deploy`} language="bash" title="terminal" />
            <p className="text-sm text-muted-foreground mt-4">
              Instalar específicos: <code className="text-accent">omni install deploy --vercel --railway</code>
            </p>
          </div>

          <h2 className="text-2xl font-bold font-mono mb-6">CLIs Disponíveis</h2>

          <div className="bg-card border border-border rounded-lg overflow-hidden mb-12">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-secondary/30">
                    <th className="text-left py-3 px-4 font-mono">CLI</th>
                    <th className="text-left py-3 px-4 font-mono">Comando</th>
                    <th className="text-left py-3 px-4 font-mono">Flag</th>
                    <th className="text-left py-3 px-4 font-mono">Descrição</th>
                  </tr>
                </thead>
                <tbody>
                  {tools.map((tool, i) => (
                    <tr key={i} className="border-b border-border hover:bg-secondary/20 transition-colors">
                      <td className="py-3 px-4 font-mono font-bold">{tool.name}</td>
                      <td className="py-3 px-4 font-mono text-accent text-xs">{tool.bin}</td>
                      <td className="py-3 px-4 text-accent font-mono text-xs">{tool.flag}</td>
                      <td className="py-3 px-4 text-muted-foreground">{tool.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <h2 className="text-2xl font-bold font-mono mb-6">Uso</h2>

          <div className="space-y-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-bold font-mono text-accent mb-2">Vercel</h3>
              <CodeBlock code={`vercel deploy --prod`} language="bash" title="terminal" />
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-bold font-mono text-accent mb-2">Railway</h3>
              <CodeBlock code={`railway up`} language="bash" title="terminal" />
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-bold font-mono text-accent mb-2">Netlify</h3>
              <CodeBlock code={`netlify deploy --prod`} language="bash" title="terminal" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
