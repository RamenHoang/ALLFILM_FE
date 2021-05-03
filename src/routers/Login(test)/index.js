import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../../redux/token/actions'; //trong extra reducer
import {actions} from '../../redux/token/slice'; // trong reducer

const Drink = () => {

  const dispatch = useDispatch();
  const token = useSelector(state => state.token.token);

  //mấy đoạn ni inspect ra xem 
  useEffect(() => {
    // dispatch(login({
    //     username: "lieule99",
    //     password: "Aa@12345"
    // }))
  }, []);

  return(
    <div>
      {token.access_token}
      {token.refresh_token}
    </div>
  )
};

export default Drink;