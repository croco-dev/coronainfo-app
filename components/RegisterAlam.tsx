import React, { useEffect, useState } from 'react';
import { TextInput, Alert } from 'react-native';
import MainWeb from './MainWeb';
import styled from '@emotion/native';
import Svg, { Line } from 'react-native-svg';
import AsyncStorage from '@react-native-community/async-storage';

const Container = styled.SafeAreaView`
  flex: 1;
`;
const Header = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding-left: 10px;
`;
const Body = styled.View`
  flex: 15;
  align-items: center;
`;
const Title = styled.View`
  position: absolute;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
const TitleText = styled.Text`
  color: #2c2c2c;
  font-size: 20px;
`;
const HighlightTitleText = styled(TitleText)`
  font-weight: 700;
  color: #c361ff;
  font-size: 20px;
`;
const MenuButton = styled(MenuSvg)`
  background-color: green;
`;
const MaskTitle = styled.Text`
  padding-top: 30px;
  padding-bottom: 20px;
  font-size: 20px;
  font-weight: 600;
`;
const MaskDesc = styled.Text`
  padding-top: 5px;
  font-size: 15px;
`;
const YearInput = styled.TextInput`
  border: solid 1px;
  padding: 5px 15px;
  margin: 15px;
  border-radius: 15px;
  width: 100px;
  text-align: center;
  font-size: 20px;
`;
const SubmitButton = styled.Button`
  border: solid 1px;
  padding: 5px 15px;
  margin: 15px;
  border-radius: 15px;
  width: 100px;
  background-color: #68a0cf;
  text-align: center;
  font-size: 20px;
`;
function MenuSvg() {
  return (
    <Svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      stroke='#000'
      stroke-width='2'
      stroke-linecap='round'
      stroke-linejoin='round'
    >
      <Line x1='3' y1='12' x2='21' y2='12'></Line>
      <Line x1='3' y1='6' x2='21' y2='6'></Line>
      <Line x1='3' y1='18' x2='21' y2='18'></Line>
    </Svg>
  );
}
const storeData = async data => {
  try {
    await AsyncStorage.setItem('@alam', data);
  } catch (e) {}
};
export default function RegisterAlam({ setRegister }) {
  const [year, setYear] = useState('');
  return (
    <Container>
      <Header>
        <MenuButton />
        <Title>
          <TitleText>
            <HighlightTitleText>코로나</HighlightTitleText>인포
          </TitleText>
        </Title>
      </Header>
      <Body>
        <MaskTitle>마스크 알림 등록</MaskTitle>
        <MaskDesc>생년을 입력하면 마스크 5부제에</MaskDesc>
        <MaskDesc>해당하는 날짜에 알림을 보내드립니다!</MaskDesc>
        <MaskDesc>(주말은 별도의 알림을 띄우지 않습니다!)</MaskDesc>
        <YearInput
          keyboardType='numeric'
          maxLength={4}
          placeholder='2000'
          placeholderTextColor='gray'
          value={year}
          onChangeText={text => {
            setYear(text);
          }}
        />
        <SubmitButton
          title='등록하기'
          onPress={() => {
            if (year !== null) {
              storeData(year);
              Alert.alert('완료!', '등록되었습니다!');
              setRegister(true);
            } else {
              Alert.alert('경고!', '생년 입력에 문제가 있습니다!');
            }
          }}
        />
      </Body>
    </Container>
  );
}
