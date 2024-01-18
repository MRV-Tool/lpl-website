/** @type {import('tailwindcss').Config} */

import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      //MainHeading
      MainHeading: ["25px"],
      LaptopMainHeading: ["55px"],

      //Heading
      Heading: ["20px"],
      LaptopHeading: ["40px"],

      // SubHeading
      SubHeading: ["12px"],
      LaptopSubHeading: ["20px"],

      // Card Tilte Heading
      CardHeading: ["15px"],
      LaptopCardHeading: ["30px"],

      //Card Content
      CardContent: ["12px"],
      LaptopCardContent: ["20px"],

      //sizes
      FooterSize: ["10px"],
      VerySmallSize: ["12px"],
      SmallSize: ["14px"],
      RegularSize: ["15px"],
      MediumSize: ["16px"],
      LargeSize: ["18px"],
      ExLargeSize: ["22px"],
    },
    screens: {
      max_xl: { max: "1200px" },
      max_md: { max: "980px" },
      max_720: { max: "720px" },
      max_sm: { max: "500px" },
    },
    extend: {
      fontFamily: {
        SatoshiSemibold: ["SatoshiSemibold"],
        SatoshiBold: ["SatoshiBold"],
        Satoshi: ["Satoshi"],
        SatoshiMedium: ["SatoshiMedium"],
        Montserrat: ["Montserrat", "sans-serif"],
      },
      borderRadius: {
        LaptopCardRadius: "40px",
        CardRadius: "20px",
      },
      colors: {
        black: "#000000",
        white: "#FFFFFF",
        "dark-purplish": "#0C0031",
        purplish: "#190061",
        "dark-bluish": "#240090",
        "classic-dark-bluish": "#3500D4",
        "website-black": "#282828",
        "horizontal-seprator": "#E9E1FF",
        "golden-yellow": "#FFC100",
        "arrow-blue": "#1A0061",
        "button-blue": "#230090",
        "background-lavendar": "#BAACE4",
        blackish: "#0C0032",
      },
    },
  },
  plugins: [],
});
