import { describe, expect, it } from "vitest";
import { APP_ROUTE_PATHS } from "@/App";
import {
  AI_TOOLS,
  CATALOG_COUNTS,
  DEV_TOOLS,
  OSINT_TOOLS,
} from "@/data/catalog";
import { DOCUMENTATION_NAV, ROUTES, ROUTE_PATHS } from "@/lib/routes";

describe("site contracts", () => {
  it("keeps every documentation navigation entry routable", () => {
    const registered = new Set(APP_ROUTE_PATHS);
    expect(DOCUMENTATION_NAV.every(item => registered.has(item.href))).toBe(
      true
    );
    expect(registered.has(ROUTES.osint)).toBe(true);
    expect(registered).toEqual(new Set(ROUTE_PATHS));
  });

  it("keeps navigation paths and labels unique", () => {
    expect(new Set(DOCUMENTATION_NAV.map(item => item.href)).size).toBe(
      DOCUMENTATION_NAV.length
    );
    expect(new Set(DOCUMENTATION_NAV.map(item => item.label)).size).toBe(
      DOCUMENTATION_NAV.length
    );
  });

  it("matches the released Karnel registries", () => {
    expect(CATALOG_COUNTS).toEqual({ ai: 31, dev: 32, osint: 1 });
    expect(AI_TOOLS).toHaveLength(CATALOG_COUNTS.ai);
    expect(DEV_TOOLS).toHaveLength(CATALOG_COUNTS.dev);
    expect(OSINT_TOOLS).toHaveLength(CATALOG_COUNTS.osint);
    expect(OSINT_TOOLS[0]).toMatchObject({
      name: "Robin",
      flag: "--robin",
      version: "v2.8",
    });
  });

  it("does not duplicate install flags", () => {
    for (const tools of [AI_TOOLS, DEV_TOOLS, OSINT_TOOLS]) {
      expect(new Set(tools.map(tool => tool.flag)).size).toBe(tools.length);
    }
  });
});
