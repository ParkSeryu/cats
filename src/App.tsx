import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const 함수 = (이름?:string) : void => {
    if(이름){
      console.log('안녕하세요 홍길동')
    }else{
      console.log('이름이 없습니다.')
    }
  }

  const 함수2 = (param: string | number) :number => {    
    return param.toString().length
  }

  const 함수3 = (월소득:number, 집보유여부:boolean, 매력점수:string): string | void => {
    let 점수 = Math.trunc(월소득 / 10000);

    if(집보유여부) 점수 += 500;

    if(매력점수 === '상') 점수 += 100;

    if(점수 >= 600)
      return "결혼가능"



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
