import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import CodeBlock from "@/components/CodeBlock";

export default function Termux() {
  return (
    <Layout>
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold font-mono mb-4">Termux</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Termux is a Linux terminal emulator for Android that provides a
            secure, lightweight environment for running command-line programs.
            It turns your Android device into a powerful development workstation.
          </p>

          <div className="flex gap-4 mb-12">
            <a
              href="https://github.com/termux/termux-app/releases/download/v0.118.3/termux-app_v0.118.3+github-debug_universal.apk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg">Download Termux</Button>
            </a>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              {
                icon: "🔒",
                title: "Secure",
                desc: "Sandboxed Linux environment with built-in security features",
              },
              {
                icon: "⚡",
                title: "Fast",
                desc: "Lightweight terminal that runs smoothly on any Android device",
              },
              {
                icon: "💪",
                title: "Powerful",
                desc: "Access to a full Linux shell with package manager",
              },
              {
                icon: "🔧",
                title: "Flexible",
                desc: "Install Python, Node.js, Git, and thousands of other packages",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-lg p-6"
              >
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="font-bold font-mono mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Comparison Table */}
          <h2 className="text-2xl font-bold font-mono mb-6">
            Why Use Omni?
          </h2>
          <p className="text-muted-foreground mb-6">
            While Termux works great out of the box, Omni enhances your
            experience with automation and advanced tooling.
          </p>

          <div className="overflow-x-auto mb-12">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-mono font-bold">
                    Feature
                  </th>
                  <th className="text-center py-3 px-4 font-mono font-bold">
                    Termux Only
                  </th>
                  <th className="text-center py-3 px-4 font-mono font-bold">
                    Omni
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    feature: "One-command setup",
                    termux: false,
                    core: true,
                  },
                  {
                    feature: "Module system & CLI framework",
                    termux: false,
                    core: true,
                  },
                  {
                    feature: "Pre-configured AI tools (18+)",
                    termux: false,
                    core: true,
                  },
                  {
                    feature: "Neovim + LSP support (16+ languages)",
                    termux: false,
                    core: true,
                  },
                  {
                    feature: "ZSH + plugins + persistent memory",
                    termux: false,
                    core: true,
                  },
                  {
                    feature: "Centralized update mechanism",
                    termux: false,
                    core: true,
                  },
                  {
                    feature: "Manual pkg installs required",
                    termux: true,
                    core: false,
                  },
                  {
                    feature: "No module system",
                    termux: true,
                    core: false,
                  },
                ].map((row, i) => (
                  <tr
                    key={i}
                    className="border-b border-border hover:bg-card/50 transition-colors"
                  >
                    <td className="py-3 px-4 font-mono text-sm">
                      {row.feature}
                    </td>
                    <td className="py-3 px-4 text-center">
                      {row.termux ? (
                        <X size={18} className="mx-auto text-destructive" />
                      ) : (
                        <Check size={18} className="mx-auto text-accent" />
                      )}
                    </td>
                    <td className="py-3 px-4 text-center">
                      {row.core ? (
                        <Check size={18} className="mx-auto text-accent" />
                      ) : (
                        <X size={18} className="mx-auto text-destructive" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Next Steps */}
          <div className="bg-card border border-border rounded-lg p-8">
            <h3 className="text-xl font-bold font-mono mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-muted-foreground mb-6">
              Download Termux first, then install Omni to unlock the full
              potential of your Android development environment.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a
                href="https://github.com/termux/termux-app/releases/download/v0.118.3/termux-app_v0.118.3+github-debug_universal.apk"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>Download Termux</Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
