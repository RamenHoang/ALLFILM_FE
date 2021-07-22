import React, { useEffect } from 'react';
import { SelectTicketWrapper } from './styles';

import SelectFilm from '../../components/selectFilm';
import SelectSection from '../../components/selectSection';
import SelectTheater from '../../components/selectTheater';

import { useDispatch } from 'react-redux';
import { getFilms, getCinema } from '../../redux/data/actions';

import {
  Tabs
} from 'antd';

function callback(key) {
  console.log(key);
}

const SelectTicket = () => {

  const { TabPane } = Tabs;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFilms());
    dispatch(getCinema());
  }, []);

  return (
    <SelectTicketWrapper>
      <div className="container">
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="THEO PHIM  /  RẠP PHIM" className="flex" key="9">
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
        </Tabs>
      </div>
    </SelectTicketWrapper>
  );
};

export default SelectTicket;
