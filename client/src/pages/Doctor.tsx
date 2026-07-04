import Layout from "@/components/Layout";
import CodeBlock from "@/components/CodeBlock";

export default function Doctor() {
  const checks = [
    { num: 1, title: "System Info", desc: "Android version, Termux version, CPU architecture" },
    { num: 2, title: "System Resources", desc: "Available disk space, total and available RAM, low-memory warnings" },
    { num: 3, title: "Storage & Permissions", desc: "Shared storage accessibility, Omni path write permissions, Omni directory integrity" },
    { num: 4, title: "Languages & Critical Tools", desc: "Checks for git, ripgrep, jq, curl, tar, Node.js, Python, Rust, Go, Clang, Make" },
    { num: 5, title: "Package Manager Health", desc: "dpkg audit, held packages, APT sources validation" },
    { num: 6, title: "Node.js & NPM", desc: "Node version, NPM version, global prefix permissions, cache size" },
    { num: 7, title: "Python Environment", desc: "Python interpreter detection, pip availability, venv module" },
    { num: 8, title: "PostgreSQL Database", desc: "PostgreSQL installation, data directory, running status" },
    { num: 9, title: "Omni Framework", desc: "Omni version, CLI symlinks, banner installation in shell config" },
    { num: 10, title: "AI Tools Status", desc: "Scans for 30+ AI tools (opencode, claude, gemini, ollama, etc.)" },
    { num: 11, title: "Shell Configuration", desc: "ZSH/Bash config file existence, syntax validation" },
    { num: 12, title: "Android Compatibility", desc: "Phantom Process Killer detection on Android 12+" },
    { num: 13, title: "Termux:API", desc: "Termux-API package installation check" },
    { num: 14, title: "Git Configuration", desc: "Git user.name and user.email settings" },
    { num: 15, title: "SSH Keys", desc: "SSH key existence for GitHub authentication" },
    { num: 16, title: "Network Connectivity", desc: "HTTP reachability to GitHub" },
    { num: 17, title: "OpenSSH Server", desc: "SSHD availability (optional)" },
    { num: 18, title: "Disk Health", desc: "Low disk space warning (under 500MB)" },
    { num: 19, title: "Omni Data Integrity", desc: "Verifies OMNI_CONFIG, OMNI_CACHE, OMNI_DATA directories" },
    { num: 20, title: "Report Generation", desc: "Saves a detailed Markdown report to OMNI_DATA/doctor_reports/" },
  ];

  return (
    <Layout>
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold font-mono mb-4">omni doctor</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Diagnose your Termux and Omni environment. Runs 20 checks across system
            resources, language runtimes, databases, AI tools, shell config, and more.
          </p>

          <div className="bg-card border border-accent/50 rounded-lg p-6 mb-12">
            <h3 className="font-bold font-mono mb-4">Usage</h3>
            <CodeBlock code="omni doctor" language="bash" title="terminal" />
          </div>

          <h2 className="text-2xl font-bold font-mono mb-6">The 20 Checks</h2>
          <p className="text-muted-foreground mb-6">
            Each check reports a status — success, warning, or error — and can
            optionally be auto-fixed.
          </p>

          <div className="bg-card border border-border rounded-lg overflow-hidden mb-12">
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
                    <tr key={check.num} className="border-b border-border hover:bg-secondary/20 transition-colors">
                      <td className="py-3 px-4 font-mono text-accent">{check.num}</td>
                      <td className="py-3 px-4 font-mono font-medium">{check.title}</td>
                      <td className="py-3 px-4 text-muted-foreground">{check.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <h2 className="text-2xl font-bold font-mono mb-6">Auto-Fix Capability</h2>

          <div className="bg-card border border-border rounded-lg p-6 mb-12">
            <p className="text-muted-foreground mb-4">
              After running all checks, <code className="text-accent">omni doctor</code> presents detected issues and
              asks if you want to apply auto-corrections. Each issue has a pre-defined fix
              callback or shell command.
            </p>
            <p className="text-muted-foreground mb-4">Examples of auto-fixes:</p>
            <div className="grid md:grid-cols-2 gap-3 mb-4">
              {[
                "Link shared storage via termux-setup-storage",
                "Install missing packages via pkg install",
                "Fix broken dpkg/apt state",
                "Recreate CLI symlinks for core/omni",
                "Fix NPM global directory permissions",
                "Initialize and start PostgreSQL",
                "Generate SSH key for GitHub",
                "Install Omni banner in shell config",
                "Clean cache and unused packages",
              ].map((fix, i) => (
                <div key={i} className="bg-background border border-border rounded p-3 text-sm text-muted-foreground">
                  {fix}
                </div>
              ))}
            </div>
          </div>

          <h2 className="text-2xl font-bold font-mono mb-6">Report Output</h2>

          <div className="bg-card border border-border rounded-lg p-6 mb-12">
            <p className="text-muted-foreground mb-4">
              A detailed Markdown report is saved to:
            </p>
            <CodeBlock
              code={"$OMNI_DATA/doctor_reports/doctor_report_latest.md"}
              language="bash"
              title="report path"
            />
            <p className="text-muted-foreground mt-4">
              The report includes system info, resource usage, PostgreSQL status, AI
              tool count, and a summary of errors, warnings, and fixes applied.
            </p>
          </div>

          <h2 className="text-2xl font-bold font-mono mb-6">Example Output</h2>

          <div className="bg-card border border-border rounded-lg p-6">
            <CodeBlock
              code={`◈ OMNI DOCTOR ◈

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
Report saved: /data/data/com.termux/files/home/.local/share/omni/doctor_reports/doctor_report_latest.md
Found 1 warning(s). System is functional but can be optimized.

── Auto-Fix Options ──
Detected 1 issue(s) that can be automatically fixed:
  1. Install missing: golang

Apply all auto-corrections? [y/N]`}
              language="bash"
              title="sample output"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}
