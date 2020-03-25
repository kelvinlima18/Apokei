import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  PokeData,
  PokeImagen,
  PokeName,
  PokeHeader,
  PokeHeight,
  PokeWeight,
  PokeTitle,
  PokeTypes,
  Types,
  PokeDescription,
  PokeTag,
  PokeAbility,
  Ability,
} from './styles';

import api from '../../services/api';

export default function Pokemon({ navigation }) {
  const id = navigation.getParam('pokeData');
  const [poke, setPoke] = useState([]);

  useEffect(() => {
    async function loadPokeData() {
      const response = await api.get(`pokemon/${id}`);

      setPoke(response.data);
    }
    loadPokeData();
  }, [poke]);

  return (
    <Container>
      <PokeData>
        <PokeHeader>
          <PokeImagen
            source={{
              uri: `https://pokeres.bastionbot.org/images/pokemon/${id}.png`,
            }}
          />
          <PokeTitle>
            <PokeName>Nome: {poke.name}</PokeName>
            <PokeHeight>Altura: {poke.height} cm</PokeHeight>
            <PokeWeight>Peso: {poke.weight / 10} kg</PokeWeight>
          </PokeTitle>
        </PokeHeader>
        <PokeDescription>
          <PokeTag>Tipos</PokeTag>
          <PokeTypes
            data={poke.types}
            numColumns={2}
            keyExtractor={item => String(item.name)}
            renderItem={({ item }) => <Types>{item.type.name}</Types>}
          />
          <PokeTag>Abilidades</PokeTag>
          <PokeAbility
            data={poke.abilities}
            numColumns={2}
            keyExtractor={item => String(item.ability.name)}
            renderItem={({ item }) => <Ability>{item.ability.name}</Ability>}
          />
        </PokeDescription>
      </PokeData>
    </Container>
  );
}

Pokemon.propTypes = {
  navigation: {
    navigate: {
      getParam: PropTypes.func,
    },
  },
};
