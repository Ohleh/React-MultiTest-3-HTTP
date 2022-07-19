import React, { Component } from 'react';
import PokemonErrorkView from './PokemonErrorView';
import PokemonDataView from './PokemonDataView';
import PokemonPendingView from './PokemonPendingView';
import pokemonAPI from './services/pokemon-api';

//"idle" - простій.
//"pending" - очікується виконання.
//"resolved" - виконано з результатом - добре.
//"rejected" - відхилено

class PokemonInfo extends Component {
  state = {
    pokemon: null,
    // loading: false,
    error: null,
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.pokemonName !== this.props.pokemonName) {
      this.setState({ status: 'pending' });

      pokemonAPI
        .fetchPokemon(this.props.pokemonName)
        .then(pokemon => this.setState({ pokemon, status: 'resolved' }))
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  render() {
    const { pokemon, error, status } = this.state;
    const { pokemonName } = this.props;

    if (status === 'idle') {
      return <div>enter poky name</div>;
    }

    if (status === 'pending') {
      return <PokemonPendingView pokemonName={pokemonName} />;
    }
    if (status === 'rejected') {
      return <PokemonErrorkView message={error.message} />;
    }
    if (status === 'resolved') {
      return <PokemonDataView pokemon={pokemon} />;
    }
  }
}

export default PokemonInfo;

//// до рефакторинга
//
// class PokemonInfo extends Component {
//   state = {
//     pokemon: null,
//     loading: false,
//     error: null,
//   };
//   componentDidUpdate(prevProps, prevState) {
//     if (prevProps.pokemonName !== this.props.pokemonName) {
//       //   console.log('poky name has changed');
//       this.setState({ loading: true, pokemon: null });
//       fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.pokemonName}`)
//         .then(response => {
//           if (response.ok) {
//             return response.json();
//           }
//           return Promise.reject(
//             new Error(`no poky with name ${this.props.pokemonName}`)
//           );
//         })
//         // .then(console.log)
//         .then(pokemon => this.setState({ pokemon }))
//         .catch(error => this.setState({ error }))
//         .finally(() => this.setState({ loading: false }));
//     }
//   }
//   render() {
//     const { pokemon, loading, error } = this.state;
//     const { pokemonName } = this.props;
//     return (
//       <div>
//         {error && <h3>{error.message}</h3>}
//         {loading && <div>loading...</div>}
//         {!pokemonName && <div>enter poky name</div>}
//         {pokemon && (
//           <div>
//             <p>{pokemon.name}</p>
//             <img
//               src={pokemon.sprites.other['official-artwork'].front_default}
//               alt={pokemon.name}
//               width="300"
//             />
//           </div>
//         )}
//       </div>
//     );
//   }
// }

// export default PokemonInfo;
