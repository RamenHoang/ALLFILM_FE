import React, { useState, useEffect } from 'react'
import { BookTicketWrapper } from './styles'
import {
  Button,
  Divider,
  Modal
} from 'antd'
import { useParams } from 'react-router'

import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../redux/data/slice';
import { getDetailSession, getCategory, bookTicket } from '../../redux/data/actions';
import Details from '../Details';
import moment from 'moment';
import { useHistory } from "react-router-dom";


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

const BookTicket = () => {
  
  const dispatch = useDispatch();
  const { id } = useParams()
  var history = useHistory();
  
  const [step, setStep] = useState('1')

  useEffect(() => {
    dispatch(getDetailSession(id))
    dispatch(getCategory())
  }, []);


  const [sum, setSum] = useState('0')
  const [countTicket, setCountTicket] = useState('0')
  const [foodDrinks, setFoodDrinks] = useState([])
  
  const [fdStr, setFdStr] = useState("")
  var seats = [];
  const [isModalConfirmVisible, setIsModalConfirmVisible] = useState(false)
  const categories = useSelector(state => state.data.categories)||[]
  const detailSession = useSelector(state => state.data.detailSession)
  const bookedSeats = detailSession.bookedSeats||""
  const token = useSelector(state => state.token.token);

  console.log("session: "+ JSON.stringify(detailSession))

  const rows = []
  const cols = []
  
  rows.length = detailSession?.Room?.row ||0
  rows.fill(1)
  cols.length = detailSession?.Room?.column||0
  cols.fill(1)

  const changeBg = (e) => {
    if (seats.length <= countTicket && countTicket != 0) {
      if(e.target.classList.contains("bgGreen")){
        seats = seats.filter(item => item !== e.target);
        e.target.classList.remove("bgGreen")
      }
      else if (!e.target.classList.contains("bgRed")){
        if (seats.length < countTicket) {
          e.target.classList.add("bgGreen")
          seats.push(e.target)
        }
        else {
          seats[0]?.classList.remove("bgGreen")
          seats.shift()
          e.target.classList.add("bgGreen")
          seats.push(e.target)
        }
      }
    }
  }

  const change = (e) => {

    e.target.parentElement.parentElement.childNodes[3].childNodes[0].textContent = e.target.value * e.target.parentElement.parentElement.childNodes[2].childNodes[0].textContent;
    const ticketPrices = document.getElementsByClassName("ticket-price")
    const ticketNums = document.getElementsByClassName("ticketNum")
    var sum = 0
    for (var i = 0; i < ticketPrices.length; i++) {
      sum = sum + ticketPrices[i].innerText * 1
    }
    document.getElementById("ticketSum").innerText = sum

    var sum1 = 0
    e.target.parentElement.parentElement.childNodes[3].childNodes[0].textContent = e.target.value * e.target.parentElement.parentElement.childNodes[2].childNodes[0].textContent;
    const comboPrices = document.getElementsByClassName("combo-price");
    for (var i = 0; i < comboPrices.length; i++) {
      sum1 = sum1 + comboPrices[i].innerText * 1
    }
    document.getElementById("comboSum").innerText = sum1
    setSum(sum1 + sum)


    var fds = []
    var fdstr = "  |  "
    const combos = document.getElementsByClassName("fds");
    for (var i = 0; i < combos.length; i++) {
      let id = combos[i].id
      if(combos[i].value !=="0"){
        fds.push({
          id: id.substring(id.indexOf("_")+1),
          count: combos[i].value
        })

        fdstr = fdstr +"  |  " + combos[i].parentNode.parentNode.childNodes[0].id+ ":"+ combos[i].value
      }
    }
    setFoodDrinks(fds)
    setFdStr(fdstr.substring(10))

    var count = 0
    for (var i = 0; i < ticketNums.length; i++) {
      count = count + ticketNums[i].value * 1;
    }
    setCountTicket(count)

  }

  const  nextStep = ()=>{
    console.log("step: " + step)
    if(step==='1'){
      if(countTicket == 0){
        alert("please select at least 1 ticket before going to next step.")
      }
      else{
        setTimeout(displayMap, 500);
        setStep('2')
      }
    }
    else if (step==='2'){
      if(seats.length === countTicket) {

        var seatStr = []
        for(var i=0; i< seats.length; i++){
          seatStr.push(seats[i].id);
        }
        seatStr = seatStr.concat().toString()

        var bookingTime = moment().format('YYYY-MM-DD h:mm:ss');
        var keepingTime = moment().add(15, 'seconds').format('YYYY-MM-DD h:mm:ss');
        let params ={
          data:{
            bookingTime,
            keepingTime,
            seats: seatStr,
            fee: sum,
            sessionId: detailSession.id,
            sessionRoomId: detailSession.roomId,
            foodDrinks: foodDrinks
          },
          headers:{
            'Authorization': `Bearer ${token.access_token}`
          }
        } 
        console.log(params.data)
        console.log(params.headers)
        dispatch(bookTicket(params))
        
        history.push("bookSS")

        setStep(3)
        // history.push("/bookss");
      }
      else{
        alert("Please book enough tickets before going to next step!")
      }
    }
  }

  const backStep = ()=>{
    console.log(step)
    if(step==='2'){
      undisplayMap()
      setStep('1')
    }
    if(step==='3'){
      undisplayMap()
      setStep('2')
    }
  }

  const displayMap = () => {
    document.getElementById('ticket-food').style.display = 'none'
    document.getElementById('map-section').style.display = 'block'
    document.getElementById('btn-back').style.display = 'initial'
    dispatch(actions.refeshTicket())
  }

  const undisplayMap = () => {
    for (var i = 0; i < seats.length; i++) {
      seats[i].classList.remove("bgGreen")
    }
    document.getElementById('ticket-food').style.display = 'block'
    document.getElementById('map-section').style.display = 'none'
    document.getElementById('btn-back').style.display = 'none'

  }

  return (
    <BookTicketWrapper>
      <div className="content">
        <div className="content-section" id="ticket-food">
          <h1>CHỌN VÉ/ THỨC ĂN</h1>
          <table>
            <tr><th>chọn vé</th><th>Số lượng</th><th className="right">Giá(VNĐ)</th><th className="right">Tổng(VNĐ)</th></tr>          
            <tr>
              <td>Vé 2D<br></br></td>
              <td>
                <input type="number" className="ticketNum" defaultValue="0" min="0" max="100" onChange={change}></input>
              </td>
              <td className="right">{detailSession.price}</td>
              <td className="right ticket-price">0</td>
            </tr>
            <tr className="tr-sum"><td colspan={3}>Tổng</td><td className="right" id="ticketSum">0</td></tr>

            <tr><th>Combo</th><th>Số lượng</th><th className="right">Giá(VNĐ)</th><th className="right">Tổng(VNĐ)</th></tr>
           
            {categories.map((data, index)=>(

              <tr key={`typeCombo-${index}`}>
              <td id={`${data.name}`}>{data.name}</td>
              <td>
                <input className="fds" id={`fds_${data.id}`}  key={`typeCombo-${index}`} type="number" name="ticketNum" defaultValue="0" min="0" max="100" onChange={change}></input>
              </td>
              <td className="right">{data.price}</td><td className="right combo-price">0</td>
            </tr>
            ))}

            <tr className="tr-sum"><td colspan={3}>Tổng</td><td className="right" id="comboSum">0</td></tr>
          </table>
          <div className="sum">
            <label>Tổng</label> <label>{sum}</label> VNĐ
            <Button onClick={nextStep}>Tiếp tục</Button>
          </div>
        </div>

        <div className="content-section" id='map-section'>
          <h1> CHỌN GHẾ</h1>
          <div className="map">
            <table>
              {rows.map((data, rindex) => (
                <tr>
                  <td className="cell-left">{String.fromCharCode(rindex + 65)}</td>
                  {cols.map((data, index) => (
                    <td id={`${String.fromCharCode(rindex + 65)}-${index}`} className={`cell${bookedSeats.split(",").indexOf(String.fromCharCode(rindex + 65) + "-"+ index)!==-1?" bgRed":""}`}  onClick={changeBg}>{index}</td>
                  ))}
                  <td className='cell-right'>{String.fromCharCode(rindex + 65)}</td>
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
              <p><b>Rạp:</b>{info.theater} | {detailSession?.Room?.name}</p>
              <Divider></Divider>
              <p><b>Suất chiếu:</b>{detailSession.startTime}</p>
              <Divider></Divider>
              <p><b>Combo: </b><span>{fdStr}</span></p>
              <Divider></Divider>
              <p><b>Ghế: </b><span></span></p>
              <Divider></Divider>
              <p><b>Tổng: </b><span className="color-orange"> {sum} VND</span></p>

              <Button onClick={backStep} className='btn-back' id='btn-back'> Quay lại</Button>
              <Button onClick={nextStep}>Tiếp tục</Button>
            </div>
          </div>
        </div>
      </div>
    </BookTicketWrapper>
  );
};

export default BookTicket;
