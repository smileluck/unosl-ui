export type ThemeScheme = "dark" | "light" | "auto";

export interface ThemeSetting {
  themeScheme: ThemeScheme;
  primaryColor: string;
}
