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

  let 이름 : 123;
  let 접니다 : '대머리' | '솔로';
  접니다 = '대머리';

  var 자료 = {
    name : 'kim' as 'kim'
  }

  function 내함수(a: 'kim') {

  }

  내함수(자료.name)
  

  function 함수(a: 'hello'){

  }
  
  함수('hello')

  type AnyTest  = '가위' | '바위' | '보'

  function 함수2(x: '가위' | '바위' | '보') : AnyTest[]{
    return ['가위']
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
