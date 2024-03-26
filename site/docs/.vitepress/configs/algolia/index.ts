import type { DefaultTheme } from "vitepress";
import * as locale from "../locales/index.js";

export const algolia: DefaultTheme.Config["search"] = {
  provider: "algolia",
  options: {
    apiKey: "132f69d808d8e06cf36d9285f91e0562",
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
