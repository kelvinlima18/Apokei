import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #feca1b;
  padding: 20px;
`;

export const PokeData = styled.View`
  background: #fff;
  border-radius: 8px;
  height: 450px;
  margin-top: 100px;
  flex-direction: column;
`;

export const PokeHeader = styled.View`
  flex-direction: row;
  margin: 10px 0 0 10px;
`;

export const PokeImagen = styled.Image`
  width: 150px;
  height: 150px;
`;

export const PokeTitle = styled.View`
  align-items: flex-start;
  margin: 18px 0 0 24px;
`;

export const PokeName = styled.Text`
  color: #333;
  text-align: center;
  font-size: 18px;
  margin-bottom: 10px;
  text-transform: capitalize;
  font-weight: bold;
`;

export const PokeHeight = styled.Text`
  color: #333;
  font-size: 16px;
  margin-bottom: 5px;
`;

export const PokeWeight = styled.Text`
  color: #333;
  font-size: 16px;
`;

export const PokeDescription = styled.View`
  padding: 20px;
`;

export const PokeTypes = styled.FlatList`
  flex-direction: row;
`;

export const Types = styled.Text`
  background: #1b4ffe;
  border-radius: 25px;
  height: 50px;
  text-align: center;
  padding: 12px;
  color: #fff;
  width: 80px;
  text-transform: capitalize;
  font-size: 16px;
  margin-right: 20px;
  margin-bottom: 30px;
`;

export const PokeTag = styled.Text`
  color: #333;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center;
`;

export const PokeAbility = styled.FlatList`
  flex-direction: row;
`;

export const Ability = styled.Text`
  background: #fe1b4f;
  border-radius: 25px;
  height: 50px;
  padding: 12px;
  text-align: center;
  color: #fff;
  width: 120px;
  text-transform: capitalize;
  font-size: 16px;
  margin-bottom: 30px;
  margin-right: 20px;
`;
