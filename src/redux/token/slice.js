import {createSlice} from '@reduxjs/toolkit'
import {login} from './actions'

export const initialState = {
  token: localStorage.getItem("allFilms-token")|| {},
  loading: false,
  error: ""
}

export const {reducer, actions} = createSlice({
  name: 'Login',
  initialState,

  reducers: { // để gọi action ko có api
    logout: (state, {payload}) => {
      state.token= {}
    },
  },

  extraReducers: { //gọi action có api
    [login.fulfilled]: (state, {payload}) => {
      state.token = payload
      state.loading = false
      if(document.getElementById("normal_login")?.remember?.checked) {
        localStorage.setItem("allFilms-token", payload);
        console.log(payload)
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
