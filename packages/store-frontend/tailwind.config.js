const plugin = require("tailwindcss/plugin");

const shadowColor = {
  100: '#e4ebf5',
  200: '#c8d0e7',
  300: '#bec8e4',
  400: '#9baacf',

  500: '#373b3ec9',
  600: '#12151b',
  700: '#bec8e4',
  800: '#9baacf',
}

module.exports = {
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        sans:
          '-apple-system, "Helvetica Neue", "Segoe UI", Roboto, Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      },
      colors: {
        "accent-1": "#FAFAFA",
        "accent-2": "#EAEAEA",
        "accent-7": "#333",
        success: "#0070f3",
        cyan: "#79FFE1",
        primary: "#FFFFFF", //'#cc3b80',
        "primary-light": "#fae8f1",
        "carousel-1": "#ffeedac4",
        "product-card-info": "#fde6f1cc",
        "product-card-info-text": "#e687b5",
        "surface": '#eff2f8',
      },
      width: {
        88: "22rem",
        96: "24rem",
      },
      spacing: {
        28: "7rem",
      },
      letterSpacing: {
        tighter: "-.04em",
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        "5xl": "2.5rem",
        "6xl": "2.75rem",
        "7xl": "4.5rem",
        "8xl": "6.25rem",
      },
      height: {
        xfull: "170%",
      },
      boxShadow: {
        small: "0 5px 10px rgba(0, 0, 0, 0.12)",
        medium: "0 8px 30px rgba(0, 0, 0, 0.12)",
        'neu1': "rgb(230 235 245) 8px 8px 16px 8px, rgb(255,255,255) -8px -8px 16px 4px",
        'neu2': "rgba(0,0,0,0.06) 8px 8px 16px 0px, rgb(255,255,255) -8px -8px 16px 0px",
        'neu3': "0.3rem 0.3rem 0.6rem #c8d0e7,-0.2rem -0.2rem 0.5rem #ffffff",
        'neu1-inset': 'rgb(200, 208, 231) 2px 2px 5px inset, rgb(255, 255, 255) -3px -3px 7px inset',
        sm: `0.3rem 0.3rem 0.6rem ${shadowColor[200]}, -0.2rem -0.2rem 0.5rem #ffffff`,
        smActive: `0.3rem 0.3rem 0.6rem ${shadowColor[300]}, -0.2rem -0.2rem 0.5rem #ffffff`,
        md: `0.8rem 0.8rem 1.4rem ${shadowColor[200]}, -0.2rem -0.2rem 1.8rem #ffffff`,
        mdActive: `0.8rem 0.8rem 1.4rem ${shadowColor[300]}, -0.2rem -0.2rem 1.8rem #ffffff`,
        lg: '8px 8px 16px 0px rgba(0, 0, 0, 0.06), -8px -8px 16px 0px #fff',
        xl:
          '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        inner: `inset 2px 2px 5px ${shadowColor[200]}, inset -3px -3px 7px #ffffff`,
        outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
        none: 'none',
      },
      borderRadius: {
        'x-sm': "0.25rem",
        sm: "0.5rem",
        md: "0.75rem",
        lg: "1rem",
        xlg: "1.25rem",
        x2lg: "2rem",
        style1: "50% 20% / 10% 40%",
        category: "45% 45% 45% 45% / 33% 33% 33% 33%",
      },
      gridTemplateRows: {
        // Complex site-specific row configuration
        layout: "auto minmax(900px, 1fr) auto",
      },
      gridTemplateColumns: {
        header: "200px minmax(300px, 1fr) 100px",
        header__logo: "1fr 2fr",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".header__brand-logo": {
          gridArea: "brand-logo",
        },
        ".header__search-box": {
          gridArea: "search-box",
        },
        ".header__offers": {
          gridArea: "offers",
        },
        ".header": {
          gridTemplateColumns: "1fr 1fr",
          gridTemplateAreas: `"brand-logo . offers" "search-box search-box search-box"`,
          gridRowGap: "10px",
          position: 'sticky',
          top: 0,
          zIndex: 1,
          "@screen md": {
            gridTemplateColumns: "200px 1fr auto",
            gridTemplateAreas: `"brand-logo search-box offers"`,
          },
        },
        ".product-card__layout": {
          gridTemplateRows: "360px auto",
        },
      };

      addUtilities(newUtilities);
    }),
  ],
};
