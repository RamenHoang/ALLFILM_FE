import React, { useEffect } from 'react';
import { BookSSWrapper } from './styles';
import {
  Input,
  Button,
  Divider,
} from 'antd';

import { useDispatch, useSelector } from 'react-redux';
import { getFilms, checkoutTicket } from '../../redux/data/actions';
import { Link } from "react-router-dom";

const BookSS = () => {
  const dispatch = useDispatch();
  const listFilms = useSelector(state => state.data.films)
  const booked_ticket = useSelector(state => state.data.booked_ticket)
  const token = useSelector(state => state.token.token);

  useEffect(() => {
    dispatch(getFilms());
  });

  const onClickRegister = () => { };

  const checkout = () => {
    let params = {
      id: booked_ticket.id,
      headers: {
        'Authorization': `Bearer ${token.access_token}`
      }
    }
    dispatch(checkoutTicket(params))
  }

  return (
    <BookSSWrapper>
      <div className="content-event">
        <div className="content-section">
          {Object.values(booked_ticket).length !== 0 ?
            <div className="content">
              <h2>Thông tin đã được lưu, vui lòng thanh toán trong vòng 15 phút.</h2>
              <h1>{booked_ticket.Session?.Film.name}</h1>
              <h1 className="subName">{booked_ticket.Session?.Film.subName}</h1>
              <Divider></Divider>
              <div className="overall">
                <div>
                  <p>Thời gian đặt vé</p>
                  <h3>{booked_ticket?.bookingTime}</h3>
                </div>
                <div>
                  <p>Thời gian bắt đầu</p>
                  <h3>{booked_ticket?.Session?.startTime}</h3>
                </div>
                <div>
                  <p>Tên rạp phim</p>
                  <h3>{booked_ticket?.Session?.Cinema?.name}</h3>
                </div>
                <div>
                  <p>Địa chỉ</p>
                  <h3>{booked_ticket?.Session?.Cinema?.address}</h3>
                </div>
                <div>
                  <p>Phòng chiếu</p>
                  <h3>{booked_ticket?.Session?.Room?.name}</h3>
                </div>
                <div>
                  <p>Tổng tiền</p>
                  <h3>{booked_ticket?.fee}</h3>
                </div>
                <div>
                  <p>Vị trí vé</p>
                  <h3>{booked_ticket?.seats}</h3>
                </div>
                <div>
                  <p>Ngày phát hành</p>
                  <h3>{booked_ticket?.Session?.startTime}</h3>
                </div>
              </div>
              <Button onClick={checkout}>THANH TOÁN </Button>
            </div>
            : <div className="content">
              <h2>Vui lòng chờ vài giây để xem kết quả.</h2>
              <h2>Nếu trong vòng 10 giây vẫn chưa thấy kết quả, vui lòng kiểm tra lại kết nối internet và đặt lại lần nữa.</h2>
            </div>
          }
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
            <Link to={`/details/${data.id}`}>
              <div key={`movie-ss-${index}`}>
                <img className="img" src={data.image} alt=""></img>
                <h3>{data.title}</h3>
                <h3 className="sub-title">{data.subTitle}</h3>
              </div>
            </Link>
          ))}
          <div className="load-more">
            <Button>XEM THÊM</Button>
          </div>
        </div>
      </div>

    </BookSSWrapper >
  );
};

export default BookSS;
