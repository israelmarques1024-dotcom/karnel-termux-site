export const AI_TOOLS = [
  {
    name: "Cline CLI",
    bin: "cline",
    flag: "--cline",
    desc: "AI coding assistant for terminal",
  },
  {
    name: "Qwen Code",
    bin: "qwen",
    flag: "--qwen-code",
    desc: "Alibaba's code generation model",
  },
  {
    name: "Gemini CLI",
    bin: "gemini",
    flag: "--gemini-cli",
    desc: "Google Gemini in your terminal",
  },
  {
    name: "Claude Code",
    bin: "claude",
    flag: "--claude-code",
    desc: "Anthropic's Claude for coding",
  },
  {
    name: "Mistral Vibe",
    bin: "vibe",
    flag: "--mistral-vibe",
    desc: "Mistral AI coding agent",
  },
  {
    name: "OpenClaude",
    bin: "openclaude",
    flag: "--openclaude",
    desc: "Open-source Claude client",
  },
  {
    name: "OpenClaw",
    bin: "openclaw",
    flag: "--openclaw",
    desc: "Claude-powered dev tools",
  },
  {
    name: "Ollama",
    bin: "ollama",
    flag: "--ollama",
    desc: "Run LLMs locally on device",
  },
  {
    name: "Codex CLI",
    bin: "codex",
    flag: "--codex",
    desc: "OpenAI Codex for terminal",
  },
  {
    name: "OpenCode",
    bin: "opencode",
    flag: "--opencode",
    desc: "Terminal AI coding agent",
  },
  {
    name: "MiMoCode",
    bin: "mimo",
    flag: "--mimocode",
    desc: "Xiaomi's open-source coding assistant",
  },
  {
    name: "Engram",
    bin: "engram",
    flag: "--engram",
    desc: "Persistent memory for AI agents",
  },
  {
    name: "CodeGraph",
    bin: "codegraph",
    flag: "--codegraph",
    desc: "Code graph navigation tool",
  },
  {
    name: "Pi Coding Agent",
    bin: "pi",
    flag: "--pi",
    desc: "Privacy-first coding assistant",
  },
  {
    name: "Antigravity CLI",
    bin: "agy",
    flag: "--antigravity-cli",
    desc: "Agentic coding workflow tool",
  },
  {
    name: "Minimax CLI",
    bin: "mmx",
    flag: "--minimax-cli",
    desc: "Minimax AI coding agent",
  },
  {
    name: "Gentle AI",
    bin: "gentle-ai",
    flag: "--gentle-ai",
    desc: "Lightweight AI assistant for Termux",
  },
  { name: "GGA", bin: "gga", flag: "--gga", desc: "General-purpose AI agent" },
  {
    name: "Hermes Agent",
    bin: "hermes",
    flag: "--hermes-agent",
    desc: "Fast agent with tool execution",
  },
  {
    name: "Kimi Code",
    bin: "kimi",
    flag: "--kimi-code",
    desc: "Moonshot AI coding assistant",
  },
  {
    name: "Command Code",
    bin: "command-code",
    flag: "--command-code",
    desc: "Terminal-native AI coder",
  },
  {
    name: "Freebuff",
    bin: "freebuff",
    flag: "--freebuff",
    desc: "AI buffer manager for developers",
  },
  {
    name: "Kilo Code CLI",
    bin: "kilocode",
    flag: "--kilocode-cli",
    desc: "Multi-model AI coding agent",
  },
  {
    name: "Kiro CLI",
    bin: "kiro",
    flag: "--kiro",
    desc: "Fast iterative coding agent",
  },
  {
    name: "Crush CLI",
    bin: "crush",
    flag: "--crush",
    desc: "Context-aware code assistant",
  },
  {
    name: "Odysseus",
    bin: "odysseus",
    flag: "--odysseus",
    desc: "Long-context AI coding agent",
  },
  {
    name: "Kimchi CLI",
    bin: "kimchi",
    flag: "--kimchi-code",
    desc: "Korean AI coding tool",
  },
  {
    name: "omniRoute",
    bin: "omni-route",
    flag: "--omni-route",
    desc: "AI gateway routing proxy",
  },
  {
    name: "Context7",
    bin: "ctx7",
    flag: "--ctx7",
    desc: "Context manager for large codebases",
  },
  {
    name: "OpenSpec",
    bin: "openspec",
    flag: "--openspec",
    desc: "Open-source spec generator",
  },
  {
    name: "Copilot-Termux",
    bin: "copilot",
    flag: "--copilot-termux",
    desc: "GitHub Copilot CLI adapted for Termux",
  },
] as const;

export const DEV_TOOLS = [
  { name: "GitHub CLI", flag: "--gh", desc: "Manage GitHub from the terminal" },
  { name: "Wget", flag: "--wget", desc: "Network downloader" },
  { name: "Curl", flag: "--curl", desc: "HTTP client" },
  { name: "LSD", flag: "--lsd", desc: "Modern ls with icons" },
  { name: "Bat", flag: "--bat", desc: "Modern cat with syntax highlighting" },
  {
    name: "Proot",
    flag: "--proot",
    desc: "Isolated Linux environment without root",
  },
  { name: "Ncurses Utils", flag: "--ncurses", desc: "Terminal utilities" },
  { name: "Tmate", flag: "--tmate", desc: "Terminal sharing" },
  {
    name: "OpenSSH",
    flag: "--openssh",
    desc: "Secure shell client and server",
  },
  { name: "Tmux", flag: "--tmux", desc: "Terminal multiplexer" },
  { name: "Cloudflared", flag: "--cloudflared", desc: "Cloudflare tunnel" },
  { name: "Translate Shell", flag: "--translate", desc: "Terminal translator" },
  { name: "html2text", flag: "--html2text", desc: "Convert HTML to text" },
  { name: "jq", flag: "--jq", desc: "JSON processor" },
  { name: "bc", flag: "--bc", desc: "Precision calculator" },
  { name: "Tree", flag: "--tree", desc: "Display directory trees" },
  { name: "Fzf", flag: "--fzf", desc: "Fuzzy finder" },
  { name: "ImageMagick", flag: "--imagemagick", desc: "Image manipulation" },
  { name: "Shfmt", flag: "--shfmt", desc: "Shell formatter" },
  { name: "Make", flag: "--make", desc: "Build automation" },
  { name: "Udocker", flag: "--udocker", desc: "Rootless containers" },
  { name: "Snyk", flag: "--snyk", desc: "Security scanner" },
] as const;

export const NETWORK_TOOLS = [
  { name: "Dark Web OSINT", flag: "--dark", desc: "Tor crawler and scraper for OSINT research" },
  { name: "DedSec Network Toolkit", flag: "--dedsec-network", desc: "Multi-purpose network scanner, OSINT, and pentest" },
] as const;

export const UTILS_TOOLS = [
  { name: "Httptmux", flag: "--httptmux", desc: "Interactive API client" },
  { name: "Zork", flag: "--zork", desc: "Classic text adventures" },
  { name: "File Converter", flag: "--fconv", desc: "Convert files between common formats" },
  { name: "File Checker", flag: "--filecheck", desc: "Inspect file integrity and metadata" },
  { name: "Websites Creator", flag: "--websites", desc: "Scaffold website projects" },
  { name: "Smart Notes", flag: "--notes", desc: "Manage notes from the terminal" },
  { name: "Tree Explorer", flag: "--treex", desc: "Explore project trees interactively" },
  { name: "Password Master", flag: "--passman", desc: "Local password management" },
  { name: "App Launcher", flag: "--applaunch", desc: "Launch installed applications" },
  { name: "Loading Screen", flag: "--splash", desc: "Customize the startup splash" },
  { name: "QR Code Generator", flag: "--qrcode", desc: "Generate QR codes from URLs and text" },
] as const;

export const OSINT_TOOLS = [
  {
    name: "Robin",
    flag: "--robin",
    version: "v2.8",
    desc: "AI-assisted dark-web OSINT through Tor and a loopback-only Streamlit UI",
  },
] as const;

export const LANG_TOOLS = [
  { name: "Bun", flag: "--bun", pkg: "bun", desc: "Fast all-in-one JavaScript runtime" },
  { name: "Node.js LTS", flag: "--nodejs", pkg: "nodejs-lts", desc: "V8-based JavaScript runtime" },
  { name: "Python", flag: "--python", pkg: "python", desc: "Versatile language for scripts and apps" },
  { name: "Perl", flag: "--perl", pkg: "perl", desc: "Text processing and scripting" },
  { name: "PHP", flag: "--php", pkg: "php", desc: "Web server language" },
  { name: "Rust", flag: "--rust", pkg: "rust", desc: "Systems programming with safety and performance" },
  { name: "C/C++ (clang)", flag: "--clang", pkg: "clang", desc: "Native compilation with Clang/GCC" },
  { name: "Go (golang)", flag: "--golang", pkg: "golang", desc: "Compiled concurrent language" },
] as const;

export const DB_TOOLS = [
  { name: "PostgreSQL", flag: "--postgresql", desc: "Advanced relational database" },
  { name: "MariaDB", flag: "--mariadb", desc: "MySQL-compatible, robust" },
  { name: "SQLite", flag: "--sqlite", desc: "Embedded lightweight database" },
  { name: "MongoDB", flag: "--mongodb", desc: "NoSQL document database" },
  { name: "Redis", flag: "--redis", desc: "In-memory cache and message broker" },
] as const;

export const EDITOR_TOOLS = [
  { name: "code-server", flag: "--code-server", desc: "VS Code in browser" },
  { name: "neovim", flag: "--neovim", desc: "Modern Vim-based editor" },
  { name: "nvchad", flag: "--nvchad", desc: "Neovim IDE configuration" },
] as const;

export const AUTO_TOOLS = [
  { name: "n8n", flag: "--n8n", desc: "Workflow automation platform with visual flows" },
] as const;

export const DEPLOY_TOOLS = [
  { name: "Railway", flag: "--railway", bin: "railway", desc: "Full-stack with databases" },
  { name: "Netlify", flag: "--netlify", bin: "netlify", desc: "Static sites & edge functions" },
  { name: "Vercel", flag: "--vercel", bin: "vercel", desc: "Frontend deployment platform" },
] as const;

export const NPM_TOOLS = [
  { name: "TypeScript", flag: "--typescript", bin: "tsc", desc: "JavaScript with types" },
  { name: "NestJS CLI", flag: "--nestjs", bin: "nest", desc: "Progressive Node.js framework" },
  { name: "Prettier", flag: "--prettier", bin: "prettier", desc: "Code formatter" },
  { name: "Live Server", flag: "--live-server", bin: "live-server", desc: "Server with live reload" },
  { name: "Localtunnel", flag: "--localtunnel", bin: "lt", desc: "Public tunnels for localhost" },
  { name: "Vercel CLI", flag: "--vercel", bin: "vercel", desc: "Deploy to Vercel" },
  { name: "Markserv", flag: "--markserv", bin: "markserv", desc: "Markdown server" },
  { name: "PSQL Format", flag: "--psqlformat", bin: "psqlformat", desc: "SQL formatter" },
  { name: "NPM Check Updates", flag: "--ncu", bin: "ncu", desc: "Check package updates" },
  { name: "Ngrok", flag: "--ngrok", bin: "ngrok", desc: "Public tunnels for localhost" },
  { name: "Turbopack", flag: "--turbopack", bin: "turbo", desc: "Extremely fast Rust bundler" },
] as const;

export const SHELL_TOOLS = [
  { name: "powerlevel10k", flag: "--powerlevel10k", desc: "Fastest and most beautiful ZSH theme" },
  { name: "zsh-defer", flag: "--zsh-defer", desc: "Async plugin loading" },
  { name: "zsh-autosuggestions", flag: "--zsh-autosuggestions", desc: "Fish-style autocomplete" },
  { name: "zsh-syntax-highlighting", flag: "--zsh-syntax-highlighting", desc: "Syntax highlighting in commands" },
  { name: "zsh-history-substring-search", flag: "--history-substring", desc: "Fish-style history search" },
  { name: "zsh-completions", flag: "--zsh-completions", desc: "Extra completion definitions" },
  { name: "fzf-tab", flag: "--fzf-tab", desc: "Fuzzy tab completion with fzf" },
  { name: "zsh-you-should-use", flag: "--you-should-use", desc: "Reminds you of existing aliases" },
  { name: "zsh-autopair", flag: "--zsh-autopair", desc: "Auto-close brackets and quotes" },
  { name: "zsh-better-npm-completion", flag: "--better-npm", desc: "Improved npm completion" },
] as const;

export const UI_TOOLS = [
  { name: "Meslo Nerd Font", flag: "--font", desc: "Font with ligatures and icons" },
  { name: "Extra Keys", flag: "--extra-keys", desc: "Additional keys on Termux keyboard" },
  { name: "Cursor Color", flag: "--cursor", desc: "Styled cursor with gradient" },
  { name: "Startup Banner", flag: "--banner", desc: "ASCII banner with metallic effect on startup" },
] as const;

export const GAMES_TOOLS = [
  { name: "Buzz", flag: "--buzz", desc: "Quiz game with multiple categories" },
  { name: "CTF God", flag: "--ctfgod", desc: "Capture The Flag challenge solver" },
  { name: "Detective", flag: "--detective", desc: "Mystery investigation game" },
  { name: "Pet Friends", flag: "--pet-friends", desc: "Virtual pet simulator" },
  { name: "Tamagotchi", flag: "--tamagotchi", desc: "Retro digital pet" },
  { name: "Terminal Arcade", flag: "--arcade", desc: "Classic arcade games in terminal" },
] as const;

export const CATALOG_COUNTS = {
  ai: AI_TOOLS.length,
  dev: DEV_TOOLS.length,
  network: NETWORK_TOOLS.length,
  utils: UTILS_TOOLS.length,
  osint: OSINT_TOOLS.length,
  lang: LANG_TOOLS.length,
  db: DB_TOOLS.length,
  editor: EDITOR_TOOLS.length,
  auto: AUTO_TOOLS.length,
  deploy: DEPLOY_TOOLS.length,
  npm: NPM_TOOLS.length,
  shell: SHELL_TOOLS.length,
  ui: UI_TOOLS.length,
  games: GAMES_TOOLS.length,
} as const;
