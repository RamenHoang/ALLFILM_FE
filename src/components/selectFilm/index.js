import React from 'react';
import { SelectFilmWrapper } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { getSession_BaseFC } from '../../redux/data/actions';

const SelectFilm = () => {

  const listFilms = useSelector(state => state.data.films)
  const dispatch = useDispatch()

  const active_film = (e) => {
    var selectFilm = document.getElementsByClassName("film_active")
    selectFilm[0]?.classList.remove("film_active")
    e.currentTarget.classList.add("film_active")
    var a = document.getElementsByClassName("cinema_active")
    if (a.length) {
      dispatch(getSession_BaseFC({
        cinemaId: a[0].id.substring(7),
        filmId: e.currentTarget.id.substring(5)
      }));
    }
  }

  return (
    <SelectFilmWrapper>
      <div className="col">
        <h4>
          CHỌN PHIM
        </h4>
        {listFilms.map((data, index) => (
          <div className='item' id={`phim_${data.id}`} onClick={active_film}>
            <img src={data.image} alt="img"></img>
            <div className='name'>
              <p>{data.title}</p>
              <p className="vn">{data.subTitle}</p>
            </div>
          </div>
        ))}
      </div>
    </SelectFilmWrapper>
  );
};

export default SelectFilm;
