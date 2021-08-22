import styled from 'styled-components';

export const BookSSWrapper = styled.div`
margin: 20px auto 20px auto;
width: 1250px;
max-width: 100%;

& * {
  text-align: left;
}

.ant-breadcrumb {
  text-align: left;
  margin-bottom: 20px;
}

h2 {
  font-size: 17px;
  font-weight: 400;
  text-align: left;
  color: #f26b38;
}

h3 {
  text-align: left;
  font-size: 16px;
  color: #43464b;
  line-height: 20px;
  overflow: hidden;
  white-space: nowrap;
}

.content-event {
  display: flex;
  justify-content: space-between;
}

.first {
  display: flex;
  margin-bottom: 25px;
}

.content-section {
  width: 65%;

  .description,
  .calendar {
    .ant-divider-horizontal {
      display: flex;
      clear: both;
      min-width: 10%;
      width: 10%;
      margin: 10px 0;
      height: 3px;
      background: #f26b38;
      margin: 8px 0 27px 0;
    }
    p {
      text-align: left;
    }
  }

  .calendar {
    .inline {
      display: flex;
      justify-content: space-between;
    }
  }

  .time2 {
    padding-top: 25px;
    h2 {
      font-size: 18px;
      color: #fff;
      background: #f26b38;
      padding: 5px 15px;
      font-weight: normal;
      width: fit-content;
      border-left: 5px solid #000;
      margin: 0;
    }

    .pick-time {
      border: 1px solid #00000033;
      width: 100%;
      display: flex;
      padding: 35px 20px 25px;
      align-items: baseline;

      p {
        font-size: 16px;
        padding-top: 5px;
        margin-right: 20px;
      }

      .ant-btn{
        transition: 0.3s;
        margin-right: 10px;
      }
      .ant-btn:hover{
        color: chocolate;
        border-color: chocolate;
      }
    }
  }

  .inline{
    .ant-select{
      .ant-select-selector:hover{
        border: 1px solid chocolate;
        cusor: pointer;
      }
    }
    .ant-picker:hover{
      border: 1px solid chocolate;
      cusor: pointer;
    }
  }

  .img-primary {
    width: 250px;
    height: 381px;
    margin-right: 20px;
  }

  .content {
    width: fit-content; 
    margin: auto;
    margin-top: 50px;

    & > * {
      display: flex;
      text-align: left;
    }

    h1 {
      font-size: 26px;
      color: #43464b;
      text-transform: capitalize;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      line-height: 34px;
      font-weight: normal;
    }

    .subName{
      color: gray;
    }

    .ant-btn {
      font-size: 14px;
      background: #fff;
      width: fit-content;
      color: #f26b38;
      padding: 15px;
      line-height: 1;
      height: auto;
      margin: auto;
      border: 0.5px solid #f26b38;
      text-align: left;
      margin-top: 15px;
    }
    .ant-btn:hover{
      background: chocolate;
      color: white;
    }

    .overall {
      flex-direction: column;

      & > * {
        display: flex;
      }

      p {
        min-width: 120px;
        width: 40%;
        font-weight: normal;
        color: #a0a4b2;
        margin-bottom: 10px;
        display: -webkit-box;
      }

      h3 {
        font-weight: normal;
        margin-bottom: 5px;
        white-space: break-spaces;
      }
    }
  }
}

@media screen and (max-width: 860px){
  .content-event {
    display: block;

    .content-section{
      width: 100%;
      margin: auto;
      margin-bottom: 50px;
    }
  }
}

`