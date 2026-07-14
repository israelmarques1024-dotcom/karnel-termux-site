import CodeBlock from "@/components/CodeBlock";
import { AnimatedSection } from "@/components/AnimatedSection";

const modules = [
  { name: "Language Packages", desc: "Node, Python, Perl, PHP, Rust, C/C++, Go", cmd: "karnel install lang" },
  { name: "Databases", desc: "PostgreSQL, MariaDB, SQLite, MongoDB, Redis", cmd: "karnel install db" },
  { name: "AI Tools", desc: "30 agents (OpenCode, Claude, Gemini, Ollama, etc.)", cmd: "karnel install ai" },
  { name: "Code Editor", desc: "code-server (VS Code in browser)", cmd: "karnel install editor" },
  { name: "Dev Tools", desc: "GitHub CLI, wget, curl, fzf, etc.", cmd: "karnel install dev" },
  { name: "Node.js Modules", desc: "Global npm packages (TypeScript, NestJS, Prettier)", cmd: "karnel install npm" },
  { name: "ZSH Shell", desc: "ZSH + Oh My Zsh + 10 plugins", cmd: "karnel install shell" },
  { name: "Termux UI", desc: "Font, Cursor, Extra-keys, Banner", cmd: "karnel install ui" },
  { name: "Voice Command", desc: "Speech-to-agent via Termux:API", cmd: "karnel install voice" },
  { name: "Automation", desc: "n8n and automation tools", cmd: "karnel install auto" },
  { name: "Deploy CLIs", desc: "Vercel, Railway, Netlify", cmd: "karnel install deploy" },
];

const commands = [
  { cmd: "karnel --version", desc: "Show current version" },
  { cmd: "karnel brain", desc: "Second brain — save and search memories" },
  { cmd: "karnel env", desc: "Manage environment variables" },
  { cmd: "karnel ia", desc: "Manage AI agents, sessions and routes" },
  { cmd: "karnel install", desc: "Install modules and packages" },
  { cmd: "karnel show", desc: "Show documentation for any tool" },
  { cmd: "karnel doctor", desc: "Diagnose Termux & Karnel environment (30+ checks)" },
  { cmd: "karnel start", desc: "Start services (editor, etc.)" },
  { cmd: "karnel update", desc: "Update modules or framework" },
  { cmd: "karnel uninstall", desc: "Remove installed modules" },
  { cmd: "karnel reinstall", desc: "Uninstall + install modules" },
  { cmd: "karnel voice", desc: "Speech-to-agent via microphone" },
  { cmd: "karnel open", desc: "Open documentation in browser" },
  { cmd: "karnel list", desc: "List available tools in modules" },
  { cmd: "karnel pg", desc: "PostgreSQL database manager" },
  { cmd: "karnel init", desc: "Initialize projects with templates" },
  { cmd: "karnel backup", desc: "Full Termux backup (configs + packages + tools)" },
  { cmd: "karnel backup --cloud", desc: "Backup + upload to Google Drive" },
  { cmd: "karnel restore", desc: "Restore latest backup" },
  { cmd: "karnel restore --cloud", desc: "Restore from Google Drive" },
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

export default function KarnelDocs() {
  return (
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h1 className="text-4xl font-bold font-mono mb-4">KARNEL TERMUX</h1>
            <p className="text-lg text-muted-foreground mb-8">
               Modular development environment for Termux (Android). Automate installs,
               updates and configurations with simple commands.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="card-hover bg-card border border-accent/50 rounded-lg p-6 mb-12">
              <h3 className="font-bold font-mono mb-4">Quick Install</h3>
              <div className="space-y-3">
                <CodeBlock
                  code={`bash -c "$(curl -fsSL https://raw.githubusercontent.com/israelmarques1024-dotcom/karnel-termux/main/install.sh)"`}
                  language="bash"
                  title="quick install"
                />
                <p className="text-center text-xs text-muted-foreground">ou</p>
                <CodeBlock
                  code={`npm install -g karnel-termux`}
                  language="bash"
                  title="npm install"
                />
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <h2 className="text-2xl font-bold font-mono mb-6">Modules</h2>
            <p className="text-muted-foreground mb-8">
              Click a module to see all included tools
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
            <h2 className="text-2xl font-bold font-mono mb-6">Main Commands</h2>
            <p className="text-muted-foreground mb-8">
              Click any command to see full documentation
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
            <h2 className="text-2xl font-bold font-mono mb-6">Detailed Commands</h2>
          </AnimatedSection>

          {[
            {
              title: "karnel backup",
              desc: "Full Termux backup — saves configs, installed packages, and Karnel tools to an archive. Optional upload to Google Drive via rclone (free).",
              code: `karnel backup                    # Local backup (configs + packages + tools)\nkarnel backup --cloud           # Backup + upload to Google Drive\nkarnel restore                  # Restore latest backup\nkarnel restore --cloud          # Restore from Google Drive`,
              extra: { label: "Backup includes:", code: "• Full package list (dpkg)\n• Karnel tools manifest\n• Shell configs (.bashrc, .zshrc, .profile)\n• Termux settings (fonts, colors)\n• SSH keys\n• App configs (~/.config)\n• APT repositories" }
            },
            {
              title: "karnel reinstall",
              desc: "Reinstall specific modules or tools — uninstalls and installs from scratch.",
              code: `karnel reinstall                # Show help\nkarnel reinstall <target>       # Reinstall specific target\nkarnel reinstall <target> --tool1 --tool2  # Reinstall specific tools`,
              extra: { label: "Examples:", code: `karnel reinstall ai --opencode --ollama       # Reinstall only OpenCode and Ollama\nkarnel reinstall db --postgresql --sqlite     # Reinstall only PostgreSQL and SQLite\nkarnel reinstall dev --gh --fzf               # Reinstall only gh and fzf` }
            },
            {
              title: "karnel voice",
              desc: "Capture voice from microphone, review in code-server, and trigger any AI agent. Supports 15 agents, language selection, raw mode, and auto-clipboard.",
              code: `karnel voice                     # Show help\nkarnel voice opencode             # Capture → code-server → opencode run\nkarnel voice text                 # Capture → code-server → stdout\nkarnel voice '!'                  # Shortcut for "text"\nkarnel voice claude-code --lang en-US  # English → claude\nkarnel voice opencode --raw       # Direct capture, no editing`
            },
            {
              title: "karnel open",
              desc: "Open official documentation in browser.",
              code: `karnel open                     # Show help\nkarnel open <target>            # Open official docs in browser\nkarnel open karnel                # Opens https://kerneltermux.vercel.app`,
              extra: { label: null, code: null }
            },
            {
              title: "karnel pg",
              desc: "PostgreSQL database manager.",
              code: `karnel pg                       # Show help\nkarnel pg start                 # Start server\nkarnel pg stop                  # Stop server\nkarnel pg restart               # Restart server\nkarnel pg status                # Check status\nkarnel pg init                  # Initialize database\nkarnel pg create <name>         # Create database\nkarnel pg drop <name>           # Drop database\nkarnel pg list                  # List databases\nkarnel pg shell                 # Open psql console`
            },
            {
              title: "karnel init",
              desc: "Configure existing projects with dependencies, folder structure, and predefined tools.",
              code: `karnel init                     # Auto-detect project type and configure\nkarnel init <template>          # Configure with specific template`,
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
                    <p className="text-sm text-muted-foreground mb-3">Available templates:</p>
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

          <AnimatedSection delay={1500}>
            <div className="card-hover bg-card border border-border rounded-xl p-8 text-center">
              <h3 className="text-xl font-bold font-mono mb-2">Backup Documentation</h3>
              <p className="text-muted-foreground mb-6">
                Learn how to save and restore your entire Termux.
              </p>
              <a
                href="/karnel/backup"
                className="group inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-lg shadow-accent/25 transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95"
              >
                View Backup Documentation
              </a>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={1600}>
            <div className="card-hover bg-card border border-border rounded-xl p-8 text-center">
              <h3 className="text-xl font-bold font-mono mb-4">View Full Documentation</h3>
              <p className="text-muted-foreground mb-6">
                Explore the full Karnel Termux repository on GitHub for detailed docs and examples.
              </p>
              <a
                href="https://github.com/israelmarques1024-dotcom/karnel-termux"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-lg shadow-accent/25 transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95"
              >
                View on GitHub
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
  );
}
