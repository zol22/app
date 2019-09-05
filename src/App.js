import React, { Component } from 'react';
import Display from './Display';
import Create from './Create';
import './App.css';


/* The only time you need to use class component is if it's holding state. Otherwise,
a functional component is the way to go.*/
class App extends Component {

  /* Constructor is dead!*/
  state = {
    characters: [],
  }

    /* Filter is testing an index that was passing vs all the indices in the array, and returning
    all but the one that is passed through ,but the one if (i == index) */ 
  removeCharacter = index =>{
    const { characters } = this.state
    this.setState({
      characters: characters.filter((character, i) => {
      return i !== index
      }),
    })
  }


  handleSubmit = character => {
    this.setState({ 
      characters: [...this.state.characters, character] 
    })
 
  }
  
render(){
  const {characters} = this.state;
  return(
    <div className="container">
      
      <Create handleSubmit={this.handleSubmit}/>
      <Display characterData={characters} removeCharacter={this.removeCharacter}/>
    </div>

  )
  }
}

export default App;
