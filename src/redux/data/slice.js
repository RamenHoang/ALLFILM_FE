import { createSlice } from '@reduxjs/toolkit'
import {
  getFilms, getFilm, getSession,
  getDetailSession, booking, getCategory,
  getCinema, getSession_BaseFC, bookTicket, checkoutTicket,
  getActor, getDirector, getUserInfo, editUserInfo, getUserBookingInfo,
  postRating,
  searchFilm, getPromotion, getPromotions
} from './actions'
import { message, notification} from 'antd';

var hide = ()=>{}
const loadingMsg = (task) => {
  hide = message.loading(`Đang thực hiện ${task}.....`, 0);
}

const openSuccessMsg = (mess) => {
  const args = {
    message: 'Chúc mừng!!!',
    description: mess,
    duration: 5,
  };
  notification.success(args);
};

const openNotification = (mess) => {
  const args = {
    message: 'Đã xảy ra lỗi!!!',
    description: mess,
    duration: 5,
  };

  notification.warning(args);
};

const readError = (payload, callback) =>{
  if(payload?.response?.data?.error?.errors.length !== 0)
  payload?.response?.data?.error?.errors.forEach(element => {
    callback(element?.message)
  });
  else callback(payload?.message)
}

export const initialState = {
  films: [],
  film: {},
  listSearch: [],
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
  userInfo: {},
  userBookingInfo: [],
  promotions: [],
  promotion: {}
}

export const { reducer, actions } = createSlice({
  name: 'Data',
  initialState,

  reducers: {
    refeshTicket: (state, { payload }) => {
      state.booked_ticket = {}
    },
    clearSearchList: (state) =>{
      state.listSearch = []
    }
  },

  extraReducers: {
    [getFilms.fulfilled]: (state, { payload }) => {
      state.films = payload
    },
    [getFilms.rejected]: (state, { payload }) => {
      state.error = payload
    },

    [getFilm.fulfilled]: (state, { payload }) => {
      state.film = payload
    },
    [getFilm.rejected]: (state, { payload }) => {
      state.error = payload
    },

    [searchFilm.pending]: (state, { payload }) => {
      hide()
      loadingMsg("tìm kiếm")
    },
    [searchFilm.fulfilled]: (state, { payload }) => {
      hide()
      state.listSearch = payload
    },
    [searchFilm.rejected]: (state, { payload }) => {
      hide()
      readError(payload, openNotification)
    },

    [getSession.fulfilled]: (state, { payload }) => {
      state.session_baseFilm = payload
    },
    [getSession.rejected]: (state, { payload }) => {
      state.error = payload
    },

    [getDetailSession.fulfilled]: (state, { payload }) => {
      state.detailSession = payload
    },
    [getDetailSession.rejected]: (state, { payload }) => {
      state.error = payload
    },

    [booking.fulfilled]: (state, { payload }) => {
      state.detailSession = payload
      hide()
    },
    [booking.pending]: state => {
      loadingMsg("đặt vé")
    },
    [booking.rejected]: (state, { payload }) => {
      state.error = payload
      readError(payload, openNotification)
      hide()
    },

    [getCategory.fulfilled]: (state, { payload }) => {
      state.categories = payload.data
    },
    [getCategory.rejected]: (state, { payload }) => {
      state.error = payload
    },

    [getCinema.fulfilled]: (state, { payload }) => {
      state.cinemas = payload
    },
    [getCinema.rejected]: (state, { payload }) => {
      state.error = payload
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
      hide()
    },
    [getSession_BaseFC.pending]: state => {
      loadingMsg("lấy thông tin suất chiếu")
    },
    [getSession_BaseFC.rejected]: (state, { payload }) => {
      state.error = payload
      hide()
    },

    [bookTicket.fulfilled]: (state, { payload }) => {
      state.booked_ticket = payload.data
      hide()
    },
    [bookTicket.pending]: state => {
      loadingMsg("lấy thông tin vé")
    },
    [bookTicket.rejected]: (state, { payload }) => {
      state.error = payload
      hide()
      readError(payload, openNotification)
    },

    [checkoutTicket.fulfilled]: (state, { payload }) => {
      state.link_checkout = payload.data
      hide()
    },
    [checkoutTicket.pending]: state => {
      loadingMsg("lấy vé")
    },
    [checkoutTicket.rejected]: (state, { payload }) => {
      state.error = payload
      hide()
    },

    [getActor.fulfilled]: (state, { payload }) => {
      state.actor = payload
      hide()
    },
    [getActor.pending]: state => {
      loadingMsg("lấy thông tin diễn viên")
    },
    [getActor.rejected]: (state, { payload }) => {
      state.error = payload
      hide()
    },

    [getDirector.fulfilled]: (state, { payload }) => {
      state.director = payload
      hide()
    },
    [getDirector.pending]: state => {
      loadingMsg("lấy thông tin đạo diễn")
    },
    [getDirector.rejected]: (state, { payload }) => {
      state.error = payload
      hide()
    },

    [getUserInfo.fulfilled]: (state, { payload }) => {
      state.userInfo = payload
    },
    [getUserInfo.rejected]: (state, { payload }) => {
      state.error = payload
    },

    [editUserInfo.fulfilled]: (state, { payload }) => {
      hide()
      openSuccessMsg("Thay đổi thông tin người dùng thành công.")
    },
    [editUserInfo.pending]: state => {
      loadingMsg("thay đổi thông tin người dùng")
    },
    [editUserInfo.rejected]: (state, { payload }) => {
      hide()
      readError(payload, openNotification)
      state.error = payload
    },

    [getUserBookingInfo.fulfilled]: (state, { payload }) => {      
      hide()
      if(payload.length === 0){
        openNotification("Không có giao dịch nào được thực hiện trong khoảng thời gian bạn tìm kiếm.")
      }
      else{
        state.userBookingInfo = payload
      }
    },
    [getUserBookingInfo.pending]: state => {
      loadingMsg("lấy thông tin vé đã mua")
    },
    [getUserBookingInfo.rejected]: (state, { payload }) => {
      hide()
      readError(payload, openNotification)      
      state.error = payload
    },
    
    [postRating.fulfilled]: (state, { payload }) => {
      hide()
      openSuccessMsg("Đánh giá của bạn đã được hệ thống ghi nhận.")
    },
    [postRating.pending]: state => {
      loadingMsg("đánh giá phim")
    },
    [postRating.rejected]: (state, { payload }) => {
      hide()
      readError(payload, openNotification)      
      state.error = payload
    },

    [getPromotion.fulfilled]: (state, { payload }) => {
      state.promotion = payload
      hide()
    },
    [getPromotion.pending]: state => {
      loadingMsg("lấy thông tin chi tiết khuyến mãi")
    },
    [getPromotion.rejected]: (state, { payload }) => {
      state.error = payload
      hide()
    },

    [getPromotions.fulfilled]: (state, { payload }) => {
      state.promotions = payload
    },
    [getPromotions.rejected]: (state, { payload }) => {
      state.error = payload
    },
  }
})

export default reducer
