import { Platform } from "react-native";

export const colorsLight = {
  primary: "#021c2e",
  primaryLight: "#0b1922",
  primaryDark: "#051119",
  secondary: "#032136",
  secondaryLight: "#04263e",
  secondaryDark: "#181e24",
  footer: "#021c2e",
  icon: "#3d6381",
  border: "#25435b",
  borderLight: "rgba(152, 152, 152, 0.2)",
  label: "#25435b",
  labelDark: "rgba(166,166,166,1)",
  labelDarkTransparent: "rgba(166,166,166,0)",
  interaction: "#2ab7d6",
  buttonBackgroundPrimary: "rgba(52,183,212,0.16)",
  text: "#ffffff",
  textLight: "#a6a6a6",
  textDark: "#000000",
  input: "#ffffff",
  modal: "#ffffff",
  modalDark: "rgba(240,240,240,0.95)",
  modalTransparent: "rgba(50,50,50,.5)",
  transparent: "transparent",
};

export const colorsDark = {
  ...colorsLight,
  primary: "#0b0d10",
  primaryLight: "#0b0d10",
  primaryDark: "#0b0d10",
  secondary: "#003D53",
  secondaryLight: "#202830",
  footer: "#202830",
  icon: "#444f5a",
  border: "#303c48",
  label: "#303c48",
};

export default {
  light: colorsLight,
  dark: colorsDark,
};