import React, { useState, useEffect } from 'react';
import { DetailsWrapper, ModalWrapper } from './styles';
import {
  Breadcrumb,
  Input,
  Button,
  Divider,
  DatePicker,
  Select
} from 'antd';
import { StarFilled, ClockCircleOutlined } from '@ant-design/icons';
import { useParams } from 'react-router';

import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../redux/data/slice';
import { getFilm, getFilms } from '../../redux/data/actions';

const info = {
  type: 'Hành động',
  country: 'VietNam',
  time: '110 phút',
  rating: '8.5',
  url: 'https://www.youtube.com/watch?v=g1nZ785I6fs',
  description:
    'Một gia đình bị truy đuổi giữa vùng sông nước. Cơ hội nào cho người đàn ông cứu lấy vợ con khỏi bọn xã hội đen máu mặt? Trong phần 5 này, đạo diễn Lý Hải đã “mạnh tay” mời đạo diễn Kim Jung Min từ Hàn Quốc sang Việt Nam làm cố vấn hành động cho đoàn phim. Được biết, Kim Jung Min cũng chính là đạo diễn hành động của phim hay ra mắt năm 2018 The Witch: Part 1. The Subversion. Theo nhận xét của giới chuyên môn, yếu tố hành động trong siêu phẩm này được đánh giá cao bởi sự độc đáo, mạnh mẽ và ác liệt. Và với sự thể hiện này, tại giải thưởng điện ảnh danh giá Rồng Xanh lần thứ 39, Kim Jung Min và Park Jung Ryul đã nhận được đề cử ở hạng mục Kỹ thuật cho phần chỉ đạo hành động xuất sắc nhất',
};

const listCity = [
  {
    key: 'daNang',
    value: 'Đà Nẵng',
  },
  {
    key: 'haNoi',
    value: 'Hà Nội',
  },
];

const listTheater = [
  {
    key: 'hoaKhanh',
    value: 'Hòa Khánh',
  },
  {
    key: 'hoaKhanh',
    value: 'Hòa Khánh',
  },
];
const { Option } = Select;

const Details = () => {
  const {id} = useParams();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getFilm(id));
    dispatch(getFilms());
  }, []);

  const listFilms = useSelector(state => state.data.films);
  const film = useSelector(state => state.data.film);
  
  console.log(JSON.stringify(film))

  const getVideo = (url) => {
    // alert(film.trailer)
    if (url.includes('youtube')) return url.replace('watch?v=', 'embed/');
    if (url.includes('youtu.be')) return url.replace('youtu.be', 'www.youtube.com/embed/');
    return url;
  };

  const showModal = () => {
    document.getElementById("watch-trailer").setAttribute("src", getVideo(film.trailer))
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onClickRegister = () => { };
  const getDate = (date, dateString) => {
    console.log(date, dateString);
  };

  const onChange = (value) => {
    console.log(`selected ${value}`);
  };

  const onBlur = () => {
    console.log('blur');
  };

  const onFocus = () => {
    console.log('focus');
  };

  const onSearch = (val) => {
    console.log('search:', val);
  };
  return (
    <DetailsWrapper>
      <Breadcrumb>
        <Breadcrumb.Item>
          <a href="">Trang chủ</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="">Đặt vé</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>{film.name}</Breadcrumb.Item>
      </Breadcrumb>
      <div className="content-event">
        <div className="content-section">
          <div className="first">
            <div className="play-video" onClick={showModal}>
              <img
                className="img-primary"
                src={film.poster} alt="img_film">
              </img>
              <div className="play-bt"></div>
            </div>

            <div className="content">
              <h1>{film.name}</h1>
              <div className="rating">
                <StarFilled />
                <p className="rateNo">
                  {film.rating}
                  /{film.rating_turn}
                </p>
                <Button>ĐÁNH GIÁ</Button>
              </div>
              <div className="time">
                <ClockCircleOutlined />
                <p>{film.time}</p>
              </div>
              <div className="overall">
                <div className="line">
                  <p>Thể loại</p>
                  <h3>{film.type}</h3>
                </div>
                <div className="line">
                  <p>Quốc gia</p>
                  <h3>{film.country}</h3>
                </div>
                <div className="line">
                  <p>Đạo diễn</p>
                  <h3>{film.Director?.name}</h3>
                </div>
                <div>
                  <p>Diễn viên</p>
                  <h3>{film.Actors?.map((data, index)=>(data.name)).join(", ")}</h3>
                </div>
                <div>
                  <p>Ngày</p>
                  <h3>{film.publishDate}</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="description">
            <h1>NỘI DUNG PHIM</h1>
            <Divider />
            <p>{film.description}</p>
          </div>
          <div className="calendar">
            <h1>LỊCH CHIẾU</h1>
            <Divider />
            <div className="inline">
              <Select
                showSearch
                style={{ width: '32%' }}
                defaultValue="all"
                optionFilterProp="children"
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                onSearch={onSearch}
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
              >
                <Option value="all">Cả nước</Option>
                {listCity.map((data, index) => (
                  <Option value={data.key} key={`city-${index}`}>
                    {data.value}
                  </Option>
                ))}
              </Select>
              <DatePicker style={{ width: '32%' }} onChange={getDate} />
              <Select
                showSearch
                style={{ width: '32%' }}
                defaultValue="all"
                optionFilterProp="children"
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                onSearch={onSearch}
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
              >
                <Option value="all">Tất cả rạp</Option>
                {listTheater.map((data, index) => (
                  <Option value={data.key} key={`theater-${index}`}>
                    {data.value}
                  </Option>
                ))}
              </Select>
            </div>
          </div>

          <div className="time2">
            <h2>GALAXY TÂN BÌNH</h2>
            <div className="pick-time">
              <p>2D-Phụ đề</p>
              <a href="/bookTicket"><Button>23:00</Button></a>
            </div>
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
            <div key={`movie-${index}`}>
              <img className="img" src={data.image} alt=""></img>
              <h3>{data.title}</h3>
              <h3 className="sub-title">{data.subTitle}</h3>
            </div>
          ))}
          <div className="load-more">
            <Button>XEM THÊM -></Button>
          </div>
        </div>
      </div>
      <ModalWrapper
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        title={film.name}
      >
        <iframe id="watch-trailer" width="700"
          height="400"
          src=""
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </ModalWrapper>
    </DetailsWrapper>
  );
};

export default Details;
