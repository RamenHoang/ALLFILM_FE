import React, { useEffect } from 'react';
import { PromotionWrapper } from './styles';
import {
  Input,
  Button,
  Divider,
  Breadcrumb
} from 'antd';

import { useDispatch, useSelector } from 'react-redux';
import { getFilms, getPromotion } from '../../redux/data/actions';
import { useParams } from 'react-router';
import { useHistory, Link } from "react-router-dom";

const Promotion = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const listFilms = useSelector(state => state.data.films)
  const promotion = useSelector(state => state.data.promotion);

  var history = useHistory();

  useEffect(() => {
    dispatch(getFilms());
    dispatch(getPromotion(id));
  }, []);

  const onClickRegister = () => { };

  return (
    <PromotionWrapper>

      <Breadcrumb style={{ 'margin-bottom': '0px' }}>
        <Breadcrumb.Item>
          <Link to="/">Trang chủ</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>{promotion?.name}</Breadcrumb.Item>
      </Breadcrumb>

      <div className="content-event">
        <div className="content-section">
          <div className="content">
            <h1>Khuyến mãi {promotion?.name}</h1>
            <Divider></Divider>
            <div>
              <img className="img-primary" src={promotion.image} alt="km"></img>
              <div className="overall">
                <p>Mô tả</p>
                <h3>{promotion?.content}</h3>
              </div>
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
    </PromotionWrapper>
  );
};

export default Promotion;
