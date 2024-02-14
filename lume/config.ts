import lume from "lume/mod.ts";
import modifyUrls from "lume/plugins/modify_urls.ts";
import { betterLineBreaks } from "./plugins/better_line_breaks/mod.ts";
import { currentVersions } from "./plugins/current_versions/mod.ts";

const site = lume({
  src: "./docs",
  prettyUrls: false,
}, {
  markdown: {
    plugins: [betterLineBreaks],
  },
});

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
    return url.replace(/.html$/, "");
  },
}));

export default site;
