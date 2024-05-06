import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  function 함수(parameter : string){
    if(typeof parameter == 'string'){
      console.log(parameter)
    }else{
      console.log(parameter) // never
    }

    let 함수 = function() {
      throw new Error()
    }

  }



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
