import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  type Fish = {swim : string}
  type Bird = {fly : string}

  function 함수(animal : Fish | Bird){
    if('swim' in animal) {
      animal.swim
    }
  }

  let 날짜 = new Date();
  if (날짜 instanceof Date){

  }
  
  type Car = {
    model : 4;
    wheel : '4개',
    color: string
  }

  type Bike = {
    wheel : '2개',
    color: string
  }

  function 함수(x: Car | Bike){
    if(x.wheel === '4개'){
      console.log('x는 Car 타입이에요')
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
