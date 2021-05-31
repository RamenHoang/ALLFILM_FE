import {createSlice} from '@reduxjs/toolkit'
import {login} from './actions'

export const initialState = {
  token: {},
  loading: false,
  error: ""
}

export const {reducer, actions} = createSlice({
  name: 'Login',
  initialState,

  reducers: { // để gọi action ko có api
    logout: (state, {payload}) => {
      localStorage.removeItem("allFilms-token");
      state.token = {}
    },
    setToken: (state, {payload}) => {
      state.token = payload
    },
  },

  extraReducers: { //gọi action có api
    [login.fulfilled]: (state, {payload}) => {
      state.token = payload
      state.loading = false
      if(document.getElementById("normal_login")?.remember?.checked) {
        localStorage.setItem("allFilms-token", JSON.stringify(payload));
      }
    },
    [login.pending]: state => {
      state.loading = true;
    },
    [login.rejected]: (state, {payload}) => {
      state.error = payload
      state.loading = false
    },
  },
})

export default reducer
