import React from 'react';
import { IPokemonState, IState } from '../../reducers';
//import { ChuckNorrisComponent } from '../chuck-norris/chuck-norris.component';
import { getPokemon } from '../../actions/pokemon.actions';
import { connect } from 'react-redux';
import { identifier } from '@babel/types';

interface IPokemonProbs{
  id: IPokemonState,
  getPokemon: (id: number) => void
}

export class PokemonComponent extends React.Component<IPokemonProbs>{
  constructor(props){
  super(props);
    this.state = {
      id: 0
    }
  }

  handelInput(event) {
     this.setState({id: event.target.value})
  }

  handelSubmit= () =>{
    this.props.getPokemon(this.props.id.id);
    console.log(this.props.id);
  }

  render() {
    return (
      // We need to construct the id from the props here
      <div>
        {/* We need to update the state of the id here */}
        <h1> 
        Pokemon Component {} 
      </h1>
      <input type="text"/>
      <button onClick = {this.handelSubmit} >Submit</button>
      </div>
      
    );
  }
}

const mapStateToProps = (state: IState) => {
  return {
    id: state.pokemon
    //clicker: state.clicker
  }
}

const mapDispatchToProps = {
  getPokemon: getPokemon
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonComponent);