import React from 'react';
import { SelectTheaterWrapper } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { getSession_BaseFC } from '../../redux/data/actions';

const SelectTheater = () => {

  const listTheaters = useSelector(state => state.data.cinemas)
  const dispatch = useDispatch();

  const active_cinema = (e) => {
    var selectFilm = document.getElementsByClassName("cinema_active")
    selectFilm[0]?.classList.remove("cinema_active")
    e.currentTarget.classList.add("cinema_active")
    var a = document.getElementsByClassName("film_active")
    if (a.length) {
      dispatch(getSession_BaseFC({
        cinemaId: e.currentTarget.id.substring(7),
        filmId: a[0].id.substring(5)
      }));
    }
  }

  return (
    <SelectTheaterWrapper>
      <div className="col">
        <h4>
          CHỌN RẠP
        </h4>
        {listTheaters.map((data, index) => (
          <div className='item' id={`cinema_${data.id}`} onClick={active_cinema}>
            <p>{data.name}</p>
            <p>{data.address}</p>
          </div>
        ))}
      </div>
    </SelectTheaterWrapper>
  );
};

export default SelectTheater;
