import React, { useEffect } from 'react';
import { RightPanelWrapper } from './styles';
import {
  Input,
  Button,
  Divider,
} from 'antd';

import { useDispatch, useSelector } from 'react-redux';
import { getFilms } from '../../redux/data/actions';
import { Link } from "react-router-dom";

const RightPanel = () => {
  const dispatch = useDispatch();
  const listFilms = useSelector(state => state.data.films)

  useEffect(() => {
    dispatch(getFilms());
  },[]);

  const onClickRegister = () => { };

  return (
    <RightPanelWrapper>
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
    </RightPanelWrapper >
  );
};

export default RightPanel;
