import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';

import './App.css';
import AddMonsterForm from './components/add-monster-form';
const BASE_URL = 'http://localhost:3005'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      monsters: [],

    }
  }
  componentDidMount() {
    axios
      .get(BASE_URL + '/monsters')
      .then(response => {
        this.setState({ monsters: response.data })
      })
  }

  addMonster = (monster) => {
    axios
      .post(BASE_URL + '/monsters', monster)
      .then(response => {
        this.setState({ monsters: response.data })
      })

  }
  deleteMonster = (name) => {
    console.log('delete monster run')
    axios
      .delete(BASE_URL + `/monsters/${name}`)
      .then(response => {
        this.setState({ monsters: response.data })
      })
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => {
          return (
            <div className="monster-card" key={monster.name}>
              <h1>{monster.name}</h1>
              <div>{monster.scary.level}</div>
              <img src={monster.image_url} />
              <button onClick={() => { this.deleteMonster(monster.name) }}>Delete</button>
            </div>
          )
        })}
        <AddMonsterForm addMonster={this.addMonster} />


      </div >

    );
  }
}
export default App;
