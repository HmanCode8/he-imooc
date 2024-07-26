// vite.config.js
import { defineConfig } from "file:///Users/heshiheng/Desktop/project/%E6%95%B0%E6%8D%AE%E5%8F%AF%E8%A7%86%E5%8C%96%E9%A1%B9%E7%9B%AE/imooc-visualization/node_modules/vite/dist/node/index.js";
import vue from "file:///Users/heshiheng/Desktop/project/%E6%95%B0%E6%8D%AE%E5%8F%AF%E8%A7%86%E5%8C%96%E9%A1%B9%E7%9B%AE/imooc-visualization/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import path from "path";
import cesium from "file:///Users/heshiheng/Desktop/project/%E6%95%B0%E6%8D%AE%E5%8F%AF%E8%A7%86%E5%8C%96%E9%A1%B9%E7%9B%AE/imooc-visualization/node_modules/vite-plugin-cesium/dist/index.mjs";
import AutoImport from "file:///Users/heshiheng/Desktop/project/%E6%95%B0%E6%8D%AE%E5%8F%AF%E8%A7%86%E5%8C%96%E9%A1%B9%E7%9B%AE/imooc-visualization/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///Users/heshiheng/Desktop/project/%E6%95%B0%E6%8D%AE%E5%8F%AF%E8%A7%86%E5%8C%96%E9%A1%B9%E7%9B%AE/imooc-visualization/node_modules/unplugin-vue-components/dist/vite.js";
import { ElementPlusResolver } from "file:///Users/heshiheng/Desktop/project/%E6%95%B0%E6%8D%AE%E5%8F%AF%E8%A7%86%E5%8C%96%E9%A1%B9%E7%9B%AE/imooc-visualization/node_modules/unplugin-vue-components/dist/resolvers.js";
var __vite_injected_original_dirname = "/Users/heshiheng/Desktop/project/\u6570\u636E\u53EF\u89C6\u5316\u9879\u76EE/imooc-visualization";
var vite_config_default = defineConfig({
  assetsInclude: ["**/*.png", "**/*.jpg", "**/*.jpeg", "**/*.svg"],
  // 根据需要添加其他静态资源类型
  plugins: [
    vue(),
    cesium(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ],
  build: {
    manualChunks(id) {
      if (id.includes("node_modules")) {
        return id.toString().split("node_modules/")[1].split("/")[0].toString();
      }
    },
    rollupOptions: {
      output: {
        entryFileNames: `js/[name].[hash].js`,
        chunkFileNames: `js/[name].[hash].js`,
        assetFileNames: ({ name }) => {
          if (name.endsWith(".css")) {
            return `css/[name].[hash].css`;
          }
          return `assets/[name].[hash][extname]`;
        }
      },
      treeshake: true,
      external: ["cesium"]
    }
  },
  // 为 ./src 提供别名 @
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "src")
    }
  },
  // 主动开启热更新
  server: {
    hmr: true
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvaGVzaGloZW5nL0Rlc2t0b3AvcHJvamVjdC9cdTY1NzBcdTYzNkVcdTUzRUZcdTg5QzZcdTUzMTZcdTk4NzlcdTc2RUUvaW1vb2MtdmlzdWFsaXphdGlvblwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2hlc2hpaGVuZy9EZXNrdG9wL3Byb2plY3QvXHU2NTcwXHU2MzZFXHU1M0VGXHU4OUM2XHU1MzE2XHU5ODc5XHU3NkVFL2ltb29jLXZpc3VhbGl6YXRpb24vdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2hlc2hpaGVuZy9EZXNrdG9wL3Byb2plY3QvJUU2JTk1JUIwJUU2JThEJUFFJUU1JThGJUFGJUU4JUE3JTg2JUU1JThDJTk2JUU5JUExJUI5JUU3JTlCJUFFL2ltb29jLXZpc3VhbGl6YXRpb24vdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHZ1ZSBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tdnVlXCI7XG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IGNlc2l1bSBmcm9tIFwidml0ZS1wbHVnaW4tY2VzaXVtXCI7XG5cbmltcG9ydCBBdXRvSW1wb3J0IGZyb20gXCJ1bnBsdWdpbi1hdXRvLWltcG9ydC92aXRlXCI7XG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tIFwidW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvdml0ZVwiO1xuaW1wb3J0IHsgRWxlbWVudFBsdXNSZXNvbHZlciB9IGZyb20gXCJ1bnBsdWdpbi12dWUtY29tcG9uZW50cy9yZXNvbHZlcnNcIjtcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIGFzc2V0c0luY2x1ZGU6IFtcIioqLyoucG5nXCIsIFwiKiovKi5qcGdcIiwgXCIqKi8qLmpwZWdcIiwgXCIqKi8qLnN2Z1wiXSwgLy8gXHU2ODM5XHU2MzZFXHU5NzAwXHU4OTgxXHU2REZCXHU1MkEwXHU1MTc2XHU0RUQ2XHU5NzU5XHU2MDAxXHU4RDQ0XHU2RTkwXHU3QzdCXHU1NzhCXG4gIHBsdWdpbnM6IFtcbiAgICB2dWUoKSxcbiAgICBjZXNpdW0oKSxcblxuICAgIEF1dG9JbXBvcnQoe1xuICAgICAgcmVzb2x2ZXJzOiBbRWxlbWVudFBsdXNSZXNvbHZlcigpXSxcbiAgICB9KSxcbiAgICBDb21wb25lbnRzKHtcbiAgICAgIHJlc29sdmVyczogW0VsZW1lbnRQbHVzUmVzb2x2ZXIoKV0sXG4gICAgfSksXG4gIF0sXG4gIGJ1aWxkOiB7XG4gICAgbWFudWFsQ2h1bmtzKGlkKSB7XG4gICAgICBpZiAoaWQuaW5jbHVkZXMoXCJub2RlX21vZHVsZXNcIikpIHtcbiAgICAgICAgcmV0dXJuIGlkLnRvU3RyaW5nKCkuc3BsaXQoXCJub2RlX21vZHVsZXMvXCIpWzFdLnNwbGl0KFwiL1wiKVswXS50b1N0cmluZygpO1xuICAgICAgfVxuICAgIH0sXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgb3V0cHV0OiB7XG4gICAgICAgIGVudHJ5RmlsZU5hbWVzOiBganMvW25hbWVdLltoYXNoXS5qc2AsXG4gICAgICAgIGNodW5rRmlsZU5hbWVzOiBganMvW25hbWVdLltoYXNoXS5qc2AsXG4gICAgICAgIGFzc2V0RmlsZU5hbWVzOiAoeyBuYW1lIH0pID0+IHtcbiAgICAgICAgICBpZiAobmFtZS5lbmRzV2l0aChcIi5jc3NcIikpIHtcbiAgICAgICAgICAgIHJldHVybiBgY3NzL1tuYW1lXS5baGFzaF0uY3NzYDtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGBhc3NldHMvW25hbWVdLltoYXNoXVtleHRuYW1lXWA7XG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgdHJlZXNoYWtlOiB0cnVlLFxuICAgICAgZXh0ZXJuYWw6IFtcImNlc2l1bVwiXSxcbiAgICB9LFxuICB9LFxuICAvLyBcdTRFM0EgLi9zcmMgXHU2M0QwXHU0RjlCXHU1MjJCXHU1NDBEIEBcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICBcIkBcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCJzcmNcIiksXG4gICAgfSxcbiAgfSxcbiAgLy8gXHU0RTNCXHU1MkE4XHU1RjAwXHU1NDJGXHU3MEVEXHU2NkY0XHU2NUIwXG4gIHNlcnZlcjoge1xuICAgIGhtcjogdHJ1ZSxcbiAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE4WixTQUFTLG9CQUFvQjtBQUMzYixPQUFPLFNBQVM7QUFDaEIsT0FBTyxVQUFVO0FBQ2pCLE9BQU8sWUFBWTtBQUVuQixPQUFPLGdCQUFnQjtBQUN2QixPQUFPLGdCQUFnQjtBQUN2QixTQUFTLDJCQUEyQjtBQVBwQyxJQUFNLG1DQUFtQztBQVV6QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixlQUFlLENBQUMsWUFBWSxZQUFZLGFBQWEsVUFBVTtBQUFBO0FBQUEsRUFDL0QsU0FBUztBQUFBLElBQ1AsSUFBSTtBQUFBLElBQ0osT0FBTztBQUFBLElBRVAsV0FBVztBQUFBLE1BQ1QsV0FBVyxDQUFDLG9CQUFvQixDQUFDO0FBQUEsSUFDbkMsQ0FBQztBQUFBLElBQ0QsV0FBVztBQUFBLE1BQ1QsV0FBVyxDQUFDLG9CQUFvQixDQUFDO0FBQUEsSUFDbkMsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLGFBQWEsSUFBSTtBQUNmLFVBQUksR0FBRyxTQUFTLGNBQWMsR0FBRztBQUMvQixlQUFPLEdBQUcsU0FBUyxFQUFFLE1BQU0sZUFBZSxFQUFFLENBQUMsRUFBRSxNQUFNLEdBQUcsRUFBRSxDQUFDLEVBQUUsU0FBUztBQUFBLE1BQ3hFO0FBQUEsSUFDRjtBQUFBLElBQ0EsZUFBZTtBQUFBLE1BQ2IsUUFBUTtBQUFBLFFBQ04sZ0JBQWdCO0FBQUEsUUFDaEIsZ0JBQWdCO0FBQUEsUUFDaEIsZ0JBQWdCLENBQUMsRUFBRSxLQUFLLE1BQU07QUFDNUIsY0FBSSxLQUFLLFNBQVMsTUFBTSxHQUFHO0FBQ3pCLG1CQUFPO0FBQUEsVUFDVDtBQUNBLGlCQUFPO0FBQUEsUUFDVDtBQUFBLE1BQ0Y7QUFBQSxNQUNBLFdBQVc7QUFBQSxNQUNYLFVBQVUsQ0FBQyxRQUFRO0FBQUEsSUFDckI7QUFBQSxFQUNGO0FBQUE7QUFBQSxFQUVBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssS0FBSyxRQUFRLGtDQUFXLEtBQUs7QUFBQSxJQUNwQztBQUFBLEVBQ0Y7QUFBQTtBQUFBLEVBRUEsUUFBUTtBQUFBLElBQ04sS0FBSztBQUFBLEVBQ1A7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
