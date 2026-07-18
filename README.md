<p align="center">
  <img src="https://raw.githubusercontent.com/israelmarques1024-dotcom/karnel-termux/main/assets/images/karnel-logo.png" alt="Karnel Termux Logo" width="400">
</p>

<p align="center">
  <strong>Official documentation site for Karnel Termux.</strong>
</p>

<p align="center">
  <a href="https://kerneltermux.vercel.app">
    <img src="https://img.shields.io/badge/Site-kerneltermux.vercel.app-0078D4?style=for-the-badge" alt="Site">
  </a>
  <a href="https://github.com/israelmarques1024-dotcom/karnel-termux">
    <img src="https://img.shields.io/badge/CLI%20Repo-karnel--termux-0078D4?style=for-the-badge" alt="CLI">
  </a>

  <a href="https://github.com/israelmarques1024-dotcom/karnel-termux-site">
    <img src="https://img.shields.io/badge/license-MIT-0078D4?style=for-the-badge" alt="License">
  </a>
</p>

---

**Karnel Termux** is a modular development environment for Termux on Android.

This site hosts the official documentation for the Karnel Termux CLI.

Created by **Israel Marques**.

---

## Features

- **Documentation** for all CLI commands and modules, including Robin OSINT
- **AI tools page** — Browse and install 31 agents, gateways, and developer utilities
- **Interactive guides** — Doctor checks, PostgreSQL, voice commands, and more
- **Responsive** — Works on mobile and desktop
- **Dark theme** — Easy on the eyes

## Pages

| Page           | Route             | Description                                                   |
| -------------- | ----------------- | ------------------------------------------------------------- |
| Home           | `/`               | Landing page with overview                                    |
| AI Tools       | `/karnel/ai`      | 31 agents, gateways, and developer utilities                  |
| Brain          | `/karnel/brain`   | Second brain memory system docs                               |
| Code Editor    | `/karnel/editor`  | code-server (VS Code in browser)                              |
| Deploy         | `/karnel/deploy`  | Deployment guides for Vercel, Railway, Netlify                |
| Doctor         | `/karnel/doctor`  | Termux diagnostics and project code analysis                  |
| Env            | `/karnel/env`     | Environment variable management                               |
| Init           | `/karnel/init`    | Project templates                                             |
| Karnel Auto    | `/karnel/auto`    | n8n automation                                                |
| Karnel Backup  | `/karnel/backup`  | Backup and restore                                            |
| Karnel Cleanup | `/karnel/cleanup` | Cache and temp cleanup                                        |
| Karnel DB      | `/karnel/db`      | Database module (PostgreSQL, MariaDB, SQLite, MongoDB, Redis) |
| Karnel Dev     | `/karnel/dev`     | 32 development tools                                          |
| Karnel Docs    | `/karnel`         | Documentation system                                          |
| Karnel Lang    | `/karnel/lang`    | Languages (Node.js, Python, Go, Rust, C/C++, PHP, Perl)       |
| Karnel Npm     | `/karnel/npm`     | Global npm packages                                           |
| Karnel OSINT   | `/karnel/osint`   | Robin v2.8, Tor, privacy model and lifecycle                  |
| Karnel Shell   | `/karnel/shell`   | ZSH + Oh My Zsh                                               |
| Karnel UI      | `/karnel/ui`      | Font, cursor, extra-keys, banner                              |
| Linux          | `/karnel/linux`   | Linux-specific tools                                          |
| PG             | `/karnel/pg`      | PostgreSQL manager                                            |
| Show Docs      | `/karnel/show`    | Tool documentation viewer                                     |
| Termux         | `/termux`         | Termux-specific tools                                         |
| Termux API     | `/termux/api`     | Termux:API integration                                        |
| Voice          | `/karnel/voice`   | Voice command agent                                           |

---

## Tech Stack

| Technology   | Purpose              |
| ------------ | -------------------- |
| React 19     | UI framework         |
| Vite         | Build tool           |
| TypeScript   | Type safety          |
| Tailwind CSS | Styling              |
| wouter       | Client-side routing  |
| Lucide React | Icons                |
| Vercel       | Hosting & deployment |

---

## Run Locally

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000 in your browser.

### Build

```bash
pnpm build
pnpm preview
```

---

## Project Structure

```
client/
├── src/
│   ├── components/     # Reusable components
│   ├── data/           # Synchronized tool catalog
│   ├── hooks/          # Navigation and viewport hooks
│   ├── lib/            # Routes, contracts, and utilities
│   ├── pages/          # Page components
│   └── index.css       # Global styles
├── index.html
package.json            # Scripts and dependencies
pnpm-lock.yaml          # Reproducible dependency graph
tsconfig.json           # TypeScript configuration
vercel.json             # Production deployment settings
vite.config.ts          # Vite and build configuration
```

---

## Contributing

1. Fork the repo
2. Create a branch: `git checkout -b my-feature`
3. Make your changes
4. Run: `pnpm format:check && pnpm check`
5. Push and open a PR

---

## License

MIT © Israel Marques

---

<p align="center">
  <a href="https://kerneltermux.vercel.app">
    <img src="https://img.shields.io/badge/Visit%20Site-0078D4?style=for-the-badge" alt="Site">
  </a>
  <a href="https://github.com/israelmarques1024-dotcom/karnel-termux">
    <img src="https://img.shields.io/badge/Karnel%20Termux-181717?style=for-the-badge&logo=github" alt="CLI">
  </a>

</p>
