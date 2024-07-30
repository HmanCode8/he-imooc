import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
// import cesium from "vite-plugin-cesium";

import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
  assetsInclude: ["**/*.png", "**/*.jpg", "**/*.jpeg", "**/*.svg"], // 根据需要添加其他静态资源类型
  plugins: [
    vue(),
    // cesium(),

    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  build: {
    rollupOptions: {
      manualChunks(id) {
        if (id.includes("node_modules")) {
          return id
            .toString()
            .split("node_modules/")[1]
            .split("/")[0]
            .toString();
        }
      },
      output: {
        entryFileNames: `js/[name].[hash].js`,
        chunkFileNames: `js/[name].[hash].js`,
        assetFileNames: ({ name }) => {
          if (name.endsWith(".css")) {
            return `css/[name].[hash].css`;
          }
          if (name.endsWith(".ttf")) {
            return `font/[name].[hash].ttf`;
          }
          // 其他静态资源类型
          return `assets/[name].[hash][extname]`;
        },
      },
      treeshake: {
        moduleSideEffects: true, // 移除没有副作用的模块
        propertyReadSideEffects: false, // 禁止属性读取的副作用
        tryCatchDeoptimization: false, // 禁止try-catch语句的去优化
        pureExternalModules: true, // 纯外部模块
      },
      external: ["cesium"],
    },
  },
  // 为 ./src 提供别名 @
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  // 主动开启热更新
  server: {
    hmr: true,
  },
});
