import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  
  let [변수1, 변수2] = ['안녕', 100]
  console.log(변수1);

  let {student, age} = {student : true, age:20}

  function 함수({student, age} : {student: boolean, age: number}){
    console.log(student, age);
  }

  함수({student, age});

  const h1 = (...x: number[]) => {
    let a = x.sort();
    console.log(a[a.length - 1]);
    // console.log(a[a.length - 1]);
  }

  h1(6,3,7,2);

  const h2 = ({user, comment, admin} : {user:string, comment:number[], admin:boolean}) => {
    console.log(user);
    console.log(...comment);
    console.log(admin);
  }

  h2({user: 'kim', comment: [3, 5, 4], admin: false});


  
  const 함수1 = ([a, b, c]: (number | string | boolean)[]) => {
    console.log(a, b, c);
  }
  
  
  함수1([40, 'wine', false]);


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
