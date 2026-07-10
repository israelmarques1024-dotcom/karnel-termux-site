import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Layout from "@/components/Layout";
import CodeBlock from "@/components/CodeBlock";

export default function CodeEditor() {
  const keybindings = [
    { category: "Geral", bindings: [
      { key: ";", mode: "Normal", desc: "Entrar no modo de comando" },
      { key: "jk", mode: "Insert", desc: "Sair do modo insert" },
      { key: "<Space>", mode: "Normal", desc: "Tecla líder" },
      { key: "K", mode: "Normal", desc: "Documentação flutuante (LSP)" },
      { key: "gd", mode: "Normal", desc: "Ir para definição (LSP)" },
    ]},
    { category: "Movimento de Linhas", bindings: [
      { key: "<A-j>", mode: "Normal/Insert", desc: "Mover linha para baixo" },
      { key: "<A-k>", mode: "Normal/Insert", desc: "Mover linha para cima" },
      { key: "<A-S-j>", mode: "Normal/Insert", desc: "Duplicar linha para baixo" },
      { key: "<A-S-k>", mode: "Normal/Insert", desc: "Duplicar linha para cima" },
    ]},
    { category: "Navegação entre Janelas", bindings: [
      { key: "<S-h>", mode: "Normal", desc: "Ir para divisão esquerda / Buffer anterior" },
      { key: "<S-l>", mode: "Normal", desc: "Ir para divisão direita / Próximo buffer" },
      { key: "<S-j>", mode: "Normal", desc: "Ir para divisão abaixo" },
      { key: "<S-k>", mode: "Normal", desc: "Ir para divisão acima" },
      { key: "<leader>sv", mode: "Normal", desc: "Dividir verticalmente" },
      { key: "<leader>sh", mode: "Normal", desc: "Dividir horizontalmente" },
      { key: "<leader>sm", mode: "Normal", desc: "Maximizar/minimizar divisão" },
    ]},
    { category: "Pesquisa e Navegação", bindings: [
      { key: "<leader>ff", mode: "Normal", desc: "Encontrar arquivos" },
      { key: "<leader>fg", mode: "Normal", desc: "Live grep (pesquisar texto)" },
      { key: "<leader>fb", mode: "Normal", desc: "Pesquisar buffers" },
      { key: "<leader>fh", mode: "Normal", desc: "Pesquisar tags de ajuda" },
      { key: "<leader>fo", mode: "Normal", desc: "Pesquisar arquivos antigos (recentes)" },
      { key: "<leader>fm", mode: "Normal", desc: "Pesquisar marcas" },
    ]},
    { category: "Git", bindings: [
      { key: "<leader>gs", mode: "Normal", desc: "Status do Git" },
      { key: "<leader>gb", mode: "Normal", desc: "Git blame na linha" },
      { key: "<leader>gd", mode: "Normal", desc: "Git diff" },
      { key: "<leader>gl", mode: "Normal", desc: "Git log" },
      { key: "<leader>gc", mode: "Normal", desc: "Git commit" },
    ]},
    { category: "IA e LSP", bindings: [
      { key: "<leader>ca", mode: "Normal", desc: "Ação de código (LSP)" },
      { key: "<leader>rn", mode: "Normal", desc: "Renomear símbolo (LSP)" },
      { key: "<leader>wa", mode: "Normal", desc: "Adicionar pasta de workspace (LSP)" },
      { key: "<leader>wr", mode: "Normal", desc: "Remover pasta de workspace (LSP)" },
      { key: "<leader>wl", mode: "Normal", desc: "Listar pastas de workspace (LSP)" },
      { key: "<leader>cc", mode: "Normal", desc: "Alternar chat do GitHub Copilot extension" },
      { key: "<leader>cq", mode: "Normal", desc: "Pergunta rápida para IA" },
    ]},
  ];

  const languages = [
    { lang: "JavaScript/TypeScript", lsp: "TypeScript", formatter: "Prettier extension", features: "Autocompletar, diagnósticos, dicas inlay" },
    { lang: "Python", lsp: "Python", formatter: "Python Formatter", features: "Autocompletar, diagnósticos" },
    { lang: "Go", lsp: "Go", formatter: "gofmt/goimports", features: "Autocompletar, diagnósticos" },
    { lang: "Rust", lsp: "rust_analyzer", formatter: "rustfmt", features: "Autocompletar, diagnósticos" },
    { lang: "Lua", lsp: "lua-language-server", formatter: "Lua Formatter", features: "Autocompletar, diagnósticos" },
    { lang: "Bash", lsp: "bashls", formatter: "shfmt", features: "Formatação de shell" },
    { lang: "HTML", lsp: "html-lsp", formatter: "Prettier extension", features: "Auto-tags, completar" },
    { lang: "CSS/Tailwind", lsp: "cssls", formatter: "Prettier extension", features: "Autocompletar, suporte a Tailwind" },
  ];

  return (
    <Layout>
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold font-mono mb-4">code-server</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Uma configuração completa do code-server otimizada para Termux no Android.
            Servidores de linguagem pré-configurados, assistentes de IA, formatadores de código e uma
            interface bonita.
          </p>

          <div className="bg-card border border-accent/50 rounded-lg p-6 mb-12">
            <h3 className="font-bold font-mono mb-4">Instalação Rápida</h3>
            <CodeBlock
              code={`omni install editor`}
              language="bash"
              title="terminal"
            />
          </div>

          {/* Features */}
          <h2 className="text-2xl font-bold font-mono mb-6">Funcionalidades</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {[
              { title: "Integração com IA", desc: "GitHub Copilot extension + AI Chat extension com Mistral, OpenAI e Anthropic" },
              { title: "Suporte LSP", desc: "8 linguagens com instalação sob demanda (JS, Python, Go, Rust, Lua, Bash, HTML, CSS)" },
              { title: "Formatação de Código", desc: "Prettier extension, Lua Formatter, shfmt, pg_format, Python Formatter, gofmt, rustfmt" },
              { title: "Quick Open", desc: "Buscador fuzzy para arquivos, texto e buffers" },
              { title: "Syntax Highlighting", desc: "Destaque de sintaxe avançado + seleção incremental" },
              { title: "Interface Bonita", desc: "Tema Eldritch, lualine, bufferline, scrollbar" },
            ].map((feature, i) => (
              <div key={i} className="bg-background border border-border rounded p-4">
                <h3 className="font-bold font-mono mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Keybindings */}
          <h2 className="text-2xl font-bold font-mono mb-6">Atalhos de Teclado</h2>
          <p className="text-muted-foreground mb-6">Tecla Líder: <code className="bg-background px-2 py-1 rounded text-accent">Space</code></p>

          <Tabs defaultValue="Geral" className="mb-12">
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6">
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
                        <th className="text-left py-3 px-4 font-mono">Tecla</th>
                        <th className="text-left py-3 px-4 font-mono">Modo</th>
                        <th className="text-left py-3 px-4 font-mono">Descrição</th>
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
          <h2 className="text-2xl font-bold font-mono mb-6">Suporte a Linguagens</h2>
          <div className="bg-card border border-border rounded-lg overflow-hidden mb-12">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-secondary/30">
                    <th className="text-left py-3 px-4 font-mono">Linguagem</th>
                    <th className="text-left py-3 px-4 font-mono">LSP</th>
                    <th className="text-left py-3 px-4 font-mono">Formatador</th>
                    <th className="text-left py-3 px-4 font-mono">Recursos</th>
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
          <h2 className="text-2xl font-bold font-mono mb-6">Opções de Instalação</h2>

          <div className="bg-card border border-border rounded-lg p-6 mb-6">
            <h3 className="font-bold font-mono mb-2">Instalação Completa</h3>
            <p className="text-muted-foreground mb-4">
              Instala code-server, VS Code extensions e todos os plugins.
            </p>
            <CodeBlock code="omni install editor" language="bash" title="terminal" />
          </div>

          <div className="bg-card border border-border rounded-lg p-6 mb-6">
            <h3 className="font-bold font-mono mb-2">Componentes Individuais</h3>
            <p className="text-muted-foreground mb-4">
              Instale apenas o que você precisa para uma configuração mais leve.
            </p>
            <CodeBlock
              code={`omni install editor          # Instala code-server completo
omni start editor            # Inicia o servidor na porta 8080`}
              language="bash"
              title="terminal"
            />
          </div>

          <div className="bg-card border border-border rounded-lg p-6 mb-12">
            <h3 className="font-bold font-mono mb-2">Extensões VS Code</h3>
            <p className="text-muted-foreground mb-4">
              Instale extensões via CLI (recomendado no celular) ou pelo painel de extensões:
            </p>
            <CodeBlock
              code={`# Via CLI (recomendado para mobile):
code-server --install-extension ms-python.python
code-server --install-extension esbenp.prettier-vscode

# Ou pelo painel: Ctrl+Shift+X`}
              language="bash"
              title="code-server extensions"
            />
          </div>

          {/* Configuration */}
          <h2 className="text-2xl font-bold font-mono mb-6">Configuração</h2>

          <div className="bg-card border border-border rounded-lg p-6 mb-6">
            <p className="text-muted-foreground mb-4">
              O code-server usa <code className="text-accent">~/.config/code-server/config.yaml</code> para configuração.
              As configurações de extensões ficam em <code className="text-accent">~/.local/share/code-server/</code>.
            </p>
          </div>

          {/* Configuration Paths */}
          <h2 className="text-2xl font-bold font-mono mb-6">Caminhos de Configuração</h2>

          <div className="bg-card border border-border rounded-lg overflow-hidden mb-12">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-secondary/30">
                    <th className="text-left py-3 px-4 font-mono">Caminho</th>
                    <th className="text-left py-3 px-4 font-mono">Finalidade</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { path: "$HOME/.config/code-server/", purpose: "Diretório principal de configuração" },
                    { path: "config.yaml", purpose: "Configurações do servidor (porta, auth, etc.)" },
                    { path: "$HOME/.local/share/code-server/", purpose: "Dados e extensões instaladas" },
                    { path: "$HOME/.local/share/code-server/extensions/", purpose: "Extensões VS Code instaladas" },
                    { path: "$HOME/.code-server/", purpose: "Dados de sessão e estado" },
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
          <h2 className="text-2xl font-bold font-mono mb-6">Solução de Problemas</h2>

          <div className="space-y-6 mb-12">
            {[
              {
                title: "Extensão não está funcionando",
                desc: "Verifique se a extensão está instalada e habilitada no painel de extensões (Ctrl+Shift+X).",
                fix: "# Reinstale a extensão pelo painel ou via CLI:\ncode-server --install-extension <ext-id>",
              },
              {
                title: "Erros após atualização",
                desc: "Algumas atualizações podem quebrar a compatibilidade. Limpe o cache e reinstale.",
                fix: "rm -rf ~/.local/share/code-server/cachedExtensionVSIXs/\nomni reinstall editor",
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
                title: "Reinstalar do zero",
                desc: "Faça backup da configuração, remova o diretório code-server e reinstale.",
                fix: `mv ~/.config/code-server ~/.config/code-server.bak
omni reinstall editor`,
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
          <h2 className="text-2xl font-bold font-mono mb-6">Estrutura de Configuração</h2>
          <CodeBlock
            code={`~/.config/code-server/
└── config.yaml                    # Configurações do servidor

~/.local/share/code-server/
├── extensions/                    # Extensões VS Code instaladas
├── cachedExtensionVSIXs/         # Cache de extensões
└── workspaceStorage/             # Dados por workspace

~/.code-server/
└── ../                            # Dados de sessão e estado`}
            language="bash"
            title="code-server structure"
          />
        </div>
      </section>
    </Layout>
  );
}
