import styled from 'styled-components';

export const RightPanelWrapper = styled.div`
width: 32%;
margin-left: 20px;

div{
  .sub-title, h3{
    text-align: left;
    font-size: 14px;
    color: #43464b;
    line-height: 20px;
    overflow: hidden;
    white-space: nowrap;
    text-transform: uppercase;
    margin: 8px 0 8px 0;
  }

  .sub-title{
    color: gray;
    margin: 8px 0 30px 0;
  }
}

.img {
  width: 100%;
  height: auto;
}

.ant-divider-horizontal {
  display: flex;
  clear: both;
  min-width: 20%;
  width: 20%;
  margin: 10px 0;
  height: 2px;
  background: #f26b38;
  margin: 10px 0;
}

.email {
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.5);
  padding: 20px 16px;
  margin-top: 30px;
  margin-bottom: 30px;
}

.ant-btn {
  width: 100%;
  font-size: 14px;
  color: #ffffff;
  background-color: #f26b38;
  padding: 15px;
  line-height: 1;
  height: auto;
  border: none;
  text-align: center;
}

.load-more {
  .ant-btn {
    font-size: 14px;
    background: #fff;
    width: fit-content;
    color: #f26b38;
    padding: 15px;
    line-height: 1;
    height: auto;
    float: right;
    border: 0.5px solid #f26b38;
    text-align: left;
  }
  .ant-btn:hover{
    background: chocolate;
    color: white;
  }
}

.ant-input {
  width: 100%;
  height: 40px;
  font-size: 14px;
  border: 1px solid #ced0da;
  color: #43464b;
  padding: 10px;
  margin-bottom: 14px;
}

h1 {
  font-size: 18px;
  font-weight: 500;
  text-align: left;
}

@media screen and (max-width: 860px){
  width: 75%;
  margin: auto;
  margin-bottom: 100px;
}
`
