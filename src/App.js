import React, { useState } from 'react'
import logo from './logo.png';
import './css/App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PrivateRoute from './routers/PrivateRoute'
import Home from './routers/Home';
import Details from './routers/Details';
import InfoUser from './routers/InfoUserPage';
import Actor from './routers/Actor';
import Diretor from './routers/Director';
import BookTicket from './routers/BookTicket';
import BookSS from './routers/BookSS';
import SelectTicket from './routers/SelectTicket';
import SelectFilm from './routers/SelectTicket';
import Promotion from './routers/Promotion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import {
  Modal, Form, Input, Button, Checkbox, Tabs, DatePicker
} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import { useDispatch, useSelector } from 'react-redux';
import { login, register } from './redux/token/actions';
import { actions } from './redux/token/slice';
import {searchFilm} from './redux/data/actions';
import {actions as dataActions}  from './redux/data/slice' ;

import SearchFilm from './components/listSearch';
import ScrollToTop from './ScrollToTop';

function App() {

  const dispatch = useDispatch();
  const token = useSelector(state => state.token.token);
  const username = useSelector(state => state.token.username);
  const listSearch = useSelector(state => state.data.listSearch);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const { TabPane } = Tabs;
  const [isModalConfirmVisible, setIsModalConfirmVisible] = useState(false);

  const showCfModal = () => {
    setIsModalConfirmVisible(true);
  };

  const handleCfOk = () => {
    dispatch(actions.logout({}));
    setIsModalConfirmVisible(false);
  };

  const handleCfCancel = () => {
    setIsModalConfirmVisible(false);
  };

  const goToFilms = () => {
    let films = document.getElementById("#phim");

    if (films) {
      films.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    document.getElementById("logo-allfilms").click();

    setTimeout(() => {
      films = document.getElementById("#phim");
      films.scrollIntoView({ behavior: 'smooth' });
    });
  }

  const goToPromotions = () => {
    let promotions = document.getElementById("#promotion");

    if (promotions) {
      promotions.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    document.getElementById("logo-allfilms").click();

    setTimeout(() => {
      promotions = document.getElementById("#promotion");
      promotions.scrollIntoView({ behavior: 'smooth' });
    });
  } 
  
  const config = {
    rules: [
      {
        type: 'object',
        required: false,
        message: 'Please select time!'
      }
    ]
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  function callback(key) {
    console.log(key);
  }

  const loginClick = () => {

    const name = document.getElementById("normal_login").username.value;
    const pass = document.getElementById("normal_login").password.value;

    dispatch(login({
      username: name,
      password: pass
    }));

    closeModal();
  }

  const registerClick = () => {

    const username = document.getElementById("register").username.value;
    const password = document.getElementById("register").password.value;
    const name = document.getElementById("register").name.value;
    const fullname = document.getElementById("register").fullname.value;
    const email = document.getElementById("register").email.value;
    const phone = document.getElementById("register").phone.value;

    dispatch(register({
      username: username,
      password: password,
      name: name,
      fullname: fullname,
      email: email,
      phone: phone
    }));

    closeModal();
  }

  function search(value){
    if(value === ""){
      dispatch(dataActions.clearSearchList())
    }
    else dispatch(searchFilm(value))
  }

  return (
    <div className="App">
      <Router>
      <ScrollToTop>
         <div className="header">
          <div className="head_content flex">
            <Link to="/" id="logo-allfilms"><img className="logo" src={logo} alt="logo"></img></Link>
            <div className="div_input">
              <input className="input" placeholder="Tìm tên phim, diễn viên" onChange={event => search(event.target.value)}></input>
              <SearchFilm style={{ display: (listSearch.length===0 ? 'none' : 'initial') }}/>
              <FontAwesomeIcon icon={faSearch} color="gray" className="icon_abs search" />
            </div>

            <div className="login" style={{ display: (token.access_token ? 'none' : 'initial') }}>
              <label type="primary" onClick={showModal}>
                <FontAwesomeIcon icon={faUser} className="icon_abs icon-user" />
                Đăng nhập
              </label>
              <Modal footer={null} visible={isModalVisible} onOk={handleOk} onCancel={closeModal}>
                <Tabs defaultActiveKey="1" onChange={callback}>
                  <TabPane tab="Đăng nhập" key="1">
                    <Form
                      name="normal_login"
                      className="login-form"
                      initialValues={{ remember: true }}
                    >
                      <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Nhập tên người dùng của bạn!' }]}
                      >
                        <Input name="username" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                      </Form.Item>
                      <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Nhập mật khẩu của bạn!' }]}
                      >
                        <Input
                          name="password"
                          prefix={<LockOutlined className="site-form-item-icon" />}
                          type="password"
                          placeholder="Password"
                        />
                      </Form.Item>
                      <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                          <Checkbox name="remember">Ghi nhớ tài khoản này</Checkbox>
                        </Form.Item>
                      </Form.Item>

                      <Form.Item>
                        <Button type="primary" className="login-form-button"
                          onClick={loginClick}>
                          Đăng nhập
                        </Button>
                      </Form.Item>
                    </Form>
                  </TabPane>
                  <TabPane tab="Đăng ký" key="2">
                    <Form
                      form={form}
                      name="register"
                      scrollToFirstError
                    >
                      <Form.Item
                        name="email"
                        label="E-mail"
                        rules={[
                          {
                            type: 'email',
                            message: 'Email không hợp lệ!',
                          },
                          {
                            required: true,
                            message: 'Nhập E-mail của bạn!',
                          },
                        ]}
                      >
                        <Input name="email" />
                      </Form.Item>

                      <Form.Item
                        name="password"
                        label="Mật khẩu"
                        rules={[
                          {
                            required: true,
                            message: 'Nhập mật khẩu của bạn!',
                          },
                        ]}
                        hasFeedback
                      >
                        <Input.Password name="password" />
                      </Form.Item>

                      <Form.Item
                        name="confirm"
                        label="Xác nhận lại"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                          {
                            required: true,
                            message: 'Hãy xác nhận lại mật khẩu!',
                          },
                          ({ getFieldValue }) => ({
                            validator(_, value) {
                              if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                              }

                              return Promise.reject(new Error('Mật khẩu xác nhận lại không trùng khớp!!!'));
                            },
                          }),
                        ]}
                      >
                        <Input.Password />
                      </Form.Item>

                      <Form.Item
                        name="username"
                        label="Tên người dùng"
                        tooltip="Tên dùng cho đăng nhập."
                        rules={[
                          {
                            required: true,
                            message: 'Hãy nhập tên người dùng của bạn!',
                            whitespace: true,
                          },
                        ]}
                      >
                        <Input name="username" />
                      </Form.Item>

                      <Form.Item
                        name="fullname"
                        label="Họ tên"
                        rules={[
                          {
                            required: true,
                            message: 'Hãy nhập họ tên đầy đủ của bạn!',
                            whitespace: true,
                          },
                        ]}
                      >
                        <Input name="fullname" />
                      </Form.Item>

                      <Form.Item
                        name="name"
                        label="Biệt danh"
                        tooltip="Mọi người thường gọi bạn là gì?"
                        rules={[
                          {
                            required: true,
                            message: 'Hãy nhập biệt danh của bạn!',
                            whitespace: true,
                          },
                        ]}
                      >
                        <Input name="name" />
                      </Form.Item>

                      <Form.Item
                        name="phone"
                        label="Số điện thoại"
                        rules={[
                          {
                            required: true,
                            message: 'Hãy nhập số điện thoại của bạn!',
                          },
                        ]}
                      >
                        <Input name="phone"
                          style={{
                            width: '100%',
                          }}
                        />
                      </Form.Item>

                      <Form.Item name="date-picker" label="Ngày sinh" {...config}>
                        <DatePicker placeholder="Chọn ngày sinh" />
                      </Form.Item>

                      <Form.Item>
                        <Button type="primary" onClick={registerClick}>
                          Đăng ký
                        </Button>
                      </Form.Item>
                    </Form>
                  </TabPane>
                </Tabs>
              </Modal>
            </div>
            <div className='logout' style={{ display: (token.access_token ? 'initial' : 'none') }}>
              <p>
                <FontAwesomeIcon icon={faUser} className="icon_abs icon-user" /> {`${username}`}
              </p>
              <ul className='user'>
                <Link to="/member"><li>Thông tin</li></Link>
                <li onClick={showCfModal}>Đăng xuất</li>
              </ul>

              <Modal title="Confirm logout" visible={isModalConfirmVisible} onOk={handleCfOk} onCancel={handleCfCancel}>
                <p>Bạn có chắc chắn muốn đăng xuất khỏi hệ thống?</p>
              </Modal>

            </div>
          </div>

          <div className="black">
            <div className="menu">
              <ul className="flex">
                <Link to="/">HOME</Link>|<Link to="/selectTicket">MUA VÉ</Link>|<p className="menu_tab" onClick={goToFilms} >PHIM</p>|<p className="menu_tab" onClick={goToPromotions}>KHUYẾN MÃI</p>|<Link to="/member">THÀNH VIÊN</Link>
              </ul>
            </div>
          </div>
        </div>

        <Switch>
          <Route path="/details/:id" component={Details}></Route>
          <Route path="/actor/:id" component={Actor}></Route>
          <Route path="/director/:id" component={Diretor}></Route>
          <Route path="/bookTicket/bookSS" exact component={BookSS}></Route>
          <PrivateRoute path="/bookTicket/:id" exact component={BookTicket}></PrivateRoute>
          <Route path="/selectTicket" component={SelectTicket}></Route>
          <Route path="/test" component={SelectFilm}></Route>
          <PrivateRoute path="/member" exact component={InfoUser}></PrivateRoute>
          <PrivateRoute path="/promotion/:id" exact component={Promotion}></PrivateRoute>
          <Route
            path="/" exact
            component={Home} />
        </Switch>
        </ScrollToTop>
      </Router>
      <footer>
        <p>Công Ty Cổ Phần ALLFILMS, Đại học Bách khoa- Đại học Đà Nẵng, 54, Nguyễn Lương Bằng, Hòa Khánh Bắc, Liên Chiểu, Đà Nẵng</p>
      </footer>
    </div>
  );
}

export default App;
