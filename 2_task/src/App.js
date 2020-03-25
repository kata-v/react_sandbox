import React, {Component} from "react";

import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  
  state= {
    persons: [
        {name: 'Kata', species: 'reptilian'},
        {name: 'Bob', species: 'thing'},
        {name: 'Janet', species: 'succubus'},
        {name: 'Ted', species: 'dudebro'},
        {name: 'Blib', species: 'blob'}
    ]

  };
  
  
  
  
  render() {
    return (
      <div>
      <h1>Hello World!</h1>
      <p>Hello world!</p>
      <Person name={this.state.persons[0].name} species={this.state.persons[0].species} />
      <Person name={this.state.persons[1].name} species={this.state.persons[1].species}/> 
      <Person name={this.state.persons[2].name} species={this.state.persons[2].species}/> 
      <Person name={this.state.persons[3].name} species={this.state.persons[3].species}/> 
      <Person name={this.state.persons[4].name} species={this.state.persons[4].species} />
      </div>
      );
  }
}
 

export default App;
