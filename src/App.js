import React from 'react';

import BookSearchListComponent from './components/bookSearchListComponent';

import './assets/stylesheets/App.css';
import matilda from './assets/images/matilda.gif';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      currentQuery: '',
      queryCollection: [],
      currentResults: {},
    };
  }

  render() {
    return (
      <div className="App" className="container">
        <header className="App-header">
          <h1>
            <font color="#FF0000">B</font>
            <font color="#FF5A00">o</font>
            <font color="#FFB400">o</font>
            <font color="#FFff00">k</font>
            <font color="#A5ff00">t</font>
            <font color="#4Bff00">a</font>
            <font color="#00ff00">s</font>
            <font color="#00ff5A">t</font>
            <font color="#00ffB4">i</font>
            <font color="#00ffff">c</font>
            <font color="#00B4ff"> </font>
            <blink>
              <font color="#005Aff">B</font>
              <font color="#0000ff">o</font>
              <font color="#4B00ff">o</font>
              <font color="#A500ff">k</font>
              <font color="#FF00ff">s</font>
            </blink>
          </h1>
          <marquee style={{fontColor: 'blue', lineHeight: '30px'}}>Millions and millions of books available for your searching pleasure!</marquee>
          <h3 style={{textAlign: "center"}}>
            Where Nineties design practices meet the complexities and power of <blink>web 2.0</blink>
          </h3>
          <center>
            <img src={matilda} alt="matilda reading books" />
          </center>
        </header>
        <BookSearchListComponent
          {...this.props}
          {...this.state}
        />
      </div>
    );
  }
}

export default App;
