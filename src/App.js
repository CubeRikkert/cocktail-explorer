import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CocktailListContainer from './components/CocktailListContainer'
import { Route } from 'react-router-dom'
import CocktailCatagoriesImages from './components/CocktailCatagoriesImages'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <main>
          <Route exact path="/" component={CocktailListContainer} />
          <Route path="/cocktail-catagories/:catagory" component={CocktailCatagoriesImages} />
        </main>

      </div>
    );
  }
}

export default App;
