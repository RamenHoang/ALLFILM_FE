import React, { useState } from 'react';
import { SelectSectionWrapper } from './styles';
import {
  Button
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


const listSection = [
  {
    date: 'Thứ hai, 03/05/2021',
    type: '2D -  Phụ đề',
    time: ["09:00", "10:15", "11:11", "11:55", "09:00", "10:15", "11:11", "11:55", "09:00", "10:15", "11:11", "11:55"]
  },
  {
    date: 'Thứ hai, 03/05/2021',
    type: '2D -  Phụ đề',
    time: ["09:00", "10:15", "11:11", "11:55", "09:00", "10:15", "11:11", "11:55", "09:00", "10:15", "11:11", "11:55"]
  }
];


const SelectSection = () => {

  console.log("time:  " + listSection.time);

  return (
    <SelectSectionWrapper>
      <div className="col">
        <h4>
          CHỌN SUẤT CHIẾU
        </h4>
        {listSection.map((data, index) => (
          <div className='item'>
            <p>{data.date}</p>
            <div className="flex">
              <label>{data.type}</label>
              <div className="time">
                {data.time.map((data, index) => (
                  <a href="/bookTicket"><Button>{data}</Button></a>
                ))}
              </div>
            </div>
          </div>
        ))}

      </div>
    </SelectSectionWrapper>
  );
};

export default SelectSection;
