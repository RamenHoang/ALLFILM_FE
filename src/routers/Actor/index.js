import React, { useState, useEffect } from 'react';
import { ActorWrapper } from './styles';
import {
  Input,
  Button,
  Divider,
  Breadcrumb
} from 'antd';

import { useDispatch, useSelector } from 'react-redux';
import { getFilms, getActor } from '../../redux/data/actions';
import { useParams } from 'react-router';
import { useHistory, Link } from "react-router-dom";

const Actor = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const listFilms = useSelector(state => state.data.films)
  const actor = useSelector(state => state.data.actor);

  var history = useHistory();

  useEffect(() => {
    dispatch(getFilms());
    dispatch(getActor(id));
  }, []);

  const onClickRegister = () => { };


  return (
    <ActorWrapper>

      <Breadcrumb style={{'margin-bottom': '0px'}}>
        <Breadcrumb.Item>
          <Link to="/">Trang chủ</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>{actor?.name}</Breadcrumb.Item>
      </Breadcrumb>

      <div className="content-event">
        <div className="content-section">
          <div className="content">
            <h1>Diễn viên {actor?.name}</h1>
            <Divider></Divider>
            <div className="overall">
              <div>
                <p>Ngày sinh</p>
                <h3>{actor?.dateOfBirth}</h3>
              </div>
              <div>
                <p>Quốc tịch</p>
                <h3>{actor?.nation}</h3>
              </div>
              <div>
                <p>Mô tả</p>
                <h3>{actor?.description}</h3>
              </div>
              <div>
                <p>Phim đã tham gia</p>
              </div>
              {actor?.Films?.map((data, index) => (
                <Link to={`/details/${data.id}`}>
                  <div className='phim' id={`phim_${data.id}`}>
                    <img src={data.poster} alt="img"></img>
                    <div className='name'>
                      <p>{data.name}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <Button onClick={() => { history.goBack() }}> Quay lại </Button>
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
            <Link to={`/details/${data.id}`}>
              <div key={`movie2-${index}`}>
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
    </ActorWrapper>
  );
};

export default Actor;
