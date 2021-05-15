import React, { useState, useEffect } from 'react';
import { SelectTicketWrapper } from './styles';

import SelectFilm from '../../components/selectFilm';
import SelectSection from '../../components/selectSection';
import SelectTheater from '../../components/selectTheater';

import { useDispatch, useSelector } from 'react-redux';
import { getFilm, getFilms, getSession, getCinema , getSession_BaseFC} from '../../redux/data/actions';

import {
  Tabs
} from 'antd';


function callback(key) {
  console.log(key);
}

const SelectTicket = () => {

  const { TabPane } = Tabs;
  // const listFilms = useSelector(state => state.data.films)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFilms());
    dispatch(getCinema());
  }, []);

  // const listFilms = useSelector(state => state.data.films)
  // // const film = useSelector(state => state.data.film)
  // const session = useSelector(state => state.data.session)

  return (
    <SelectTicketWrapper>
      <div className="container">

        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="THEO PHIM  /  RẠP PHIM" key="1" className="flex">
            <div className="col-width">
              <SelectFilm ></SelectFilm>
            </div>
            <div className="col-width">
              <SelectTheater></SelectTheater>
            </div>
            <div className="col-width">
              <SelectSection></SelectSection>
            </div>
          </TabPane>
          {/* <TabPane tab="THEO RẠP" key="2" className="flex" onClick={getCinemas}>
            <div className="col-width">
              <SelectTheater></SelectTheater>
            </div>
            <div className="col-width">
              <SelectFilm ></SelectFilm>
            </div>
            <div className="col-width">
              <SelectSection></SelectSection>
            </div>
          </TabPane> */}
        </Tabs>

      </div>
    </SelectTicketWrapper>
  );
};

export default SelectTicket;
