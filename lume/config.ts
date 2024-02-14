import lume from "lume/mod.ts";
import { currentVersions } from "./plugins/current_versions/mod.ts";
import { betterLineBreaks } from "./plugins/better_line_breaks/mod.ts";

const site = lume({
  src: "./docs",
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

export default site;
