import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  class User { 
    static x = 10;
    y = 20;
  }

  let 자식 = new User();
  console.log(자식.y);

  class User2 {
    static skill = 'js';
    intro = User2.skill + '전문가입니다';
  }

  User2.skill = 'ts';

  let 철수 = new User();
  console.log(철수);


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
