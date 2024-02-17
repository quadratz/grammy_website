import { codeToHtml } from "shiki";
import { currentVersions } from "../../lume/plugins/current_versions/mod.ts";

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
  try {
    for (let text of textList) {
      text = currentVersions(text);
      await parseCode("", 100);
      for (const char of text.split("")) await parseCode(char, 12);
      output += "\n";
    }
  } catch (e) {
    console.error(e);
  }
});

async function parseCode(input: string, delay: number): Promise<void> {
  if (!codeOutput) {
    throw new Error("Element with id 'codeOutput' is not exist.");
  }

  output = output.replace("▏", "");
  output += input + "▏";
  codeToHtml(output, { lang: "js", theme: "rose-pine" }).then((val) => {
    const result = val.replace("▏", `<span id="cursor">▏</span>`);
    codeOutput.innerHTML = result;
  });
  await new Promise((_) => setTimeout(_, delay));
}
