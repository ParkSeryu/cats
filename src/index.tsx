import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

interface Counter {
  count : number
}

const 초기값 : Counter = { count : 0 };

const reducer = (state = 초기값, action : any) => {
  if (action.type === '증가'){
    return { count : state.count + 1 }
  } else if (action.type === '감소'){
    return { count : state.count - 1}
  } else {
    return 초기값;
  }
}

const store = createStore(reducer);

// store의 타입 미리 export 해두기
export type RootState = ReturnType<typeof store.getState>

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
