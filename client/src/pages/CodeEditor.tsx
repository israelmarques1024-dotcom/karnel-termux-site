import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Layout from "@/components/Layout";
import CodeBlock from "@/components/CodeBlock";

export default function CodeEditor() {
  const keybindings = [
    { category: "General", bindings: [
      { key: ";", mode: "Normal", desc: "Enter command mode" },
      { key: "jk", mode: "Insert", desc: "Exit insert mode" },
      { key: "<Space>", mode: "Normal", desc: "Leader key" },
      { key: "K", mode: "Normal", desc: "Hover documentation (LSP)" },
      { key: "gd", mode: "Normal", desc: "Go to definition (LSP)" },
    ]},
    { category: "Line Movement", bindings: [
      { key: "<A-j>", mode: "Normal/Insert", desc: "Move line down" },
      { key: "<A-k>", mode: "Normal/Insert", desc: "Move line up" },
      { key: "<A-S-j>", mode: "Normal/Insert", desc: "Duplicate line down" },
      { key: "<A-S-k>", mode: "Normal/Insert", desc: "Duplicate line up" },
    ]},
    { category: "Window Navigation", bindings: [
      { key: "<S-h>", mode: "Normal", desc: "Go to left split / Previous buffer" },
      { key: "<S-l>", mode: "Normal", desc: "Go to right split / Next buffer" },
      { key: "<S-j>", mode: "Normal", desc: "Go to split below" },
      { key: "<S-k>", mode: "Normal", desc: "Go to split above" },
      { key: "<leader>sv", mode: "Normal", desc: "Split vertically" },
      { key: "<leader>sh", mode: "Normal", desc: "Split horizontally" },
      { key: "<leader>sm", mode: "Normal", desc: "Maximize/minimize split" },
    ]},
    { category: "Search & Navigation", bindings: [
      { key: "<leader>ff", mode: "Normal", desc: "Find files" },
      { key: "<leader>fg", mode: "Normal", desc: "Live grep (search text)" },
      { key: "<leader>fb", mode: "Normal", desc: "Search buffers" },
      { key: "<leader>fh", mode: "Normal", desc: "Search help tags" },
      { key: "<leader>fo", mode: "Normal", desc: "Search old files (recent)" },
      { key: "<leader>fm", mode: "Normal", desc: "Search marks" },
    ]},
    { category: "Git", bindings: [
      { key: "<leader>gs", mode: "Normal", desc: "Git status" },
      { key: "<leader>gb", mode: "Normal", desc: "Git blame line" },
      { key: "<leader>gd", mode: "Normal", desc: "Git diff" },
      { key: "<leader>gl", mode: "Normal", desc: "Git log" },
      { key: "<leader>gc", mode: "Normal", desc: "Git commit" },
    ]},
    { category: "AI & LSP", bindings: [
      { key: "<leader>ca", mode: "Normal", desc: "Code action (LSP)" },
      { key: "<leader>rn", mode: "Normal", desc: "Rename symbol (LSP)" },
      { key: "<leader>wa", mode: "Normal", desc: "Add workspace folder (LSP)" },
      { key: "<leader>wr", mode: "Normal", desc: "Remove workspace folder (LSP)" },
      { key: "<leader>wl", mode: "Normal", desc: "List workspace folders (LSP)" },
      { key: "<leader>cc", mode: "Normal", desc: "Toggle Copilot chat" },
      { key: "<leader>cq", mode: "Normal", desc: "Quick AI question" },
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
            <TabsList className="grid w-full grid-cols-6">
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

          {/* Installation Options */}
          <h2 className="text-2xl font-bold font-mono mb-6">Installation Options</h2>

          <div className="bg-card border border-border rounded-lg p-6 mb-6">
            <h3 className="font-bold font-mono mb-2">Full Install</h3>
            <p className="text-muted-foreground mb-4">
              Installs Neovim, NvChad, Mason LSPs, and all plugins.
            </p>
            <CodeBlock code="omni install editor" language="bash" title="terminal" />
          </div>

          <div className="bg-card border border-border rounded-lg p-6 mb-6">
            <h3 className="font-bold font-mono mb-2">Individual Components</h3>
            <p className="text-muted-foreground mb-4">
              Install only what you need for a lighter setup.
            </p>
            <CodeBlock
              code={`omni install editor --neovim          # Neovim binary only
omni install editor --nvchad          # NvChad config only
omni install editor --neovim --nvchad # Both (same as full install)`}
              language="bash"
              title="terminal"
            />
          </div>

          <div className="bg-card border border-border rounded-lg p-6 mb-12">
            <h3 className="font-bold font-mono mb-2">Post-Install LSPs</h3>
            <p className="text-muted-foreground mb-4">
              Additional language servers can be installed via Mason inside Neovim:
            </p>
            <CodeBlock
              code={`:Mason                          # Open Mason UI
:MasonInstall lua-language-server  # Install specific LSP
:MasonUninstall pyright            # Remove LSP`}
              language="vim"
              title="neovim"
            />
          </div>

          {/* Plugin Management */}
          <h2 className="text-2xl font-bold font-mono mb-6">Plugin Management</h2>

          <div className="bg-card border border-border rounded-lg p-6 mb-6">
            <p className="text-muted-foreground mb-4">
              The editor uses <code className="text-accent">lazy.nvim</code> as its plugin manager.
              Plugins are organized by category under <code className="text-accent">nvim/lua/plugins/</code>.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              { title: "Add a Plugin", code: `-- nvim/lua/plugins/formatting/conform.lua
return {
  "stevearc/conform.nvim",
  opts = {
    formatters_by_ft = {
      lua = { "stylua" },
      python = { "black" },
    },
  },
}`},
              { title: "Lazy Commands", code: `:Lazy                # Open Lazy UI
:Lazy update          # Update all plugins
:Lazy clean           # Remove unused plugins
:Lazy sync            # Sync plugin state`},
            ].map((item, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-bold font-mono mb-4">{item.title}</h3>
                <CodeBlock code={item.code} language="lua" title="lazy.nvim" />
              </div>
            ))}
          </div>

          {/* Configuration Paths */}
          <h2 className="text-2xl font-bold font-mono mb-6">Configuration Paths</h2>

          <div className="bg-card border border-border rounded-lg overflow-hidden mb-12">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-secondary/30">
                    <th className="text-left py-3 px-4 font-mono">Path</th>
                    <th className="text-left py-3 px-4 font-mono">Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { path: "$HOME/.config/nvim/", purpose: "Main Neovim config directory" },
                    { path: "nvim/init.lua", purpose: "Entry point, lazy.nvim bootstrap" },
                    { path: "nvim/lua/chadrc.lua", purpose: "NvChad theme & UI settings" },
                    { path: "nvim/lua/mappings.lua", purpose: "Custom keybindings" },
                    { path: "nvim/lua/options.lua", purpose: "Neovim core options" },
                    { path: "nvim/lua/configs/lspconfig.lua", purpose: "LSP server configurations" },
                    { path: "nvim/lua/configs/cmp.lua", purpose: "Autocompletion (nvim-cmp)" },
                    { path: "nvim/lua/configs/conform.lua", purpose: "Code formatter settings" },
                    { path: "nvim/lua/plugins/", purpose: "Plugin specs by category" },
                    { path: "nvim/lazy-lock.json", purpose: "Plugin version lockfile" },
                  ].map((item, i) => (
                    <tr key={i} className="border-b border-border hover:bg-secondary/20 transition-colors">
                      <td className="py-3 px-4 font-mono text-accent text-xs">{item.path}</td>
                      <td className="py-3 px-4 text-muted-foreground">{item.purpose}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Troubleshooting */}
          <h2 className="text-2xl font-bold font-mono mb-6">Troubleshooting</h2>

          <div className="space-y-6 mb-12">
            {[
              {
                title: "LSP not starting",
                desc: "Open Mason (:Mason) and verify the LSP is installed. Run :LspInfo to see active clients.",
                fix: ":MasonInstall <lsp-name>    # Install missing LSP",
              },
              {
                title: "Plugin errors after update",
                desc: "Some plugin updates may break compatibility. Roll back or clean and reinstall.",
                fix: ":Lazy clean && :Lazy sync  # Reset plugin state",
              },
              {
                title: "Performance issues on low-end devices",
                desc: "Disable heavy plugins or reduce Treesitter parsers to only needed languages.",
                fix: `-- In options.lua or chadrc.lua
-- Disable animations
vim.g.nvchad_ui_animation = false`,
              },
              {
                title: "Copilot not working",
                desc: "Ensure you're authenticated with GitHub Copilot in Neovim.",
                fix: ":Copilot auth              # Authenticate with GitHub",
              },
              {
                title: "Reinstall from scratch",
                desc: "Backup your config, remove the nvim directory, and reinstall.",
                fix: `mv ~/.config/nvim ~/.config/nvim.bak
omni reinstall editor --neovim --nvchad`,
              },
            ].map((item, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-bold font-mono text-accent mb-2">{item.title}</h3>
                <p className="text-muted-foreground mb-4">{item.desc}</p>
                <CodeBlock code={item.fix} language="bash" title="fix" />
              </div>
            ))}
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
