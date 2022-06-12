import React, { useEffect } from 'react';
import { RightPanelWrapper } from './styles';
import {
  Input,
  Button,
  Divider,
  notification
} from 'antd';

import { useDispatch, useSelector } from 'react-redux';
import { getFilms, postPromotion } from '../../redux/data/actions';
import { Link } from "react-router-dom";

const NUMBER_OF_FILMS_IN_RIGHT_SIDE_BAR = 3;

const RightPanel = () => {
  const dispatch = useDispatch();
  const listFilms = useSelector(state => state.data.films)

  useEffect(() => {
    dispatch(getFilms());
  },[]);

  
  const openNotification = (mess) => {
    const args = {
      message: 'Đã xảy ra lỗi!!!',
      description: mess,
      duration: 5,
    };

    notification.warning(args);
  };

  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const onClickRegister = () => {
    let email = document.getElementById("email_pro")?.value

    if(validateEmail(email)){
        dispatch(postPromotion({email}))
    }

    else openNotification("Email không hợp lệ.")
  };

  return (
    <RightPanelWrapper>
      <h1>NHẬN KHUYẾN MÃI</h1>
      <Divider />
      <div className="email">
        <Input placeholder="Email" type="email" id="email_pro"/>
        <Button onClick={onClickRegister}>ĐĂNG KÝ</Button>
      </div>
      <h1>PHIM ĐANG CHIẾU</h1>
      <Divider />
      {listFilms.slice(0, NUMBER_OF_FILMS_IN_RIGHT_SIDE_BAR).map((data, index) => (
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
    </RightPanelWrapper >
  );
};

export default RightPanel;
