import { Fonts, Colors } from "../../theme";

const styles = {
  container: ({ themeId }) => ({
    flex: 1,
    backgroundColor: Colors[themeId].secondary,
    justifyContent: 'center',
    alignItems: 'center'
  }),
  text: {
    color: "#ffffff"
  }
};

export default styles;
