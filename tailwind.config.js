/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "media", // or'media' or 'class'
  theme: {
    extend: {
      // 您可以在这里添加自定义扩展
      screens: {
        "4k": "1080px",
        "8k": "3840px",
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
