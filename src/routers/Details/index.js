import React, { useState, useEffect } from 'react';
import { DetailsWrapper, ModalWrapper, ModalRating } from './styles';
import RightPanel from '../../components/RightPanel';
import {
  Breadcrumb,
  Button,
  Divider
} from 'antd';
import { StarFilled, ClockCircleOutlined } from '@ant-design/icons';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getFilm, getSession, postRating } from '../../redux/data/actions';

import { Link } from 'react-router-dom';

const Details = () => {
  const { id } = useParams();

  //use for play video modal
  const [isModalVisible, setIsModalVisible] = useState(false);

  //use for rating modal
  const [isModalRatingVisible, setIsModalRatingVisible] = useState(false);
  const [rating, setRating] = useState(0);

  const dispatch = useDispatch();
  const film = useSelector(state => state.data.film)
  const session_baseFilm = useSelector(state => state.data.session_baseFilm)
  const token = useSelector(state => state.token.token);

  useEffect(() => {
    dispatch(getSession(id));
    dispatch(getFilm(id));
  }, [rating, id]);

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

  const showRatingModal = () => {
    setIsModalRatingVisible(true);
  };

  const handleRatingCancel = () => {
    setIsModalRatingVisible(false);
  }

  const callRatingApi = () => {
    if(rating===0){
      alert("Vui lòng chọn số sao bạn muốn đánh giá")
      return
    }

    let params = {
      headers: {
        'Authorization': `Bearer ${token.access_token}`,
        'Content-type': 'application/json'
      },
      id: id,
      rating: rating
    }

    dispatch(postRating(params));
    setIsModalRatingVisible(false);
  }

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
        <iframe id="watch-trailer" width="700" title="This is a unique title"
          height="400"
          src=""
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </ModalWrapper>

      <ModalRating
        visible={isModalRatingVisible}
        footer={null}
        onCancel={handleRatingCancel}
        title={`đánh giá phim ${film.name}`}>
        <p>Click để chọn số sao bạn nhé.</p>
        <div>
          <StarFilled id="btn-star-1" onClick={() => setRating(1)} className={rating > 0 ? "yellow" : ""} />
          <StarFilled id="btn-star-2" onClick={() => setRating(2)} className={rating > 1 ? "yellow" : ""} />
          <StarFilled id="btn-star-3" onClick={() => setRating(3)} className={rating > 2 ? "yellow" : ""} />
          <StarFilled id="btn-star-4" onClick={() => setRating(4)} className={rating > 3 ? "yellow" : ""} />
          <StarFilled id="btn-star-5" onClick={() => setRating(5)} className={rating > 4 ? "yellow" : ""} />
          <StarFilled id="btn-star-6" onClick={() => setRating(6)} className={rating > 5 ? "yellow" : ""} />
          <StarFilled id="btn-star-7" onClick={() => setRating(7)} className={rating > 6 ? "yellow" : ""} />
          <StarFilled id="btn-star-8" onClick={() => setRating(8)} className={rating > 7 ? "yellow" : ""} />
          <StarFilled id="btn-star-9" onClick={() => setRating(9)} className={rating > 8 ? "yellow" : ""} />
          <StarFilled id="btn-star-10" onClick={() => setRating(10)} className={rating > 9 ? "yellow" : ""} />
        </div>
        <Button onClick={callRatingApi}>ĐÁNH GIÁ</Button>
      </ModalRating>

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
                  /10
                </p>
                <Button onClick={showRatingModal}>ĐÁNH GIÁ</Button>
              </div>
              <p>
                Lượt đánh giá:{` ${film.ratingTurn}`}
              </p>
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
        </div>

        <RightPanel></RightPanel>
        
      </div>
    </DetailsWrapper>
  );
};

export default Details;
