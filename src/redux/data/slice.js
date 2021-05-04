import {createSlice} from '@reduxjs/toolkit'
import {getFilms, getFilm} from './actions'

export const initialState = {
  films: [],
  film: {},
  loading: false,
  error: ""
}

export const {reducer, actions} = createSlice({
  name: 'Data',
  initialState,

  reducers: { // để gọi action ko có api
    // logout: (state, {payload}) => {
    //   state.token= {}
    // },
  },

  extraReducers: { //gọi action có api
    [getFilms.fulfilled]: (state, {payload}) => {
      state.films = payload
      console.log(payload)
      state.loading = false
    },
    [getFilms.pending]: state => {
      state.loading = true;
    },
    [getFilms.rejected]: (state, {payload}) => {
      state.error = payload
      state.loading = false
    },
    [getFilm.fulfilled]: (state, {payload}) => {
      state.film = payload
      console.log(payload)
      state.loading = false
    },
    [getFilm.pending]: state => {
      state.loading = true;
    },
    [getFilm.rejected]: (state, {payload}) => {
      state.error = payload
      state.loading = false
    }
  }
})

export default reducer
