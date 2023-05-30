import React, { PureComponent } from "react";
import { connect } from "react-redux";

import { getStyle } from ".";

export const styled = (WrappedComponent, styler, options = {}) =>
  connect((state) => ({
    themeId: "dark", // Hardcoded the themeId as we are not implementing preferences from user with redux
  }))(
    class WrappedComponentStyled extends PureComponent {
      _injectStyle = ({ theme, toggleTheme } = {}) => {
        const nextProps = { ...this.props };
        const {
          styleName = "style",
          noTheme,
          styleMap,
          ...extraProps
        } = options;

        nextProps.theme = theme;
        nextProps.toggleTheme = toggleTheme;

        if (Array.isArray(styler) && styleMap) {
          styler.forEach(
            (styler, index) =>
              (nextProps[styleMap[index]] = [
                getStyle(styler, nextProps),
                this.props[styleMap[index]],
              ])
          );
        } else {
          nextProps[styleName] = [
            getStyle(styler, nextProps),
            this.props[styleName],
          ];
        }

        return { ...nextProps, ...extraProps };
      };

      render() {
        const nextProps = this._injectStyle();
        return <WrappedComponent {...nextProps} />;
      }
    }
  );

export default styled;
