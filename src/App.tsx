import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {


  const 클리닝함수 = (x: (number | string)[]) => {

    const returnArray: number[] = [];
    
    x.map((ele) => {
      if(typeof ele === 'number')
        {
          returnArray.push(ele)
        }else{
          returnArray.push(parseInt(ele))
        }
    })

  }


  const 만들함수 = ( x : {subject : string[] | string}) => {
    if(typeof x.subject === 'string'){
      return x.subject;
    }else{
      return x.subject[0];
    }
  }


console.log(만들함수( { subject : 'math' }))  //이 경우 'math'를 return
console.log(만들함수( { subject : ['science', 'art', 'korean'] })) //이 경우 'korean'을 return
// console.log(만들함수( { hello : 'hi' } ))  //이 경우 타입에러 나면 됩니다 

  let array : number [] = [];




    
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
