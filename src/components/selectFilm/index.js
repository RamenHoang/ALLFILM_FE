import React, { useState } from 'react';
import { SelectFilmWrapper } from './styles';

const listFilm = [
  {
    title: 'GODZILLA vs KONG',
    subTitle: 'GODZILLA ĐẠI CHIẾN KONG',
    image:
      'https://firebasestorage.googleapis.com/v0/b/film-84edf.appspot.com/o/phim6.jpg?alt=media&token=21c40a0b-c0fb-4478-8a54-60d73ecf0e85',
  },
  {
    title: 'THE UNHOLY',
    subTitle: 'Ấn quỷ',
    image:
      'https://firebasestorage.googleapis.com/v0/b/film-84edf.appspot.com/o/phim2.jpg?alt=media&token=14f5caa7-49b1-4bac-980d-bb0307e71651',
  },
  {
    title: 'Bố già',
    subTitle: 'Bố già',
    image:
      'https://firebasestorage.googleapis.com/v0/b/film-84edf.appspot.com/o/phim3.jpg?alt=media&token=df0a6f6d-20b5-4be5-bccb-885337e25b3c',
  },
  {
    title: 'Song song',
    subTitle: 'Song song',
    image:
      'https://firebasestorage.googleapis.com/v0/b/film-84edf.appspot.com/o/phim1.jpg?alt=media&token=894e1a44-65cd-4950-987d-9ffb3736df91',
  },
];

const SelectFilm = () => {

  return (
    <SelectFilmWrapper>
      <div className="col">
        <h4>
          CHỌN PHIM
        </h4>
        {listFilm.map((data, index) => (
          <div className='item'>
            <img src={data.image} alt="img"></img>
            <div className='name'>
              <p>{data.title}</p>
              <p className="vn">{data.subTitle}</p>
            </div>
          </div>
        ))}
      </div>
    </SelectFilmWrapper>
  );
};

export default SelectFilm;
