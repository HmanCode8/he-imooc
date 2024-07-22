/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "media", // or'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        // #529de9 25%, ##59b5db 50%, #6ce9c8 75%
        "custom-gradient":
          "linear-gradient(to right, #529de9 25%, #59b5db 50%, #6ce9c8 75%)",
        "custom-bg-size": "background-size: 100% 100%;",
      },
      backgroundSize: {
        "custom-size": "100% 100%",
      },
      height: {
        "custom-height": "calc(100vh - 3rem)", // 示例：计算高度
      },
      screens: {
        "4k": "1080px",
        "8k": "3840px",
        // "12k": "11520px", // 您的目标尺寸
        "12k": "11520px", // 您的目标尺寸
      },
      // 在这里添加自定义的宽度、高度和其他尺寸x
      spacing: {
        "2160p": "2160px", // 对应高度
      },
    },
  },
  plugins: [],
};
