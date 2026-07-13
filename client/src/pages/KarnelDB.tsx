import CodeBlock from "@/components/CodeBlock";
import { AnimatedSection } from "@/components/AnimatedSection";

const databases = [
  { name: "PostgreSQL", flag: "--postgresql", desc: "Banco relacional avançado", cmds: ["karnel install db --postgresql", "karnel pg init", "karnel pg start", "psql -U postgres"] },
  { name: "MariaDB", flag: "--mariadb", desc: "MySQL-compatível, robusto", cmd: "karnel install db --mariadb" },
  { name: "SQLite", flag: "--sqlite", desc: "Banco embarcado e leve", cmd: "karnel install db --sqlite" },
  { name: "MongoDB", flag: "--mongodb", desc: "Banco NoSQL documental", cmd: "karnel install db --mongodb" },
  { name: "Redis", flag: "--redis", desc: "Cache e message broker in-memory", cmds: ["karnel install db --redis", "redis-server --daemonize yes", "redis-cli"] },
];

export default function KarnelDB() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h1 className="text-4xl font-bold font-mono mb-4">Bancos de Dados</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Instale e gerencie bancos de dados no Termux.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="card-hover bg-card border border-accent/50 rounded-lg p-6 mb-12">
            <h3 className="font-bold font-mono mb-4">Instalação Rápida</h3>
            <CodeBlock code="karnel install db" language="bash" title="terminal" />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <h2 className="text-2xl font-bold font-mono mb-6">Bancos Disponíveis</h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {databases.map((db, i) => (
            <AnimatedSection key={i} delay={300 + i * 50}>
              <div className="card-hover bg-card border border-border rounded-lg p-6">
                <h3 className="font-bold font-mono mb-2">{db.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{db.desc}</p>
                <div className="space-y-2">
                  {(db.cmds || [db.cmd]).map((c, j) => (
                    <CodeBlock key={j} code={c} language="bash" />
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
