import React from 'react';
import logo from './logo.svg';
import './App.css';

interface Square { color : string, width : number}

interface Student{
  name : string
}

interface Teacher extends Student{
  age : number
}



interface Shop {
  brand: string,
  serialNumber: number,
  model : string[]
}


function App() {

  interface Homework2{  
      product: string,
      price: number
  }

  interface Homework3 extends Homework2{
    card: boolean
  }
  interface Homework4{

    plus : (a:number, b:number) => number;

    minus : (a:number, b:number) => number;

  }

  let h4:Homework4 = {
    plus : (a, b) => {
      return a + b;
    },
    minus : (a, b) => {
      return a - b;
    }
  }

  console.log(h4.plus(1, 2));
  console.log(h4.minus(1, 2));

  let 상품:Shop = {brand : 'Samsung', serialNumber: 1360, model: ['TV', 'phone']};

  let 장바구니:Homework2[] = [ { product : '청소기', price : 7000 }, { product : '삼다수', price : 800 } ] 



  let 학생 : Student = {name : 'kim'};
  let 선생 : Teacher =  {name : 'kim', age : 20};

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
