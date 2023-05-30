import {Colors} from '../../theme';

const styles = {
  container: ({themeId}) => ({
    backgroundColor: Colors[themeId].secondary,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  }),
  topContainer: ({themeId, category}) => ({
    backgroundColor: Colors[themeId].secondary,
    justifyContent: category === 'for_you' ? 'flex-start' : 'center',
    alignItems: 'flex-start',
    flex: 1,
    width: '85%',
    // paddingRight: '15%',
    paddingTop: category === 'for_you' ? '10%' : null,
  }),
  playlistInfoContainer: ({themeId}) => ({
    backgroundColor: '#1E1E1E',
    position: 'absolute',
    bottom: 0,
    height: 40,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 15,
  }),
  leftInfoContainer: ({themeId}) => ({
    alignItems: 'center',
    flexDirection: 'row',
  }),
  rightInfoContainer: ({themeId}) => ({
    alignItems: 'center',
  }),
  question: ({category}) => ({
    color: '#ffffff',
    fontSize: 30,
    paddingHorizontal: 20,
    height: category === 'following' ? '40%' : null,
    paddingBottom: 20,
  }),
  playlistText: ({themeId}) => ({
    color: '#ffffff',
    fontSize: 15,
    paddingHorizontal: 8,
    fontWeight: 'bold',
  }),
  userInfoContainer: ({themeId}) => ({
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    position: 'absolute',
    bottom: 60,
  }),
  userText: ({themeId}) => ({
    color: '#ffffff',
    fontSize: 20,
    marginBottom: 5,
  }),
  description: ({themeId}) => ({
    color: '#ffffff',
    fontSize: 16,
    flex: 10
  }),
  iconList: {
    position: 'absolute',
    right: 0,
    bottom: 60,
    width: '15%',
    // zIndex: 1
  },
  iconContainer: ({bgColor = null}) => ({
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    overflow: 'hidden',
    backgroundColor: bgColor,
    justifyContent: 'center',
    alignItems: 'center',
  }),
  iconOuterContainer: ({bgColor = null}) => ({
    width: 50,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  }),
  iconText: ({themeId}) => ({
    color: '#ffffff',
    fontSize: 15,
    marginTop: 3,
  }),
  image: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  optionContainer: ({bgColor}) => ({
    justifyContent: 'space-between',
    backgroundColor: bgColor,
    marginLeft: 20,
    paddingHorizontal: 10,
    marginVertical: 5,
    padding: 10,
    borderRadius: 10,
    width: '85%',
    flexDirection: 'row',
    alignItems: 'center',
    display: 'flex'
  }),
};

export default styles;
