import {createSlice} from '@reduxjs/toolkit'
import {getFilms, getFilm, getSession, getDetailSession, booking, getCategory} from './actions'

export const initialState = {
  films: [],
  film: {},
  loading: false,
  error: "",
  session: [],
  detailSession: {},
  categories: []
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
      state.loading = false
    },
    [getFilm.pending]: state => {
      state.loading = true;
    },
    [getFilm.rejected]: (state, {payload}) => {
      state.error = payload
      state.loading = false
    },
    [getSession.fulfilled]: (state, {payload}) => {
      state.session = payload
      state.loading = false
    },
    [getSession.pending]: state => {
      state.loading = true;
    },
    [getSession.rejected]: (state, {payload}) => {
      state.error = payload
      state.loading = false
    },
    [getDetailSession.fulfilled]: (state, {payload}) => {
      state.detailSession = payload
      console.log("detailss-slice: "+ payload)
      state.loading = false
    },
    [getDetailSession.pending]: state => {
      state.loading = true;
    },
    [getDetailSession.rejected]: (state, {payload}) => {
      state.error = payload
      state.loading = false
    },
    [booking.fulfilled]: (state, {payload}) => {
      state.detailSession = payload
      state.loading = false
    },
    [booking.pending]: state => {
      state.loading = true;
    },
    [booking.rejected]: (state, {payload}) => {
      state.error = payload
      state.loading = false
    },
    [getCategory.fulfilled]: (state, {payload}) => {
      state.categories = payload.data
      state.loading = false
    },
    [getCategory.pending]: state => {
      state.loading = true;
    },
    [getCategory.rejected]: (state, {payload}) => {
      state.error = payload
      state.loading = false
    }
  }
})

export default reducer
