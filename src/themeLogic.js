export const DEFAULT_KEY = "theme";

export function keyFromAttr(value) {
  return value || DEFAULT_KEY;
}

export function normalizeTheme(value) {
  return value || null;
}

export function parseThemeList(value) {
  return (value || "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

export function nextThemeFromList(list, current) {
  if (!list.length) return null;
  const currentIndex = list.indexOf(current || "");
  if (currentIndex === -1) return list[0];
  return list[(currentIndex + 1) % list.length];
}

export function themeFromSetValue(value, current) {
  const list = parseThemeList(value);
  if (list.length > 1) return nextThemeFromList(list, current);
  return normalizeTheme(value);
}

export function isSetElementActive(setValue, theme) {
  const list = parseThemeList(setValue);
  if (!theme) return setValue === "";
  if (list.length > 1) return list.includes(theme);
  return setValue === theme;
}

export function parseActAttr(raw) {
  const value = (raw || "").trim();
  if (!value) return null;
  const i = value.indexOf(":");
  const name = (i === -1 ? value : value.slice(0, i)).trim();
  if (!name) return null;
  return { name, value: i === -1 ? "" : value.slice(i + 1) };
}
