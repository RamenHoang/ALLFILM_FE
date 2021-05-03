import React, { useState } from 'react';
import { SelectTheaterWrapper } from './styles';

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

const SelectTheater = () => {

  return (
    <SelectTheaterWrapper>
      <div className="col">
        <h4>
          CHỌN RẠP
        </h4>
        {listTheater.map((data, index) => (
          <div className='item'>
              <p>{data.key}</p>
              <p>{data.value}</p>
          </div>
        ))}
      </div>
    </SelectTheaterWrapper>
  );
};

export default SelectTheater;
