import { ref, onMounted, onUnmounted } from "vue";

function useRootFontSize() {
  const rootFontSize = ref(
    parseFloat(getComputedStyle(document.documentElement).fontSize)
  );

  const updateFontSize = () => {
    rootFontSize.value = parseFloat(
      getComputedStyle(document.documentElement).fontSize
    );
  };

  const mediaQueryLists = [
    window.matchMedia("(min-width: 3840px)"),
    window.matchMedia("(min-width: 9999px)"),
    window.matchMedia("(min-width: 11520px)"),
  ];

  const handlers = mediaQueryLists.map((mql) => (event) => {
    if (event.matches) {
      updateFontSize();
    }
  });

  onMounted(() => {
    mediaQueryLists.forEach((mql, index) => {
      mql.addEventListener("change", handlers[index]);
    });
    updateFontSize(); // Initial check
  });

  onUnmounted(() => {
    mediaQueryLists.forEach((mql, index) => {
      mql.removeEventListener("change", handlers[index]);
    });
  });

  return rootFontSize;
}

export default useRootFontSize;
