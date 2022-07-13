import { put, all, call, takeLatest } from "redux-saga/effects";
import * as actionTypes from "./actions";
import Cookies from "universal-cookie";

const cookies = new Cookies();

// 로그인
function* login(payload) {
  const getToken = (payload) => {
    // payload에 들어있는 아이디와 패스워드를 보내서 서버에서 검증을 받고 액세스 토큰을 얻음.
    if(payload.id && payload.pw){
      setTimeout(() => {
        return 'fake jwt accessToken';
      }, 1000);
    }
    return null;
  }
  try {
    const token = yield call(() => getToken(payload.payload));
    cookies.set("token", token);
    yield put(actionTypes.loginSuccess());
  } catch (err) {
    // alert("이메일 또는 비밀번호를 다시 한번 확인해주세요.");
    yield put(actionTypes.loginFailure(err));
  }
}

// 로그아웃
function* logout() {
  try {
    yield put(actionTypes.logoutSuccess());
    cookies.remove("token"); // 쿠키 제거
  } catch (err) {
    yield put(actionTypes.logoutFailure(err));
  }
}

export function* getLoginSaga() {
  yield all([takeLatest(actionTypes.LOGIN_REQUEST, login), takeLatest(actionTypes.LOGOUT_REQUEST, logout)]);
}