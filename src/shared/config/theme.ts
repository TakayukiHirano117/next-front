/**
 * アプリ基調色の参照用定数。
 * 正は `src/app/globals.css` の CSS 変数（--app-*）。値を変えるときは両方を揃えて更新する。
 */
export const themeColors = {
  bg: "#FFF8F5",
  surface: "#FFFCFA",
  primary: "#F4A98F",
  primaryHover: "#E8957A",
  accent: "#F7C6D8",
  text: "#4A3A38",
  textMuted: "#8A7470",
  border: "#F0DDD6",
  error: "#D64545",
  primaryForeground: "#4A3A38",
} as const;

export type ThemeColorKey = keyof typeof themeColors;

export const themeGradients = {
  authBackground:
    "linear-gradient(165deg, #FFF8F5 0%, #FFE8DF 45%, #FCE8F0 100%)",
} as const;
