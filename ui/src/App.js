import React, { Component } from 'react';
import {greet} from "webassembly-utils";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { number: 0, population: 0, error: 0 }

    this.populationChange = this.populationChange.bind(this)
    this.errorChange = this.errorChange.bind(this)
  }
  populationChange(event) {
    this.setState({population: event.target.value})
  }
  errorChange(event) {
    this.setState({error: event.target.value})
  }
  calucurate() {
    // calucurate(this.population, this.error)
      // this.setState({number: n})
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.state.number}
          </p>
          <div>
            <p>人口</p>
            <p><input name="population" type="text" value={this.state.population} onChange={this.populationChange}/></p>
            <p>誤差</p>
            <p><input name="error" type="text" value={this.state.error} onChange={this.errorChange}/></p>
            <p><button onClick={ this.calucurate }>計算</button></p>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
