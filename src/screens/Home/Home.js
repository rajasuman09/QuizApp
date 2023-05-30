import SafeAreaView from '../../components/SafeAreaView';
import React, {useState} from 'react';
import {styled} from '../../theme';
import styles from './styles';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import TopNavigator from '../../components/TopNavigator';
import FlashCard from '../../components/FlashCard';
import {StatusBar} from 'react-native';

const Root = styled(SafeAreaView, styles.root);

const Home = props => {
  const store = createStore((state = '', action) => {
    switch (action.type) {
      default:
        return state;
        break;
    }
  });

  const [selectedTab, setSelectedTab] = useState('following');

  return (
    <Provider store={store}>
      <Root>
        <StatusBar backgroundColor={'#000'} barStyle={'light-content'} />
        <TopNavigator
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
        <FlashCard category={selectedTab} />
      </Root>
    </Provider>
  );
};

export default Home;
