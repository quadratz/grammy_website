document.addEventListener("DOMContentLoaded", () => {
  const copyElements = document.querySelectorAll<HTMLInputElement>(
    ".code-group .copy",
  );

  for (const copy of copyElements) {
    copy.addEventListener("click", async function () {
      // The animation is still going, ignore the request.
      if (this.classList.contains("copied")) return;

      // Get the code content
      const codeGroup = this.closest(".code-group");
      const code = codeGroup?.querySelector(".code-block.active code");
      const rawCode = code?.textContent;

      if (rawCode) {
        try {
          // Send the content to system clipboard
          await navigator.clipboard.writeText(rawCode);

          const svgElement = this.querySelector("svg");
          if (svgElement) {
            const originalSVG = svgElement.outerHTML;

            // Temporary change the icon to "check" and add class "copied"
            svgElement.outerHTML =
              '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>';
            this.classList.add("copied");

            // Remove class "copied" and revert to the original icon after 2 Seconds
            setTimeout(() => {
              this.innerHTML = originalSVG;
              this.classList.remove("copied");
            }, 2000);
          }
        } catch (err) {
          console.error("Error copying to clipboard: ", err);
        }
      }
    });
  }
});
