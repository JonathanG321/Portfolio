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
        "mobile-nav-height": "3.7rem",
        "1/5": "20%",
        "1/6": "16.67%",
      },
      height: {
        "desktop-nav": "5.6rem",
        "mobile-nav": "3.7rem",
        "mobile-nav-container": "calc(100vh - 3.7rem)",
      },
      minHeight: {
        ...defaultTheme.height(item => defaultTheme[item]),
      },
      maxHeight: {
        "home-hero-carousel": "calc(98vh - 5.6rem)",
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
      colors: {
        citrine: {
          background: {
            overflow: "#fff2d1",
            hero: "rgba(77, 77, 79, 0.25)",
          },
          primary: {
            light: "#fbb717",
            medium: "#EBA700",
            dark: "#e89300",
          },
          gray: {
            light: "#666766",
            medium: "#4e4e50",
            dark: "#4d4d4f",
          },
          black: "#231f20",
          accent: "#f2f2f2",
          "off-white": "#fef8e7",
          blue: {
            light: "#6eaedf",
            dark: "#5692bf",
          },
          turquoise: {
            light: "#40c1c5",
            dark: "#36afb3",
          },
          orange: {
            light: "#f68c60",
            dark: "#df7143",
          },
          purple: {
            light: "#ce71ad",
            dark: "#a64b8a",
          },
        },
      },
      transitionProperty: {
        left: "left",
      },
      boxShadow: {
        body:
          "0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.2)",
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
