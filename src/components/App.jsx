import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PokemonForm from './PokemonForm';
import PokemonInfo from './PokemonInfo';

export default class App extends Component {
  state = {
    pokemonName: '',
  };
  handleFormSubmit = pokemonName => {
    this.setState({ pokemonName });
  };
  ///-///
  // state = {
  //   pokemon: null,
  //   loading: false,
  // };

  // async componentDidMount() {
  //   this.setState({ loading: true });

  //   setTimeout(() => {
  //     fetch('https://pokeapi.co/api/v2/pokemon/ditto')
  //       .then(res => res.json())
  //       .then(pokemon => this.setState({ pokemon }))
  //       .finally(() => {
  //         this.setState({ loading: false });
  //       });
  //   }, 500);
  // }
  ///-///
  render() {
    return (
      <div style={{ maxWidth: 1170, margin: '0 auto', padding: 20 }}>
        <PokemonForm onSubmit={this.handleFormSubmit} />
        <ToastContainer position="bottom-right" autoClose={500} />
        <PokemonInfo pokemonName={this.state.pokemonName} />
        {/* {this.state.loading && <h3>Loading ...</h3>}
        {this.state.pokemon && <div>{this.state.pokemon.name}</div>} */}
      </div>
    );
  }
}
