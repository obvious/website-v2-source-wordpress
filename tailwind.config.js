module.exports = {
  theme: {
    fontFamily: {
      sans: [
        "MarkPro",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        '"Noto Sans"',
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: [
        "Copernicus",
        "Georgia",
        "Cambria",
        '"Times New Roman"',
        "Times",
        "serif",
      ],
      mono: [
        "Menlo",
        "Monaco",
        "Consolas",
        '"Liberation Mono"',
        '"Courier New"',
        "monospace",
      ],
    },
    extend: {
      fontSize: {
        "7xl": "5rem",
        "8xl": "6rem",
      },
      colors: {
        "black-a100": "#000000",
        "white-a90": "rgba(255, 255, 255, 0.08)",
        "white-a30": "rgba(255, 255, 255, 0.16)",
        "orange-50": "#FF725C",
        "yellow-50": "#FAE246",
        "blue-50": "#47D8FC",
        "green-50": "#58F582",
        "gray-10": "#272926",
        "gray-30": "#6C7067",
        "gray-50": "#BFC2BA",
        "gray-70": "#EEF0EB",
        "gray-90": "#FBFCF7",
      },
      inset: {
        "-16": "-4rem",
        "-4": "-1rem",
        "-2": "-0.5rem",
        "-3": "-0.75rem",
      },
      minHeight: {
        none: "none",
        xxs: "10rem",
        xs: "20rem",
        sm: "24rem",
        md: "28rem",
        lg: "32rem",
        xl: "36rem",
        "2xl": "42rem",
        "3xl": "48rem",
        "4xl": "56rem",
        "5xl": "64rem",
        "6xl": "72rem",
        full: "100%",
      },
      maxHeight: {
        md: "28rem",
      },
      minWidth: {
        xxs: "15rem",
        xs: "20rem",
        sm: "24rem",
      }
    },
  },
  variants: {},
  plugins: [],
}
