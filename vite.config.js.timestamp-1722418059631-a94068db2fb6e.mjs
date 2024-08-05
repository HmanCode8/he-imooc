// vite.config.js
import { defineConfig } from "file:///Users/heshiheng/Desktop/project/%E6%95%B0%E6%8D%AE%E5%8F%AF%E8%A7%86%E5%8C%96%E9%A1%B9%E7%9B%AE/imooc-visualization/node_modules/vite/dist/node/index.js";
import vue from "file:///Users/heshiheng/Desktop/project/%E6%95%B0%E6%8D%AE%E5%8F%AF%E8%A7%86%E5%8C%96%E9%A1%B9%E7%9B%AE/imooc-visualization/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import path from "path";
import AutoImport from "file:///Users/heshiheng/Desktop/project/%E6%95%B0%E6%8D%AE%E5%8F%AF%E8%A7%86%E5%8C%96%E9%A1%B9%E7%9B%AE/imooc-visualization/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///Users/heshiheng/Desktop/project/%E6%95%B0%E6%8D%AE%E5%8F%AF%E8%A7%86%E5%8C%96%E9%A1%B9%E7%9B%AE/imooc-visualization/node_modules/unplugin-vue-components/dist/vite.js";
import { ElementPlusResolver } from "file:///Users/heshiheng/Desktop/project/%E6%95%B0%E6%8D%AE%E5%8F%AF%E8%A7%86%E5%8C%96%E9%A1%B9%E7%9B%AE/imooc-visualization/node_modules/unplugin-vue-components/dist/resolvers.js";
var __vite_injected_original_dirname = "/Users/heshiheng/Desktop/project/\u6570\u636E\u53EF\u89C6\u5316\u9879\u76EE/imooc-visualization";
var vite_config_default = defineConfig({
  assetsInclude: ["**/*.png", "**/*.jpg", "**/*.jpeg", "**/*.svg"],
  // 根据需要添加其他静态资源类型
  plugins: [
    vue(),
    // cesium(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ],
  build: {
    rollupOptions: {
      manualChunks(id) {
        if (id.includes("node_modules")) {
          return id.toString().split("node_modules/")[1].split("/")[0].toString();
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
          return `assets/[name].[hash][extname]`;
        }
      },
      treeshake: {
        moduleSideEffects: true,
        // 移除没有副作用的模块
        propertyReadSideEffects: false,
        // 禁止属性读取的副作用
        tryCatchDeoptimization: false,
        // 禁止try-catch语句的去优化
        pureExternalModules: true
        // 纯外部模块
      },
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvaGVzaGloZW5nL0Rlc2t0b3AvcHJvamVjdC9cdTY1NzBcdTYzNkVcdTUzRUZcdTg5QzZcdTUzMTZcdTk4NzlcdTc2RUUvaW1vb2MtdmlzdWFsaXphdGlvblwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2hlc2hpaGVuZy9EZXNrdG9wL3Byb2plY3QvXHU2NTcwXHU2MzZFXHU1M0VGXHU4OUM2XHU1MzE2XHU5ODc5XHU3NkVFL2ltb29jLXZpc3VhbGl6YXRpb24vdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2hlc2hpaGVuZy9EZXNrdG9wL3Byb2plY3QvJUU2JTk1JUIwJUU2JThEJUFFJUU1JThGJUFGJUU4JUE3JTg2JUU1JThDJTk2JUU5JUExJUI5JUU3JTlCJUFFL2ltb29jLXZpc3VhbGl6YXRpb24vdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHZ1ZSBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tdnVlXCI7XG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuLy8gaW1wb3J0IGNlc2l1bSBmcm9tIFwidml0ZS1wbHVnaW4tY2VzaXVtXCI7XG5cbmltcG9ydCBBdXRvSW1wb3J0IGZyb20gXCJ1bnBsdWdpbi1hdXRvLWltcG9ydC92aXRlXCI7XG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tIFwidW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvdml0ZVwiO1xuaW1wb3J0IHsgRWxlbWVudFBsdXNSZXNvbHZlciB9IGZyb20gXCJ1bnBsdWdpbi12dWUtY29tcG9uZW50cy9yZXNvbHZlcnNcIjtcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIGFzc2V0c0luY2x1ZGU6IFtcIioqLyoucG5nXCIsIFwiKiovKi5qcGdcIiwgXCIqKi8qLmpwZWdcIiwgXCIqKi8qLnN2Z1wiXSwgLy8gXHU2ODM5XHU2MzZFXHU5NzAwXHU4OTgxXHU2REZCXHU1MkEwXHU1MTc2XHU0RUQ2XHU5NzU5XHU2MDAxXHU4RDQ0XHU2RTkwXHU3QzdCXHU1NzhCXG4gIHBsdWdpbnM6IFtcbiAgICB2dWUoKSxcbiAgICAvLyBjZXNpdW0oKSxcblxuICAgIEF1dG9JbXBvcnQoe1xuICAgICAgcmVzb2x2ZXJzOiBbRWxlbWVudFBsdXNSZXNvbHZlcigpXSxcbiAgICB9KSxcbiAgICBDb21wb25lbnRzKHtcbiAgICAgIHJlc29sdmVyczogW0VsZW1lbnRQbHVzUmVzb2x2ZXIoKV0sXG4gICAgfSksXG4gIF0sXG4gIGJ1aWxkOiB7XG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgbWFudWFsQ2h1bmtzKGlkKSB7XG4gICAgICAgIGlmIChpZC5pbmNsdWRlcyhcIm5vZGVfbW9kdWxlc1wiKSkge1xuICAgICAgICAgIHJldHVybiBpZFxuICAgICAgICAgICAgLnRvU3RyaW5nKClcbiAgICAgICAgICAgIC5zcGxpdChcIm5vZGVfbW9kdWxlcy9cIilbMV1cbiAgICAgICAgICAgIC5zcGxpdChcIi9cIilbMF1cbiAgICAgICAgICAgIC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb3V0cHV0OiB7XG4gICAgICAgIGVudHJ5RmlsZU5hbWVzOiBganMvW25hbWVdLltoYXNoXS5qc2AsXG4gICAgICAgIGNodW5rRmlsZU5hbWVzOiBganMvW25hbWVdLltoYXNoXS5qc2AsXG4gICAgICAgIGFzc2V0RmlsZU5hbWVzOiAoeyBuYW1lIH0pID0+IHtcbiAgICAgICAgICBpZiAobmFtZS5lbmRzV2l0aChcIi5jc3NcIikpIHtcbiAgICAgICAgICAgIHJldHVybiBgY3NzL1tuYW1lXS5baGFzaF0uY3NzYDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKG5hbWUuZW5kc1dpdGgoXCIudHRmXCIpKSB7XG4gICAgICAgICAgICByZXR1cm4gYGZvbnQvW25hbWVdLltoYXNoXS50dGZgO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBcdTUxNzZcdTRFRDZcdTk3NTlcdTYwMDFcdThENDRcdTZFOTBcdTdDN0JcdTU3OEJcbiAgICAgICAgICByZXR1cm4gYGFzc2V0cy9bbmFtZV0uW2hhc2hdW2V4dG5hbWVdYDtcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB0cmVlc2hha2U6IHtcbiAgICAgICAgbW9kdWxlU2lkZUVmZmVjdHM6IHRydWUsIC8vIFx1NzlGQlx1OTY2NFx1NkNBMVx1NjcwOVx1NTI2Rlx1NEY1Q1x1NzUyOFx1NzY4NFx1NkEyMVx1NTc1N1xuICAgICAgICBwcm9wZXJ0eVJlYWRTaWRlRWZmZWN0czogZmFsc2UsIC8vIFx1Nzk4MVx1NkI2Mlx1NUM1RVx1NjAyN1x1OEJGQlx1NTNENlx1NzY4NFx1NTI2Rlx1NEY1Q1x1NzUyOFxuICAgICAgICB0cnlDYXRjaERlb3B0aW1pemF0aW9uOiBmYWxzZSwgLy8gXHU3OTgxXHU2QjYydHJ5LWNhdGNoXHU4QkVEXHU1M0U1XHU3Njg0XHU1M0JCXHU0RjE4XHU1MzE2XG4gICAgICAgIHB1cmVFeHRlcm5hbE1vZHVsZXM6IHRydWUsIC8vIFx1N0VBRlx1NTkxNlx1OTBFOFx1NkEyMVx1NTc1N1xuICAgICAgfSxcbiAgICAgIGV4dGVybmFsOiBbXCJjZXNpdW1cIl0sXG4gICAgfSxcbiAgfSxcbiAgLy8gXHU0RTNBIC4vc3JjIFx1NjNEMFx1NEY5Qlx1NTIyQlx1NTQwRCBAXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgXCJAXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwic3JjXCIpLFxuICAgIH0sXG4gIH0sXG4gIC8vIFx1NEUzQlx1NTJBOFx1NUYwMFx1NTQyRlx1NzBFRFx1NjZGNFx1NjVCMFxuICBzZXJ2ZXI6IHtcbiAgICBobXI6IHRydWUsXG4gIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBOFosU0FBUyxvQkFBb0I7QUFDM2IsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sVUFBVTtBQUdqQixPQUFPLGdCQUFnQjtBQUN2QixPQUFPLGdCQUFnQjtBQUN2QixTQUFTLDJCQUEyQjtBQVBwQyxJQUFNLG1DQUFtQztBQVV6QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixlQUFlLENBQUMsWUFBWSxZQUFZLGFBQWEsVUFBVTtBQUFBO0FBQUEsRUFDL0QsU0FBUztBQUFBLElBQ1AsSUFBSTtBQUFBO0FBQUEsSUFHSixXQUFXO0FBQUEsTUFDVCxXQUFXLENBQUMsb0JBQW9CLENBQUM7QUFBQSxJQUNuQyxDQUFDO0FBQUEsSUFDRCxXQUFXO0FBQUEsTUFDVCxXQUFXLENBQUMsb0JBQW9CLENBQUM7QUFBQSxJQUNuQyxDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsZUFBZTtBQUFBLE1BQ2IsYUFBYSxJQUFJO0FBQ2YsWUFBSSxHQUFHLFNBQVMsY0FBYyxHQUFHO0FBQy9CLGlCQUFPLEdBQ0osU0FBUyxFQUNULE1BQU0sZUFBZSxFQUFFLENBQUMsRUFDeEIsTUFBTSxHQUFHLEVBQUUsQ0FBQyxFQUNaLFNBQVM7QUFBQSxRQUNkO0FBQUEsTUFDRjtBQUFBLE1BQ0EsUUFBUTtBQUFBLFFBQ04sZ0JBQWdCO0FBQUEsUUFDaEIsZ0JBQWdCO0FBQUEsUUFDaEIsZ0JBQWdCLENBQUMsRUFBRSxLQUFLLE1BQU07QUFDNUIsY0FBSSxLQUFLLFNBQVMsTUFBTSxHQUFHO0FBQ3pCLG1CQUFPO0FBQUEsVUFDVDtBQUNBLGNBQUksS0FBSyxTQUFTLE1BQU0sR0FBRztBQUN6QixtQkFBTztBQUFBLFVBQ1Q7QUFFQSxpQkFBTztBQUFBLFFBQ1Q7QUFBQSxNQUNGO0FBQUEsTUFDQSxXQUFXO0FBQUEsUUFDVCxtQkFBbUI7QUFBQTtBQUFBLFFBQ25CLHlCQUF5QjtBQUFBO0FBQUEsUUFDekIsd0JBQXdCO0FBQUE7QUFBQSxRQUN4QixxQkFBcUI7QUFBQTtBQUFBLE1BQ3ZCO0FBQUEsTUFDQSxVQUFVLENBQUMsUUFBUTtBQUFBLElBQ3JCO0FBQUEsRUFDRjtBQUFBO0FBQUEsRUFFQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLEtBQUssUUFBUSxrQ0FBVyxLQUFLO0FBQUEsSUFDcEM7QUFBQSxFQUNGO0FBQUE7QUFBQSxFQUVBLFFBQVE7QUFBQSxJQUNOLEtBQUs7QUFBQSxFQUNQO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
