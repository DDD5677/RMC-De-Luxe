/** @type {import('tailwindcss').Config} */
export default {
   content: [
      "./components/**/*.{js,vue,ts}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
      "./app.vue",
      "./error.vue",
   ],
   theme: {
      extend: {
         colors: {
            main: {
               10: "#FCF7F4",
               100: "#F3DFD4",
               200: "#EAC7B4",
               300: "#E1AF93",
               400: "#B48C76",
            },
            "main-grey": "#F7F7F7",
            "main-blue": "#EDF3F5",
            "main-red": "#FF4F4F",
            secondary: {
               100: "#EAEAEA",
               200: "#D6D6D6",
               300: "#B3B3B3",
               400: "#858585",
               500: "#333333",
            },
         },
      },
   },
   plugins: [],
};
