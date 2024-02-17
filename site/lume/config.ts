import { betterLineBreaks } from "./plugins/better_line_breaks/mod.ts";
import { currentVersions } from "./plugins/current_versions/mod.ts";
import esbuild from "lume/plugins/esbuild.ts";
import lume from "lume/mod.ts";
import modifyUrls from "lume/plugins/modify_urls.ts";
import postcss from "lume/plugins/postcss.ts";
import shiki from "shiki/markdown";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import typography from "tailwind/typography";

const site = lume({
  src: "./site/",
  prettyUrls: false,
  includes: "./lume/includes/",
}, {
  markdown: {
    plugins: [
      betterLineBreaks,
      await shiki({
        themes: {
          light: "dracula",
          dark: "dracula",
        },
      }),
    ],
  },
});

// Includes only files located within folders named "docs" or "assets".
site.ignore((path) => path.match(/(docs|assets)/) === null);
site.addEventListener("beforeRender", (event) => {
  for (const page of event.pages) {
    const content = page.data.content;
    if (typeof content === "string") {
      page.data.content = currentVersions(content);
    }
  }
});
site.use(modifyUrls({
  fn: (url) => {
    // Pretty URL: remove .html extension from the URL
    return url.replace(/.html$/, "");
  },
}));
site.use(tailwindcss({
  options: {
    plugins: [typography],
  },
}));
site.use(postcss());
site.use(esbuild());

export default site;
