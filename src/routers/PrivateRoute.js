import { BrowserRouter as Route, Redirect } from 'react-router-dom'

import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest })=>{

    const token = useSelector(state => state.token.token);

    useEffect(() => {
        if(token.access_token === undefined) alert("Please login before book ticket")
    }, []);
  
    return(
    <Route {...rest} render={(props) => (
        token.access_token !== undefined
            ? <Component {...props} />
            : <Redirect to='/' />
        )} />
    )
} 

export default PrivateRoute