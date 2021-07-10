import React, { useEffect } from 'react';
import { DetailsWrapper } from './styles';
import {
  Breadcrumb,
  Tabs
} from 'antd';

import { useDispatch, useSelector } from 'react-redux';
import { getFilms, getUserInfo, editUserInfo, getUserBookingInfo } from '../../redux/data/actions';
import { Link } from 'react-router-dom';

const InfoUser = () => {
  const { TabPane } = Tabs
  const dispatch = useDispatch()
  const token = useSelector(state => state.token.token)
  const userInfo = useSelector(state => state.data.userInfo)
  const listFilms = useSelector(state => state.data.films)
  const bookingInfo = useSelector(state => state.data.userBookingInfo)

  let params = {
    headers: {
      'Authorization': `Bearer ${token.access_token}`
    }
  }

  useEffect(() => {
    dispatch(getFilms());
    dispatch(getUserInfo(params));
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
      console.log(JSON.stringify(bookingInfo))
    }
    else {
      alert("Vui lòng chọn thời gian!!!")
    }
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
        <TabPane tab="THÔNG TIN THÀNH VIÊN" key="1" className="flex">
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

        <TabPane tab="GIAO DỊCH CÁ NHÂN" key="2" className="flex">
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
          </div>

        </TabPane>

        <TabPane tab="THAY ĐỔI THÔNG TIN" key="3" className="flex">
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
        <a href="">PHIM ĐANG CHIẾU</a>
      </div>

      <div className="list_films flex upper">
        {listFilms.map((data, index) => (
          <div className="film" key={`film-${index}`}>
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
