import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import CodeBlock from "@/components/CodeBlock";

export default function CoreTermux() {
  const modules = [
    { name: "Language Packages", desc: "Node, Python, Perl, PHP, Rust, C/C++, Go", cmd: "omni install lang" },
    { name: "Databases", desc: "PostgreSQL, MariaDB, SQLite, MongoDB", cmd: "omni install db" },
    { name: "AI Tools", desc: "OpenCode, Gentle AI, Claude Code, etc.", cmd: "omni install ai" },
    { name: "Code Editor", desc: "Neovim + NvChad + Plugins", cmd: "omni install editor" },
    { name: "Development Tools", desc: "GitHub CLI, wget, curl, fzf, etc.", cmd: "omni install dev" },
    { name: "Node.js Modules", desc: "Node.js global npm packages", cmd: "omni install npm" },
    { name: "ZSH Shell", desc: "ZSH + Oh My Zsh + 10 plugins", cmd: "omni install shell" },
    { name: "Termux UI", desc: "Font, Cursor, Extra-keys, Banner", cmd: "omni install ui" },
    { name: "Automation", desc: "Automation Tools (n8n)", cmd: "omni install auto" },
    { name: "Deploy CLIs", desc: "Vercel, Railway, Netlify", cmd: "omni install deploy" },
  ];

  const commands = [
    { cmd: "omni --version", desc: "Show current version" },
    { cmd: "omni brain", desc: "Second brain — save and search memories" },
    { cmd: "omni env", desc: "Manage environment variables" },
    { cmd: "omni install", desc: "Install modules and packages" },
    { cmd: "omni show", desc: "Show documentation for any tool" },
    { cmd: "omni doctor", desc: "Diagnose Termux & Omni environment (20 checks)" },
    { cmd: "omni update", desc: "Update modules or framework" },
    { cmd: "omni uninstall", desc: "Remove installed modules" },
    { cmd: "omni reinstall", desc: "Uninstall + install modules" },
    { cmd: "omni voice", desc: "Speech-to-agent via microphone" },
    { cmd: "omni open", desc: "Open documentation in browser" },
    { cmd: "omni list", desc: "List available tools in modules" },
    { cmd: "omni pg", desc: "PostgreSQL database manager" },
    { cmd: "omni init", desc: "Configure existing projects" },
  ];

  return (
    <Layout>
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold font-mono mb-4">OMNI CATALYST</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Modular Dev Environment for Termux (Android). Automate installations,
            updates, and configurations with simple commands.
          </p>

          {/* Quick Install */}
          <div className="bg-card border border-accent/50 rounded-lg p-6 mb-12">
            <h3 className="font-bold font-mono mb-4">Quick Installation</h3>
            <CodeBlock
              code={`bash -c "$(curl -fsSL https://raw.githubusercontent.com/israel676767/omni/main/install.sh)"`}
              language="bash"
              title="terminal"
            />
          </div>

          {/* Modules Grid */}
          <h2 className="text-2xl font-bold font-mono mb-6">Modules</h2>
          <p className="text-muted-foreground mb-8">
            Click on a module to see all tools included
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
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
          <h2 className="text-2xl font-bold font-mono mb-6">Main Commands</h2>
          <p className="text-muted-foreground mb-8">
            Click on any command to see full documentation
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
          <h2 className="text-2xl font-bold font-mono mb-6">Detailed Commands</h2>

          {/* reinstall */}
          <div className="bg-card border border-border rounded-lg p-6 mb-6">
            <h3 className="font-bold font-mono text-accent mb-2">omni reinstall</h3>
            <p className="text-muted-foreground mb-4">
              Reinstall modules or specific tools — uninstalls then installs from scratch.
            </p>
            <CodeBlock
              code={`omni reinstall                # Show help
omni reinstall <target>       # Reinstall specific target
omni reinstall <target> --tool1 --tool2  # Reinstall specific tools`}
              language="bash"
              title="terminal"
            />
            <div className="mt-4">
              <p className="text-sm text-muted-foreground">Examples:</p>
              <CodeBlock
                code={`omni reinstall ai --opencode --ollama       # Reinstall only OpenCode and Ollama
omni reinstall db --postgresql --sqlite     # Reinstall only PostgreSQL and SQLite
omni reinstall dev --gh --fzf               # Reinstall only gh and fzf`}
                language="bash"
              />
            </div>
          </div>

          {/* voice */}
          <div className="bg-card border border-border rounded-lg p-6 mb-6">
            <h3 className="font-bold font-mono text-accent mb-2">omni voice</h3>
            <p className="text-muted-foreground mb-4">
              Capture voice from the microphone, review it in nvim, and launch an AI agent.
            </p>
            <CodeBlock
              code={`omni voice                    # Show help
omni voice <agent>            # Capture → nvim → launch agent
omni voice text               # Capture → nvim → print to stdout
omni voice !                  # Alias for 'text'`}
              language="bash"
              title="terminal"
            />
          </div>

          {/* open */}
          <div className="bg-card border border-border rounded-lg p-6 mb-6">
            <h3 className="font-bold font-mono text-accent mb-2">omni open</h3>
            <p className="text-muted-foreground mb-4">
              Open official documentation in browser.
            </p>
            <CodeBlock
              code={`omni open                     # Show help
omni open <target>            # Open official documentation in browser
omni open omni                # Opens https://omni-catalyst.vercel.app`}
              language="bash"
              title="terminal"
            />
            <p className="text-sm text-muted-foreground mt-4">
              Targets: <code className="text-accent">omni</code>, <code className="text-accent">lang</code>, <code className="text-accent">db</code>, <code className="text-accent">ai</code>, <code className="text-accent">editor</code>, <code className="text-accent">dev</code>, <code className="text-accent">npm</code>, <code className="text-accent">shell</code>, <code className="text-accent">ui</code>, <code className="text-accent">auto</code>, <code className="text-accent">deploy</code>
            </p>
          </div>

          {/* pg */}
          <div className="bg-card border border-border rounded-lg p-6 mb-6">
            <h3 className="font-bold font-mono text-accent mb-2">omni pg</h3>
            <p className="text-muted-foreground mb-4">
              PostgreSQL database manager.
            </p>
            <CodeBlock
              code={`omni pg                       # Show help
omni pg start                 # Start server
omni pg stop                  # Stop server
omni pg restart               # Restart server
omni pg status                # Check status
omni pg init                  # Initialize database
omni pg create <name>         # Create database
omni pg drop <name>           # Drop database
omni pg list                  # List databases
omni pg shell                 # Open psql console`}
              language="bash"
              title="terminal"
            />
          </div>

          {/* init */}
          <div className="bg-card border border-border rounded-lg p-6 mb-6">
            <h3 className="font-bold font-mono text-accent mb-2">omni init</h3>
            <p className="text-muted-foreground mb-4">
              Configure existing projects with predefined dependencies, folder structure, and tooling.
            </p>
            <CodeBlock
              code={`omni init                     # Auto-detect project type and configure
omni init <template>          # Configure with specific template`}
              language="bash"
              title="terminal"
            />
            <p className="text-sm text-muted-foreground mt-4 mb-2">Available templates:</p>
            <div className="grid grid-cols-2 gap-3 text-sm">
              {[
                { name: "next", desc: "Next.js with Turbopack, TypeScript, Tailwind CSS" },
                { name: "react", desc: "React + Vite with modern structure" },
                { name: "nest", desc: "NestJS with TypeORM and authentication" },
                { name: "express", desc: "Express API with TypeScript + TypeORM + migrations" },
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
              View Full Documentation
            </h3>
            <p className="text-muted-foreground mb-6">
              Explore the complete Omni repository on GitHub for detailed
              documentation and examples.
            </p>
            <a
              href="https://github.com/israel676767/omni"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>View on GitHub</Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
