import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { slide as Menu } from 'react-burger-menu';

class App extends Component {
  state = {
    sideNav: false,
    links: ['Home', 'About', 'Contact', 'Contact']
  }


  render() {
    const { sideNav, links } = this.state;
    const linkMap = links.map((e, i) => {
      return (
        <div key={i}>
          <p>{e}</p>
        </div>
      )
    })
    return (
      <div className="App">
        <nav className="nav">
          <h2 className="title">Start Bootstrap</h2>
          <div className="menu">

            <div className="main_nav">{linkMap}</div>
            <div className="hamburger">
              <div className="hamburger-icon" onClick={() => this.setState({ sideNav: !sideNav })}>
                <div className="burger burger1"></div>
                <div className="burger burger2"></div>
                <div className="burger burger3"></div>
              </div>
              {sideNav && <div className="sidenav">{linkMap}</div>}

            </div>



          </div>
        </nav>
        <div className='main'>
          <h2>Welcome to our studio!</h2>
          <h1>It's Nice To Meet You!</h1>
        </div>
      </div>
    );
  }
}

export default App;
