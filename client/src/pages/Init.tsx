import Layout from "@/components/Layout";
import CodeBlock from "@/components/CodeBlock";

export default function Init() {
  const templates = [
    { name: "next", desc: "Next.js com Turbopack, TypeScript, Tailwind CSS" },
    { name: "react", desc: "React + Vite com estrutura moderna" },
    { name: "nest", desc: "NestJS com TypeORM e autenticação" },
    { name: "express", desc: "Express API com TypeScript + TypeORM + migrations" },
    { name: "python", desc: "FastAPI com SQLModel ou SQLAlchemy" },
    { name: "go", desc: "Gin/Fiber API com Docker support" },
    { name: "rust", desc: "Axum/Actix Web com SQLx" },
  ];

  return (
    <Layout>
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold font-mono mb-4">omni init — Inicialização de Projetos</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Configure projetos existentes com dependências, estrutura de pastas e
            ferramentas pré-definidas. Comece a codar em segundos.
          </p>

          <div className="bg-card border border-accent/50 rounded-lg p-6 mb-12">
            <h3 className="font-bold font-mono mb-4">Uso</h3>
            <CodeBlock
              code={`omni init                     # Detecta tipo de projeto e configura
omni init <template>          # Configura com template específico`}
              language="bash"
              title="terminal"
            />
          </div>

          <h2 className="text-2xl font-bold font-mono mb-6">Templates Disponíveis</h2>

          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {templates.map((tpl, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-5">
                <span className="font-mono text-accent font-bold text-lg">{tpl.name}</span>
                <p className="text-sm text-muted-foreground mt-2">{tpl.desc}</p>
                <div className="mt-3">
                  <CodeBlock code={`omni init ${tpl.name}`} language="bash" />
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold font-mono mb-6">Exemplo</h2>
          <div className="bg-card border border-border rounded-lg p-6 mb-12">
            <CodeBlock
              code={`mkdir meu-projeto && cd meu-projeto && omni init next`}
              language="bash"
              title="terminal"
            />
            <p className="text-sm text-muted-foreground mt-3">
              Cria um projeto Next.js completo com TypeScript e Tailwind configurados.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
