/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#b9b5b0",
          100: "#b9ae9b",
          200: "#b9a889",
          300: "#b99f70",
          400: "#b99657",
          500: "#b98f44",
          600: "#a08149",
          700: "#927542",
          800: "#7c6338",
          900: "#66522e",
          950: "#483920",
        },
        light: {
          50: "#fbf9f1",
          100: "#ebe9e2",
          200: "#d8d2c5",
          300: "#b3ac9d",
          400: "#9a917e",
          500: "#938a76",
          600: "#8a8271",
          700: "#797366",
          800: "#6d6961",
          900: "#62605b",
          950: "#4e4c48",
        },
        dark: {
          50: "#a7a7a7",
          100: "#6e6e6e",
          200: "#545454",
          300: "#444444",
          400: "#353535",
          500: "#272727",
          600: "#202020",
          700: "#1d1d1d",
          800: "#121212",
          900: "#0b0b0b",
          950: "#090909",
        },
        error: {
          50: "#f5e6e6",
          100: "#ebcccc",
          200: "#d79999",
          300: "#c26666",
          400: "#ae3333",
          500: "#9a0000",
          600: "#7b0000",
          700: "#5c0000",
          800: "#3e0000",
          900: "#1f0000",
        },
        alert: {
          50: "#f5ede6",
          100: "#ebdbcc",
          200: "#d7b899",
          300: "#c29466",
          400: "#ae7133",
          500: "#9a4d00",
          600: "#7b3e00",
          700: "#5c2e00",
          800: "#3e1f00",
          900: "#1f0f00",
        },
        success: {
          50: "#edf5e6",
          100: "#dbebcc",
          200: "#b8d799",
          300: "#94c266",
          400: "#71ae33",
          500: "#4d9a00",
          600: "#3e7b00",
          700: "#2e5c00",
          800: "#1f3e00",
          900: "#0f1f00",
        },
        happy: {
          50: "#e6f5ed",
          100: "#ccebdb",
          200: "#99d7b8",
          300: "#66c294",
          400: "#33ae71",
          500: "#009a4d",
          600: "#007b3e",
          700: "#005c2e",
          800: "#003e1f",
          900: "#001f0f",
        },
        info: {
          50: "#e6f5f5",
          100: "#ccebeb",
          200: "#99d7d7",
          300: "#66c2c2",
          400: "#33aeae",
          500: "#009a9a",
          600: "#007b7b",
          700: "#005c5c",
          800: "#003e3e",
          900: "#001f1f",
        },
      },
    },
  },

  plugins: [],
};
	