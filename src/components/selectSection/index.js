import React from 'react';
import { SelectSectionWrapper } from './styles';
import {
  Button
} from 'antd';

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const SelectSection = () => {

  const listSS = useSelector(state => state.data.session_baseFC)

  return (
    <SelectSectionWrapper>
      <div className="col">
        <h4>
          CHỌN SUẤT CHIẾU
        </h4>

        {
          Object.keys(listSS)?.map(key => {
            return (
              <div className='item'>
                <p>{key}</p>
                <div className="flex">
                  <label>2D -  Phụ đề</label>
                  <div className="time">
                    {listSS[key].map((data, index) => (
                      <Link to={`/book-ticket/${data.id}`}><Button>{data.startTime.substring(11, 16)}</Button></Link>
                    ))}
                  </div>
                </div>
              </div>
            )
          })
        }

      </div>
    </SelectSectionWrapper>
  );
};

export default SelectSection;
