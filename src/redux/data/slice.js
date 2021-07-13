import { createSlice } from '@reduxjs/toolkit'
import {
  getFilms, getFilm, getSession,
  getDetailSession, booking, getCategory,
  getCinema, getSession_BaseFC, bookTicket, checkoutTicket, 
  getActor, getDirector, getUserInfo, editUserInfo, getUserBookingInfo
} from './actions'

export const initialState = {
  films: [],
  film: {},
  loading: false,
  error: "",
  session_baseFilm: [],
  session_baseFC: [],
  detailSession: {},
  categories: [],
  cinemas: [],
  booked_ticket: {},
  link_checkout: "",
  actor: {},
  director: {},
  userInfo:{},
  userBookingInfo: []
}

export const { reducer, actions } = createSlice({
  name: 'Data',
  initialState,

  reducers: { // để gọi action ko có api
    refeshTicket: (state, {payload}) =>{
      state.booked_ticket = {}
    }
  },

  extraReducers: { //gọi action có api
    [getFilms.fulfilled]: (state, { payload }) => {
      state.films = payload
      state.loading = false
    },
    [getFilms.pending]: state => {
      state.loading = true;
    },
    [getFilms.rejected]: (state, { payload }) => {
      state.error = payload
      state.loading = false
    },
    [getFilm.fulfilled]: (state, { payload }) => {
      state.film = payload
      state.loading = false
    },
    [getFilm.pending]: state => {
      state.loading = true;
    },
    [getFilm.rejected]: (state, { payload }) => {
      state.error = payload
      state.loading = false
    },
    [getSession.fulfilled]: (state, { payload }) => {
      state.session_baseFilm = payload
      state.loading = false
    },
    [getSession.pending]: state => {
      state.loading = true;
    },
    [getSession.rejected]: (state, { payload }) => {
      state.error = payload
      state.loading = false
    },
    [getDetailSession.fulfilled]: (state, { payload }) => {
      state.detailSession = payload
      console.log("detailss-slice: " + payload)
      state.loading = false
    },
    [getDetailSession.pending]: state => {
      state.loading = true;
    },
    [getDetailSession.rejected]: (state, { payload }) => {
      state.error = payload
      state.loading = false
    },
    [booking.fulfilled]: (state, { payload }) => {
      state.detailSession = payload
      state.loading = false
    },
    [booking.pending]: state => {
      state.loading = true;
    },
    [booking.rejected]: (state, { payload }) => {
      state.error = payload
      state.loading = false
    },
    [getCategory.fulfilled]: (state, { payload }) => {
      state.categories = payload.data
      state.loading = false
    },
    [getCategory.pending]: state => {
      state.loading = true;
    },
    [getCategory.rejected]: (state, { payload }) => {
      state.error = payload
      state.loading = false
    },
    [getCinema.fulfilled]: (state, { payload }) => {
      state.cinemas = payload
      state.loading = false
    },
    [getCinema.pending]: state => {
      state.loading = true;
    },
    [getCinema.rejected]: (state, { payload }) => {
      state.error = payload
      state.loading = false
    },

    [getSession_BaseFC.fulfilled]: (state, { payload }) => {
      const sessionsGroupByDate = payload[0]?.Sessions.reduce((sessionObject, currentSession) => {
        if (Array.isArray(sessionObject[currentSession.date])) {
          sessionObject[currentSession.date].push({
            id: currentSession.id,
            startTime: currentSession.startTime
          });
          return sessionObject;
        }

        sessionObject[currentSession.date] = [{
          id: currentSession.id,
          startTime: currentSession.startTime
        }];
        return sessionObject;
      }, {});

      state.session_baseFC = sessionsGroupByDate
      state.loading = false
    },
    [getSession_BaseFC.pending]: state => {
      state.loading = true;
    },
    [getSession_BaseFC.rejected]: (state, { payload }) => {
      state.error = payload
      state.loading = false
    },
    [bookTicket.fulfilled]: (state, { payload }) => {
      state.booked_ticket = payload.data
      state.loading = false
    },
    [bookTicket.pending]: state => {
      state.loading = true;
    },
    [bookTicket.rejected]: (state, { payload }) => {
      state.error = payload
      state.loading = false
    },
    [checkoutTicket.fulfilled]: (state, { payload }) => {
      state.link_checkout = payload.data
      state.loading = false
    },
    [checkoutTicket.pending]: state => {
      state.loading = true;
    },
    [checkoutTicket.rejected]: (state, { payload }) => {
      state.error = payload
      state.loading = false
    },
    [getActor.fulfilled]: (state, { payload }) => {
      state.actor = payload
      state.loading = false
    },
    [getActor.pending]: state => {
      state.loading = true;
    },
    [getActor.rejected]: (state, { payload }) => {
      state.error = payload
      state.loading = false
    },
    [getDirector.fulfilled]: (state, { payload }) => {
      state.director = payload
      state.loading = false
    },
    [getDirector.pending]: state => {
      state.loading = true;
    },
    [getDirector.rejected]: (state, { payload }) => {
      state.error = payload
      state.loading = false
    },
    [getUserInfo.fulfilled]: (state, { payload }) => {
      state.userInfo = payload
      state.loading = false
    },
    [getUserInfo.pending]: state => {
      state.loading = true;
    },
    [getUserInfo.rejected]: (state, { payload }) => {
      state.error = payload
      state.loading = false
    },
    [editUserInfo.fulfilled]: (state, { payload }) => {
      state.loading = false
      alert("Thay đổi thông tin thành công.")
    },
    [getUserBookingInfo.fulfilled]: (state, { payload }) => {
      state.userBookingInfo = payload
      state.loading = false
    },
    [getUserBookingInfo.pending]: state => {
      state.loading = true;
    },
    [getUserBookingInfo.rejected]: (state, { payload }) => {
      state.error = payload
      state.loading = false
    },
  }
})

export default reducer
