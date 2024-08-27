import React, { useEffect } from 'react';
import { PromotionWrapper } from './styles';
import RightPanel from '../../components/RightPanel';
import {
  Button,
  Divider,
  Breadcrumb
} from 'antd';

import { useDispatch, useSelector } from 'react-redux';
import { getPromotion } from '../../redux/data/actions';
import { useParams } from 'react-router';
import { useHistory, Link } from "react-router-dom";

const Promotion = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const promotion = useSelector(state => state.data.promotion);

  var history = useHistory();

  useEffect(() => {
    dispatch(getPromotion(id));
  }, []);

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
        {/* <RightPanel></RightPanel> */}
      </div>
    </PromotionWrapper>
  );
};

export default Promotion;
