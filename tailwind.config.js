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
    /* Changes defaults */
    fontSize: {

      //Steps of 2px, or  0.125rem
      xs: "0.75rem", //12
      sm: "0.875rem", //14
      base: "1rem",
      lg: "1.125rem", //18
      xl: "1.25rem", //20
      "2xl": "1.375rem", //22
      "3xl": "1.5rem", //24

      //Steps of 4px, or 0.250rem
      "4xl": "1.75rem", //28
      "5xl": "2rem",
      "6xl": "2.25rem", //36
    },
    // lineHeight: {
    //   //default
    //   "leading-none": "1",
    //   "leading-normal": "1.5",
    //   "leading-loose": "2",
    //
    //   //changed
    //   "leading-tight": "1.2",
    //   "leading-snug": "1.45",
    //   "leading-relaxed": "1.75",
    //
    //   //default
    //   "leading-3": "0.75rem",
    //   "leading-4": "1rem",
    //   "leading-5": "1.25rem",
    //   "leading-6": "1.5rem",
    //   "leading-7": "1.75rem",
    //   "leading-8": "2rem",
    //   "leading-9": "2.25rem",
    //   "leading-10": "2.5rem",
    // },
    extend: {
      fontSize: {
        "7xl": "2.5rem", //40
        "8xl": "3rem", //48
        "9xl": "4rem", //64
        "10xl": "5rem", //80
        "11xl": "6rem", //96
      },
      // In increasing order of specificity
      colors: {
        "gray-90": "#FBFCF7",
        "gray-70": "#EEF0EB",
        "gray-50": "#BFC2BA",
        "gray-30": "#6C7067",
        "gray-10": "#272926",
        "black-a100": "#000000",
        "white-a90": "rgba(255, 255, 255, 0.08)",
        "white-a30": "rgba(255, 255, 255, 0.16)",
        "orange-50": "#FF725C",
        "yellow-50": "#FAE246",
        "blue-50": "#47D8FC",
        "green-50": "#58F582",
        "light/gray-70": "#E9EBE4",
        "light/gray-50": "#BFC2BA",
        "light/gray-30": "#6C7067",
        "light/gray-10": "#272926",
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
        xl: "36rem",
      },
      margin: {
      "mt-18": "4.5rem",
      },
    },
  },
  variants: {
    backgroundColor: ["last"],
  },
  plugins: [],
}
