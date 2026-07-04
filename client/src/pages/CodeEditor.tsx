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
      { key: "<leader>cc", mode: "Normal", desc: "Alternar chat do Copilot" },
      { key: "<leader>cq", mode: "Normal", desc: "Pergunta rápida para IA" },
    ]},
  ];

  const languages = [
    { lang: "JavaScript/TypeScript", lsp: "ts_ls", formatter: "Prettier", features: "Autocompletar, diagnósticos, dicas inlay" },
    { lang: "Python", lsp: "pyright", formatter: "black", features: "Autocompletar, diagnósticos" },
    { lang: "Go", lsp: "gopls", formatter: "gofmt/goimports", features: "Autocompletar, diagnósticos" },
    { lang: "Rust", lsp: "rust_analyzer", formatter: "rustfmt", features: "Autocompletar, diagnósticos" },
    { lang: "Lua", lsp: "lua-language-server", formatter: "stylua", features: "Autocompletar, diagnósticos" },
    { lang: "Bash", lsp: "bashls", formatter: "shfmt", features: "Formatação de shell" },
    { lang: "HTML", lsp: "html-lsp", formatter: "Prettier", features: "Auto-tags, completar" },
    { lang: "CSS/Tailwind", lsp: "cssls", formatter: "Prettier", features: "Autocompletar, suporte a Tailwind" },
  ];

  return (
    <Layout>
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold font-mono mb-4">Neovim + NvChad</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Uma configuração completa do Neovim otimizada para Termux no Android.
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
              { title: "Integração com IA", desc: "Copilot + CodeCompanion com Mistral, OpenAI e Anthropic" },
              { title: "Suporte LSP", desc: "20+ linguagens com instalação sob demanda" },
              { title: "Formatação de Código", desc: "Prettier, stylua, shfmt, pg_format, black, gofmt, rustfmt" },
              { title: "Telescope", desc: "Buscador fuzzy para arquivos, texto e buffers" },
              { title: "Treesitter", desc: "Destaque de sintaxe avançado + seleção incremental" },
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
              Instala Neovim, NvChad, Mason LSPs e todos os plugins.
            </p>
            <CodeBlock code="omni install editor" language="bash" title="terminal" />
          </div>

          <div className="bg-card border border-border rounded-lg p-6 mb-6">
            <h3 className="font-bold font-mono mb-2">Componentes Individuais</h3>
            <p className="text-muted-foreground mb-4">
              Instale apenas o que você precisa para uma configuração mais leve.
            </p>
            <CodeBlock
              code={`omni install editor --neovim          # Apenas binário Neovim
omni install editor --nvchad          # Apenas configuração NvChad
omni install editor --neovim --nvchad # Ambos (igual à instalação completa)`}
              language="bash"
              title="terminal"
            />
          </div>

          <div className="bg-card border border-border rounded-lg p-6 mb-12">
            <h3 className="font-bold font-mono mb-2">LSPs Pós-Instalação</h3>
            <p className="text-muted-foreground mb-4">
              Servidores de linguagem adicionais podem ser instalados via Mason dentro do Neovim:
            </p>
            <CodeBlock
              code={`:Mason                          # Abrir interface Mason
:MasonInstall lua-language-server  # Instalar LSP específico
:MasonUninstall pyright            # Remover LSP`}
              language="vim"
              title="neovim"
            />
          </div>

          {/* Plugin Management */}
          <h2 className="text-2xl font-bold font-mono mb-6">Gerenciamento de Plugins</h2>

          <div className="bg-card border border-border rounded-lg p-6 mb-6">
            <p className="text-muted-foreground mb-4">
              O editor usa <code className="text-accent">lazy.nvim</code> como gerenciador de plugins.
              Os plugins são organizados por categoria em <code className="text-accent">nvim/lua/plugins/</code>.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              { title: "Adicionar um Plugin", code: `-- nvim/lua/plugins/formatting/conform.lua
return {
  "stevearc/conform.nvim",
  opts = {
    formatters_by_ft = {
      lua = { "stylua" },
      python = { "black" },
    },
  },
}`},
              { title: "Comandos Lazy", code: `:Lazy                # Abrir interface Lazy
:Lazy update          # Atualizar todos os plugins
:Lazy clean           # Remover plugins não utilizados
:Lazy sync            # Sincronizar estado dos plugins`},
            ].map((item, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-bold font-mono mb-4">{item.title}</h3>
                <CodeBlock code={item.code} language="lua" title="lazy.nvim" />
              </div>
            ))}
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
                    { path: "$HOME/.config/nvim/", purpose: "Diretório principal de configuração do Neovim" },
                    { path: "nvim/init.lua", purpose: "Ponto de entrada, bootstrap do lazy.nvim" },
                    { path: "nvim/lua/chadrc.lua", purpose: "Tema e configurações de UI do NvChad" },
                    { path: "nvim/lua/mappings.lua", purpose: "Atalhos de teclado personalizados" },
                    { path: "nvim/lua/options.lua", purpose: "Opções principais do Neovim" },
                    { path: "nvim/lua/configs/lspconfig.lua", purpose: "Configurações dos servidores LSP" },
                    { path: "nvim/lua/configs/cmp.lua", purpose: "Autocompletar (nvim-cmp)" },
                    { path: "nvim/lua/configs/conform.lua", purpose: "Configurações do formatador de código" },
                    { path: "nvim/lua/plugins/", purpose: "Especificações de plugins por categoria" },
                    { path: "nvim/lazy-lock.json", purpose: "Arquivo de bloqueio de versão de plugins" },
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
                title: "LSP não está iniciando",
                desc: "Abra o Mason (:Mason) e verifique se o LSP está instalado. Execute :LspInfo para ver clientes ativos.",
                fix: ":MasonInstall <lsp-name>    # Instalar LSP ausente",
              },
              {
                title: "Erros em plugins após atualização",
                desc: "Algumas atualizações de plugins podem quebrar a compatibilidade. Reverta ou limpe e reinstale.",
                fix: ":Lazy clean && :Lazy sync  # Reiniciar estado dos plugins",
              },
              {
                title: "Problemas de desempenho em dispositivos básicos",
                desc: "Desative plugins pesados ou reduza os parsers do Treesitter para apenas linguagens necessárias.",
                fix: `-- Em options.lua ou chadrc.lua
-- Desativar animações
vim.g.nvchad_ui_animation = false`,
              },
              {
                title: "Copilot não está funcionando",
                desc: "Certifique-se de estar autenticado com o GitHub Copilot no Neovim.",
                fix: ":Copilot auth              # Autenticar com GitHub",
              },
              {
                title: "Reinstalar do zero",
                desc: "Faça backup da configuração, remova o diretório nvim e reinstale.",
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
          <h2 className="text-2xl font-bold font-mono mb-6">Estrutura de Configuração</h2>
          <CodeBlock
            code={`nvim/
├── init.lua                    # Entrada principal, bootstrap lazy.nvim
├── lazy-lock.json             # Arquivo de bloqueio de plugins
└── lua/
    ├── chadrc.lua             # Tema e configurações base46
    ├── mappings.lua           # Atalhos de teclado personalizados
    ├── options.lua            # Opções do Neovim
    ├── configs/
    │   ├── cmp.lua            # Configuração de autocompletar
    │   ├── conform.lua        # Configuração do formatador de código
    │   ├── lspconfig.lua      # Instalador LSP
    │   └── snippets.lua       # Snippets personalizados
    └── plugins/
        ├── ai/                # Plugins de IA
        ├── completion/        # Plugins de completar
        ├── formatting/        # Plugins de formatação
        ├── lsp/               # Plugins LSP
        └── ui/                # Plugins de interface`}
            language="bash"
            title="nvim structure"
          />
        </div>
      </section>
    </Layout>
  );
}
