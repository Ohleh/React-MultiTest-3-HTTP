import React, { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import { ImSearch } from 'react-icons/im';
// компонент я кого svg:
// import {ReactComponent as MyIcon} from "./"

const styles = { form: { marginBottom: 20 } };

class PokemonForm extends Component {
  state = {
    pokemonName: '',
  };

  handleNameChange = e => {
    this.setState({ pokemonName: e.target.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.pokemonName.trim() === '') {
      return toast.error('Enter poky name');
    }

    this.props.onSubmit(this.state.pokemonName);
    this.setState({ pokemonName: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} style={styles.form}>
        <input
          type="text"
          name="pokemonName"
          value={this.state.pokemonName}
          onChange={this.handleNameChange}
        />
        <button type="submit">
          {/* <ImSearch style={{ marginRight: 8 }} /> */}
          Find
        </button>
      </form>
    );
  }
}

export default PokemonForm;
