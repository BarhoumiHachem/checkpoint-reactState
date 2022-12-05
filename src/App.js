import React, { Component } from 'react';
import './App.css';
import { Button } from 'react-bootstrap';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: "Hachem Barhoumi",
      bio: "holder of a degree in computer science and a degree in fullstack js, Passionate about web development. Self-taught and curious.",
      imgSrc: './photo.jpg',
      profession: "Web Developer",
      shows: true,
      count: 0,
    }
  }
  btnClic = () => {
    this.setState({ shows: !(this.state.shows),count:0 })
  }

  componentDidMount() {
  setInterval (() => {
      this.setState({count: (this.state.count +1)});
    }, 1000);}

  render() {
    return (
      <div className='App'>
        {this.state.shows ?
          (<Button className='btn' variant="success" onClick={this.btnClic}>show profil</Button>)
          :
          (
            <div className='App'>
            <Button className='btn' variant="danger" onClick={this.btnClic}>hidden profil</Button>
            <h3>The component has been rendered for {this.state.count} seconds</h3>
            <h1 className='App-title'>{this.state.fullName}</h1>
            <p className='App.bio'>{this.state.bio}</p>
            <img className='App-photo' src={this.state.imgSrc} />
            <h3 className='App-prof'>{this.state.profession}</h3>
          </div>)
        }

      </div>
    );
  }
}

export default App;