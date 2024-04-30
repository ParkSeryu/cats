import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let 회원들 = { member1 : 'kim', meber2 : 'park' }
  
  let 이름:string = 'jh'
  let 나이:number = 26
  let 출생지역:string = 'suwon';

  const 숙제2 : {곡 : string, 가수이름:string} = {곡 : '야생화', 가수이름: '박효신'}

  let project : {member : string[], days: number, started: boolean} = {
    member : ['kim', 'park'],
    days: 30,
    started : true
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
