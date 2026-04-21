export type ThemeMode = "light" | "dark" | "system";

export const STORAGE_KEY = "ph-theme";

export const themeInitScript = `
(() => {
  const storageKey = "${STORAGE_KEY}";
  const root = document.documentElement;
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  const stored = localStorage.getItem(storageKey);
  const mode = stored === "light" || stored === "dark" || stored === "system" ? stored : "system";
  const isDark = mode === "dark" || (mode === "system" && media.matches);

  root.classList.toggle("dark", isDark);
  root.style.colorScheme = isDark ? "dark" : "light";
  root.dataset.theme = mode;
})();
`;
