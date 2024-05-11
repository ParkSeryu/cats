import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Car} from './App';
import {Bike} from './App';
import {숙제} from './App';
namespace 네임스페이스 {
  export type Name = string | number;
}

let 문법 : 네임스페이스.Name

let a : Car;
let b : Bike;
숙제({a : 'a'});

namespace 네임스페이스2 {
  export type Dog1 = string;
  export interface Dog2 { name : string };
}
let dog1 :네임스페이스2.Dog1 = 'bark';
let dog2 :네임스페이스2.Dog2 = { name : 'paw' }

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
