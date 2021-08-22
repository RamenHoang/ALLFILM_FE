import React, { useEffect } from 'react';
import { DirectorWrapper } from './styles';
import RightPanel from '../../components/RightPanel';
import {
  Button,
  Divider,
  Breadcrumb
} from 'antd';

import { useDispatch, useSelector } from 'react-redux';
import { getDirector } from '../../redux/data/actions';
import { useParams } from 'react-router';
import { useHistory, Link } from "react-router-dom";

const Director = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const director = useSelector(state => state.data.director);

  var history = useHistory();

  useEffect(() => {
    dispatch(getDirector(id));
  }, []);

  return (
    <DirectorWrapper>

      <Breadcrumb style={{ 'margin-bottom': '0px' }}>
        <Breadcrumb.Item>
          <Link to="/">Trang chủ</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>{director?.name}</Breadcrumb.Item>
      </Breadcrumb>

      <div className="content-event">
        <div className="content-section">
          <div className="content">
            <h1>Đạo diễn {director?.name}</h1>
            <Divider></Divider>
            <div className="overall">
              <div>
                <p>Ngày sinh</p>
                <h3>{director?.dateOfBirth}</h3>
              </div>
              <div>
                <p>Quốc tịch</p>
                <h3>{director?.nation}</h3>
              </div>
              <div>
                <p>Mô tả</p>
                <h3>{director?.description}</h3>
              </div>
              <div>
                <p>Phim đã tham gia</p>
              </div>
              {director?.Films?.map((data, index) => (
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
        <RightPanel></RightPanel>
      </div>
    </DirectorWrapper>
  );
};

export default Director;
