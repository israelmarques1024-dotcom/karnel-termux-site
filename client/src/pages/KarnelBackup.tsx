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
  { cmd: "karnel backup", desc: "Backup local de todas as configs + pacotes + ferramentas" },
  { cmd: "karnel backup --cloud", desc: "Backup + upload para Google Drive (via rclone)" },
  { cmd: "karnel restore", desc: "Restaura o backup mais recente" },
  { cmd: "karnel restore <arquivo>", desc: "Restaura um arquivo de backup específico" },
  { cmd: "karnel restore --cloud", desc: "Restaura do Google Drive" },
  { cmd: "karnel show backup", desc: "Mostra ajuda do backup no terminal" },
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
            <h2 className="text-xl font-bold font-mono mb-4">Comandos</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-mono text-accent">Comando</th>
                    <th className="text-left py-3 px-4 text-muted-foreground">Descrição</th>
                  </tr>
                </thead>
                <tbody>
                  {backupCommands.map((cmd) => (
                    <tr key={cmd.cmd} className="border-b border-border/50">
                      <td className="py-3 px-4 font-mono text-accent">{cmd.cmd}</td>
                      <td className="py-3 px-4 text-muted-foreground">{cmd.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <div className="card-hover bg-card border border-border rounded-lg p-6">
            <h2 className="text-xl font-bold font-mono mb-4">Uso Básico</h2>
            <CodeBlock
              code={`karnel backup                    # Backup local completo
karnel backup --cloud           # Backup + upload Google Drive
karnel restore                  # Restaura o mais recente
karnel restore --cloud          # Restaura do Google Drive`}
              language="bash"
              title="terminal"
            />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={300}>
          <div className="card-hover bg-card border border-border rounded-lg p-6">
            <h2 className="text-xl font-bold font-mono mb-4">O que é salvo</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              {[
                { icon: Package, label: "Pacotes", desc: "Lista completa do dpkg" },
                { icon: Wrench, label: "Ferramentas", desc: "Manifest das tools Karnel" },
                { icon: Terminal, label: "Shell", desc: ".bashrc, .zshrc, .profile" },
                { icon: Palette, label: "Termux", desc: "Fontes, cores, propriedades" },
                { icon: Key, label: "SSH", desc: "Chaves e configs" },
                { icon: FolderClosed, label: "Configs", desc: "~/.config completo" },
                { icon: Radio, label: "APT", desc: "Repositórios sources.list" },
                { icon: Cloud, label: "Cloud", desc: "Upload pro Google Drive" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="bg-background border border-border rounded p-3 flex items-start gap-3">
                    <Icon className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                    <div>
                      <span className="font-bold text-accent">{item.label}</span>
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
            <h2 className="text-xl font-bold font-mono mb-4">Cloud (gratuito)</h2>
            <p className="text-muted-foreground mb-4">
              O backup usa <strong>rclone</strong> — ferramenta open-source que conecta
              Google Drive, Dropbox, OneDrive e outros. Zero custo de servidor.
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
              O restore extrai as configurações, restaura a lista de pacotes
              e reinstala automaticamente todas as ferramentas Karnel.
            </p>
            <CodeBlock
              code={`karnel restore                  # Restaura o backup mais recente
karnel restore ~/backup.tar.gz   # Restaura um arquivo específico
karnel restore --cloud           # Baixa do Google Drive e restaura`}
              language="bash"
              title="terminal"
            />
            <div className="mt-4 p-3 bg-yellow-500/10 border border-yellow-500/20 rounded text-sm text-muted-foreground">
              O restore de pacotes (dpkg) pode levar alguns minutos.
              Após finalizar, reinicie o Termux ou execute <code className="text-accent">source ~/.zshrc</code>.
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
