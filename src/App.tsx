import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  class User {
    private static x = 10;
    public static y = 20;

    static addOne(num: number){
      User.x += num;
    }

    static printX(){
      console.log(User.x);
    }
  }


  User.addOne(3) //이렇게 하면 x가 3 더해져야함
  User.addOne(4) //이렇게 하면 x가 4 더해져야함
  User.printX()  //이렇게 하면 콘솔창에 x값이 출력되어야함


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
