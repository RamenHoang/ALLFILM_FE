import React, { useEffect, useState } from 'react';
import logo from './logo.png';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom';
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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import './libs/AlertBox/style.css';
import {
  Modal, Form, Input, Button, Checkbox, Tabs,
  DatePicker
} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import { useDispatch, useSelector } from 'react-redux';
//import to use state
import { login} from './redux/token/actions'; //trong extra reducer
import { actions } from './redux/token/slice'; // trong reducer

function App() {

  const dispatch = useDispatch();
  const token = useSelector(state => state.token.token);
  const username = useSelector(state => state.token.username);

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

  const goToFilms = ()=>{
    let films = document.getElementById("#phim");

    if (films) {
      films.scrollIntoView({ behavior: 'smooth'});

      return;
    }

    document.getElementById("logo-allfilms").click();

    setTimeout(() => {
      films = document.getElementById("#phim");
      films.scrollIntoView({ behavior: 'smooth'});
    });
  }

  const config = {
    rules: [
      {
        type: 'object',
        required: true,
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

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 8,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 16,
      },
    },
  };

  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };

  const [autoCompleteResult, setAutoCompleteResult] = useState([]);

  const onWebsiteChange = (value) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(['.com', '.org', '.net'].map((domain) => `${value}${domain}`));
    }
  };

  const loginClick = () => {

    const name = document.getElementById("normal_login").username.value;
    const pass = document.getElementById("normal_login").password.value;

    dispatch(login({
      username: name,
      password: pass
    }));
    closeModal();
  }

  return (
    <div className="App">
      <Router>
        <div className="header">
        <div className="head_content flex">
          <Link to="/" id="logo-allfilms"><img className="logo" src={logo} alt="logo"></img></Link>
          <div className="div_input">
            <input className="input" defaultValue="Tìm tên phim, diễn viên"></input>
            <FontAwesomeIcon icon={faSearch} size="3px" color="gray" className="icon_abs search" />
          </div>

          <div className="login" style={{ display: (token.access_token ? 'none' : 'initial') }}>
            <label type="primary" onClick={showModal}>
              <FontAwesomeIcon icon={faUser} size="3px" className="icon_abs icon-user" />
              Đăng nhập
            </label>
            <Modal footer={null} visible={isModalVisible} onOk={handleOk} onCancel={closeModal}>

              <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="Login" key="1">
                  <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                  >
                    <Form.Item
                      name="username"
                      rules={[{ required: true, message: 'Please input your Username!' }]}
                    >
                      <Input name="username" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                    </Form.Item>
                    <Form.Item
                      name="password"
                      rules={[{ required: true, message: 'Please input your Password!' }]}
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
                        <Checkbox name="remember">Remember me</Checkbox>
                      </Form.Item>
                      {/* <a className="login-form-forgot" href="">
                        Forgot password</a> */}
                    </Form.Item>

                    <Form.Item>
                      <Button type="primary" className="login-form-button"
                        onClick={loginClick}>
                        Log in
                      </Button>
                    </Form.Item>
                  </Form>
                </TabPane>
                <TabPane tab="Register" key="2">
                  <Form
                    {...formItemLayout}
                    form={form}
                    name="register"
                    onFinish={onFinish}
                    initialValues={{
                      residence: ['zhejiang', 'hangzhou', 'xihu'],
                      prefix: '86',
                    }}
                    scrollToFirstError
                  >
                    <Form.Item
                      name="email"
                      label="E-mail"
                      rules={[
                        {
                          type: 'email',
                          message: 'The input is not valid E-mail!',
                        },
                        {
                          required: true,
                          message: 'Please input your E-mail!',
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>

                    <Form.Item
                      name="password"
                      label="Password"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your password!',
                        },
                      ]}
                      hasFeedback
                    >
                      <Input.Password />
                    </Form.Item>

                    <Form.Item
                      name="confirm"
                      label="Confirm Password"
                      dependencies={['password']}
                      hasFeedback
                      rules={[
                        {
                          required: true,
                          message: 'Please confirm your password!',
                        },
                        ({ getFieldValue }) => ({
                          validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                              return Promise.resolve();
                            }

                            return Promise.reject(new Error('The two passwords that you entered do not match!'));
                          },
                        }),
                      ]}
                    >
                      <Input.Password />
                    </Form.Item>

                    <Form.Item
                      name="nickname"
                      label="Nickname"
                      tooltip="What do you want others to call you?"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your nickname!',
                          whitespace: true,
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>

                    <Form.Item
                      name="phone"
                      label="Phone Number"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your phone number!',
                        },
                      ]}
                    >
                      <Input
                        style={{
                          width: '100%',
                        }}
                      />
                    </Form.Item>

                    <Form.Item name="date-picker" label="DatePicker" {...config}>
                      <DatePicker placeholder="select birthday" />
                    </Form.Item>

                    <Form.Item
                      name="agreement"
                      valuePropName="checked"
                      rules={[
                        {
                          validator: (_, value) =>
                            value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                        },
                      ]}
                      {...tailFormItemLayout}
                    >
                      <Checkbox>
                        I have read the <a href="/">agreement</a>
                      </Checkbox>
                    </Form.Item>
                    <Form.Item {...tailFormItemLayout}>
                      <Button type="primary" htmlType="submit">
                        Register
                      </Button>
                    </Form.Item>
                  </Form>
                </TabPane>
              </Tabs>
            </Modal>
          </div>
          <div className='logout' style={{ display: (token.access_token ? 'initial' : 'none') }}>
            <p>
              <FontAwesomeIcon icon={faUser} size="3px" className="icon_abs icon-user" /> {`${username}`}
            </p>
            <ul className='user'>
                <Link to="/member"><li>Thông tin</li></Link>
                <li onClick={showCfModal}>Đăng xuất</li>
            </ul>

            <Modal title="Confirm logout" visible={isModalConfirmVisible} onOk={handleCfOk} onCancel={handleCfCancel}>
              <p>Are you sure to logout?</p>
            </Modal>

          </div>
        </div>

        <div className="black">
          <div className="menu">
            <ul className="flex">
            <Link to="/">HOME</Link>|<Link to="/selectTicket">MUA VÉ</Link>|<a onClick={goToFilms} >PHIM</a>|<a>GÓC ĐIỆN ẢNH</a>|<a>SỰ KIỆN</a>|<a>HỖ TRỢ</a>|<a>THÀNH VIÊN</a>
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
          <Route
            path="/" exact
            component={Home} />
        </Switch>
      </Router>
      <footer>
        <p>Công Ty Cổ Phần ALLFILMS, Đại học Bách khoa- Đại học Đà Nẵng, 54, Nguyễn Lương Bằng, Hòa Khánh Bắc, Liên Chiểu, Đà Nẵng</p>
      </footer>
    </div>
  );
}

export default App;
