import React, { useState, useEffect } from 'react';
import { BookSSWrapper, ModalWrapper } from './styles';
import {
  Input,
  Button,
  Divider,
} from 'antd';

import { useDispatch, useSelector } from 'react-redux';
import { getFilms } from '../../redux/data/actions';

const BookSS = () => {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.data.booked_ticket)

  useEffect(() => {
    dispatch(getFilms());
  }, []);

  const listFilms = useSelector(state => state.data.films)
  const booked_ticket = useSelector(state => state.data.booked_ticket)
  console.log("booked ticket: " + JSON.stringify(booked_ticket))
  const onClickRegister = () => { };

  return (
    <BookSSWrapper>
      {!booked_ticket && <div>A problem have orcured when booking ticket</div>}
      {booked_ticket &&
        <div className="content-event">
          <div className="content-section">
            <div className="content">
              <h2>Thông tin đã được lưu, vui lòng thanh toán trong vòng 15 phút.</h2>
              <h1>{booked_ticket.Session?.Film.name}</h1>
              <h1 className="subName">{booked_ticket.Session?.Film.subName}</h1>
              <Divider></Divider>
              <div className="overall">
                <div>
                  <p>Thời gian đặt vé</p>
                  <h3>{booked_ticket.bookingTime}</h3>
                </div>
                <div>
                  <p>Thời gian bắt đầu</p>
                  <h3>{booked_ticket.Session.startTime}</h3>
                </div>
                <div>
                  <p>Tên rạp phim</p>
                  <h3>{booked_ticket.Session?.Cinema.name}</h3>
                </div>
                <div>
                  <p>Địa chỉ</p>
                  <h3>{booked_ticket.Session?.Cinema.address}</h3>
                </div>
                <div>
                  <p>Phòng chiếu</p>
                  <h3>{booked_ticket.Session?.Room.name}</h3>
                </div>
                <div>
                  <p>Tổng tiền</p>
                  <h3>{booked_ticket.fee}</h3>
                </div>
                <div>
                  <p>Vị trí vé</p>
                  <h3>{booked_ticket.seats}</h3>
                </div>
                <div>
                  <p>Ngày phát hành</p>
                  <h3>{booked_ticket.Session.startTime}</h3>
                </div>
              </div>
              
              <Button>THANH TOÁN </Button>
            </div>
          </div>
          <div className="event-section">
            <h1>NHẬN KHUYẾN MÃI</h1>
            <Divider />
            <div className="email">
              <Input placeholder="Email" />
              <Button onClick={onClickRegister}>ĐĂNG KÝ</Button>
            </div>
            <h1>PHIM ĐANG CHIẾU</h1>
            <Divider />
            {listFilms.map((data, index) => (
              <div key={`movie1-${index}`}>
                <img className="img" src={data.image} alt=""></img>
                <h3>{data.title}</h3>
                <h3 className="sub-title">{data.subTitle}</h3>
              </div>
            ))}
            <div className="load-more">
              <Button>XEM THÊM</Button>
            </div>
          </div>
        </div>
      }

    </BookSSWrapper >
  );
};

export default BookSS;
