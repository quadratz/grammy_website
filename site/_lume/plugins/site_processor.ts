// https://lume.land/docs/core/processors/
// Snapshot: https://web.archive.org/web/20240226141235/https://lume.land/docs/core/processors/

/**
 * Show the curent code language which will be located at the top right of the code-group container
 *
 * Example: "ts", "js", "ascii", "sh", "text"
 */
export function addCurrentCodeLang(document: Document) {
  const codeGroups = document.querySelectorAll(".code-group");

  for (const codeGroup of codeGroups) {
    // Select the current active code-block.
    // The active one have class "active".
    const code = codeGroup.querySelector(".code-block.active .shiki code")!;

    // <code class="language-*">
    const lang = code.className.replace("language-", "");

    // Insert the lang text into the respective element.
    const header_lang = codeGroup.querySelector(".header .lang")!;
    header_lang.innerHTML = lang;
  }
}

/**
 * This will connect the code-label to the respective code-block by assigning the same id.
 * The id will be used by the js script (/site/assets/scripts/code_group.ts) to hide/show the code-block element.
 */
export function assignIdToCodeBlock(document: Document) {
  for (const codeGroup of document.querySelectorAll(".code-group")) {
    const inputs = codeGroup.querySelectorAll("input");
    const codeBlocks = codeGroup.querySelectorAll(".code-block");

    /**
     * We will assign the id based on the same order of the label element.
     *
     * For instance:
     *   The id of the 1st label will also be asigned to the 1st code-block.
     *   The 2nd label to 2nd code-block.
     *   The n-th label to n-th code-block.
     */
    for (let i = 0; i < inputs.length; i++) {
      // Get the value of id from the label
      const inputId = inputs[i].getAttribute("id");
      if (inputId === null) {
        throw new Error("The id for code-block is missing!");
      }

      // Rename the id from "tab-xxx" to "code-block-xxx"
      const codeBlockId = inputId.replace("tab", "code-block");

      // Assign the id to the respective codeBlock
      codeBlocks[i].setAttribute("id", codeBlockId);
    }
  }
}
