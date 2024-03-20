document.addEventListener("DOMContentLoaded", () => {
  const tabRadios = document.querySelectorAll<HTMLInputElement>(
    ".code-group .tabs input",
  );

  for (const tabRadio of tabRadios) {
    tabRadio.addEventListener("change", function () {
      const tabId = this.getAttribute("id");
      if (tabId === null) {
        console.error("tab id is not found");
        return;
      }

      this.parentElement?.querySelectorAll("input").forEach((codeLabel) => {
        const codeBlockId = codeLabel.getAttribute("id")!.replace(
          "tab",
          "code-block",
        );
        const codeBlock = document.querySelector(`#${codeBlockId}`);
        if (codeLabel.checked) {
          codeLabel.setAttribute("checked", "");
          codeBlock?.classList.add("active");
        } else {
          codeLabel.removeAttribute("checked");
          codeBlock?.classList.remove("active");
        }
      });
    });
  }
});
