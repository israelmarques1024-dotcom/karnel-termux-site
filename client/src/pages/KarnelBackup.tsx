import CodeBlock from "@/components/CodeBlock";
import { AnimatedSection } from "@/components/AnimatedSection";
import {
  Package,
  Wrench,
  Terminal,
  Palette,
  Key,
  FolderClosed,
  Radio,
  Cloud,
} from "lucide-react";

const backupCommands = [
  {
    cmd: "karnel backup",
    desc: "Local backup of all configs + packages + tools",
  },
  {
    cmd: "karnel backup --cloud",
    desc: "Backup + upload to Google Drive (via rclone)",
  },
  { cmd: "karnel restore", desc: "Restore most recent backup" },
  { cmd: "karnel restore <file>", desc: "Restore a specific backup file" },
  { cmd: "karnel restore --cloud", desc: "Restore from Google Drive" },
  { cmd: "karnel show backup", desc: "Show backup help in terminal" },
];

export default function KarnelBackupPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <div className="space-y-8">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold font-mono mb-4">
              <span className="text-accent">backup</span> / restore
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Salve e restaure todo o seu ambiente Termux com um comando.
              Configurações, pacotes instalados, ferramentas Karnel e mais.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="card-hover bg-card border border-border rounded-lg p-6">
            <h2 className="text-xl font-bold font-mono mb-4">Commands</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-mono text-accent">
                      Command
                    </th>
                    <th className="text-left py-3 px-4 text-muted-foreground">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {backupCommands.map(cmd => (
                    <tr key={cmd.cmd} className="border-b border-border/50">
                      <td className="py-3 px-4 font-mono text-accent">
                        {cmd.cmd}
                      </td>
                      <td className="py-3 px-4 text-muted-foreground">
                        {cmd.desc}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <div className="card-hover bg-card border border-border rounded-lg p-6">
            <h2 className="text-xl font-bold font-mono mb-4">Basic Usage</h2>
            <CodeBlock
              code={`karnel backup                    # Full local backup
karnel backup --cloud           # Backup + upload to Google Drive
karnel restore                  # Restore most recent
karnel restore --cloud          # Restore from Google Drive`}
              language="bash"
              title="terminal"
            />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={300}>
          <div className="card-hover bg-card border border-border rounded-lg p-6">
            <h2 className="text-xl font-bold font-mono mb-4">What Is Saved</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              {[
                {
                  icon: Package,
                  label: "Packages",
                  desc: "Full dpkg package list",
                },
                { icon: Wrench, label: "Tools", desc: "Karnel tools manifest" },
                {
                  icon: Terminal,
                  label: "Shell",
                  desc: ".bashrc, .zshrc, .profile",
                },
                {
                  icon: Palette,
                  label: "Termux",
                  desc: "Fonts, colors, properties",
                },
                { icon: Key, label: "SSH", desc: "Keys and configs" },
                {
                  icon: FolderClosed,
                  label: "Configs",
                  desc: "~/.config complete",
                },
                {
                  icon: Radio,
                  label: "APT",
                  desc: "sources.list repositories",
                },
                { icon: Cloud, label: "Cloud", desc: "Upload to Google Drive" },
              ].map(item => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="bg-background border border-border rounded p-3 flex items-start gap-3"
                  >
                    <Icon className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                    <div>
                      <span className="font-bold text-accent">
                        {item.label}
                      </span>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={400}>
          <div className="card-hover bg-card border border-border rounded-lg p-6">
            <h2 className="text-xl font-bold font-mono mb-4">
              Cloud (gratuito)
            </h2>
            <p className="text-muted-foreground mb-4">
              Backup uses <strong>rclone</strong> — an open-source tool that
              connects to Google Drive, Dropbox, OneDrive and others. Zero
              server cost.
            </p>
            <CodeBlock
              code={`karnel backup --cloud             # Primeira vez: instala rclone
rclone config                     # Configura o remote "karnel"
karnel backup --cloud             # Agora sobe pro Google Drive`}
              language="bash"
              title="terminal"
            />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={500}>
          <div className="card-hover bg-card border border-border rounded-lg p-6">
            <h2 className="text-xl font-bold font-mono mb-4">Restore</h2>
            <p className="text-muted-foreground mb-4">
              Restore extracts the configs, restores the package list, and
              automatically reinstalls all Karnel tools.
            </p>
            <CodeBlock
              code={`karnel restore                  # Restaura o backup mais recente
karnel restore ~/backup.tar.gz   # Restaura um arquivo específico
karnel restore --cloud           # Baixa do Google Drive e restaura`}
              language="bash"
              title="terminal"
            />
            <div className="mt-4 p-3 bg-yellow-500/10 border border-yellow-500/20 rounded text-sm text-muted-foreground">
              Package restore (dpkg) may take a few minutes. After finishing,
              restart Termux or run{" "}
              <code className="text-accent">source ~/.zshrc</code>.
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
