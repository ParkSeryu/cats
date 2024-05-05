import React from 'react';
import logo from './logo.svg';
import './App.css';

class Car{
  model;
  price;
  constructor(a:string, b:number){
    this.model = a;
    this.price = b;
  }

  tax = () => {
    return this.price / 10
  }
}

class Word{
  num:number[] = [];
  str:string[] = [];

  constructor(...x : (number | string)[]){
    x.map(ele => {
      if(typeof ele === 'number'){
        this.num.push(ele)
      }else{
        this.str.push(ele)
      }
    })
  }

}

let obj = new Word('kim', 3, 5, 'park');
console.log(obj.num) //[3,5]
console.log(obj.str) //['kim', 'park']

let car1 = new Car('소나타', 3000)
console.log(car1) //콘솔창 출력결과는 { model : '소나타', price : 3000 }
console.log(car1.tax()) //콘솔창 출력결과는 300


function App() {

  class Person {
    data = 0;
  }

  let 사람1 = new Person();
  let 사람2 = new Person();



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
