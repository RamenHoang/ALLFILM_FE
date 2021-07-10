import { Route, Redirect } from 'react-router-dom'
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { notification } from 'antd';

const openNotification = () => {
  const args = {
    message: 'Cảnh báo!!!',
    description:
      'Bạn không được phép truy cập vào đường dẫn này. Vui lòng đăng nhập.',
    duration: 2,
  };
  
  notification.warning(args);
};

const PrivateRoute = ({ component: Component, ...rest })=>{

    const token = useSelector(state => state.token.token);

    useEffect(() => {
        if(token.access_token === undefined) {
            openNotification();
        }
    }, []);
  
    return(
        <Route 
            {...rest} 
            render={(props) => (
                token.access_token !== undefined
                ? <Component {...props} />
                : <Redirect to='/' />
            )} 
        />
    )
} 

export default PrivateRoute