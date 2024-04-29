import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let type : string = 'kim';
  let type0 : string[] = ['kim', 'park'];
  let type1 : {name? : string} = {name : 'kim'}
  let type2 : string | number  = 'kim'; // Union type

  type 내타입 = string | number;

  let 이름 : 내타입 = 123;

  function 함수(x : number) : number {
    return x * 2
  }

  type Member = [number, boolean]; // 튜플 타입
  let john:Member = ['123', true];

  type ObjectMember = {
    [key: string] : string // 모든 Object 속성 
  }

  let johnson : ObjectMember = { name : 'kim', age : '123'}

  class User{
    name: string
    constructor(name: string){
      this.name = name;
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
