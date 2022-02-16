const defaultTheme = require("tailwindcss/defaultTheme")

const spacing = {
  15: "3.75rem",
  18: "4.5rem",
  26.67: "6.66rem",
  33.33: "8.33rem",
  55: "13.75rem",
  65: "16.25rem",
  78.5: "19.625rem",
  84: "21rem",
  100: "25rem",
  120: "30rem",
  140: "35rem",
  160: "40rem",
}

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      flex: {
        "33%": "1 1 33.3%",
        "50%": "1 1 50%",
      },
      fontSize: {
        "2xs": "0.65rem",
        "3xs": "0.5rem",
        "4xs": "0.25rem",
      },
      spacing,
      zIndex: {
        "-z-1": -1
      },
      width: {
        inherit: "inherit",
        "fit-content": "fit-content",
        "1/10": "10%",
        "2/10": "20%",
        "3/10": "30%",
        "4/10": "40%",
        "5/10": "50%",
        "6/10": "60%",
        "7/10": "70%",
        "8/10": "80%",
        "9/10": "90%",
        "48%": "48%",
      },
      maxWidth: {
        ...defaultTheme.width(item => defaultTheme[item]),
        ...spacing,
        logo: "13.75rem",
        "1/2": "50%",
        "1/3": "33.33%",
        "1/4": "25%",
        "1/5": "20%",
        "1/6": "16.67%",
        "1/7": "14.285%",
        "1/8": "12.5%",
        "1/10": "10%",
        "2/10": "20%",
        "3/10": "30%",
        "4/10": "40%",
        "5/10": "50%",
        "6/10": "60%",
        "7/10": "70%",
        "8/10": "80%",
        "9/10": "90%",
        full: "100%",
      },
      minWidth: {
        ...defaultTheme.width(item => defaultTheme[item]),
        ...spacing,
      },
      inset: {
        "1/5": "20%",
        "1/6": "16.67%",
      },
      minHeight: {
        ...defaultTheme.height(item => defaultTheme[item]),
      },
      padding: {
        2.67: "0.66rem",
        15: "3.75rem",
        "1/2": "50%",
        "1/3": "33.33%",
        "1/4": "25%",
        "1/5": "20%",
        "1/6": "16.67%",
        "1/7": "14.285%",
        "1/8": "12.5%",
        "1/9": "11.11%",
        "1/10": "10%",
        "1/11": "9.09%",
        "1/12": "8.33%",
        "1/13": "7.69%",
        square: "100%"
      },
      lineHeight: {
        11: "2.75rem",
        "extra-tight": 0.85,
      },
    },
  },
  variants: {
    extend: {
      padding: ["last"],
    },
  },
  plugins: [],
}
