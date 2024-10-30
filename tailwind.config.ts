import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom_gray": "rgba(254, 254, 254, 0.12)",
        "custom_gray25": "rgba(254, 254, 254, 0.25)",
        "custom_gray35": "rgba(254, 254, 254, 0.35)",
        "custom_white": "rgba(255, 255, 255, 0.5)"
      },
      fontSize: {
        "15": "15px",
        "17": "17px",
        "18": "18px",
        "22": "22px",
        "32": "32px",
        "56": "56px",
        "80": "80px",
      },
      fontFamily: {
        sfpro: ['"SF Pro Display"', "sans-serif"],
      },
      lineHeight: {
        "67": "67px",
        "96": "96px",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(0deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5))",
      },
      height: {
        "54": "54px"
      },
      borderWidth: {
        "1": "1px",
        "3": "3px",
        "6": "6px"
      },
      borderColor: {
        "custom_gray": "rgba(254, 254, 254, 0.25)",
        "custom_gray12": "rgba(254, 254, 254, 0.12)"
      },
      borderRadius: {
        "35": "35px",
        "72": "72px"
      },
      boxShadow: {
        'custom-1': '0px 1px 6px 1px rgba(12, 12, 13, 0.12)',
        'custom-2': '0px 1px 4px 0px rgba(12, 12, 13, 0.05)',
        'custom-3': '0px 4px 4px -4px rgba(12, 12, 13, 0.05)',
      },
      backdropBlur: {
        "125": "125px"
      },
      screens: {
        xs: "414px",
        xsl: "444px",
      },

    },
  },
  plugins: [],
};
export default config;
