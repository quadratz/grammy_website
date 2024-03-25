import type { DefaultTheme } from "vitepress";
import * as locale from "../locales/index.js";

export const algolia: DefaultTheme.Config["search"] = {
  provider: "algolia",
  options: {
    apiKey: "cc669f502edb7010c87f4bb015c22f1b",
    indexName: "grammy",
    appId: "1FFMAU2VMZ",
    locales: {
      ...locale.searchEn,
      ...locale.searchEs,
      ...locale.searchId,
      ...locale.searchUk,
      ...locale.searchZh,
    },
  },
};
