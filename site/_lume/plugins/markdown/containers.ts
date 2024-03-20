import type MarkdownIt from "types/markdown-it";
import type { RenderRule } from "types/markdown-it/lib/renderer";
import container from "markdown-it-container";
import { nanoid } from "nanoid";
import { extractTitle } from "./preWrapper.ts";

type ContainerOptions = {
  infoLabel?: string;
  noteLabel?: string;
  tipLabel?: string;
  warningLabel?: string;
  dangerLabel?: string;
  detailsLabel?: string;
  importantLabel?: string;
  cautionLabel?: string;
};

export function containerPlugin(
  md: MarkdownIt,
  containerOptions?: ContainerOptions,
) {
  md.use(...createContainer("tip", containerOptions?.tipLabel || "TIP", md))
    .use(...createContainer("info", containerOptions?.infoLabel || "INFO", md))
    .use(
      ...createContainer(
        "warning",
        containerOptions?.warningLabel || "WARNING",
        md,
      ),
    )
    .use(
      ...createContainer(
        "danger",
        containerOptions?.dangerLabel || "DANGER",
        md,
      ),
    )
    .use(
      ...createContainer(
        "details",
        containerOptions?.detailsLabel || "Details",
        md,
      ),
    )
    .use(...createCodeGroup());
}

type ContainerArgs = [typeof container, string, { render: RenderRule }];

function createContainer(
  klass: string,
  defaultTitle: string,
  md: MarkdownIt,
): ContainerArgs {
  return [container, klass, {
    render(tokens, idx, _options, env) {
      const token = tokens[idx];
      const infoTitle = token.info.trim().slice(klass.length).trim();
      const attrs = md.renderer.renderAttrs(token);

      if (token.nesting === 1) {
        const title = md.renderInline(infoTitle || defaultTitle, {
          references: env.references,
        });
        return (klass === "details")
          ? `<details class="${klass} custom-block"${attrs}><summary>${title}</summary>\n`
          : `<aside class="${klass} custom-block"${attrs}><p class="custom-block-title">${title}</p>\n`;
      }

      return (klass === "details") ? "</details>\n" : "</aside>\n";
    },
  }];
}

function createCodeGroup(): ContainerArgs {
  return [
    container,
    "code-group",
    {
      render(tokens, idx) {
        if (tokens[idx].nesting === 1) {
          const name = nanoid(5);
          let tabs = "";
          let checked = " checked";

          for (
            let i = idx + 1;
            !(tokens[i].nesting === -1 &&
              tokens[i].type === "container_code-group_close");
            ++i
          ) {
            if (tokens[i].type === "fence" && tokens[i].tag === "code") {
              const title = extractTitle(tokens[i].info);
              if (title) {
                const id = nanoid(7);
                tabs += `
                  <input type="radio" name="group-${name}" id="tab-${id}"${checked}>
                  <label for="tab-${id}">
                    <span>${title}</span>
                  </label>`;

                if (checked) {
                  // For code-block
                  tokens[i].info += " active";
                }
                checked = "";
              }
            }
          }

          return `
            <div class="code-group">
              <div class="header">
                <div class="tabs">${tabs}</div>
                <div class="alt">
                  <span class="lang"></span>
                  <button title="Copy Code" class="copy">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                      <path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            <div class="blocks">\n`;
        }
        return `</div></div>\n`;
      },
    },
  ];
}
