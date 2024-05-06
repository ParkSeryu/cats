import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  class User{
    private name = 'kim';
    private familyName:string = 'kim';
    constructor(a : string){
      this.name = a + this.familyName
    }

    이름변경함수(){
      this.familyName = 'park';
    }
  }

  let 유저1 = new User('park')
  유저1.name = '안뇽'


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
