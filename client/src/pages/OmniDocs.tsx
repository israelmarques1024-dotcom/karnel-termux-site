import Layout from "@/components/Layout";
import CodeBlock from "@/components/CodeBlock";
import { AnimatedSection } from "@/components/AnimatedSection";

const modules = [
  { name: "Pacotes de Linguagem", desc: "Node, Python, Perl, PHP, Rust, C/C++, Go", cmd: "omni install lang" },
  { name: "Bancos de Dados", desc: "PostgreSQL, MariaDB, SQLite, MongoDB", cmd: "omni install db" },
  { name: "Ferramentas de IA", desc: "30 agentes (OpenCode, Claude, Gemini, Ollama, etc.)", cmd: "omni install ai" },
  { name: "Editor de Código", desc: "code-server (VS Code no navegador)", cmd: "omni install editor" },
  { name: "Ferramentas de Desenvolvimento", desc: "GitHub CLI, wget, curl, fzf, etc.", cmd: "omni install dev" },
  { name: "Módulos Node.js", desc: "Pacotes npm globais (TypeScript, NestJS, Prettier)", cmd: "omni install npm" },
  { name: "Shell ZSH", desc: "ZSH + Oh My Zsh + 10 plugins", cmd: "omni install shell" },
  { name: "Interface Termux", desc: "Fonte, Cursor, Extra-keys, Banner", cmd: "omni install ui" },
  { name: "Comando de Voz", desc: "Speech-to-agent com Termux:API", cmd: "omni install voice" },
  { name: "Automação", desc: "n8n e ferramentas de automação", cmd: "omni install auto" },
  { name: "CLIs de Deploy", desc: "Vercel, Railway, Netlify", cmd: "omni install deploy" },
];

const commands = [
  { cmd: "omni --version", desc: "Mostrar versão atual" },
  { cmd: "omni brain", desc: "Segundo cérebro — salvar e pesquisar memórias" },
  { cmd: "omni env", desc: "Gerenciar variáveis de ambiente" },
  { cmd: "omni ia", desc: "Gerenciar agentes de IA, sessões e rotas" },
  { cmd: "omni install", desc: "Instalar módulos e pacotes" },
  { cmd: "omni show", desc: "Mostrar documentação de qualquer ferramenta" },
  { cmd: "omni doctor", desc: "Diagnosticar ambiente Termux & Omni (30+ verificações)" },
  { cmd: "omni start", desc: "Iniciar serviços (editor, etc.)" },
  { cmd: "omni update", desc: "Atualizar módulos ou framework" },
  { cmd: "omni uninstall", desc: "Remover módulos instalados" },
  { cmd: "omni reinstall", desc: "Desinstalar + instalar módulos" },
  { cmd: "omni voice", desc: "Fala-para-agente via microfone" },
  { cmd: "omni open", desc: "Abrir documentação no navegador" },
  { cmd: "omni list", desc: "Listar ferramentas disponíveis nos módulos" },
  { cmd: "omni pg", desc: "Gerenciador de banco de dados PostgreSQL" },
  { cmd: "omni init", desc: "Inicializar projetos com templates" },
];

const templates = [
  { name: "next", desc: "Next.js com Turbopack, TypeScript, Tailwind CSS" },
  { name: "react", desc: "React + Vite com estrutura moderna" },
  { name: "nest", desc: "NestJS com TypeORM e autenticação" },
  { name: "express", desc: "Express API com TypeScript + TypeORM + migrations" },
  { name: "python", desc: "FastAPI com SQLModel/SQLAlchemy" },
  { name: "go", desc: "Go com Gin ou Fiber" },
  { name: "rust", desc: "Rust com Axum ou Actix Web" },
];

export default function OmniDocs() {
  return (
    <Layout>
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h1 className="text-4xl font-bold font-mono mb-4">KERNEL TERMUX</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Ambiente de Desenvolvimento Modular para Termux (Android). Automatize instalações,
              atualizações e configurações com comandos simples.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="card-hover bg-card border border-accent/50 rounded-lg p-6 mb-12">
              <h3 className="font-bold font-mono mb-4">Instalação Rápida</h3>
              <div className="space-y-3">
                <CodeBlock
                  code={`bash -c "$(curl -fsSL https://raw.githubusercontent.com/israel676767/kerneltermux/main/install.sh)"`}
                  language="bash"
                  title="quick install"
                />
                <p className="text-center text-xs text-muted-foreground">ou</p>
                <CodeBlock
                  code={`npm install -g kerneltermux`}
                  language="bash"
                  title="npm install"
                />
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <h2 className="text-2xl font-bold font-mono mb-6">Módulos</h2>
            <p className="text-muted-foreground mb-8">
              Clique em um módulo para ver todas as ferramentas incluídas
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            {modules.map((module, i) => (
              <AnimatedSection key={i} delay={300 + i * 60}>
                <div className="card-hover bg-card border border-border rounded-lg p-6">
                  <h3 className="font-bold font-mono mb-2">{module.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{module.desc}</p>
                  <CodeBlock code={module.cmd} language="bash" />
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={900}>
            <h2 className="text-2xl font-bold font-mono mb-6">Comandos Principais</h2>
            <p className="text-muted-foreground mb-8">
              Clique em qualquer comando para ver a documentação completa
            </p>
          </AnimatedSection>

          <AnimatedSection delay={950}>
            <div className="card-hover bg-card border border-border rounded-lg overflow-hidden mb-12">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <tbody>
                    {commands.map((item, i) => (
                      <tr key={i} className="border-b border-border hover:bg-accent/5 transition-colors">
                        <td className="py-3 px-4 font-mono text-accent">{item.cmd}</td>
                        <td className="py-3 px-4 text-muted-foreground">{item.desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={1000}>
            <h2 className="text-2xl font-bold font-mono mb-6">Comandos Detalhados</h2>
          </AnimatedSection>

          {[
            {
              title: "omni reinstall",
              desc: "Reinstalar módulos ou ferramentas específicas — desinstala e instala do zero.",
              code: `omni reinstall                # Mostrar ajuda\nomni reinstall <target>       # Reinstalar alvo específico\nomni reinstall <target> --tool1 --tool2  # Reinstalar ferramentas específicas`,
              extra: { label: "Exemplos:", code: `omni reinstall ai --opencode --ollama       # Reinstalar apenas OpenCode e Ollama\nomni reinstall db --postgresql --sqlite     # Reinstalar apenas PostgreSQL e SQLite\nomni reinstall dev --gh --fzf               # Reinstalar apenas gh e fzf` }
            },
            {
              title: "omni voice",
              desc: "Capture voz do microfone, revise no code-server e dispare qualquer agente de IA. Suporta 15 agentes, seleção de idioma, modo raw e clipboard automático.",
              code: `omni voice                     # Mostrar ajuda\nomni voice opencode             # Capturar → code-server → opencode run\nomni voice text                 # Capturar → code-server → stdout\nomni voice '!'                  # Atalho para "text"\nomni voice claude-code --lang pt-BR  # Português → claude\nomni voice opencode --raw       # Captura direta, sem edição`
            },
            {
              title: "omni open",
              desc: "Abrir documentação oficial no navegador.",
              code: `omni open                     # Mostrar ajuda\nomni open <target>            # Abrir documentação oficial no navegador\nomni open omni                # Abre https://kerneltermux.vercel.app`,
              extra: { label: null, code: null }
            },
            {
              title: "omni pg",
              desc: "Gerenciador de banco de dados PostgreSQL.",
              code: `omni pg                       # Mostrar ajuda\nomni pg start                 # Iniciar servidor\nomni pg stop                  # Parar servidor\nomni pg restart               # Reiniciar servidor\nomni pg status                # Verificar status\nomni pg init                  # Inicializar banco de dados\nomni pg create <name>         # Criar banco de dados\nomni pg drop <name>           # Remover banco de dados\nomni pg list                  # Listar bancos de dados\nomni pg shell                 # Abrir console psql`
            },
            {
              title: "omni init",
              desc: "Configurar projetos existentes com dependências, estrutura de pastas e ferramentas predefinidas.",
              code: `omni init                     # Detectar tipo de projeto automaticamente e configurar\nomni init <template>          # Configurar com template específico`,
              hasTemplates: true
            },
          ].map((section, i) => (
            <AnimatedSection key={i} delay={1100 + i * 100}>
              <div className="card-hover bg-card border border-border rounded-lg p-6 mb-6">
                <h3 className="font-bold font-mono text-accent mb-2">{section.title}</h3>
                <p className="text-muted-foreground mb-4">{section.desc}</p>
                <CodeBlock code={section.code} language="bash" title="terminal" />
                {section.extra && (
                  <div className="mt-4">
                    {section.extra.label && <p className="text-sm text-muted-foreground">{section.extra.label}</p>}
                    {section.extra.code && <CodeBlock code={section.extra.code} language="bash" />}
                  </div>
                )}
                {(section as any).hasTemplates && (
                  <div className="mt-4">
                    <p className="text-sm text-muted-foreground mb-3">Templates disponíveis:</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                      {templates.map((tpl) => (
                        <div key={tpl.name} className="bg-background border border-border rounded p-3">
                          <span className="font-mono text-accent font-bold">{tpl.name}</span>
                          <p className="text-muted-foreground mt-1">{tpl.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </AnimatedSection>
          ))}

          <AnimatedSection delay={1600}>
            <div className="card-hover bg-card border border-border rounded-xl p-8 text-center">
              <h3 className="text-xl font-bold font-mono mb-4">Ver Documentação Completa</h3>
              <p className="text-muted-foreground mb-6">
                Explore o repositório completo do KernelTermux no GitHub para documentação detalhada e exemplos.
              </p>
              <a
                href="https://github.com/israel676767/kerneltermux"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-lg shadow-accent/25 transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95"
              >
                Ver no GitHub
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
