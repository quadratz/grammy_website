import type MarkdownIt from "types/markdown-it";

export function preWrapperPlugin(md: MarkdownIt) {
  const fence = md.renderer.rules.fence!;
  md.renderer.rules.fence = (...args) => {
    const [tokens, idx] = args;
    const token = tokens[idx];

    token.info = token.info.replace(/\[.*\]/, ""); // remove title from info
    const active = / active( |$)/.test(token.info) ? " active" : "";

    token.info = token.info.replace(/ active$/, "").replace(/ active /, " ");
    const lang = extractLang(token.info);
    const rawCode = fence(...args);

    return `
      <div class="code-block${active}">
        <div class="line-number"></div>
        ${rawCode}
      </div>
    `;
  };
}

export function extractTitle(info: string) {
  return info.match(/\[(.*)\]/)?.[1] || extractLang(info, false) || "Text";
}

function extractLang(info: string, doFallback = true) {
  const result = info.match(/(\w+)(\:.*|\s.*)?/)?.[1];
  if (result === undefined) {
    if (doFallback) {
      return "text";
    }
    return "";
  }
  return result;
}

// function addLineNumber(info: string): string {
//   return (info.search("no-line-number") > -1) ? '' : '<pre class="line-numbers-wrapper" aria-hidden="true"><code></code></pre>';
// }
