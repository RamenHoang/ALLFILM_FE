import React, { useState } from 'react';
import { BookTicketWrapper } from './styles';
import {
  Button,
  Divider
} from 'antd';


const info = {
  title: 'Lật mặt 24h',
  theater: 'Đà Nẵng',
  room: 'Rạp 2',
  startTime: '11:15',
  date: '14/4/2021',
  image:
    'https://www.galaxycine.vn/media/2021/3/4/300-lat-mat_1614842112584.jpg',
  time: '110 phút',
  url: 'https://www.youtube.com/watch?v=g1nZ785I6fs',
  description:
    'Một gia đình bị truy đuổi giữa vùng sông nước. Cơ hội nào cho người đàn ông cứu lấy vợ con khỏi bọn xã hội đen máu mặt? Trong phần 5 này, đạo diễn Lý Hải đã “mạnh tay” mời đạo diễn Kim Jung Min từ Hàn Quốc sang Việt Nam làm cố vấn hành động cho đoàn phim. Được biết, Kim Jung Min cũng chính là đạo diễn hành động của phim hay ra mắt năm 2018 The Witch: Part 1. The Subversion. Theo nhận xét của giới chuyên môn, yếu tố hành động trong siêu phẩm này được đánh giá cao bởi sự độc đáo, mạnh mẽ và ác liệt. Và với sự thể hiện này, tại giải thưởng điện ảnh danh giá Rồng Xanh lần thứ 39, Kim Jung Min và Park Jung Ryul đã nhận được đề cử ở hạng mục Kỹ thuật cho phần chỉ đạo hành động xuất sắc nhất',
};

const typeTickets = [
  {
    key: '2D',
    value: 'Vé 2D',
    note: 'vé 2D dành cho người lớn',
    price: '55000'
  },
  {
    key: '3D',
    value: 'Vé 3D',
    note: 'vé 3D chỉ dành cho khách hàng thành viên',
    price: '75000'
  },
];

const typeCombos = [
  {
    key: 'cb1',
    value: '1B2N',
    note: '1 phần bắp và 2 ly nước',
    price: '74000'
  },
  {
    key: 'cb2',
    value: '1B1N',
    note: '1 phần bắp và 1 ly nước',
    price: '62000'
  },
];

const map ={
  row : '10',
  col: '12'
}

const BookTicket = () => {

  const [sum, setSum] = useState('0')

  const rows = []
  rows.length= map.row
  rows.fill(1)
  const cols =[]
  cols.length = map.col
  cols.fill(1)

  console.log(cols, rows)

  const change = (e) => {
    e.target.parentElement.parentElement.childNodes[3].childNodes[0].textContent = e.target.value * e.target.parentElement.parentElement.childNodes[2].childNodes[0].textContent;

    e.target.parentElement.parentElement.childNodes[3].childNodes[0].textContent = e.target.value * e.target.parentElement.parentElement.childNodes[2].childNodes[0].textContent;
    const ticketPrices = document.getElementsByClassName("ticket-price");
    var sum = 0;
    for (var i = 0; i < ticketPrices.length; i++) {
      sum = sum + ticketPrices[i].innerText * 1;
    }
    document.getElementById("ticketSum").innerText = sum;

    var sum1 = 0;
    e.target.parentElement.parentElement.childNodes[3].childNodes[0].textContent = e.target.value * e.target.parentElement.parentElement.childNodes[2].childNodes[0].textContent;
    const comboPrices = document.getElementsByClassName("combo-price");
    for (var i = 0; i < comboPrices.length; i++) {
      sum1 = sum1 + comboPrices[i].innerText * 1;
    }
    document.getElementById("comboSum").innerText = sum1;
    setSum(sum1 + sum);
  }

  const displayMap = ()=>{
    document.getElementById('ticket-food').style.display='none'
    document.getElementById('map-section').style.display='block'
    document.getElementById('btn-back').style.display='initial'
  }

  const undisplayMap = ()=>{
    document.getElementById('ticket-food').style.display='block'
    document.getElementById('map-section').style.display='none'
    document.getElementById('btn-back').style.display='none'
  }


  return (
    <BookTicketWrapper>
      <div className="content">
        <div className="content-section" id="ticket-food">
          <h1>CHỌN VÉ/ THỨC ĂN</h1>
          <table>
            <tr><th>Loại vé</th><th>Số lượng</th><th className="right">Giá(VNĐ)</th><th className="right">Tổng(VNĐ)</th></tr>
            {typeTickets.map((data, index) => (
              <tr key={`type-${index}`}>
                <td>{data.value} <br></br> {data.note}</td>
                <td>
                  <input key={`type-${index}`} type="number" name="ticketNum" defaultValue="0" min="0" max="100" onChange={change}></input>
                </td>
                <td className="right">{data.price}</td>
                <td className="right ticket-price">0</td>
              </tr>
            ))}
            <tr className="tr-sum"><td colspan={3}>Tổng</td><td className="right" id="ticketSum">0</td></tr>

            <tr><th>Combo</th><th>Số lượng</th><th className="right">Giá(VNĐ)</th><th className="right">Tổng(VNĐ)</th></tr>
            {typeCombos.map((data, index) => (
              <tr key={`typeCombo-${index}`}>
                <td>{data.value} <br></br> {data.note}</td>
                <td>
                  <input key={`typeCombo-${index}`} type="number" name="ticketNum" defaultValue="0" min="0" max="100" onChange={change}></input>
                </td>
                <td className="right">{data.price}</td><td className="right combo-price">0</td>
              </tr>
            ))}
            <tr className="tr-sum"><td colspan={3}>Tổng</td><td className="right" id="comboSum">0</td></tr>
          </table>
          <div className="sum">
            <label>Tổng</label> <label>{sum}</label> VNĐ
            <Button onClick={displayMap}>Tiếp tục</Button>
          </div>
        </div>

        <div className="content-section" id='map-section'>
          <h1> CHỌN GHẾ</h1>
          <div className="map">
            <table>
              {rows.map((data, index)=>(
                <tr>
                  <td className="cell-left">{String.fromCharCode(index+65)}</td>
                  {cols.map((data, index)=>(
                    <td className='cell'>{index}</td>
                  ))}
                  <td className='cell-right'>{String.fromCharCode(index+65)}</td>
                </tr>
              ))}
            </table>
            <h3>Màn hình</h3>
            <div className="screen"></div>
            <div className="div-note">
              <span className="note chosing"></span>Ghế đang chọn
              <span className="note sold"></span>Ghế đã bán
              <span className="note enable"></span>Ghế có thể chọn
              </div>
           </div>
        </div>

        <div className="event-section">
          <div className="content-event">
            <div className="div-img">
              <img src={info.image} ></img>
              <h1>{info.title}</h1>
              <Divider></Divider>
              <p><b>Rạp:</b>{info.theater} | {info.room}</p>
              <Divider></Divider>
              <p><b>Suất chiếu:</b>{info.startTime} | {info.date}</p>
              <Divider></Divider>
              <p><b>Combo: </b><span></span></p>
              <Divider></Divider>
              <p><b>Ghế: </b><span></span></p>
              <Divider></Divider>
              <p><b>Tổng: </b><span className="color-orange"> {sum} VND</span></p>
              
              <Button onClick={undisplayMap} className='btn-back' id='btn-back'> Quay lại</Button>
              <Button onClick={displayMap}>Tiếp tục</Button>
            </div>
          </div>
        </div>
      </div>
    </BookTicketWrapper>
  );
};

export default BookTicket;
