import { Colors } from "../../theme";

const styles = {
  tabBar: ({ themeId }) => ({
    flexDirection: "row",
    backgroundColor: Colors[themeId].primary,
    alignItems: 'center',
    display: 'flex',
    height: 60
  }),
  tabItem: ({ themeId }) => ({
    flex: 1,
    backgroundColor: Colors[themeId].primary,
    marginHorizontal: 15,
    flexDirection: "row",
  }),
  tabLabel: ({isActive}) => ({
    color: "#ffffff",
    fontWeight: isActive? 'bold' : null,
    fontSize: 18
  }),
  tabContainer: {
    flex: 2,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  tabTextContainer: {
    justifyContent: 'center',
    marginBottom: 10
  },
  tabIndicator: ({isActive}) => ({
    height: 5,
    backgroundColor: isActive? 'white' : null,
    width: 30,
  }),
  timer:{
    color: Colors.light.icon,
    fontSize: 17,
    paddingLeft: 3
  },
};

export default styles;