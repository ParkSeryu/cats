import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let 회원 : (number | string | boolean) = 123;
  let 회원들 : (number | string )[] = [1, '2', 3];
  let 오브젝트 : {a : string | number} = { a : '123' };

  let 이름 : any;
  이름 = 123;
  이름 = {};

  let 변수1: string = 이름;

  let user: string = 'kim';
  let age:(undefined | number) = undefined;
  let married:boolean = false;
  let 철수:(string|undefined|number|boolean)[] = [user, age, married];

  let 학교 : {
    score : (string | boolean | number)[],
    teacher : string,
    friend: (string | object)[] | string
  } = {
    score : [100, 97, 84],
    teacher : 'Phil',
    friend : 'John'
  }

  학교.score[4] = false;
  학교.friend = ['Lee', 학교.teacher]


  
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
