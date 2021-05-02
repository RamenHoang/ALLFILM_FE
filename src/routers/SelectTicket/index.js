import React, { useState } from 'react';
import { SelectTicketWrapper } from './styles';

import SelectFilm from '../../components/selectFilm';
import SelectSection from '../../components/selectSection';
import SelectTheater from '../../components/selectTheater';

// import SelectFilm from '..../components/selectFilm'

import {
  Tabs
} from 'antd';

const listCity = [
  {
    key: 'daNang',
    value: 'Đà Nẵng',
  },
  {
    key: 'haNoi',
    value: 'Hà Nội',
  },
];

const listMovie = [
  {
    name: 'Lật mặt 24h',
    image:
      'https://firebasestorage.googleapis.com/v0/b/film-84edf.appspot.com/o/phim1.jpg?alt=media&token=894e1a44-65cd-4950-987d-9ffb3736df91',
  },
  {
    name: 'Lật mặt 24h',
    image:
      'https://firebasestorage.googleapis.com/v0/b/film-84edf.appspot.com/o/phim1.jpg?alt=media&token=894e1a44-65cd-4950-987d-9ffb3736df91',
  },
  {
    name: 'Lật mặt 24h',
    image:
      'https://firebasestorage.googleapis.com/v0/b/film-84edf.appspot.com/o/phim1.jpg?alt=media&token=894e1a44-65cd-4950-987d-9ffb3736df91',
  },
  {
    name: 'Lật mặt 24h',
    image:
      'https://firebasestorage.googleapis.com/v0/b/film-84edf.appspot.com/o/phim1.jpg?alt=media&token=894e1a44-65cd-4950-987d-9ffb3736df91',
  },
];

const listTheater = [
  {
    key: 'hoaKhanh',
    value: 'Hòa Khánh',
  },
  {
    key: 'hoaKhanh',
    value: 'Hòa Khánh',
  },
];

function callback(key) {
  console.log(key);
}

const SelectTicket = () => {

  const { TabPane } = Tabs;

  return (
    <SelectTicketWrapper>
      <div className="container">

        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="THEO PHIM" key="1" className="flex">
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
          <TabPane tab="THEO RẠP" key="2" className="flex">
            <div className="col-width">
              <SelectTheater></SelectTheater>
            </div>
            <div className="col-width">
              <SelectFilm ></SelectFilm>
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
