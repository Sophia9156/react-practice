import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import rootReducer, { rootSaga } from './modules';
import logger from 'redux-logger';
import createSagaMiddleware from '@redux-saga/core';
import { configureStore } from '@reduxjs/toolkit';

const sagaMiddleware = createSagaMiddleware(); // 사가 미들웨어를 만듭니다.

const store = configureStore({
  reducer: rootReducer, 
  middleware: [sagaMiddleware, logger]
});
// logger를 사용하는 경우, logger가 가장 마지막에 와야합니다.

sagaMiddleware.run(rootSaga); // 루트 사가를 실행해줍니다.
// 주의: 스토어 생성이 된 다음에 위 코드를 실행해야 합니다.

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
