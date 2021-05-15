import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from 'react-router-dom'

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest })=>{

    const token = useSelector(state => state.token.token);
    console.log(token.access_token)

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