import type { DefaultTheme } from "vitepress";
import * as locale from "../locales/index.js";

export const algolia: DefaultTheme.Config["search"] = {
  provider: "algolia",
  options: {
    apiKey: "687986ce27d245d3407eb8e97357b485",
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
