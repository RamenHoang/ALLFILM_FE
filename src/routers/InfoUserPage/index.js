import React, { useEffect } from 'react';
import { DetailsWrapper } from './styles';
import {
  Breadcrumb,
  Tabs,
  Image
} from 'antd';

import { useDispatch, useSelector } from 'react-redux';
import { getFilms, getUserInfo, editUserInfo, getUserBookingInfo, requestCancelBooking, checkoutTicket } from '../../redux/data/actions';
import { Link } from 'react-router-dom';

const InfoUser = () => {
  const { TabPane } = Tabs
  const dispatch = useDispatch()
  const token = useSelector(state => state.token.token)
  const userInfo = useSelector(state => state.data.userInfo)
  const listFilms = useSelector(state => state.data.films)
  const bookingInfo = useSelector(state => state.data.userBookingInfo)
  const bookingRequestedRefund = useSelector(state => state.data.bookingRequestedRefund)

  let params = {
    headers: {
      'Authorization': `Bearer ${token.access_token}`
    }
  }

  useEffect(() => {
    dispatch(getUserInfo(params));
    dispatch(getFilms());
  }, []);

  const changeInfo = () => {
    let params = {
      headers: {
        'Authorization': `Bearer ${token.access_token}`
      },
      data: {
        name: document.getElementsByName("username")[0].value,
        fullname: document.getElementsByName("fullname")[0].value,
        phone: document.getElementsByName("phone")[0].value,
        email: document.getElementsByName("email")[0].value,
      }
    }

    dispatch(editUserInfo(params));
    dispatch(getUserInfo(params));
  }

  const getBookingInfo = () => {
    let from = document.getElementsByName("from")[0].value
    let to = document.getElementsByName("to")[0].value

    if (from && to) {
      let params = {
        headers: {
          'accept': 'application/json',
          'Authorization': `Bearer ${token.access_token}`
        },
        data: {
          fromDate: from,
          toDate: to
        }
      }
      dispatch(getUserBookingInfo(params));
    }
    else {
      alert("Vui lòng chọn thời gian!!!")
    }
  }

  const requestCancelBookingHandler = (e) => {
    const self = e.target;

    let params = {
      headers: {
        'accept': 'application/json',
        'Authorization': `Bearer ${token.access_token}`
      },
      bookingId: self.getAttribute('data-booking-id'),
    };

    dispatch(requestCancelBooking(params));
  }

  const checkout = (e) => {
    let params = {
      id: e.target.getAttribute('data-booking-id'),
      headers: {
        'Authorization': `Bearer ${token.access_token}`
      }
    }
    dispatch(checkoutTicket(params))
  }

  return (
    <DetailsWrapper>
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link to="/">Trang chủ</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to="/">Thành viên</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Cá nhân</Breadcrumb.Item>
      </Breadcrumb>

      <Tabs defaultActiveKey="1">
        <TabPane tab="THÔNG TIN THÀNH VIÊN" className="flex" key="6">
          <div className="content-section">
            <div className="content">
              <h3>THÔNG TIN CÁ NHÂN</h3>
              <div className="overall">
                <div>
                  <p>Họ và tên</p>
                  <h3>{userInfo.fullname}</h3>
                </div>
                <div>
                  <p>Tên tài khoản</p>
                  <h3>{userInfo.username}</h3>
                </div>
                <div>
                  <p>Số điện thoại</p>
                  <h3>{userInfo.phone}</h3>
                </div>
                <div>
                  <p>Email</p>
                  <h3>{userInfo.email}</h3>
                </div>
              </div>
            </div>
          </div>
        </TabPane>

        <TabPane tab="GIAO DỊCH CÁ NHÂN" className="flex" key="7">
          <div className="content-section">
            <div className="content">
              <h3>GIAO DỊCH CỦA TÔI</h3>
              <div className="overall">
                <div>
                  <p>Từ</p>
                  <input name="from" type="date"></input>
                </div>
                <div>
                  <p>Đến</p>
                  <input name="to" type="date"></input>
                </div>
                <span className="btn change" onClick={getBookingInfo}>
                  Lấy thông tin
                </span>
              </div>
            </div>

            <table>
              <tr>
                <th width="100px">Mã số vé</th>
                <th>Xuất chiếu</th>
                <th>Rạp</th>
                <th>Phim</th>
                <th>Ghế</th>
                <th>Đồ ăn/ Thức uống</th>
                <th>Tổng tiền (VNĐ)</th>
                <th></th>
              </tr>

              {bookingInfo.map((data, index) => (
                <tr key={`bookinfo-${index}`} className='recovery-booking-table-row' data-booking-id={data.id}>
                  <td>{data?.id}</td>
                  <td>{data?.Session?.startTime}</td>
                  <td>{data?.Session?.Cinema?.address}</td>
                  <td className='recovery-booking-film-image-and-name-container'>
                    <Image
                      src={data?.Session?.Film?.poster}
                      alt={data?.Session?.Film?.name}
                      className='recovery-booking-film-image'
                    />
                    <p className='recovery-booking-film-name'>{data?.Session?.Film?.name}</p>
                  </td>
                  <td>{data?.seats}</td>
                  <td>
                    <ul>
                    {data?.FoodDrinks.map(foodDrink => <li>{foodDrink?.name} x {foodDrink?.BookFoodDrink.count}</li>)}
                    </ul>
                  </td>
                  <td>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(data.fee)}</td>
                  <td>
                    {(() => {
                      if (data?.BookingPayments[data?.BookingPayments.length - 1]?.status === 'O') {
                        return (
                          <span className="btn change" data-booking-id={data.id} onClick={checkout}>
                            Thanh toán
                          </span>
                        );
                      }

                      if (data?.BookingPayments[data?.BookingPayments.length - 1]?.status === 'P') {
                        if (bookingRequestedRefund && Object.keys(bookingRequestedRefund).length === 0 && data?.canCancel) {
                          return (
                            <span className="btn change" data-booking-id={data.id} onClick={requestCancelBookingHandler}>
                              Hủy vé
                            </span>
                          );
                        }

                        if (bookingRequestedRefund && Object.keys(bookingRequestedRefund).length && data?.canCancel) {
                          return (
                            <span className="btn-info btn-cursor-default">
                              Chờ hủy vé
                            </span>
                          );
                        }

                        if (!data?.canCancel) {
                          return (
                            <span className="btn-success btn-cursor-default">
                              Đã thanh toán
                            </span>
                          );
                        }

                        return '';
                      }

                      if (data?.BookingPayments[data?.BookingPayments.length - 1]?.status === 'R') {
                        if (!data?.canCancel) {
                          return (
                            <span className="btn-success btn-cursor-default">
                              Đã thanh toán
                            </span>
                          );
                        }

                        return (
                          <span className="btn-info btn-cursor-default">
                            Chờ hủy vé
                          </span>
                        );
                      }

                      if (data?.BookingPayments[data?.BookingPayments.length - 1]?.status === 'S') {
                        return (
                          <span className="btn-primary btn-cursor-default">
                            Đã hủy vé
                          </span>
                        );
                      }
                    })()}
                  </td>
                </tr>
              ))}
            </table>
          </div>
        </TabPane>

        <TabPane tab="THAY ĐỔI THÔNG TIN" className="flex" key="8">
          <div className="content-section">
            <div className="content">
              <h3>THÔNG TIN CÁ NHÂN</h3>
              <div className="overall">
                <div>
                  <p>Họ và tên</p>
                  <input name="fullname" defaultValue={userInfo.fullname}></input>
                </div>
                <div>
                  <p>Tên tài khoản</p>
                  <input name="username" defaultValue={userInfo.username} ></input>
                </div>
                <div>
                  <p>Số điện thoại</p>
                  <input name="phone" defaultValue={userInfo.phone}></input>
                </div>
                <div>
                  <p>Email</p>
                  <input name="email" defaultValue={userInfo.email}></input>
                </div>

                <span className="btn change" onClick={changeInfo}>
                  Thay đổi
                </span>

              </div>
            </div>
          </div>
        </TabPane>
      </Tabs>

      <div className="tabs" id="#phim">
        <Link to="/">PHIM ĐANG CHIẾU</Link>
      </div>

      <div className="list_films flex upper">
        {listFilms.map((data, index) => (
          <div className="film" key={`film-4-${index}`}>
            <Link to={`/details/${data.id}`}>
              <div className="img_film">
                <img src={data.image} alt="phim"></img>
              </div>
              <div className="button"></div>
              <p>{data.title}</p>
              <p className="vn">{data.subTitle}</p>
            </Link>
          </div>
        ))}
      </div>
    </DetailsWrapper>
  );
};

export default InfoUser;
