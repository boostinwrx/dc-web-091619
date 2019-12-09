import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from './logo.svg';
import './App.css';
import store from './redux/store'

class App extends Component {
  //This is a hacky solution
  //This is a bad practice; bandage solution for now
  componentDidMount() {
    store.subscribe(() => this.forceUpdate())
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Counter/>
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
        <h3>{`The current count is less than ${store.getState().count + (5 - (store.getState().count % 5))}`}</h3>
      </header>
    );
  }
}

class Counter extends Component {
  increment = (num) => {
    store.dispatch( {type: "COUNT_INCREMENT", payload: num} )
  };

  decrement = (num) => {
    store.dispatch( {type: "COUNT_DECREMENT", payload: num} )
  };

  render() {
    return (
      <div className="Counter">
        <h1>{store.getState().count}</h1>
        <button onClick={() => this.decrement(5)}> -5 </button>
        <button onClick={() => this.decrement(1)}> - </button>
        <button onClick={() => this.increment(1)}> + </button>
        <button onClick={() => this.increment(3)}> +3 </button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
