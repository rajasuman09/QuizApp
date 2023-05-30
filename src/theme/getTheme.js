import Colors, {
  colorsDark,
  colorsLight,
} from './Colors';
import Fonts from './Fonts';

const getTheme = (theme = 'light') => {
  const themeObj = {name: theme, Fonts, Colors};
  switch (theme) {
    case 'dark':
      themeObj.Colors = colorsDark;
      break;
    default:
      themeObj.Colors = colorsLight;
  }
  return themeObj;
};

export default getTheme;
