// https://tailwindcss.com/docs/dark-mode#supporting-system-preference-and-manual-selection
// Archive: https://web.archive.org/web/20240229210353/https://tailwindcss.com/docs/dark-mode#supporting-system-preference-and-manual-selection

document.addEventListener("DOMContentLoaded", () => {
  const currentTheme = localStorage.theme;

  toggleDarkmode();

  switch (currentTheme) {
    case "light":
      enableChecked("darkmode-list-light");
      break;
    case "dark":
      enableChecked("darkmode-list-dark");
      break;
    case "auto":
      enableChecked("darkmode-list-auto");
      break;
  }

  const darkmodeList = document.querySelectorAll<HTMLElement>('[id^="darkmode-list-"]');
  for (const el of darkmodeList) {
    // JavaScript is enabled in the client device, thus enable all the darkmode options
    el.toggleAttribute("disabled", false);

    el.addEventListener("change", function () {
      enableChecked(this.id);
      localStorage.theme = this.id.replace("darkmode-list-", "");
      toggleDarkmode();
    })
  }
})

function toggleDarkmode() {
  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  switch (localStorage.theme) {
    case "dark":
      document.documentElement.classList.add('dark');
      showDarkmodeBtnIcon("darkmode-btn-icon-dark-fill");
      break;

    case "light":
      document.documentElement.classList.remove('dark');
      showDarkmodeBtnIcon("darkmode-btn-icon-light-fill");
      break;

    case "auto":
      if (globalThis.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark');
        showDarkmodeBtnIcon("darkmode-btn-icon-dark-outline");
      } else {
        document.documentElement.classList.remove('dark');
        showDarkmodeBtnIcon("darkmode-btn-icon-light-outline");
      }
      break;
  }
}

function enableChecked(id: string) {
  // Select id begins with `darkmode-list-`
  const darkmodeList = document.querySelectorAll<HTMLElement>('[id^="darkmode-list-"]');

  for (const el of darkmodeList) {
    if (el.id === id) {
      el.toggleAttribute("checked", true);
    } else {
      el.toggleAttribute("checked", false);
    }
  }
}

function showDarkmodeBtnIcon(id: string) {
  // Select id begins with `darkmode-list-`
  const darkmodeBtnIcons = document.querySelectorAll<HTMLElement>('[id^="darkmode-btn-icon-"]');

  for (const el of darkmodeBtnIcons) {
    if (el.id === id) {
      el.classList.remove("hidden");
    } else {
      el.classList.add("hidden");
    }
  }
}