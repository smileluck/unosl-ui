import Vue from "@vitejs/plugin-vue";
import VueJSX from "@vitejs/plugin-vue-jsx";
import { defineConfig } from "vite";
import UnoCSS from "unocss/vite";

export default defineConfig({
  plugins: [Vue(), VueJSX(), UnoCSS()],
});
