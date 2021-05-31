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
import { getFilm, getFilms, getSession } from '../../redux/data/actions';

import { Link } from 'react-router-dom';

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
  const { id } = useParams();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSession(id));
    dispatch(getFilm(id));
    dispatch(getFilms());
  }, [id]);

  const listFilms = useSelector(state => state.data.films)
  const film = useSelector(state => state.data.film)
  const session_baseFilm = useSelector(state => state.data.session_baseFilm)

  const getVideo = (url) => {
    if (url.includes('youtube')) return url.replace('watch?v=', 'embed/');
    if (url.includes('youtu.be')) return url.replace('youtu.be', 'www.youtube.com/embed/');
    return url;
  };

  const showModal = () => {
    document.getElementById("watch-trailer")?.setAttribute("src", getVideo(film.trailer))
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
          <Link to="/">Trang chủ</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to="/selectTicket">Đặt vé</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>{film.name}</Breadcrumb.Item>
      </Breadcrumb>

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
              <h1>{film.subName}</h1>
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
                <p>{film.duration} phút</p>
              </div>
              <div className="overall">
                <div>
                  <p>Thể loại</p>
                  <h3>{film.FilmTypes?.map((data, index) => (data.name)).join(", ")}</h3>
                </div>
                <div>
                  <p>Quốc gia</p>
                  <h3>{film.nation}</h3>
                </div>
                <div>
                  <p>Đạo diễn</p>
                  <h3><span><Link to={`/director/${film?.Director?.id}`}>{film.Director?.name}</Link></span></h3>
                </div>
                <div>
                  <p>Diễn viên</p>
                  <h3>{film.Actors?.map((data, index) =>
                  (
                    <span>
                      <Link to={`/actor/${data.id}`}>{data.name}</Link> {",  "}
                    </span>)
                  )}
                  </h3>
                </div>
                <div>
                  <p>Ngày phát hành</p>
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

          {session_baseFilm.map((data, index) => (
            <div className="time2">
              <h2>{data.name}</h2>
              <div className="pick-time">
                <p>2D-Phụ đề</p>
                {data.Sessions.map((data, index) => (

                  <Link to={`/bookTicket/${data.id}`}><Button>{data.startTime}</Button></Link>
                ))}

              </div>
            </div>


          ))}


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
            <div key={`movie-${index}`} >
              <img className="img" src={data?.image} alt=""></img>
              <h3>{data?.title}</h3>
              <h3 className="sub-title">{data?.subTitle}</h3>
            </div>
          </Link>
          ))}
          <div className="load-more">
            <Button> XEM THÊM </Button>
          </div>
        </div>
      </div>
    </DetailsWrapper>
  );
};

export default Details;
