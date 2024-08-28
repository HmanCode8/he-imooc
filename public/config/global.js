window.global_config = {
  // _screen: false,
  base_width: "48px",
};

console.log(
  "%c 开启/关闭全屏适配模式请按F2(电脑分辨率缩放到25%以下布局)",
  "color: #102d25; font-size: 20px;"
);
// 想实现全屏适配，需要在浏览器中按下F11，然后刷新页面，即可开启全屏适配模式。
window.addEventListener("keydown", function (event) {
  const k = JSON.parse(localStorage.getItem("_screen")) || false;
  if (event.key === "F1") {
    event.preventDefault(); // 阻止默认行为
    localStorage.setItem("_screen", !k);
    window.location.reload(); // 刷新页面
  }
});
