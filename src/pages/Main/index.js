import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { Container, PokeList, PokeImage, PokeName, PokeRender } from './styles';

import api from '../../services/api';

export default function Main({ navigation }) {
  const [poke, setPoke] = useState([]);

  useEffect(() => {
    async function loadPokes() {
      const response = await api.get(`pokemon/?limit=151`);

      setPoke(response.data.results);
    }
    loadPokes();
  }, []);

  return (
    <Container>
      <PokeList
        data={poke}
        onEndReachedThreshold={0.05}
        keyExtractor={index => String(index)}
        numColumns={2}
        renderItem={({ item, index }) => (
          <PokeRender
            onPress={() =>
              navigation.navigate('Pokemon', { pokeData: index + 1 })
            }
          >
            <PokeImage
              source={{
                uri: `https://pokeres.bastionbot.org/images/pokemon/${index +
                  1}.png`,
              }}
            />
            <PokeName>{item.name}</PokeName>
          </PokeRender>
        )}
      />
    </Container>
  );
}

Main.propTypes = {
  navigation: {
    navigate: PropTypes.object,
  },
};
