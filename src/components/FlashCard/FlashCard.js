import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {styled} from '../../theme';
import styles from './styles';
import quizApi from '../../services/quizApi';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import ImageRN from 'react-native-fast-image';

const CardText = styled(Text, styles.question);
const PlaylistText = styled(Text, styles.playlistText);
const Container = styled(View, styles.container);
const TopContainer = styled(View, styles.topContainer);
const PlayListInfoContainer = styled(View, styles.playlistInfoContainer);
const LeftInfo = styled(View, styles.leftInfoContainer);
const RightInfo = styled(View, styles.rightInfoContainer);
const UserInfoContainer = styled(View, styles.userInfoContainer);
const UserText = styled(Text, styles.userText);
const Description = styled(Text, styles.description);
const IconList = styled(View, styles.iconList);
const IconContainer = styled(View, styles.iconContainer);
const IconOuterContainer = styled(TouchableOpacity, styles.iconOuterContainer);
const IconText = styled(Text, styles.iconText);
const OptionContainer = styled(TouchableOpacity, styles.optionContainer);
const Image = styled(ImageRN, styles.image);

const FlashCard = ({category}) => {
  const [item, setItem] = useState({});
  const [flip, setFlip] = useState(false);
  const [correctOption, setCorrectOption] = useState({});
  const [selectedOption, setSelectedOption] = useState('');
  const [cardText, setCardText] = useState('');
  const [options, setOptions] = useState([]);
  const [isBookmarked, setBookmarked] = useState(false);
  const [isForwarded, setForwarded] = useState(false);
  const [isCommented, setCommented] = useState(false);
  const [isLiked, setLiked] = useState(false);
  const [bookmarks, setBookmarks] = useState(Math.ceil(Math.random() * 20));
  const [forwards, setForwards] = useState(Math.ceil(Math.random() * 40));
  const [comments, setComments] = useState(Math.ceil(Math.random() * 30));
  const [likes, setLikes] = useState(Math.ceil(Math.random() * 28));
  const [touchY, setTouchY] = useState(0);
  const [swipedUp, setSwipedUp] = useState(false);

  const setDefaults = () => {
    setFlip(false);
    setBookmarked(false);
    setForwarded(false);
    setCommented(false);
    setLiked(false);
    setBookmarks(Math.ceil(Math.random() * 21));
    setForwards(Math.ceil(Math.random() * 36));
    setComments(Math.ceil(Math.random() * 54));
    setLikes(Math.ceil(Math.random() * 17));
    setSelectedOption('');
  };

  const getQuestion = category => {
    quizApi.getQuestion(category).then(item => {
      setItem(item);
      setCardText(
        category === 'for_you' ? item.question : item.flashcard_front,
      );
      if (category === 'for_you') {
        setOptions(item.options?.sort(o => Math.random() - 0.5));
      }
    });
    setDefaults();
  };

  const getAnswer = id => {
    quizApi.getAnswer(id).then(item => {
      setCorrectOption(item.correct_options[0]);
    });
  };

  useEffect(() => {
    getQuestion(category);
  }, [category]);

  const handleFlip = () => {
    if (category === 'for_you' && !flip) {
      getAnswer(item.id);
    } else if (category === 'following') {
      setCardText(flip ? item.flashcard_front : item.flashcard_back);
    }
    if (flip) {
      setCorrectOption({});
      setSelectedOption('');
    }
    setFlip(!flip);
  };

  const handleBookmark = () => {
    isBookmarked ? setBookmarks(bookmarks - 1) : setBookmarks(bookmarks + 1);
    setBookmarked(!isBookmarked);
  };
  const handleForward = () => {
    isForwarded ? setForwards(forwards - 1) : setForwards(forwards + 1);
    setForwarded(!isForwarded);
  };
  const handleComment = () => {
    isCommented ? setComments(comments - 1) : setComments(comments + 1);
    setCommented(!isCommented);
  };
  const handleLike = () => {
    isLiked ? setLikes(likes - 1) : setLikes(likes + 1);
    setLiked(!isLiked);
  };

  const handleOptionSelected = selectedOption => {
    getAnswer(item.id);
    setSelectedOption(selectedOption);
    setFlip(true);
  };

  const FloatingIcons = () => {
    return (
      <IconList>
        <IconOuterContainer onPress={() => handleProfile()}>
          <Image source={{uri: item.user?.avatar}} />
        </IconOuterContainer>
        <IconOuterContainer onPress={() => handleLike()}>
          <Icon name="heart" size={30} color={isLiked ? 'orange' : 'white'} />
          <IconText>{likes}</IconText>
        </IconOuterContainer>
        <IconOuterContainer onPress={() => handleComment()}>
          <Icon
            name="commenting"
            size={30}
            color={isCommented ? 'orange' : 'white'}
          />
          <IconText>{comments}</IconText>
        </IconOuterContainer>
        <IconOuterContainer onPress={() => handleForward()}>
          <Icon
            name="mail-forward"
            size={30}
            color={isForwarded ? 'orange' : 'white'}
          />
          <IconText>{forwards}</IconText>
        </IconOuterContainer>
        <IconOuterContainer onPress={() => handleBookmark()}>
          <Icon
            name="bookmark"
            size={30}
            color={isBookmarked ? 'orange' : 'white'}
          />
          <IconText>{bookmarks}</IconText>
        </IconOuterContainer>
        <IconOuterContainer onPress={() => handleFlip()}>
          <IconContainer bgColor={'white'}>
            <Icon name="refresh" size={25} color="black" />
          </IconContainer>
          <IconText>Flip</IconText>
        </IconOuterContainer>
      </IconList>
    );
  };

  return (
    <Container>
      <TopContainer
        category={category}
        onTouchStart={e => setTouchY(e.nativeEvent.pageY)}
        onTouchEnd={e => {
          if (touchY - e.nativeEvent.pageY > 20) getQuestion(category);
        }}>
        <CardText category={category}>{cardText}</CardText>
        {category === 'for_you'
          ? options?.map(item =>
              !flip ? (
                <OptionContainer
                  bgColor={selectedOption === item.id ? 'red' : 'black'}
                  key={item.id}
                  onPress={() => handleOptionSelected(item.id)}>
                  <Description>{item.answer}</Description>
                </OptionContainer>
              ) : item.id === correctOption.id ? (
                <OptionContainer
                  bgColor={'green'}
                  key={item.id}
                  onPress={() => handleOptionSelected(item.id)}>
                  <Description>{item.answer}</Description>
                  <Icon name="check-circle" size={25} color="#F5F5F5" />
                </OptionContainer>
              ) : (
                <OptionContainer
                  bgColor={selectedOption === item.id ? 'red' : 'black'}
                  key={item.id}
                  onPress={() => handleOptionSelected(item.id)}>
                  <Description>{item.answer}</Description>
                  {selectedOption === item.id ? (
                    <View style={{flex: 1}}>
                      <EntypoIcon
                        name="circle-with-cross"
                        size={25}
                        color="#F5F5F5"
                      />
                    </View>
                  ) : null}
                </OptionContainer>
              ),
            )
          : null}

        <UserInfoContainer>
          <UserText>{item.user?.name}</UserText>
          <Description>{item.description}</Description>
        </UserInfoContainer>
      </TopContainer>
      <FloatingIcons />
      <PlayListInfoContainer>
        <LeftInfo>
          <MaterialIcon name="play-box-multiple" size={25} color="white" />
          <PlaylistText>{`Playlist • ${item.playlist}`}</PlaylistText>
        </LeftInfo>
        <RightInfo>
          <MaterialIcon name="chevron-right" size={25} color="white" />
        </RightInfo>
      </PlayListInfoContainer>
    </Container>
  );
};

export default FlashCard;
