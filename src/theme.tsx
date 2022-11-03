import tc from "tinycolor2";

const BASE_LIGHT_STRING = "rgba(255,255,255,1)";
const BASE_DARK_STRING = "rgba(22,22,29,1)";

const BASE_DARK = tc(BASE_DARK_STRING);
const BASE_LIGHT = tc(BASE_LIGHT_STRING);
const BASE_PRIMARY_DARK = tc("#2a55c3");
const BASE_PRIMARY_LIGHT = tc("#7b96da");

export const theme = {
  global: {
    colors: {
      primary: {
        light: BASE_PRIMARY_DARK.toRgbString(), // #2a55c3 rgb(42,85,195)
        dark: BASE_PRIMARY_LIGHT.toRgbString(), // #7b96da rgb(123,150,218)
      },
      "primary-1": {
        light: tc.mix(BASE_PRIMARY_DARK, BASE_DARK, 16).toRgbString(), // #274ba8 rgb(39,75,168)
        dark: tc.mix(BASE_PRIMARY_LIGHT, BASE_LIGHT, 16).toRgbString(), // #90a7e0 rgb(144,167,224)
      },
      "primary-2": {
        light: tc.mix(BASE_PRIMARY_DARK, BASE_DARK, 24).toRgbString(), // #25469b rgb(37,70,155)
        dark: tc.mix(BASE_PRIMARY_LIGHT, BASE_LIGHT, 24).toRgbString(), // #9bafe3 rgb(155,175,227)
      },
      "primary-3": {
        light: tc.mix(BASE_PRIMARY_DARK, BASE_DARK, 32).toRgbString(), // #24418e rgb(36,65,142)
        dark: tc.mix(BASE_PRIMARY_LIGHT, BASE_LIGHT, 32).toRgbString(), // #a5b8e6 rgb(165,184,230)
      },
      text: {
        light: BASE_DARK.toRgbString(), // #16161d rgba(22,22,29,1)
        dark: tc(BASE_LIGHT_STRING).setAlpha(0.87).toRgbString(), // #ffffffdd rgba(255,255,255,0.87)
      },
      "text-light": {
        light: tc(BASE_DARK_STRING).setAlpha(0.62).toRgbString(), // #16161d9e rgba(22,22,29,0.62)
        dark: tc(BASE_LIGHT_STRING).setAlpha(0.49).toRgbString(), // #ffffff7c rgba(255,255,255,0.49)
      },
    },
    font: {
      family:
        "Inter, Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
      size: "16px",
      height: "21px",
    },
    text: {
      small: {
        size: "13px",
        height: "18.2px",
      },
      medium: {
        height: "21px",
        size: "15px",
      },
    },
    edgeSize: {
      xxsmall: "4px",
      xsmall: "8px",
      small: "12px",
      medium: "16px",
      large: "24px",
      xlarge: "32px",
    },
    elevation: {
      light: {
        small: undefined,
        medium: "0 4px 12px 0 rgb(151 164 170 / 30%)",
      },
    },
  },
};
