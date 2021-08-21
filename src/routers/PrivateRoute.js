import { Route, Redirect } from 'react-router-dom'
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { notification } from 'antd';
import { useDispatch } from 'react-redux';
import { actions } from '../redux/token/slice' //loi cho ni 
import jwt_decode from "jwt-decode";

const openNotification = () => {
  const args = {
    message: 'Cảnh báo!!!',
    description:
      'Bạn không được phép truy cập vào đường dẫn này. Vui lòng đăng nhập.',
    duration: 2,
  };

  notification.warning(args);
};

const PrivateRoute = ({ component: Component, ...rest }) => {

  const token = useSelector(state => state.token.token);
  const dispatch = useDispatch();

  const checkValidToken = () => {
    if (Object.keys(token).length === 0) return 0;
  
    const decoded = jwt_decode(token.access_token);
    const now = Math.floor(new Date().getTime()/1000);
    
    if (decoded.exp > now) {
      return 1
    } else {
      dispatch(actions.logout({}));
      return 0
    }
  }

  useEffect(() => {
    if (!checkValidToken()) {
      openNotification();
    }
  }, []);

  return (
    <Route
      {...rest}
      render={(props) => (
        checkValidToken()
          ? <Component {...props} />
          : <Redirect to='/' />
      )}
    />
  )
}

export default PrivateRoute