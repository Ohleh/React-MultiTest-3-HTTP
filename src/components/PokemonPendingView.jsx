import PokemonDataView from './PokemonDataView';
import pendingImage from './pendingImage.jpeg';

function PokemonPendingView({ pokemonName }) {
  const pokemonSkeleton = {
    name: pokemonName,
    sprites: {
      other: {
        'official-artwork': {
          front_default: pendingImage,
        },
      },
    },
    stats: [],
  };
  return (
    <div>
      <div> loading...</div>
      <PokemonDataView pokemon={pokemonSkeleton} />
    </div>
  );
}
export default PokemonPendingView;
