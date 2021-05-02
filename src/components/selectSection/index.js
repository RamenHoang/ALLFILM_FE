import React, { useState } from 'react';
import { SelectSectionWrapper } from './styles';

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

function callback(key) {
  console.log(key);
}

const SelectFilm = () => {

  return (
    <SelectSectionWrapper>
      <div className="col">
        <h4>
          CHỌN SUẤT CHIẾU
        </h4>
        {listTheater.map((data, index) => (
          <div className='item'>
              <p>{data.key}</p>
              <p>{data.value}</p>
          </div>
        ))}
      </div>
    </SelectSectionWrapper>
  );
};

export default SelectFilm;
