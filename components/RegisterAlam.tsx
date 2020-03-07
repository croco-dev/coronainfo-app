import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import MainWeb from './MainWeb';
import styled from '@emotion/native';
import Svg, { Line } from 'react-native-svg';
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
export default function RegisterAlam() {
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
      <Body></Body>
    </Container>
  );
}
