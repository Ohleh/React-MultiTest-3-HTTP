import erroeImage from './error.jpeg';

function PokemonErrorView({ message }) {
  return (
    <div role="alert">
      <img src={erroeImage} width="240" alt="sadPopato" />
      <p>{message}</p>
    </div>
  );
}

export default PokemonErrorView;
