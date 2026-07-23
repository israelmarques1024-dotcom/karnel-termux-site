import {
  AI_TOOLS, DEV_TOOLS, NETWORK_TOOLS, UTILS_TOOLS, OSINT_TOOLS,
  LANG_TOOLS, DB_TOOLS, EDITOR_TOOLS, AUTO_TOOLS, DEPLOY_TOOLS,
  NPM_TOOLS, SHELL_TOOLS, UI_TOOLS, GAMES_TOOLS,
} from "@/data/catalog";

export interface SearchEntry {
  name: string;
  desc: string;
  flag: string;
  category: string;
  route: string;
  keywords: string;
}

const CATEGORY_ROUTES: Record<string, string> = {
  AI: "/karnel/ai",
  Dev: "/karnel/dev",
  Network: "/karnel/network",
  Utils: "/karnel/utils",
  OSINT: "/karnel/osint",
  Lang: "/karnel/lang",
  DB: "/karnel/db",
  Editor: "/karnel/editor",
  Auto: "/karnel/auto",
  Deploy: "/karnel/deploy",
  NPM: "/karnel/npm",
  Shell: "/karnel/shell",
  UI: "/karnel/ui",
  Games: "/karnel/games",
};

const catalogs: Record<string, readonly { name: string; desc: string; flag: string }[]> = {
  AI: AI_TOOLS,
  Dev: DEV_TOOLS,
  Network: NETWORK_TOOLS,
  Utils: UTILS_TOOLS,
  OSINT: OSINT_TOOLS,
  Lang: LANG_TOOLS,
  DB: DB_TOOLS,
  Editor: EDITOR_TOOLS,
  Auto: AUTO_TOOLS,
  Deploy: DEPLOY_TOOLS,
  NPM: NPM_TOOLS,
  Shell: SHELL_TOOLS,
  UI: UI_TOOLS,
  Games: GAMES_TOOLS,
};

export const searchIndex: SearchEntry[] = Object.entries(catalogs).flatMap(([cat, tools]) =>
  tools.map(t => ({
    name: t.name,
    desc: t.desc,
    flag: t.flag,
    category: cat,
    route: CATEGORY_ROUTES[cat] || "/",
    keywords: `${t.name} ${t.desc} ${t.flag} ${cat}`.toLowerCase(),
  }))
);

export function searchTools(query: string): SearchEntry[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  const terms = q.split(/\s+/).filter(Boolean);
  return searchIndex
    .map(entry => {
      const score = terms.reduce((s, term) => s + (entry.keywords.includes(term) ? 1 : 0), 0);
      return { entry, score };
    })
    .filter(x => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .map(x => x.entry)
    .slice(0, 20);
}
