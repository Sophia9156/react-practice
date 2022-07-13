import { combineReducers } from 'redux';
import counter, { counterSaga } from './counter2';
import login, { getLoginSaga } from './Login';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({ 
  counter,
  login 
});

export function* rootSaga() {
  yield all([
    counterSaga(),
    getLoginSaga()
  ]); // all은 배열 안의 여러 사가를 동시에 실행시켜줍니다.
}

export default rootReducer;