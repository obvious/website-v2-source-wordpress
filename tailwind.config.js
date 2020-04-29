var Color = require("color")

const colors = {
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
  "red-10": "#803040",
  "red-30": "#BD4055",
  "red-50": "#FA556B",
  "red-70": "#FFB8BF",
  "red-90": "#FFEDEF",
  "blue-30": "#179AC2",

}

const alphas = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
Object.keys(colors).forEach(key => {
  alphas.forEach(alpha => {
    colors[`${key}-alpha-${alpha}`] = Color(colors[key])
      .alpha(alpha / 100)
      .string()
  })
})

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
        "Courier",
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
      spacing: {
        '1/4': '0.0625rem',
        '1/2': '0.125rem',
        '7': '1.75rem',
        '9': '2.25rem',
        '14': '3.5rem',
      },
      fontSize: {
        "7xl": "2.5rem", //40
        "8xl": "3rem", //48
        "9xl": "4rem", //64
        "10xl": "5rem", //80
        "11xl": "6rem", //96
      },
      // In increasing order of specificity
      colors: colors,
      inset: {
        "-16": "-4rem",
        "-4": "-1rem",
        "-2": "-0.5rem",
        "-3": "-0.75rem",
        "-1": "-0.25rem",
        "-1/2": "-0.125rem",
        "-1/4": "-0.0625rem",
      },
      margin: {
        "18": "4.5rem",
        "18": "4.5rem",
      },
      minHeight: (theme, { negative }) => ({
        auto: "auto",
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
        ...theme("spacing"),
        ...negative(theme("spacing")),
      }),
      maxHeight: (theme, { negative }) => ({
        auto: "auto",
        sm: "24rem",
        md: "28rem",
        ...theme("spacing"),
        ...negative(theme("spacing")),
      }),
      minWidth: {
        "3xs": "15rem",
        "2xs": "18rem",
        xs: "20rem",
        sm: "24rem",
        lg: "30rem",
        xl: "36rem",
        xxl: "48rem",
      },
      maxWidth: {
        "2xs": "18rem",
      },
      width: {
        "80": "20rem",
        "3xs": "15rem",
        "2xs": "18rem",
        xs: "20rem",
        sm: "24rem",
        lg: "30rem",
        xl: "36rem",
        xxl: "48rem",
      },
      boxShadow: {
        red: "0px 0px 5px 0.5px rgba(255,184,191, 0.2)",
      },
      opacity: {
        "10": 0.1,
        "30": 0.3,
        "50": 0.5,
        "70": 0.7,
        "90": 0.9,
      },
      aspectRatio: {
        // defaults to {}
        none: 0,
        square: [1, 1], // or 1 / 1, or simply 1
        "16/9": [16, 9], // or 16 / 9
        "9/16": [9, 16], // or 16 / 9
        "16/21": [16, 21], // or 16 / 9
        "4/3": [4, 3], // or 4 / 3
        "21/9": [21, 9], // or 21 / 9
      },
    },
  },
  plugins: [require("tailwindcss-aspect-ratio")],
  variants: {
    aspectRatio: ["responsive"], // defaults to ['responsive']
    backgroundColor: ["last"],
    outline: ["responsive", "hover", "focus", "active"],
    gridColumn: ['responsive', 'even', 'odd'],
    gridColumnStartEnd: ['responsive', 'even', 'odd'],
    gridColumnStart: ['responsive', 'even', 'odd'],
    gridColumnEnd: ['responsive', 'even', 'odd'],
  },
}
