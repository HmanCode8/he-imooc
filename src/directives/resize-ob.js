// directives/resize-ob.js
const map = new WeakMap();

function debounce(fn, delay) {
  let timeoutID;
  return function (...args) {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }
    timeoutID = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

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
    const debouncedCallback = debounce(binding.value, 200); // 200ms 防抖延迟
    map.set(el, debouncedCallback);
    resizeObserver.observe(el);
  },
  unmounted(el) {
    resizeObserver.unobserve(el);
    map.delete(el);
  },
};
