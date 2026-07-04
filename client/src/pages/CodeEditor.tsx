import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Layout from "@/components/Layout";
import CodeBlock from "@/components/CodeBlock";

export default function CodeEditor() {
  const keybindings = [
    { category: "General", bindings: [
      { key: ";", mode: "Normal", desc: "Enter command mode" },
      { key: "jk", mode: "Insert", desc: "Exit insert mode" },
      { key: "<Space>", mode: "Normal", desc: "Leader key" },
    ]},
    { category: "Line Movement", bindings: [
      { key: "<A-j>", mode: "Normal/Insert", desc: "Move line down" },
      { key: "<A-k>", mode: "Normal/Insert", desc: "Move line up" },
    ]},
    { category: "Window Navigation", bindings: [
      { key: "<S-h>", mode: "Normal", desc: "Go to left split / Previous buffer" },
      { key: "<S-l>", mode: "Normal", desc: "Go to right split / Next buffer" },
      { key: "<leader>sv", mode: "Normal", desc: "Split vertically" },
      { key: "<leader>sh", mode: "Normal", desc: "Split horizontally" },
    ]},
    { category: "Search & Navigation", bindings: [
      { key: "<leader>ff", mode: "Normal", desc: "Find files" },
      { key: "<leader>fg", mode: "Normal", desc: "Live grep (search text)" },
      { key: "<leader>fb", mode: "Normal", desc: "Search buffers" },
    ]},
  ];

  const languages = [
    { lang: "JavaScript/TypeScript", lsp: "ts_ls", formatter: "Prettier", features: "Autocompletion, diagnostics, inlay hints" },
    { lang: "Python", lsp: "pyright", formatter: "black", features: "Autocompletion, diagnostics" },
    { lang: "Go", lsp: "gopls", formatter: "gofmt/goimports", features: "Autocompletion, diagnostics" },
    { lang: "Rust", lsp: "rust_analyzer", formatter: "rustfmt", features: "Autocompletion, diagnostics" },
    { lang: "Lua", lsp: "lua-language-server", formatter: "stylua", features: "Autocompletion, diagnostics" },
    { lang: "Bash", lsp: "bashls", formatter: "shfmt", features: "Shell formatting" },
    { lang: "HTML", lsp: "html-lsp", formatter: "Prettier", features: "Auto-tags, completion" },
    { lang: "CSS/Tailwind", lsp: "cssls", formatter: "Prettier", features: "Autocompletion, Tailwind support" },
  ];

  return (
    <Layout>
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold font-mono mb-4">Neovim + NvChad</h1>
          <p className="text-lg text-muted-foreground mb-8">
            A fully configured Neovim setup optimized for Termux on Android.
            Pre-configured language servers, AI assistants, code formatters, and a
            beautiful UI.
          </p>

          <div className="bg-card border border-accent/50 rounded-lg p-6 mb-12">
            <h3 className="font-bold font-mono mb-4">Quick Install</h3>
            <CodeBlock
              code={`omni install editor`}
              language="bash"
              title="terminal"
            />
          </div>

          {/* Features */}
          <h2 className="text-2xl font-bold font-mono mb-6">Features</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {[
              { title: "AI Integration", desc: "Copilot + CodeCompanion w/ Mistral, OpenAI & Anthropic" },
              { title: "LSP Support", desc: "20+ languages with lazy on-demand installation" },
              { title: "Code Formatting", desc: "Prettier, stylua, shfmt, pg_format, black, gofmt, rustfmt" },
              { title: "Telescope", desc: "Fuzzy finder for files, text, and buffers" },
              { title: "Treesitter", desc: "Advanced syntax highlighting + incremental selection" },
              { title: "Beautiful UI", desc: "Eldritch theme, lualine, bufferline, scrollbar" },
            ].map((feature, i) => (
              <div key={i} className="bg-background border border-border rounded p-4">
                <h3 className="font-bold font-mono mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Keybindings */}
          <h2 className="text-2xl font-bold font-mono mb-6">Keybindings</h2>
          <p className="text-muted-foreground mb-6">Leader Key: <code className="bg-background px-2 py-1 rounded text-accent">Space</code></p>

          <Tabs defaultValue="General" className="mb-12">
            <TabsList className="grid w-full grid-cols-4">
              {keybindings.map((cat) => (
                <TabsTrigger key={cat.category} value={cat.category}>
                  {cat.category}
                </TabsTrigger>
              ))}
            </TabsList>

            {keybindings.map((cat) => (
              <TabsContent key={cat.category} value={cat.category}>
                <div className="bg-card border border-border rounded-lg overflow-hidden">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border bg-secondary/30">
                        <th className="text-left py-3 px-4 font-mono">Key</th>
                        <th className="text-left py-3 px-4 font-mono">Mode</th>
                        <th className="text-left py-3 px-4 font-mono">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cat.bindings.map((binding, i) => (
                        <tr key={i} className="border-b border-border hover:bg-secondary/20">
                          <td className="py-3 px-4 font-mono text-accent">{binding.key}</td>
                          <td className="py-3 px-4 font-mono text-sm">{binding.mode}</td>
                          <td className="py-3 px-4 text-muted-foreground">{binding.desc}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </TabsContent>
            ))}
          </Tabs>

          {/* Language Support */}
          <h2 className="text-2xl font-bold font-mono mb-6">Language Support</h2>
          <div className="bg-card border border-border rounded-lg overflow-hidden mb-12">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-secondary/30">
                    <th className="text-left py-3 px-4 font-mono">Language</th>
                    <th className="text-left py-3 px-4 font-mono">LSP</th>
                    <th className="text-left py-3 px-4 font-mono">Formatter</th>
                    <th className="text-left py-3 px-4 font-mono">Features</th>
                  </tr>
                </thead>
                <tbody>
                  {languages.map((lang, i) => (
                    <tr key={i} className="border-b border-border hover:bg-secondary/20">
                      <td className="py-3 px-4 font-mono">{lang.lang}</td>
                      <td className="py-3 px-4 font-mono text-accent text-xs">{lang.lsp}</td>
                      <td className="py-3 px-4 text-sm">{lang.formatter}</td>
                      <td className="py-3 px-4 text-muted-foreground text-sm">{lang.features}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Configuration */}
          <h2 className="text-2xl font-bold font-mono mb-6">Configuration Structure</h2>
          <CodeBlock
            code={`nvim/
├── init.lua                    # Main entry, lazy.nvim bootstrap
├── lazy-lock.json             # Plugin lockfile
└── lua/
    ├── chadrc.lua             # Theme & base46 settings
    ├── mappings.lua           # Custom keybindings
    ├── options.lua            # Neovim options
    ├── configs/
    │   ├── cmp.lua            # Autocompletion config
    │   ├── conform.lua        # Code formatter config
    │   ├── lspconfig.lua      # LSP installer
    │   └── snippets.lua       # Custom snippets
    └── plugins/
        ├── ai/                # AI plugins
        ├── completion/        # Completion plugins
        ├── formatting/        # Formatting plugins
        ├── lsp/               # LSP plugins
        └── ui/                # UI plugins`}
            language="bash"
            title="nvim structure"
          />
        </div>
      </section>
    </Layout>
  );
}
