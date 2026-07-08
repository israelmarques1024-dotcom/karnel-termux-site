import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import CodeBlock from "@/components/CodeBlock";

export default function OmniDocs() {
  const modules = [
    { name: "Pacotes de Linguagem", desc: "Node, Python, Perl, PHP, Rust, C/C++, Go", cmd: "omni install lang" },
    { name: "Bancos de Dados", desc: "PostgreSQL, MariaDB, SQLite, MongoDB", cmd: "omni install db" },
    { name: "Ferramentas de IA", desc: "OpenCode, Gentle AI, Claude Code, etc.", cmd: "omni install ai" },
    { name: "Editor de Código", desc: "code-server (VS Code in browser)", cmd: "omni install editor" },
    { name: "Ferramentas de Desenvolvimento", desc: "GitHub CLI, wget, curl, fzf, etc.", cmd: "omni install dev" },
    { name: "Módulos Node.js", desc: "Pacotes npm globais do Node.js", cmd: "omni install npm" },
    { name: "Shell ZSH", desc: "ZSH + Oh My Zsh + 10 plugins", cmd: "omni install shell" },
    { name: "Interface Termux", desc: "Fonte, Cursor, Extra-keys, Banner", cmd: "omni install ui" },
    { name: "Automação", desc: "Ferramentas de Automação (n8n)", cmd: "omni install auto" },
    { name: "CLIs de Deploy", desc: "Vercel, Railway, Netlify", cmd: "omni install deploy" },
  ];

  const commands = [
    { cmd: "omni --version", desc: "Mostrar versão atual" },
    { cmd: "omni brain", desc: "Segundo cérebro — salvar e pesquisar memórias" },
    { cmd: "omni env", desc: "Gerenciar variáveis de ambiente" },
    { cmd: "omni install", desc: "Instalar módulos e pacotes" },
    { cmd: "omni show", desc: "Mostrar documentação de qualquer ferramenta" },
    { cmd: "omni doctor", desc: "Diagnosticar ambiente Termux & Omni (30+ verificações)" },
    { cmd: "omni update", desc: "Atualizar módulos ou framework" },
    { cmd: "omni uninstall", desc: "Remover módulos instalados" },
    { cmd: "omni reinstall", desc: "Desinstalar + instalar módulos" },
    { cmd: "omni voice", desc: "Fala-para-agente via microfone" },
    { cmd: "omni open", desc: "Abrir documentação no navegador" },
    { cmd: "omni list", desc: "Listar ferramentas disponíveis nos módulos" },
    { cmd: "omni pg", desc: "Gerenciador de banco de dados PostgreSQL" },
    { cmd: "omni init", desc: "Configurar projetos existentes" },
  ];

  return (
    <Layout>
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold font-mono mb-4">OMNI CATALYST</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Ambiente de Desenvolvimento Modular para Termux (Android). Automatize instalações,
            atualizações e configurações com comandos simples.
          </p>

          {/* Quick Install */}
          <div className="bg-card border border-accent/50 rounded-lg p-6 mb-12">
            <h3 className="font-bold font-mono mb-4">Instalação Rápida</h3>
            <div className="space-y-3">
              <CodeBlock
                code={`bash -c "$(curl -fsSL https://raw.githubusercontent.com/israel676767/omni/main/install.sh)"`}
                language="bash"
                title="quick install"
              />
              <p className="text-center text-xs text-muted-foreground">ou</p>
              <CodeBlock
                code={`npm install -g omni-catalyst`}
                language="bash"
                title="npm install"
              />
            </div>
          </div>

          {/* Modules Grid */}
          <h2 className="text-2xl font-bold font-mono mb-6">Módulos</h2>
          <p className="text-muted-foreground mb-8">
            Clique em um módulo para ver todas as ferramentas incluídas
          </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            {modules.map((module, i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-lg p-6 hover:border-accent/50 transition-colors"
              >
                <h3 className="font-bold font-mono mb-2">{module.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {module.desc}
                </p>
                <CodeBlock code={module.cmd} language="bash" />
              </div>
            ))}
          </div>

          {/* Main Commands */}
          <h2 className="text-2xl font-bold font-mono mb-6">Comandos Principais</h2>
          <p className="text-muted-foreground mb-8">
            Clique em qualquer comando para ver a documentação completa
          </p>

          <div className="bg-card border border-border rounded-lg overflow-hidden mb-12">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <tbody>
                  {commands.map((item, i) => (
                    <tr
                      key={i}
                      className="border-b border-border hover:bg-secondary/30 transition-colors"
                    >
                      <td className="py-3 px-4 font-mono text-accent">
                        {item.cmd}
                      </td>
                      <td className="py-3 px-4 text-muted-foreground">
                        {item.desc}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Detailed Commands */}
          <h2 className="text-2xl font-bold font-mono mb-6">Comandos Detalhados</h2>

          {/* reinstall */}
          <div className="bg-card border border-border rounded-lg p-6 mb-6">
            <h3 className="font-bold font-mono text-accent mb-2">omni reinstall</h3>
            <p className="text-muted-foreground mb-4">
              Reinstalar módulos ou ferramentas específicas — desinstala e instala do zero.
            </p>
            <CodeBlock
              code={`omni reinstall                # Mostrar ajuda
omni reinstall <target>       # Reinstalar alvo específico
omni reinstall <target> --tool1 --tool2  # Reinstalar ferramentas específicas`}
              language="bash"
              title="terminal"
            />
            <div className="mt-4">
              <p className="text-sm text-muted-foreground">Exemplos:</p>
              <CodeBlock
                code={`omni reinstall ai --opencode --ollama       # Reinstalar apenas OpenCode e Ollama
omni reinstall db --postgresql --sqlite     # Reinstalar apenas PostgreSQL e SQLite
omni reinstall dev --gh --fzf               # Reinstalar apenas gh e fzf`}
                language="bash"
              />
            </div>
          </div>

          {/* voice */}
          <div className="bg-card border border-border rounded-lg p-6 mb-6">
            <h3 className="font-bold font-mono text-accent mb-2">omni voice</h3>
            <p className="text-muted-foreground mb-4">
              Capture voz do microfone, revise no code-server e dispare qualquer agente de IA.
              Suporta 13 agentes, seleção de idioma, modo raw e clipboard automático.
            </p>
            <CodeBlock
              code={`omni voice                     # Mostrar ajuda
 omni voice opencode             # Capturar → code-server → opencode run
 omni voice text                 # Capturar → code-server → stdout
 omni voice '!'                  # Atalho para "text"
 omni voice claude-code --lang pt-BR  # Português → claude
 omni voice opencode --raw       # Captura direta, sem edição`}
              language="bash"
              title="terminal"
            />
          </div>

          {/* open */}
          <div className="bg-card border border-border rounded-lg p-6 mb-6">
            <h3 className="font-bold font-mono text-accent mb-2">omni open</h3>
            <p className="text-muted-foreground mb-4">
              Abrir documentação oficial no navegador.
            </p>
            <CodeBlock
              code={`omni open                     # Mostrar ajuda
omni open <target>            # Abrir documentação oficial no navegador
omni open omni                # Abre https://omni-catalyst.vercel.app`}
              language="bash"
              title="terminal"
            />
            <p className="text-sm text-muted-foreground mt-4">
              Alvos: <code className="text-accent">omni</code>, <code className="text-accent">lang</code>, <code className="text-accent">db</code>, <code className="text-accent">ai</code>, <code className="text-accent">editor</code>, <code className="text-accent">dev</code>, <code className="text-accent">npm</code>, <code className="text-accent">shell</code>, <code className="text-accent">ui</code>, <code className="text-accent">auto</code>, <code className="text-accent">deploy</code>
            </p>
          </div>

          {/* pg */}
          <div className="bg-card border border-border rounded-lg p-6 mb-6">
            <h3 className="font-bold font-mono text-accent mb-2">omni pg</h3>
            <p className="text-muted-foreground mb-4">
              Gerenciador de banco de dados PostgreSQL.
            </p>
            <CodeBlock
              code={`omni pg                       # Mostrar ajuda
omni pg start                 # Iniciar servidor
omni pg stop                  # Parar servidor
omni pg restart               # Reiniciar servidor
omni pg status                # Verificar status
omni pg init                  # Inicializar banco de dados
omni pg create <name>         # Criar banco de dados
omni pg drop <name>           # Remover banco de dados
omni pg list                  # Listar bancos de dados
omni pg shell                 # Abrir console psql`}
              language="bash"
              title="terminal"
            />
          </div>

          {/* init */}
          <div className="bg-card border border-border rounded-lg p-6 mb-6">
            <h3 className="font-bold font-mono text-accent mb-2">omni init</h3>
            <p className="text-muted-foreground mb-4">
              Configurar projetos existentes com dependências, estrutura de pastas e ferramentas predefinidas.
            </p>
            <CodeBlock
              code={`omni init                     # Detectar tipo de projeto automaticamente e configurar
omni init <template>          # Configurar com template específico`}
              language="bash"
              title="terminal"
            />
            <p className="text-sm text-muted-foreground mt-4 mb-2">Templates disponíveis:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              {[
                { name: "next", desc: "Next.js com Turbopack, TypeScript, Tailwind CSS" },
                { name: "react", desc: "React + Vite com estrutura moderna" },
                { name: "nest", desc: "NestJS com TypeORM e autenticação" },
                { name: "express", desc: "Express API com TypeScript + TypeORM + migrations" },
              ].map((tpl) => (
                <div key={tpl.name} className="bg-background border border-border rounded p-3">
                  <span className="font-mono text-accent font-bold">{tpl.name}</span>
                  <p className="text-muted-foreground mt-1">{tpl.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* GitHub Link */}
          <div className="bg-card border border-border rounded-lg p-8 text-center">
            <h3 className="text-xl font-bold font-mono mb-4">
              Ver Documentação Completa
            </h3>
            <p className="text-muted-foreground mb-6">
              Explore o repositório completo do Omni no GitHub para documentação
              detalhada e exemplos.
            </p>
            <a
              href="https://github.com/israel676767/omni"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>Ver no GitHub</Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
