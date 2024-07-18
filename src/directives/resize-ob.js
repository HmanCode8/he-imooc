// directives/resize-ob.js
const map = new WeakMap();
const resizeObserver = new ResizeObserver((entries) => {
  for (let entry of entries) {
    const callback = map.get(entry.target);
    if (callback) {
      callback({
        width: entry.contentRect.width,
        height: entry.contentRect.height,
      });
    }
  }
});

export default {
  mounted(el, binding) {
    map.set(el, binding.value);
    resizeObserver.observe(el);
  },
  unmounted(el) {
    resizeObserver.unobserve(el);
    map.delete(el);
  },
};
