import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";
// https://vitejs.dev/config/

const components = Components({
  dts: true,
  types: [
    {
      from: "vue-router",
      names: ["RouterLink", "RouterView"],
    },
  ],
  // resolvers: [AntDesignVueResolver()],
});

export default defineConfig({
  plugins: [vue(), components],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    port: 3000,
    // proxy: {
    //   "/elt": {
    //     target: "http://35.247.169.138:8080", // "https://mainsite.com"
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/elt/, ""),
    //   },
    // },
  },
});
