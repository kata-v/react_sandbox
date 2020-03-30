import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';

class App extends Component {
  state = {
    likes: 0

  };

  addLikesHandler= () => {
console.log('test');
this.setState({likes: this.state.likes +1})
  };

  removeLikeHandler= () => {
    console.log('test');
    this.setState({likes: this.state.likes -1})
      };

  // resetLikesHandler= () => {
  //       console.log('test');
  //       this.setState({likes: this.state.likes = 0})
  //         };

   resetLikesHandler= () => {
            console.log('test');
            this.setState({likes:  0})
              };

  render(){
    return (
      <div>
        <Header/>
      
      <div className="counterContainer">
        <h1 className={this.state.likes === 0 ? "likes" : this.state.likes % 2 === 0 ? "likes even" : "likes odd"}>
          Total likes: {this.state.likes}
        </h1>
<button onClick={this.addLikesHandler}>Add like</button>
<button onClick={this.removeLikeHandler}>Unlike</button>
<button onClick={this.resetLikesHandler}>Reset</button>
      </div>
      <Footer/>
      </div>
    );
  }
}



export default App;
