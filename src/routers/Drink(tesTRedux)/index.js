import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getCategory, getDrink} from '../../redux/drink/actions'; //trong extra reducer
import {actions} from '../../redux/drink/slice'; // trong reducer

const Drink = () => {

  const dispatch = useDispatch();
  const drinks = useSelector(state => state.drink.drinks);
  console.log("hhu", drinks)
  //mấy đoạn ni inspect ra xem 
  useEffect(() => {
    dispatch(getDrink());
    dispatch(getCategory()).then(({payload: {data}}) =>
      dispatch(actions.setCurrentCategory(data)),
    );
  }, []);


  console.log(" drink: "+ drinks.toString()); 

  return(
    <div>
      {drinks?.data?.map((data, index)=> (
        <>
        <p>hi</p>
        <p>{data.name}</p>
        </>
      ))}
    </div>
  )
};

export default Drink;