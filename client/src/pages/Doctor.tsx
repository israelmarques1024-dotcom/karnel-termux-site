import CodeBlock from "@/components/CodeBlock";
import { AnimatedSection } from "@/components/AnimatedSection";

const checks = [
  { num: 1, title: "System Information", desc: "Android version, Termux version, CPU architecture" },
  { num: 2, title: "System Resources", desc: "Available disk space, total and available RAM, low memory warnings" },
  { num: 3, title: "Storage and Permissions", desc: "Shared storage accessibility, Karnel path write permissions, directory integrity" },
  { num: 4, title: "Languages and Critical Tools", desc: "Checks git, ripgrep, jq, curl, tar, Node.js, Python, Rust, Go, Clang, Make" },
  { num: 5, title: "Package Manager Health", desc: "dpkg audit, held packages, APT sources validation" },
  { num: 6, title: "Node.js and NPM", desc: "Node version, NPM version, global prefix permissions, cache size" },
  { num: 7, title: "Python Environment", desc: "Python interpreter detection, pip availability, venv module" },
  { num: 8, title: "PostgreSQL Database", desc: "PostgreSQL installation, data directory, runtime status" },
  { num: 9, title: "Karnel Framework", desc: "Karnel version, CLI symlinks, banner installation in shell config" },
  { num: 10, title: "AI Tools Status", desc: "Scans 30 AI tools (opencode, claude, gemini, ollama, etc.)" },
  { num: 11, title: "Shell Configuration", desc: "ZSH/Bash config file existence, syntax validation" },
  { num: 12, title: "Android Compatibility", desc: "Phantom Process Killer detection on Android 12+" },
  { num: 13, title: "Termux:API", desc: "Termux-API package installation check" },
  { num: 14, title: "Git Configuration", desc: "Git user.name and user.email settings" },
  { num: 15, title: "SSH Keys", desc: "SSH key existence for GitHub authentication" },
  { num: 16, title: "Network Connectivity", desc: "HTTP accessibility to GitHub" },
  { num: 17, title: "OpenSSH Server", desc: "SSHD availability (optional)" },
  { num: 18, title: "Disk Health", desc: "Low disk space warning (below 500MB)" },
  { num: 19, title: "Karnel Data Integrity", desc: "Checks KARNEL_CONFIG, KARNEL_CACHE, KARNEL_DATA directories" },
  { num: 20, title: "Report Generation", desc: "Saves detailed Markdown report in KARNEL_DATA/doctor_reports/" },
  { num: 21, title: "ZSH Plugins", desc: "Checks Karnel integration with ZSH plugins" },
  { num: 22, title: "GPU and Hardware", desc: "GPU detection and hardware acceleration" },
  { num: 23, title: "Locale and Encoding", desc: "UTF-8 verification and locale configuration" },
  { num: 24, title: "Battery and Power", desc: "Battery status and power optimizations" },
  { num: 25, title: "API Keys", desc: "Checks API keys configured in environment" },
  { num: 26, title: "Process Health", desc: "Detects zombie and orphan processes" },
  { num: 27, title: "Storage I/O", desc: "Read/write speed test" },
  { num: 28, title: "Network Quality", desc: "Latency, DNS and connectivity" },
  { num: 29, title: "Shell Privacy", desc: "Checks for sensitive data in history" },
  { num: 30, title: "USB and External", desc: "Detects USB devices and external storage" },
];

const autoFixes = [
  "Link shared storage via termux-setup-storage",
  "Install missing packages via pkg install",
  "Fix broken dpkg/apt state",
  "Recreate CLI symlinks for karnel",
  "Fix NPM global directory permissions",
  "Initialize and start PostgreSQL",
  "Generate SSH key for GitHub",
  "Install Karnel banner in shell config",
  "Clean cache and unused packages",
];

export default function Doctor() {
  return (
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h1 className="text-4xl font-bold font-mono mb-4">karnel doctor</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Diagnose your Termux and Karnel environment. Runs 30+ checks on system
              resources, language runtimes, databases, AI tools, shell configuration and more.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="card-hover bg-card border border-accent/50 rounded-lg p-6 mb-12">
              <h3 className="font-bold font-mono mb-4">Uso</h3>
              <CodeBlock code="karnel doctor" language="bash" title="terminal" />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <h2 className="text-2xl font-bold font-mono mb-6">30+ Checks</h2>
            <p className="text-muted-foreground mb-6">
              Cada verificação relata um status — sucesso, aviso ou erro — e pode
              opcionalmente ser corrigida automaticamente.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={250}>
            <div className="card-hover bg-card border border-border rounded-lg overflow-hidden mb-12">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border bg-secondary/30">
                      <th className="text-left py-3 px-4 font-mono w-12">#</th>
                      <th className="text-left py-3 px-4 font-mono">Check</th>
                      <th className="text-left py-3 px-4 font-mono">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {checks.map((check) => (
                      <tr key={check.num} className="border-b border-border hover:bg-accent/5 transition-colors">
                        <td className="py-3 px-4 font-mono text-accent">{check.num}</td>
                        <td className="py-3 px-4 font-mono font-medium">{check.title}</td>
                        <td className="py-3 px-4 text-muted-foreground">{check.desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <h2 className="text-2xl font-bold font-mono mb-6">Auto-Fix Capabilities</h2>
          </AnimatedSection>

          <AnimatedSection delay={350}>
            <div className="card-hover bg-card border border-border rounded-lg p-6 mb-12">
              <p className="text-muted-foreground mb-4">
                Após executar todas as verificações, o <code className="text-accent">karnel doctor</code> apresenta problemas detectados e
                pergunta se você deseja aplicar as correções automáticas. Cada problema tem uma correção
                predefinida ou comando shell.
              </p>
              <p className="text-muted-foreground mb-4">Exemplos de correções automáticas:</p>
              <div className="grid md:grid-cols-2 gap-3 mb-4">
                {autoFixes.map((fix, i) => (
                  <div key={i} className="bg-background border border-border rounded p-3 text-sm text-muted-foreground">
                    {fix}
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={400}>
            <h2 className="text-2xl font-bold font-mono mb-6">Report Output</h2>
          </AnimatedSection>

          <AnimatedSection delay={450}>
            <div className="card-hover bg-card border border-border rounded-lg p-6 mb-12">
              <p className="text-muted-foreground mb-4">
                Um relatório detalhado em Markdown é salvo em:
              </p>
              <CodeBlock
                code={"$KARNEL_DATA/doctor_reports/doctor_report_latest.md"}
                language="bash"
                title="report path"
              />
              <p className="text-muted-foreground mt-4">
                O relatório inclui informações do sistema, uso de recursos, status do PostgreSQL, contagem de ferramentas
                de IA e um resumo de erros, avisos e correções aplicadas.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={500}>
            <h2 className="text-2xl font-bold font-mono mb-6">Example Output</h2>
          </AnimatedSection>

          <AnimatedSection delay={550}>
            <div className="card-hover bg-card border border-border rounded-lg p-6">
              <CodeBlock
                code={`[ KARNEL DOCTOR ]

[✓] Android Version: 14
[✓] Termux Version: 0.118.0
[✓] CPU Architecture: aarch64

── System Resources ──
[✓] Available disk space: 45G
[✓] RAM: Total: 6144 MB | Available: 2800 MB

── Languages & Critical Tools ──
[✓] git: 2.45.0
[✓] node: v22.0.0
[✓] python: 3.12.0
[!] go is not installed

── Summary ──
[✓] Diagnostics completed!
Report saved: /data/data/com.termux/files/home/.local/share/karnel/doctor_reports/doctor_report_latest.md
Found 1 warning(s). System is functional but can be optimized.

── Auto-Fix Options ──
Detected 1 issue(s) that can be automatically fixed:
  1. Install missing: golang

Apply all auto-corrections? [y/N]`}
                language="bash"
                title="sample output"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>
  );
}
