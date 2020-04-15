import React, {Component} from 'react';
import './App.css';
// import Lecture from './Lecture/Lecture';
// import LectureMapMethod from './Lecture/LectureMapMethod';
import Post from './Post/Post';



const posts = [{
  id:1,
  title: "Zombie ipsum reversus ab viral inferno",
  author: "Rick Grimes",
  desc:"De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. ",
  img: "https://source.unsplash.com/featured/?grave",
  },
  {
  id:2,
  title: "The voodoo sacerdos flesh eater",
  author: "Buffy Summers",
  desc:"Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead.",
  img: "https://source.unsplash.com/featured/?moon",
  },
  {
  id:3,
  title: "Cum horribilem walking dead resurgere de crazed sepulcris creaturis",
  author: "Shaun of the Dead",
  desc:"Lucio fulci tremor est dark vivos magna. Expansis creepy arm yof darkness ulnis witchcraft missing carnem armis Kirkman Moore and Adlard caeruleum in locis. Romero morbo Congress amarus in auras. Nihil horum sagittis tincidunt, zombie slack-jawed gelida survival portenta. The unleashed virus est, et iam zombie mortui ambulabunt super terram.",
  img: "https://source.unsplash.com/featured/?raven",
  },

]; 


class App extends Component {
  state= {
    posts: posts,
  }; 

  closeHandler = (closeId) =>{
  const oldArray = [...this.state.posts];
  oldArray.splice(closeId, 1);
  this.setState({posts: oldArray});
  };
  
  render (){

    const postsList = this.state.posts.map((post) =>{

      return (
      <Post 
      key={post.id}
      title={post.title} 
      author={post.author} 
      desc={post.desc} 
      img={post.img}
      click={this.closeHandler}
      />
        );
    });

    return (
      <div className="postsContainer">{postsList}</div>
    );
}
}

export default App;


  // return (
    // 
    //<div className="postsContainer">
    //   <Post
    //   title={this.state.posts[0].title}
    //   author={this.state.posts[0].author}
    //   desc={this.state.posts[0].desc}
    //   img={this.state.posts[0].img}
    //   />
    //   <Post
    //   title={this.state.posts[1].title}
    //   author={this.state.posts[1].author}
    //   desc={this.state.posts[1].desc}
    //   img={this.state.posts[1].img}
    //   />
    //   <Post
    //   title={this.state.posts[2].title}
    //   author={this.state.posts[2].author}
    //   desc={this.state.posts[2].desc}
    //   img={this.state.posts[2].img}
    //   />
     
    // </div>
  // );