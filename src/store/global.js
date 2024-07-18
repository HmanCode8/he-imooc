import { defineStore } from "pinia";

// 定义一个名为 global 的 Store
export default defineStore("global", {
  state: () => ({
    componentId: "Overview",
  }),
  actions: {
    setMapCurrentTab(value) {
      this.componentId = value;
    },
  },
});