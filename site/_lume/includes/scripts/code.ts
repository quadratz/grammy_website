// Use the core version to reduce the size (2MB vs 400KB)
// https://shiki.style/guide/install#fine-grained-bundle
import {
  getHighlighterCore,
  type HighlighterCore,
} from "https://esm.sh/shiki@1.1.6/core";
import getWasm from "https://esm.sh/shiki@1.1.6/wasm";
import catppuccin_mocha from "https://esm.sh/shiki@1.1.6/themes/catppuccin-mocha.mjs";
import javascript from "https://esm.sh/shiki@1.1.6/langs/javascript.mjs";
import { currentVersions } from "../../plugins/current_versions/plugin.ts";

console.log(`You hear ${Math.floor(Math.random() * 999999)}?`);

const codeOutput = document.getElementById("codeOutput");
const textList = [
  'import { Bot } from "https://deno.land/x/grammy/mod.ts";',
  "",
  'const token = Deno.env.get("BOT_TOKEN");',
  "const bot = new Bot(token);",
  "",
  'bot.on("message", (ctx) => ctx.reply("Hi there!"));',
  "",
  "bot.start();",
];

let output = "";
document.addEventListener("DOMContentLoaded", async () => {
  console.log("hello");
  try {
    const highlighter = await getHighlighterCore({
      // @ts-ignore type check
      themes: [catppuccin_mocha],
      // @ts-ignore type check
      langs: [javascript],
      loadWasm: getWasm,
    });

    for (let text of textList) {
      text = currentVersions(text);
      await parseCode(highlighter, "", 12);
      for (const char of text.split("")) {
        await parseCode(highlighter, char, 30);
      }
      output += "\n";
    }
  } catch (e) {
    console.error(e);
  }
});

async function parseCode(
  highlighter: HighlighterCore,
  input: string,
  delay: number,
): Promise<void> {
  if (!codeOutput) {
    throw new Error("Element with id 'codeOutput' is not exist.");
  }

  output = output.replace("▏", "");
  output += input + "▏";
  const result = highlighter
    .codeToHtml(output, { lang: "javascript", theme: "catppuccin-mocha" })
    .replace("▏", `<span id="cursor">▏</span>`);
  codeOutput.innerHTML = result;

  await new Promise((_) => setTimeout(_, delay));
}
