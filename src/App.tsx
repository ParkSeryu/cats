import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  type Animal = {name: string, age : number};

  let 동물: Animal = {name : 'kim', age : 20};

  type Name = string;
  type Age = number;
  type Person = Name | Age;

  type PositionX = {x: number};
  type PositionY = {y : number};

  type NewType = PositionX & PositionY;
   
  let position : NewType = { x : 10, y : 20};

  type a = {x : number};
  type b = {y : number};
  let c : a & b = {x: 1, y: 2};

  type HomeWorkType2 = {color? : 'string',
  size : number,
  readonly position : number[]
  }

  let 테스트용변수 :HomeWorkType2 = {
    size : 123,
    position : [1,2,3]
}

  type Homework3 = { name : string, phone : number, email: string}

  type Homework4 = Homework3 &  { aaa : boolean};
  


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
