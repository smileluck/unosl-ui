import Vue from "@vitejs/plugin-vue";
import VueJSX from "@vitejs/plugin-vue-jsx";
import { defineConfig } from "vite";
import UnoCSS from "unocss/vite";

export default defineConfig({
  plugins: [
    Vue({
      template: {
        compilerOptions: {
          // 将以 sl- 开头的标签名都视为自定义元素
          isCustomElement: (tag) => tag.startsWith("sl-"),
        },
      },
    }),
    VueJSX(),
    UnoCSS(),
  ],
});
