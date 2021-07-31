import React, { useRef, useEffect } from 'react';
import { SearchFilmWrapper } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../redux/data/slice';
import {Link} from "react-router-dom";

function useOuterClick(callback) {
  const callbackRef = useRef();
  const innerRef = useRef(); 

  useEffect(() => { callbackRef.current = callback; });
  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
    function handleClick(e) {
      if (innerRef.current && callbackRef.current &&
        !innerRef.current.contains(e.target)
      ) callbackRef.current(e);
    }
  }, []);

  return innerRef;
}

const SearchFilm = () => {

  const listSearch = useSelector(state => state.data.listSearch)
  const dispatch = useDispatch()

  const closeSearchFilm = () => {
    dispatch(actions.clearSearchList())
  }

  const innerRef = useOuterClick(ev => closeSearchFilm());

  return (
    <SearchFilmWrapper ref={innerRef}>
      <div className="col">
        {listSearch.map((data, index) => (
          <Link to={`/details/${data.id}`}  key={`search-phim_${index}`}>
            <div className='item'>
              <img src={data.image} alt="img"></img>
              <div className='name'>
                <p>{data.title}</p>
                <p className="vn">{data.subTitle}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </SearchFilmWrapper>
  );
};

export default SearchFilm;
