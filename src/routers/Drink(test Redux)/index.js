import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getCategory, getDrink} from '../../redux/drink/actions'; //trong extra reducer
import {actions} from '../../redux/drink/slice'; // trong reducer

const Drink = () => {

  const dispatch = useDispatch();
  const drinks = useSelector(state => state.drink.drinks);
  //mấy đoạn ni inspect ra xem 
  useEffect(() => {
    dispatch(getDrink());
    dispatch(getCategory()).then(({payload: {data}}) =>
      dispatch(actions.setCurrentCategory(get(data, 'data.0', {}))),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return(
    <div>
      {drinks.map((data, index)=> (
        <p>hi</p>
        <p>{data}</p>
      ))}
    </div>
  )
};

export default Drink;