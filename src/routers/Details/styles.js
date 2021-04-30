import styled from 'styled-components';
import { Modal } from 'antd';

export const DetailsWrapper = styled.div`
  margin: 20px auto 20px auto;
  width: 1250px;
  max-width: 100%;

  & * {
    text-align: left;
  }

  .ant-breadcrumb {
    text-align: left;
    margin-bottom: 20px;
    ${'' /* margin: 20px; */}
  }

  h1 {
    font-size: 18px;
    font-weight: 500;
    text-align: left;
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
    ${'' /* display: flex;
    justify-content: flex-start; */}
    max-width: 65%;

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
          ${'' /* width: 25%; */}
          margin-right: 20px;
        }

        .ant-btn{
          transition: 0.3s;
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
      ${'' /* margin-left: 20px; */}
      margin-right: 20px;
    }

    .play-video {
      position: relative;
    }

    .play-bt:before {
      content: '';
      display: inline-block;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-style: solid;
      border-width: 15px 0 15px 25px;
      border-color: transparent transparent transparent rgba(255, 255, 255, 0.8);
    }

    .content {
      margin-left: 20px;
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

      .time {
        & > * {
          margin-right: 10px;
          align-items: center;
        }
      }

      .rating {
        align-items: baseline;
        & > * {
          margin-right: 10px;
        }

        .anticon {
          svg > path {
            fill: #fac917;
          }
        }
      }

      .rateNo {
        font-weight: 500;
        font-size: 18px;
      }

      .ant-btn {
        color: #ffffff;
        background-color: #f26b38;
        border-color: #f26b38;
        text-transform: uppercase;
      }

      .overall {
        flex-direction: column;

        & > * {
          display: flex;
        }

        p {
          min-width: 90px;
          font-weight: normal;
          color: #a0a4b2;
          margin-bottom: 5px;
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

  .event-section {
    width: 32%;
    margin-left: 20px;

    div{
      h3 {
        text-align: left;
        font-size: 14px;
        color: #43464b;
        line-height: 20px;
        overflow: hidden;
        white-space: nowrap;
        text-transform: uppercase;
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
  }

  
  @media screen and (min-width: 320px) and (max-width: 860px){
    .content-event {
      display: block;

      .content-section{
        width: 100%;
        margin: auto;
        margin-bottom: 50px;
      }
      .event-section{
        width: 75%;
        margin: auto;
        margin-bottom: 100px;
      }
    }
  }

`;

export const ModalWrapper = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
  ${'' /* padding: 0; */}
  margin: auto;

  .ant-modal-content {
    width: fit-content;
  }

  .ant-modal-title {
    text-align: center;
  }

  .ant-modal-body {
    padding: 10px;
  }
`;
