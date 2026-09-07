import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CodeBlock from "@/components/CodeBlock";
import { AnimatedSection } from "@/components/AnimatedSection";

const keybindings = [
  {
    category: "Geral",
    bindings: [
      { key: ";", mode: "Normal", desc: "Entrar no modo de comando" },
      { key: "jk", mode: "Insert", desc: "Sair do modo insert" },
      { key: "<Space>", mode: "Normal", desc: "Tecla líder" },
      { key: "K", mode: "Normal", desc: "Documentação flutuante (LSP)" },
      { key: "gd", mode: "Normal", desc: "Ir para definição (LSP)" },
    ],
  },
  {
    category: "Movimento de Linhas",
    bindings: [
      { key: "<A-j>", mode: "Normal/Insert", desc: "Mover linha para baixo" },
      { key: "<A-k>", mode: "Normal/Insert", desc: "Mover linha para cima" },
      {
        key: "<A-S-j>",
        mode: "Normal/Insert",
        desc: "Duplicar linha para baixo",
      },
      {
        key: "<A-S-k>",
        mode: "Normal/Insert",
        desc: "Duplicar linha para cima",
      },
    ],
  },
  {
    category: "Navegação entre Janelas",
    bindings: [
      {
        key: "<S-h>",
        mode: "Normal",
        desc: "Ir para divisão esquerda / Buffer anterior",
      },
      {
        key: "<S-l>",
        mode: "Normal",
        desc: "Ir para divisão direita / Próximo buffer",
      },
      { key: "<S-j>", mode: "Normal", desc: "Ir para divisão abaixo" },
      { key: "<S-k>", mode: "Normal", desc: "Ir para divisão acima" },
      { key: "<leader>sv", mode: "Normal", desc: "Dividir verticalmente" },
      { key: "<leader>sh", mode: "Normal", desc: "Dividir horizontalmente" },
      {
        key: "<leader>sm",
        mode: "Normal",
        desc: "Maximizar/minimizar divisão",
      },
    ],
  },
  {
    category: "Pesquisa e Navegação",
    bindings: [
      { key: "<leader>ff", mode: "Normal", desc: "Encontrar arquivos" },
      {
        key: "<leader>fg",
        mode: "Normal",
        desc: "Live grep (pesquisar texto)",
      },
      { key: "<leader>fb", mode: "Normal", desc: "Pesquisar buffers" },
      { key: "<leader>fh", mode: "Normal", desc: "Pesquisar tags de ajuda" },
      {
        key: "<leader>fo",
        mode: "Normal",
        desc: "Pesquisar arquivos antigos (recentes)",
      },
      { key: "<leader>fm", mode: "Normal", desc: "Pesquisar marcas" },
    ],
  },
  {
    category: "Git",
    bindings: [
      { key: "<leader>gs", mode: "Normal", desc: "Status do Git" },
      { key: "<leader>gb", mode: "Normal", desc: "Git blame na linha" },
      { key: "<leader>gd", mode: "Normal", desc: "Git diff" },
      { key: "<leader>gl", mode: "Normal", desc: "Git log" },
      { key: "<leader>gc", mode: "Normal", desc: "Git commit" },
    ],
  },
  {
    category: "IA e LSP",
    bindings: [
      { key: "<leader>ca", mode: "Normal", desc: "Ação de código (LSP)" },
      { key: "<leader>rn", mode: "Normal", desc: "Renomear símbolo (LSP)" },
      {
        key: "<leader>wa",
        mode: "Normal",
        desc: "Adicionar pasta de workspace (LSP)",
      },
      {
        key: "<leader>wr",
        mode: "Normal",
        desc: "Remover pasta de workspace (LSP)",
      },
      {
        key: "<leader>wl",
        mode: "Normal",
        desc: "Listar pastas de workspace (LSP)",
      },
      {
        key: "<leader>cc",
        mode: "Normal",
        desc: "Alternar chat do GitHub Copilot extension",
      },
      { key: "<leader>cq", mode: "Normal", desc: "Pergunta rápida para IA" },
    ],
  },
];

const languages = [
  {
    lang: "JavaScript/TypeScript",
    lsp: "TypeScript",
    formatter: "Prettier extension",
    features: "Autocompletar, diagnósticos, dicas inlay",
  },
  {
    lang: "Python",
    lsp: "Python",
    formatter: "Python Formatter",
    features: "Autocompletar, diagnósticos",
  },
  {
    lang: "Go",
    lsp: "Go",
    formatter: "gofmt/goimports",
    features: "Autocompletar, diagnósticos",
  },
  {
    lang: "Rust",
    lsp: "rust_analyzer",
    formatter: "rustfmt",
    features: "Autocompletar, diagnósticos",
  },
  {
    lang: "Lua",
    lsp: "lua-language-server",
    formatter: "Lua Formatter",
    features: "Autocompletar, diagnósticos",
  },
  {
    lang: "Bash",
    lsp: "bashls",
    formatter: "shfmt",
    features: "Formatação de shell",
  },
  {
    lang: "HTML",
    lsp: "html-lsp",
    formatter: "Prettier extension",
    features: "Auto-tags, completar",
  },
  {
    lang: "CSS/Tailwind",
    lsp: "cssls",
    formatter: "Prettier extension",
    features: "Autocompletar, suporte a Tailwind",
  },
];

const configPaths = [
  {
    path: "$HOME/.config/code-server/",
    purpose: "Diretório principal de configuração",
  },
  {
    path: "config.yaml",
    purpose: "Configurações do servidor (porta, auth, etc.)",
  },
  {
    path: "$HOME/.local/share/code-server/",
    purpose: "Dados e extensões instaladas",
  },
  {
    path: "$HOME/.local/share/code-server/extensions/",
    purpose: "Extensões VS Code instaladas",
  },
];

const troubleshooting = [
  {
    title: "Extensão não está funcionando",
    desc: "Verifique se a extensão está instalada e habilitada no painel de extensões (Ctrl+Shift+X).",
    fix: "# Reinstale a extensão pelo painel ou via CLI:\ncode-server --install-extension <ext-id>",
  },
  {
    title: "Erros após atualização",
    desc: "Algumas atualizações podem quebrar a compatibilidade. Limpe o cache e reinstale.",
    fix: "rm -rf ~/.local/share/code-server/cachedExtensionVSIXs/\nkarnel reinstall editor",
  },
  {
    title: "Problemas de desempenho",
    desc: "Desative extensões pesadas ou reduza extensões para apenas linguagens necessárias.",
    fix: "# Em config.yaml ou settings.json, desative extensões desnecessárias",
  },
  {
    title: "GitHub Copilot não está funcionando",
    desc: "Certifique-se de estar autenticado com o GitHub na extensão Copilot.",
    fix: "# Abra o code-server e faça login via extensão GitHub Copilot",
  },
  {
    title: "Reinstall from scratch",
    desc: "Backup your config, remove the code-server directory and reinstall.",
    fix: `mv ~/.config/code-server ~/.config/code-server.bak\nkarnel reinstall editor`,
  },
];

const features = [
  {
    title: "VS Code no navegador",
    desc: "O code-server serve o VS Code localmente em 127.0.0.1:8080 por padrão.",
  },
  {
    title: "Extensões sob seu controle",
    desc: "Instale extensões e servidores de linguagem conforme as necessidades do projeto.",
  },
  {
    title: "Configuração preservada",
    desc: "O instalador cria a configuração inicial apenas quando ela ainda não existe.",
  },
  {
    title: "Neovim opcional",
    desc: "Neovim e NvChad são componentes separados do módulo editor.",
  },
  {
    title: "Acesso protegido",
    desc: "A configuração padrão usa autenticação por senha e escuta apenas em loopback.",
  },
  {
    title: "Porta configurável",
    desc: "Inicie o serviço na porta padrão 8080 ou informe uma porta entre 1024 e 65535.",
  },
];

export default function CodeEditor() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h1 className="text-4xl font-bold font-mono mb-4">code-server</h1>
          <p className="text-lg text-muted-foreground mb-8">
            VS Code no navegador para Termux. O Karnel instala o servidor e uma
            configuração local segura; extensões, assistentes de IA, servidores
            de linguagem e formatadores são escolhidos por você.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="card-hover bg-card border border-accent/50 rounded-lg p-6 mb-12">
            <h3 className="font-bold font-mono mb-4">Quick Install</h3>
            <p className="text-sm text-muted-foreground mb-4">
              O módulo contém code-server, Neovim e NvChad. Instale somente o
              componente que deseja ou todos de uma vez:
            </p>
            <div className="space-y-2">
              <CodeBlock
                code={`karnel install editor                    # Instalar todos`}
                language="bash"
                title="terminal"
              />
              <CodeBlock
                code={`karnel install editor --code-server       # VS Code no navegador`}
                language="bash"
              />
              <CodeBlock
                code={`karnel install editor --neovim            # Editor modal moderno`}
                language="bash"
              />
              <CodeBlock
                code={`karnel install editor --nvchad            # Configuração completa Neovim`}
                language="bash"
              />
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <h2 className="text-2xl font-bold font-mono mb-6">Features</h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-4 mb-12">
          {features.map((feature, i) => (
            <AnimatedSection key={i} delay={300 + i * 60}>
              <div className="card-hover bg-background border border-border rounded p-4">
                <h3 className="font-bold font-mono mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={650}>
          <h2 className="text-2xl font-bold font-mono mb-6">
            Keyboard Shortcuts
          </h2>
          <p className="text-muted-foreground mb-6">
            These shortcuts belong to the optional NvChad configuration, not
            code-server. They are available only after installing NvChad.
          </p>
        </AnimatedSection>

        <Tabs defaultValue="Geral" className="mb-12">
          <TabsList className="w-full justify-start overflow-x-auto [&>button]:flex-none [&>button]:shrink-0">
            {keybindings.map(cat => (
              <TabsTrigger key={cat.category} value={cat.category}>
                {cat.category}
              </TabsTrigger>
            ))}
          </TabsList>
          {keybindings.map(cat => (
            <TabsContent key={cat.category} value={cat.category}>
              <AnimatedSection delay={750}>
                <div className="card-hover bg-card border border-border rounded-lg overflow-x-auto">
                  <table className="w-full min-w-[36rem] text-sm">
                    <thead>
                      <tr className="border-b border-border bg-secondary/30">
                        <th className="text-left py-3 px-4 font-mono">Key</th>
                        <th className="text-left py-3 px-4 font-mono">Mode</th>
                        <th className="text-left py-3 px-4 font-mono">
                          Description
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {cat.bindings.map((binding, i) => (
                        <tr
                          key={i}
                          className="border-b border-border hover:bg-accent/5"
                        >
                          <td className="py-3 px-4 font-mono text-accent">
                            {binding.key}
                          </td>
                          <td className="py-3 px-4 font-mono text-sm">
                            {binding.mode}
                          </td>
                          <td className="py-3 px-4 text-muted-foreground">
                            {binding.desc}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </AnimatedSection>
            </TabsContent>
          ))}
        </Tabs>

        <AnimatedSection delay={750}>
          <h2 className="text-2xl font-bold font-mono mb-6">
            Language Support
          </h2>
          <p className="text-muted-foreground mb-6">
            These are common VS Code extension choices. Karnel does not install
            or configure language servers and formatters automatically.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={800}>
          <div className="card-hover bg-card border border-border rounded-lg overflow-hidden mb-12">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-secondary/30">
                    <th className="text-left py-3 px-4 font-mono">Language</th>
                    <th className="text-left py-3 px-4 font-mono">LSP</th>
                    <th className="text-left py-3 px-4 font-mono">
                      Formatador
                    </th>
                    <th className="text-left py-3 px-4 font-mono">Features</th>
                  </tr>
                </thead>
                <tbody>
                  {languages.map((lang, i) => (
                    <tr
                      key={i}
                      className="border-b border-border hover:bg-accent/5"
                    >
                      <td className="py-3 px-4 font-mono">{lang.lang}</td>
                      <td className="py-3 px-4 font-mono text-accent text-xs">
                        {lang.lsp}
                      </td>
                      <td className="py-3 px-4 text-sm">{lang.formatter}</td>
                      <td className="py-3 px-4 text-muted-foreground text-sm">
                        {lang.features}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={850}>
          <h2 className="text-2xl font-bold font-mono mb-6">
            Installation Options
          </h2>
        </AnimatedSection>

        {[
          {
            title: "Full Installation",
            desc: "Installs code-server, Neovim, and the Karnel-managed NvChad configuration.",
            code: "karnel install editor",
          },
          {
            title: "Individual Components",
            desc: "Install only the editor component you need.",
            code: "karnel install editor --code-server\nkarnel install editor --neovim\nkarnel install editor --nvchad\nkarnel start editor            # Start code-server on port 8080",
          },
          {
            title: "VS Code Extensions",
            desc: "After code-server is installed, install extensions with its CLI or the extensions panel:",
            code: "# Via CLI (recommended for mobile):\ncode-server --install-extension ms-python.python\ncode-server --install-extension esbenp.prettier-vscode\n\n# Or via panel: Ctrl+Shift+X",
          },
        ].map((item, i) => (
          <AnimatedSection key={i} delay={900 + i * 80}>
            <div className="card-hover bg-card border border-border rounded-lg p-6 mb-6">
              <h3 className="font-bold font-mono mb-2">{item.title}</h3>
              <p className="text-muted-foreground mb-4">{item.desc}</p>
              <CodeBlock code={item.code} language="bash" title="terminal" />
            </div>
          </AnimatedSection>
        ))}

        <AnimatedSection delay={1100}>
          <h2 className="text-2xl font-bold font-mono mb-6">Configuration</h2>
          <div className="card-hover bg-card border border-border rounded-lg p-6 mb-6">
            <p className="text-muted-foreground mb-4">
              O code-server usa{" "}
              <code className="text-accent">
                ~/.config/code-server/config.yaml
              </code>{" "}
              para configuração. As configurações de extensões ficam em{" "}
              <code className="text-accent">~/.local/share/code-server/</code>.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={1150}>
          <h2 className="text-2xl font-bold font-mono mb-6">
            Configuration Paths
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={1200}>
          <div className="card-hover bg-card border border-border rounded-lg overflow-hidden mb-12">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-secondary/30">
                    <th className="text-left py-3 px-4 font-mono">Caminho</th>
                    <th className="text-left py-3 px-4 font-mono">
                      Finalidade
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {configPaths.map((item, i) => (
                    <tr
                      key={i}
                      className="border-b border-border hover:bg-accent/5 transition-colors"
                    >
                      <td className="py-3 px-4 font-mono text-accent text-xs">
                        {item.path}
                      </td>
                      <td className="py-3 px-4 text-muted-foreground">
                        {item.purpose}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={1250}>
          <h2 className="text-2xl font-bold font-mono mb-6">Troubleshooting</h2>
        </AnimatedSection>

        <div className="space-y-6 mb-12">
          {troubleshooting.map((item, i) => (
            <AnimatedSection key={i} delay={1300 + i * 80}>
              <div className="card-hover bg-card border border-border rounded-lg p-6">
                <h3 className="font-bold font-mono text-accent mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground mb-4">{item.desc}</p>
                <CodeBlock code={item.fix} language="bash" title="fix" />
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={1700}>
          <h2 className="text-2xl font-bold font-mono mb-6">
            Configuration Structure
          </h2>
          <CodeBlock
            code={`~/.config/code-server/
└── config.yaml                    # Configurações do servidor

~/.local/share/code-server/
├── extensions/                    # Extensões VS Code instaladas
├── cachedExtensionVSIXs/         # Cache de extensões
└── workspaceStorage/             # Dados por workspace`}
            language="bash"
            title="code-server structure"
          />
        </AnimatedSection>

        <AnimatedSection delay={1800}>
          <h2 className="text-2xl font-bold font-mono mb-6">Neovim</h2>
          <div className="card-hover bg-card border border-border rounded-lg p-6 mb-6">
            <p className="text-muted-foreground mb-4">
              Neovim é um editor de texto moderno baseado em Vim, com suporte a
              LSP, treesitter, e extensões via Lua. Instalação via pkg.
            </p>
            <CodeBlock
              code={`karnel install editor --neovim`}
              language="bash"
              title="terminal"
            />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={1900}>
          <h2 className="text-2xl font-bold font-mono mb-6">NvChad</h2>
          <div className="card-hover bg-card border border-border rounded-lg p-6 mb-6">
            <p className="text-muted-foreground mb-4">
              NvChad é uma configuração completa para Neovim com tema bonito,
              LSP pré-configurado, formatação automática, atalhos inteligentes e
              suporte a IA. Mantida separadamente em
              <code className="text-accent mx-1">nvchad-termux</code>.
            </p>
            <CodeBlock
              code={`karnel install editor --nvchad`}
              language="bash"
              title="terminal"
            />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
