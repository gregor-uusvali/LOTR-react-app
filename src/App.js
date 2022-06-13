import logo from './gandalf2.4.png';
import './App.css';
import Item from './TheItem';
import React from 'react';
/* import { useEffect, useState } from 'react'; */

class LOTR extends React.Component {
  constructor() {
    super()
    this.state = {
      loadedCharacter: false,
      name: null,
      race: null,
      gender: null,
      wiki: null,
    }
  }
  getNewCharacter() {
    const headers = {
      'Accept': 'application/json',
      'Authorization': 'Bearer tRgixJFPVHe-YTppGxQj'
    }
    const randomNumber = Math.floor((Math.random() * 932));

    

    const url1 = 'https://the-one-api.dev/v2/character/'
    fetch(url1, {headers}).then(response => response.json()).then(data => {
      this.setState({
        name: data.docs[`${randomNumber}`].name,
        race: data.docs[`${randomNumber}`].race,
        gender: data.docs[`${randomNumber}`].gender,
        wiki: data.docs[`${randomNumber}`].wikiUrl,
        loadedCharacter: true,
      })
      /* let id = data.docs[`${randomNumber}`]._id
      console.log(data.docs[`${randomNumber}`]._id)
      console.log(data)
      const url2 = `https://the-one-api.dev/v2/character/${id}/quote`
      fetch(url2, {headers}).then(response => response.json()).then(quote => {
        this.setState({
          quote: quote.docs.dialog,
          loadedCharacter: true,
        })
        console.log(quote, id);
        console.log(url2)
      }) */
    })
  }
  render() {
    return(
      <div>
        {
          this.state.loadedCharacter &&
            <div>
              <h1>Name: {this.state.name}</h1>
              <p>Race: {this.state.race}</p>
              <p>Gender: {this.state.gender}</p>
              <p>Wiki: <a href={this.state.wiki}
              target='_blank' rel="noreferrer">{this.state.wiki}</a></p>
              <p></p>
            </div>
        }
        <button type="button" onClick={() => this.getNewCharacter()} className="btn">Randomize Charecter</button>
      </div>
    )
  }
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Item name="Gandalf The Gray" />
        <LOTR />
      </header>
    </div>
  );
}


export default App;
