import CodeBlock from "@/components/CodeBlock";
import { AnimatedSection } from "@/components/AnimatedSection";

const desktopModules = [
  { name: "Languages", desc: "Node.js, Python, Go, Rust, C/C++, PHP, Lua, Java", cmd: "karnel install lang" },
  { name: "Databases", desc: "PostgreSQL, MariaDB, SQLite, MongoDB, Redis", cmd: "karnel install db" },
  { name: "AI Agents", desc: "OpenCode, Ollama, Codex, Gemini CLI, and more", cmd: "karnel install ai" },
  { name: "Dev Tools", desc: "Git, GitHub CLI, curl, fzf, bat, lsd, jq", cmd: "karnel install dev" },
  { name: "Editors", desc: "VS Code, Neovim, Helix", cmd: "karnel install editor" },
  { name: "Shell", desc: "ZSH, Fish, Starship prompt", cmd: "karnel install shell" },
  { name: "Containers", desc: "Docker, Podman, Buildah", cmd: "karnel install container" },
  { name: "Cloud", desc: "AWS CLI, GCP CLI, Azure CLI, Terraform", cmd: "karnel install cloud" },
];

const desktopCommands = [
  { cmd: "karnel install <tool|category>", desc: "Install a tool or all tools in a category (e.g. karnel install lang)" },
  { cmd: "karnel uninstall <tool>", desc: "Uninstall a tool" },
  { cmd: "karnel reinstall <tool>", desc: "Reinstall a tool" },
  { cmd: "karnel list [category]", desc: "List available tools" },
  { cmd: "karnel show <tool>", desc: "Show tool details" },
  { cmd: "karnel open <module>", desc: "Open documentation in browser" },
  { cmd: "karnel init", desc: "Initialize Karnel environment" },
  { cmd: "karnel backup [--cloud]", desc: "Backup configurations" },
  { cmd: "karnel restore [<file>|--cloud]", desc: "Restore configurations" },
  { cmd: "karnel doctor", desc: "Diagnose environment" },
  { cmd: "karnel status", desc: "Check service status" },
  { cmd: "karnel update [tool]", desc: "Update Karnel or a tool" },
  { cmd: "karnel upgrade", desc: "Upgrade system packages" },
  { cmd: "karnel cleanup", desc: "Clean caches and temp files" },
  { cmd: "karnel ask <question>", desc: "Ask AI directly in terminal" },
  { cmd: "karnel pg <cmd>", desc: "PostgreSQL management" },
  { cmd: "karnel brain <cmd>", desc: "Second brain memory manager" },
  { cmd: "karnel ia <cmd>", desc: "AI tool management" },
  { cmd: "karnel env set <key> [value]", desc: "Set environment variable" },
  { cmd: "karnel env list", desc: "List environment variables" },
  { cmd: "karnel version", desc: "Show version" },
  { cmd: "karnel help", desc: "Show help" },
];

const platforms = [
  { os: "Linux", pkg: "apt, dnf, pacman, zypper, apk", status: "✓" },
  { os: "macOS", pkg: "Homebrew", status: "✓" },
  { os: "Windows", pkg: "winget, chocolatey, scoop", status: "✓" },
];

export default function KarnelDesktopDocs() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h1 className="text-4xl font-bold font-mono mb-4">KARNEL DESKTOP CLI</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Cross-platform tool manager for Linux, macOS, and Windows. Single binary, zero dependencies.
            Manages developer tools using the native package manager on each OS.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="card-hover bg-card border border-accent/50 rounded-lg p-6 mb-12">
            <h3 className="font-bold font-mono mb-4">Installation</h3>
            <div className="space-y-3">
              <CodeBlock
                code={`# Download binary for your platform from releases
chmod +x karnel
sudo mv karnel /usr/local/bin/`}
                language="bash"
                title="manual install"
              />
              <p className="text-center text-xs text-muted-foreground">or build from source</p>
              <CodeBlock
                code={`git clone https://github.com/israelmarques1024-dotcom/karnel-termux-desktop-cli
cd karnel-termux-desktop-cli
go build -o karnel .`}
                language="bash"
                title="build from source"
              />
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <h2 className="text-2xl font-bold font-mono mb-6">Platform Support</h2>
          <p className="text-muted-foreground mb-8">Uses native package manager on each OS</p>
        </AnimatedSection>

        <AnimatedSection delay={250}>
          <div className="card-hover bg-card border border-border rounded-lg overflow-hidden mb-12">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-background/50 border-b border-border">
                    <th className="py-3 px-4 text-left font-mono font-semibold">OS</th>
                    <th className="py-3 px-4 text-left font-mono font-semibold">Package Managers</th>
                    <th className="py-3 px-4 text-left font-mono font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {platforms.map((p, i) => (
                    <tr key={i} className="border-b border-border hover:bg-accent/5 transition-colors">
                      <td className="py-3 px-4 font-mono">{p.os}</td>
                      <td className="py-3 px-4 text-muted-foreground">{p.pkg}</td>
                      <td className="py-3 px-4 font-mono text-emerald-400">{p.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={300}>
          <h2 className="text-2xl font-bold font-mono mb-6">Categories (Install All at Once)</h2>
          <p className="text-muted-foreground mb-8">
            Use <code className="bg-accent/10 px-2 py-0.5 rounded font-mono">{"karnel install <category>"}</code> to install all tools in a category
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          {desktopModules.map((module, i) => (
            <AnimatedSection key={i} delay={350 + i * 60}>
              <div className="card-hover bg-card border border-border rounded-lg p-6">
                <h3 className="font-bold font-mono mb-2">{module.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{module.desc}</p>
                <CodeBlock code={module.cmd} language="bash" />
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={800}>
          <h2 className="text-2xl font-bold font-mono mb-6">All Commands</h2>
          <p className="text-muted-foreground mb-8">21 commands total</p>
        </AnimatedSection>

        <AnimatedSection delay={850}>
          <div className="card-hover bg-card border border-border rounded-lg overflow-hidden mb-12">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <tbody>
                  {desktopCommands.map((item, i) => (
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
          <h2 className="text-2xl font-bold font-mono mb-6">Key Features</h2>
        </AnimatedSection>

        {[
          {
            title: "Category-Based Install",
            desc: "Install entire categories at once: <code className='bg-accent/10 px-1.5 py-0.5 rounded font-mono text-xs'>karnel install lang</code> installs Node, Python, Go, Rust, C/C++, PHP, Lua, Java.",
            code: `karnel install lang      # 8 languages
karnel install db        # 5 databases
karnel install ai        # AI agents
karnel install dev       # 19 dev tools`
          },
          {
            title: "karnel ask",
            desc: "Ask AI directly from terminal using OpenCode. No context switching.",
            code: `karnel ask "How do I fix this error?"
karnel ask "Write a Go HTTP server"`
          },
          {
            title: "karnel brain",
            desc: "Second brain with graph, sync, and reset. Persistent memory across sessions.",
            code: `karnel brain add "Remember to..."
karnel brain search "postgres"
karnel brain graph
karnel brain sync`
          },
          {
            title: "karnel cleanup / upgrade",
            desc: "System maintenance: clean caches, upgrade packages.",
            code: `karnel cleanup    # npm/pip/apt caches + tmp
karnel upgrade    # apt dist-upgrade / brew upgrade`
          },
        ].map((section, i) => (
          <AnimatedSection key={i} delay={1100 + i * 100}>
            <div className="card-hover bg-card border border-border rounded-lg p-6 mb-6">
              <h3 className="font-bold font-mono text-accent mb-2">{section.title}</h3>
              <p className="text-muted-foreground mb-4" dangerouslySetInnerHTML={{ __html: section.desc }} />
              <CodeBlock code={section.code} language="bash" title="terminal" />
            </div>
          </AnimatedSection>
        ))}

        <AnimatedSection delay={1500}>
          <div className="card-hover bg-card border border-border rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold font-mono mb-4">View on GitHub</h3>
            <p className="text-muted-foreground mb-6">
              Source code, releases, and issue tracker for Karnel Desktop CLI.
            </p>
            <a
              href="https://github.com/israelmarques1024-dotcom/karnel-termux-desktop-cli"
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