import lume from "lume/mod.ts";
import preact from "lume/plugins/jsx_preact.ts";

const site = lume({
  src: "./site/",
  dest: "./site/_lume/dist",
  prettyUrls: true,
  includes: "./_lume/includes/",
});

site.use(preact());

export default site;
