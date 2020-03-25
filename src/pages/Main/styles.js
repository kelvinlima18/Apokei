import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
  background: #eee;
`;

export const PokeList = styled.FlatList`
  flex: 1;
  flex-basis: 0;
`;

export const PokeRender = styled(RectButton)`
  width: 160px;
  height: 160px;
  margin: 0 10px 10px 0;
  align-items: center;
  justify-content: center;
  border: 1px solid #ddd;
  border-radius: 5px;
  background: #ddd;
`;

export const PokeImage = styled.Image`
  width: 100px;
  height: 100px;
  margin-bottom: 10px;
`;

export const PokeName = styled.Text`
  color: #fff;
  text-align: center;
  padding: 8px;
  background: #feca1b;
  height: 45px;
  width: 155px;
  font-size: 18px;
  border-radius: 5px;
  font-weight: bold;
  text-transform: capitalize;
`;
