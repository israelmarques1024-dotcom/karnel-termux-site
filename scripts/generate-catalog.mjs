import { writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const GITHUB_RAW = "https://raw.githubusercontent.com/israelmarques1024-dotcom/karnel-termux/main";

async function fetchText(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status}: ${url}`);
  return res.text();
}

function parseArray(text, varName) {
  const re = new RegExp(`${varName}=\\(([^)]+)\\)`, "s");
  const m = text.match(re);
  if (!m) return [];
  const body = m[1];
  const items = [];
  const qre = /"([^"]+)"/g;
  let qm;
  while ((qm = qre.exec(body)) !== null) {
    const val = qm[1].trim();
    if (val && !val.startsWith("#") && !val.startsWith("/")) items.push(val);
  }
  return items;
}

function toDisplayName(name) {
  return name
    .replace(/-/g, " ")
    .replace(/\b\w/g, c => c.toUpperCase())
    .replace(/^Npm\b/i, "NPM")
    .replace(/^Ncurses\b/i, "Ncurses")
    .replace(/\bCli\b/i, "CLI")
    .replace(/\bOsint\b/i, "OSINT");
}

function toFlag(name) {
  return name.startsWith("--") ? name : `--${name}`;
}

async function fetchRegistry(name, file, parser = null) {
  try {
    const text = await fetchText(`${GITHUB_RAW}/karnel/tools/${file}/all.sh`);
    if (parser) return parser(text);
    return parseArray(text, name);
  } catch (e) {
    console.warn(`Warning: failed to fetch ${file}/all.sh (${e.message})`);
    return [];
  }
}

function parseAIRegistry(text) {
  const items = parseArray(text, "AI_TOOLS_REGISTRY");
  const entries = [];
  for (const item of items) {
    const parts = item.split(":");
    if (parts.length === 3) {
      const [, name, binary] = parts;
      entries.push({ name, binary, flag: `--${binary}` });
    }
  }
  return entries;
}

function lookupDescriptions(category) {
  const descs = {
    ai: {},
    dev: {
      gh: "Manage GitHub from the terminal",
      wget: "Network downloader",
      curl: "HTTP client",
      lsd: "Modern ls with icons",
      bat: "Modern cat with syntax highlighting",
      proot: "Isolated Linux environment without root",
      ncurses: "Terminal utilities",
      tmate: "Terminal sharing",
      openssh: "Secure shell client and server",
      tmux: "Terminal multiplexer",
      cloudflared: "Cloudflare tunnel",
      translate: "Terminal translator",
      html2text: "Convert HTML to text",
      jq: "JSON processor",
      bc: "Precision calculator",
      tree: "Display directory trees",
      fzf: "Fuzzy finder",
      imagemagick: "Image manipulation",
      shfmt: "Shell formatter",
      make: "Build automation",
      udocker: "Rootless containers",
      snyk: "Security scanner",
    },
    lang: {
      bun: "Fast all-in-one JavaScript runtime",
      nodejs: "V8-based JavaScript runtime",
      python: "Versatile language for scripts and apps",
      perl: "Text processing and scripting",
      php: "Web server language",
      rust: "Systems programming with safety and performance",
      clang: "Native compilation with Clang/GCC",
      golang: "Compiled concurrent language",
    },
    db: {
      postgresql: "Advanced relational database",
      mariadb: "MySQL-compatible, robust",
      sqlite: "Embedded lightweight database",
      mongodb: "NoSQL document database",
      redis: "In-memory cache and message broker",
    },
    editor: {
      "code-server": "VS Code in browser",
      neovim: "Modern Vim-based editor",
      nvchad: "Neovim IDE configuration",
    },
    npm: {
      typescript: "JavaScript with types",
      nestjs: "Progressive Node.js framework",
      prettier: "Code formatter",
      "live-server": "Server with live reload",
      localtunnel: "Public tunnels for localhost",
      vercel: "Deploy to Vercel",
      markserv: "Markdown server",
      psqlformat: "SQL formatter",
      ncu: "Check package updates",
      ngrok: "Public tunnels for localhost",
      turbopack: "Extremely fast Rust bundler",
    },
    shell: {
      powerlevel10k: "Fastest and most beautiful ZSH theme",
      "zsh-defer": "Async plugin loading",
      "zsh-autosuggestions": "Fish-style autocomplete",
      "zsh-syntax-highlighting": "Syntax highlighting in commands",
      "history-substring": "Fish-style history search",
      "zsh-completions": "Extra completion definitions",
      "fzf-tab": "Fuzzy tab completion with fzf",
      "you-should-use": "Reminds you of existing aliases",
      "zsh-autopair": "Auto-close brackets and quotes",
      "better-npm": "Improved npm completion",
    },
    ui: {
      font: "Font with ligatures and icons",
      "extra-keys": "Additional keys on Termux keyboard",
      cursor: "Styled cursor with gradient",
      banner: "ASCII banner with metallic effect on startup",
    },
    auto: {
      n8n: "Workflow automation platform with visual flows",
    },
    deploy: {
      railway: "Full-stack with databases",
      netlify: "Static sites & edge functions",
      vercel: "Frontend deployment platform",
    },
    network: {
      dark: "Tor crawler and scraper for OSINT research",
      "dedsec-network": "Multi-purpose network scanner, OSINT, and pentest",
    },
    utils: {
      httptmux: "Interactive API client",
      zork: "Classic text adventures",
      fconv: "Convert files between common formats",
      filecheck: "Inspect file integrity and metadata",
      websites: "Scaffold website projects",
      notes: "Manage notes from the terminal",
      treex: "Explore project trees interactively",
      passman: "Local password management",
      applaunch: "Launch installed applications",
      splash: "Customize the startup splash",
      qrcode: "Generate QR codes from URLs and text",
    },
    osint: {
      robin: "AI-assisted dark-web OSINT through Tor and a loopback-only Streamlit UI",
    },
    games: {
      buzz: "Quiz game with multiple categories",
      ctfgod: "Capture The Flag challenge solver",
      detective: "Mystery investigation game",
      "pet-friends": "Virtual pet simulator",
      tamagotchi: "Retro digital pet",
      arcade: "Classic arcade games in terminal",
    },
  };
  return descs[category] || {};
}

function generateCategory(name, items, descs) {
  if (!items.length) return `export const ${name} = [] as const;\n`;
  const entries = items.map(item => {
    let displayName, flag, bin;
    if (item.binary) {
      ({ name: displayName, binary: bin, flag } = item);
    } else {
      const toolName = typeof item === "string" ? item : item.name || item;
      displayName = toDisplayName(toolName);
      flag = toFlag(toolName);
      bin = toolName;
    }
    const desc = descs[bin] || descs[flag.replace("--", "")] || "";
    return `  { name: ${JSON.stringify(displayName)}, flag: ${JSON.stringify(flag)}, desc: ${JSON.stringify(desc)} },`;
  });
  return `export const ${name} = [\n${entries.join("\n")}\n] as const;\n`;
}

async function main() {
  const [aiTools, devTools, langTools, dbTools, editorTools, npmTools, shellTools, uiTools] =
    await Promise.all([
      fetchRegistry("AI_TOOLS_REGISTRY", "ai", parseAIRegistry),
      fetchRegistry("TOOLS_PACKAGES", "dev"),
      fetchRegistry("LANGUAGE_PACKAGES", "lang"),
      fetchRegistry("DB_TOOLS", "db"),
      fetchRegistry("EDITOR_COMPONENTS", "editor"),
      fetchRegistry("NODE_PACKAGES", "npm"),
      fetchRegistry("SHELL_PLUGINS", "shell"),
      fetchRegistry("UI_COMPONENTS", "ui"),
    ]);

  const autoTools = await fetchRegistry("AUTOMATION_TOOLS", "auto");
  const deployTools = await fetchRegistry("DEPLOY_TOOLS", "deploy");
  const networkTools = await fetchRegistry("NETWORK_TOOLS", "network");
  const utilsTools = await fetchRegistry("TOOLS_PACKAGES", "utils");
  const osintTools = await fetchRegistry("OSINT_TOOLS", "osint");
  const gamesTools = await fetchRegistry("TOOLS_PACKAGES", "games");

  let output = `// Auto-generated by scripts/generate-catalog.mjs
// DO NOT EDIT — source of truth is karnel-termux CLI registries.
// Run: node scripts/generate-catalog.mjs

${generateCategory("AI_TOOLS", aiTools, lookupDescriptions("ai"))}
${generateCategory("DEV_TOOLS", devTools, lookupDescriptions("dev"))}
${generateCategory("NETWORK_TOOLS", networkTools, lookupDescriptions("network"))}
${generateCategory("UTILS_TOOLS", utilsTools, lookupDescriptions("utils"))}
${generateCategory("OSINT_TOOLS", osintTools, lookupDescriptions("osint"))}
${generateCategory("LANG_TOOLS", langTools, lookupDescriptions("lang"))}
${generateCategory("DB_TOOLS", dbTools, lookupDescriptions("db"))}
${generateCategory("EDITOR_TOOLS", editorTools, lookupDescriptions("editor"))}
${generateCategory("AUTO_TOOLS", autoTools, lookupDescriptions("auto"))}
${generateCategory("DEPLOY_TOOLS", deployTools, lookupDescriptions("deploy"))}
${generateCategory("NPM_TOOLS", npmTools, lookupDescriptions("npm"))}
${generateCategory("SHELL_TOOLS", shellTools, lookupDescriptions("shell"))}
${generateCategory("UI_TOOLS", uiTools, lookupDescriptions("ui"))}
${generateCategory("GAMES_TOOLS", gamesTools, lookupDescriptions("games"))}

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
`;

  const outPath = join(__dirname, "..", "client", "src", "data", "catalog.ts");
  writeFileSync(outPath, output, "utf-8");
  console.log(`Generated ${outPath} (${aiTools.length} AI, ${devTools.length} Dev, ${langTools.length} Lang, ${dbTools.length} DB, ${editorTools.length} Editor, ${npmTools.length} NPM, ${shellTools.length} Shell, ${uiTools.length} UI, ${autoTools.length} Auto, ${deployTools.length} Deploy, ${networkTools.length} Network, ${utilsTools.length} Utils, ${osintTools.length} OSINT, ${gamesTools.length} Games)`);
}

main().catch(console.error);
