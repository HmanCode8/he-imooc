import { ref, onMounted, onUnmounted } from "vue";

const mediaQueryLists = [
  window.matchMedia("(min-width: 3840px)"),
  window.matchMedia("(min-width: 9999px)"),
  window.matchMedia("(min-width: 11520px)"),
];
const fontSize = getComputedStyle(document.documentElement).fontSize;
const rootFontSize = ref(parseFloat(fontSize));

onMounted(() => {
  mediaQueryLists.forEach((mql, index) => {
    mql.addEventListener("change", handlers[index]);
  });
  updateFontSize(); // Initial check
});

const updateFontSize = () => {
  rootFontSize.value = parseFloat(
    getComputedStyle(document.documentElement).fontSize
  );
};

const handlers = mediaQueryLists.map((mql) => (event) => {
  if (event.matches) {
    updateFontSize();
  }
});

onUnmounted(() => {
  mediaQueryLists.forEach((mql, index) => {
    mql.removeEventListener("change", handlers[index]);
  });
});

export default function useRootFontSize() {
  return rootFontSize;
}
