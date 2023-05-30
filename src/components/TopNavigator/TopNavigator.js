import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {Colors, styled} from '../../theme';
import styles from './styles';

const TabBar = styled(View, styles.tabBar);
const TabItem = styled(TouchableOpacity, styles.tabItem);
const TabContainer = styled(TouchableOpacity, styles.tabContainer);
const TabTextContainer = styled(View, styles.tabTextContainer);
const TabIndicator = styled(View, styles.tabIndicator);
const TabLabel = styled(Text, styles.tabLabel);
const Timer = styled(Text, styles.timer);

const TopNavigator = ({selectedTab, setSelectedTab}) => {
  const formatNumber = number => `0${number}`.slice(-2);
  const getRemaining = time => {
    const mins = Math.floor(time / 60);
    const secs = time - mins * 60;
    return {mins: formatNumber(mins), secs: formatNumber(secs)};
  };

  const [remainingSecs, setRemainingSecs] = useState(0);
  const [isActive, setIsActive] = useState(true);
  const {mins, secs} = getRemaining(remainingSecs);

  const handleSelectTab = tab => {
    setSelectedTab(tab);
  };

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setRemainingSecs(remainingSecs => remainingSecs + 1);
      }, 1000);
    } else if (!isActive && remainingSecs !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, remainingSecs]);

  return (
    <TabBar>
      <TabItem style={{alignItems: 'flex-start'}}>
        <MaterialIcon name="timer" size={25} color={Colors.light.icon} />
        <Timer>{`${mins}:${secs}`}</Timer>
      </TabItem>

      <TabContainer onPress={() => handleSelectTab('following')}>
        <TabTextContainer>
          <TabLabel isActive={selectedTab === 'following'}>Following</TabLabel>
        </TabTextContainer>
        <TabIndicator isActive={selectedTab === 'following'} />
      </TabContainer>

      <TabContainer onPress={() => handleSelectTab('for_you')}>
        <TabTextContainer>
          <TabLabel isActive={selectedTab === 'for_you'}>For You</TabLabel>
        </TabTextContainer>
        <TabIndicator isActive={selectedTab === 'for_you'} />
      </TabContainer>

      <TabItem style={{justifyContent: 'flex-end'}}>
        <FontAwesomeIcon name="search" size={25} color={Colors.dark.input} />
      </TabItem>
    </TabBar>
  );
};

export default TopNavigator;
