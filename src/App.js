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
      queryCollection: {},
      currentResults: '',
    };
    this.trackQueryState = this.trackQueryState.bind(this);
    this.fetchQueryResults = this.fetchQueryResults.bind(this);
    this.convertParams = this.convertParams.bind(this);
    this.routeTo = this.routeTo.bind(this);
  }

  sanitizeQuery() {
    return this.state.currentQuery.toLowerCase().replace(/\s/g, '+');
  }

  convertParams() {
    return `q=${this.sanitizeQuery()}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`
  }

  fetchQueryResults() {
    if (!this.state.currentQuery) { return; }

    const queryCollection = {...this.state.queryCollection};
    const currentResults = this.sanitizeQuery();
    const originalQuery = this.state.currentQuery;

    if (queryCollection[currentResults]) {
      queryCollection[currentResults].originalQuery = originalQuery;
      this.setState({
        queryCollection,
        currentResults,
        currentQuery: '',
      });
    } else {
      this.setState({loading: true});
      fetch(`https://www.googleapis.com/books/v1/volumes?${this.convertParams()}`)
        .then(resp => resp.json())
        .then(data => {
          const {totalItems, items} = data;
          const collection = items.map(book => {
            console.log(book.volumeInfo);
            const { title, authors, description, publisher, imageLinks, infoLink } = book.volumeInfo;
            return { title, authors, description, publisher, imageLinks, infoLink };
          });
          queryCollection[currentResults] = {
            originalQuery,
            totalItems,
            collection,
          };
          this.setState({
            currentResults,
            queryCollection,
            loading: false,
            currentQuery: '',
          });
        });
    }
  }

  trackQueryState(e) {
    if (e.keyCode === 13) {
      this.fetchQueryResults();
    } else {
      this.setState({currentQuery: e.target.value});
    }
  }

  routeTo(url) {
    const win = window.open(url, '_blank');
    win.focus();
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
          <marquee style={{lineHeight: '50px'}}>Millions and millions of books available for your searching pleasure!</marquee>
          <h3 style={{textAlign: "center"}}>
            Surfing the World Wide Web for books like you're back in the <blink>NINETIES</blink>!
          </h3>
          <center>
            <img src={matilda} alt="matilda reading books" />
          </center>
        </header>
        <BookSearchListComponent
          {...this.props}
          {...this.state}
          trackQueryState={this.trackQueryState}
          fetchQueryResults={this.fetchQueryResults}
          routeTo={this.routeTo}
        />
      </div>
    );
  }
}

export default App;
