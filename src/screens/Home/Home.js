import SafeAreaView from '../../components/SafeAreaView';
import React, {useState, useEffect} from 'react';
import {styled} from '../../theme';
import styles from './styles';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import TopNavigator from '../../components/TopNavigator';
import {ScrollView, View} from 'react-native';
import Following from '../Following';
import FlashCard from '../../components/FlashCard';
import {StatusBar} from 'react-native';
import SwipeGesture from '../../components/FlashCard/swipe-gesture';

const Root = styled(SafeAreaView, styles.root);
const Container = styled(View, styles.container);

const Home = props => {
  const store = createStore((state = '', action) => {
    switch (action.type) {
      default:
        return state;
        break;
    }
  });

  const [selectedTab, setSelectedTab] = useState('following');

  const onSwipePerformed = (action) => {
    /// action : 'left' for left swipe
    /// action : 'right' for right swipe
    /// action : 'up' for up swipe
    /// action : 'down' for down swipe
    
    switch(action){
      case 'left':{
        console.log('left Swipe performed');
        break;
      }
       case 'right':{
        console.log('right Swipe performed');
        break;
      }
       case 'up':{
        console.log('up Swipe performed');
        break;
      }
       case 'down':{
        console.log('down Swipe performed');
        break;
      }
       default : {
       console.log('Undeteceted action');
       }
    }
  }

  return (
    <Provider store={store}>
      <Root>
        <StatusBar backgroundColor={'#000'} barStyle={'light-content'} />
        <TopNavigator
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
        {/* <SwipeGesture
          gestureStyle={{height: '100%'}}
          onSwipePerformed={this.onSwipePerformed}> */}
          <FlashCard category={selectedTab} />
        {/* </SwipeGesture> */}
      </Root>
    </Provider>
  );
};

export default Home;
