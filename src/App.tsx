import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  type 함수타입 = (a: string) => number;

  let 함수:함수타입 = function () {
    return 10;
  }

  type 숙제1 = {
    name : string,
    age: number,
    plusOne(x : number) : number,
    changeName : () => void
  }

  let 회원정보 : 숙제1 = {
    name : 'kim',
    age: 30,
    plusOne(a : number) : number {
      return a + 1
    },
    changeName: () => {
      console.log('안녕')
    }
  }
  
  회원정보.plusOne(2);

  
  type CutZeroType = (x:string) => string;

  const cutZero : CutZeroType = (x) => {
    if(x.charAt(0) === '0'){
      x = x.slice(1, x.length);
    }

    return x;
  }

  type ZeroDashType = (x: string) =>  number;

  const removeDash: ZeroDashType = (x) => {
    if(x.includes('-')){
      x = x.replaceAll('-','');
    }
    return parseInt(x);
  }

  const 만들함수 = (t1:string, t2:CutZeroType, t3:ZeroDashType) => {
    console.log(t3(t2(t1)));
  }

  만들함수('010-1111-2222', cutZero, removeDash)



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
