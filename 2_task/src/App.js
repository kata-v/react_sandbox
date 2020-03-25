import React, {Component} from "react";

import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  render() {
    return (
      <div>
      <h1>Hello World!</h1>
      <p>Hello world!</p>
      <Person name="Kata" species="reptilian" />
      <Person name="Bob" species="thing"/> 
      <Person name="Janet" species="succubus"/> 
      <Person name="Ted" species="dudebro"/> 
      <Person name="Blob" species="blob" />
      </div>
      );
  }
}
 

export default App;
