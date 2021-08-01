import { createSlice } from '@reduxjs/toolkit'
import { login } from './actions'
import { register } from './actions'
import { notification, message} from 'antd';

export const initialState = {
  token: localStorage.getItem("allFilms-token") ? JSON.parse(localStorage.getItem("allFilms-token")) : {},
  username: localStorage.getItem("allFilms-username") ? JSON.parse(localStorage.getItem("allFilms-username")) : "",
}

var hide;

const loadingMsg = (task) => {
  hide = message.loading(`Đang thực hiện ${task}.....`, "topRight", 0);
}

const openNotification = (mess) => {
  const args = {
    message: 'Thông tin không hợp lệ!!!',
    description: mess,
    duration: 3,
  };

  notification.warning(args);
};

const openRegisterSuccessMsg = (mess) => {
  const args = {
    message: 'Đăng kí thành công!!!',
    description: mess,
    duration: 4,
  };

  notification.success(args);
};

const openLoginSuccessMsg = (mess) => {
  const args = {
    message: 'Đăng nhập thành công.',
    description: `Chào mừng ${mess} đến với AllFilms. Chúc ${mess} một ngày tốt lành!!!`,
    duration: 3,
  };

  notification.success(args);
};

const readError = (payload, callback) =>{
  if(payload?.response?.data?.error?.errors.length !== 0)
  payload?.response?.data?.error?.errors.forEach(element => {
    callback(element?.message)
  });
  else callback(payload?.message)
}

export const { reducer, actions } = createSlice({
  name: 'Login',
  initialState,

  reducers: { // để gọi action ko có api
    logout: (state, { payload }) => {
      localStorage.removeItem("allFilms-token")
      localStorage.removeItem("allFilms-username")
      state.token = {}
      state.username = ""
    },
    setToken: (state, { payload }) => {
      state.token = payload
    },
    setUsername: (state, { payload }) => {
      state.username = payload
    }
  },

  extraReducers: { //gọi action có api
    [login.fulfilled]: (state, { payload }) => {
      hide()
      openLoginSuccessMsg(payload.username)

      state.token = payload.token
      state.username = payload.username

      if (document.getElementById("normal_login")?.remember?.checked) {
        localStorage.setItem("allFilms-token", JSON.stringify(payload.token))
        localStorage.setItem("allFilms-username", JSON.stringify(payload.username))
      }
    },
    [login.pending]: state => {
      loadingMsg("đăng nhập")
    },
    [login.rejected]: (state, { payload }) => {
      state.loading = false
      hide()
      readError(payload, openNotification)
    },
    [register.fulfilled]: (state, { payload }) => {
      hide()
      openRegisterSuccessMsg(payload.data)
    },
    [register.pending]: state => {
      loadingMsg("đăng ký")
    },
    [register.rejected]: (state, { payload }) => {
      hide()
      readError(payload, openNotification)
    },
  },
})

export default reducer
