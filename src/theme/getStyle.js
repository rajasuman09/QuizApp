import { StyleSheet } from "react-native";
import memoize from "memoize-one";

const getStyle = memoize((styler, props = {}) =>
  typeof styler === "function"
    ? StyleSheet.create({ style: styler(props) }).style
    : StyleSheet.create({ style: styler }).style
);

export const getStyle2 = memoize((styler, props) =>
  typeof styler === "function" ? styler(props) : styler
);

export default getStyle;
