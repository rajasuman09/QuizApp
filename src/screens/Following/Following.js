import React from 'react';
import { Text, View } from 'react-native';
import { styled } from "../../theme";
import styles from "./styles";
import SafeAreaView from '../../components/SafeAreaView';

const Container = styled(View, styles.container);
const QuestionText = styled(Text, styles.text);

export default Following = () => {
  return (
    <Container> 
      <QuestionText>Following Screen</QuestionText>
    </Container>
  );
};
