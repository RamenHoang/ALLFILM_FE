import { createSlice } from '@reduxjs/toolkit'
import { login } from './actions'

export const initialState = {
  token: localStorage.getItem("allFilms-token") ? JSON.parse(localStorage.getItem("allFilms-token")) : {},
  username: localStorage.getItem("allFilms-username") ? JSON.parse(localStorage.getItem("allFilms-username")) : "",
  loading: false,
  error: ""
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
      state.token = payload.token
      state.username = payload.username
      state.loading = false
      if (document.getElementById("normal_login")?.remember?.checked) {
        localStorage.setItem("allFilms-token", JSON.stringify(payload.token))
        localStorage.setItem("allFilms-username", JSON.stringify(payload.username))
      }
    },
    [login.pending]: state => {
      state.loading = true;
    },
    [login.rejected]: (state, { payload }) => {
      state.error = payload
      state.loading = false
    },
  },
})

export default reducer
