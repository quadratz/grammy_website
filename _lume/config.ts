import lume from "lume/mod.ts";
import { currentVersions } from "./plugins/current_versions/plugins.ts";

const site = lume({
  src: "./docs",
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
