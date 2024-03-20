import { addCurrentCodeLang, assignIdToCodeBlock } from "./plugins/site_processor.ts";
import { betterLineBreaks } from "./plugins/better_line_breaks/mod.ts";
import { currentVersions } from "./plugins/current_versions/plugin.ts";
import { containerPlugin } from "./plugins/markdown/containers.ts";
import { preWrapperPlugin } from "./plugins/markdown/preWrapper.ts";

import lume from "lume/mod.ts";
import unocss from "lume/plugins/unocss.ts";
import tsx from "lume/plugins/jsx_preact.ts";
import esbuild from "lume/plugins/esbuild.ts";
import modifyUrls from "lume/plugins/modify_urls.ts";
import lightningCss, { version } from "lume/plugins/lightningcss.ts";
import type { Data, Page } from "lume/core/file.ts";

import {
  getHighlighter,
  type ShikiTransformer,
  type ThemeRegistration,
} from "shiki";
import { fromHighlighter } from "@shikijs/markdown";
import { transformerMetaHighlight } from "@shikijs/transformers";
import theme from "./includes/Y-catppuccin-mocha.json" with { type: "json" };
import { full as emoji } from "markdown-it-emoji";
import { unocssConfig } from "../../uno.config.ts";

class Memory {
  private _data: Array<string> = [];

  public get getData(): Array<string> {
    return this._data;
  }

  public set addData(code: string) {
    this._data.push(code);
  }
}

const memory = new Memory();

const highlighter = await getHighlighter({
  themes: [theme as unknown as ThemeRegistration, "catppuccin-mocha"],
  langs: ["txt", "js", "ts", "sh"],
});

// import { h } from 'hastscript'

// let raw_code: Array<string> = [];

export function extractContent(): ShikiTransformer {
  return {
    name: "extract-content",
    preprocess(code: string) {
      memory.addData = code;
      // console.log(memory.getData);
      return code;
    },
  };
}

const site = lume({
  src: "./site/",
  dest: "./site/_lume/dist",
  prettyUrls: false,
  includes: "./_lume/includes/",
});

site.preprocess([".html"], (pages) => {
  for (const page of pages) {
    // Assign title page.
    // If the title is empty, use heading as the title.
    if (!page.data.title) {
      const headingText = page.document?.querySelector<HTMLHeadingElement>("body")?.innerHTML;
      // console.log(page);
      page.data.title = headingText ? `${headingText} - grammY` : "grammY";
    }

    // Omit /docs/ and /docs/en/ from the url path.
    //
    // example:
    //   grammy.dev/docs/en/guide --> grammy.dev/guide
    //   grammy.dev/docs/id/guide --> grammy.dev/id/guide
    page.data.url = page.data.url.replace(/^\/docs\/(en\/)?/, "/");
  }
})
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
// site.use(sass({
//   includes: "assets/",
// }));
// site.use(tailwindcss({
//   extensions: [".html", ".jsx"],
//   options: {
//     ...tailwindConfig,
//   },
// }));
// site.use(postcss({
//   // PostCSS use `postcssNesting` and `autoprefixer` by default.
//   // We disable both plugins since it will be handled by lightningCSS plugin.
//   useDefaultPlugins: false,
//   includes: site.options.includes + "styles/" // "./_lume/includes/styles/"
// }));

site.use(unocss({
  cssFile: "styles.css",
  options: unocssConfig,
}));
site.use(lightningCss({
  options: {
    // Use default settings
    // https://browserslist.dev/?q=ZGVmYXVsdHM%3D
    targets: {
      android: version(122),
      chrome: version(109),
      edge: version(121),
      firefox: version(115),
      ios_saf: version(15, 6),
      safari: version(17, 2),
      opera: version(105),
      samsung: version(22)
    },
  }
}));

site.use(tsx());
site.use(esbuild({
  options: {
    entryPoints: ["/assets/scripts/index.ts"],
    // bundle: false,
    // minify: false
  },
}));
site.process([".html"], (pages) => {
  for (const page of pages) {
    const document = page.document;
    if (!document) throw new Error("The page does not have document!");

    assignIdToCodeBlock(document);
    addCurrentCodeLang(document);
  }
});

function addLineNumber(pages: Page<Data>[]) {
}

export default site;
