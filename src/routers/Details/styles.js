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

    .img-primary {
      width: 250px;
      height: 381px;
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

      p{
        color: black;
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
          min-width: 120px;
          font-weight: normal;
          color: #a0a4b2;
          margin-bottom: 10px;
          display: -webkit-box;
        }

        h3 {
          font-weight: normal;
          margin-bottom: 5px;
          white-space: break-spaces;
          span{
            a{
              color: black;
            }
            a:hover{
              color: chocolate;
            }
          }
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
`;

export const ModalWrapper = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
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

export const ModalRating = styled(Modal)`
  width: fix-content;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin: auto;

.ant-modal-content{
  .ant-modal-body{
    .yellow{
      svg > path {
        fill: #fac917;
      }
    }

    .anticon-star{
      padding-right: 5px;
    }
    
    .ant-btn {
      color: #ffffff;
      background-color: #f26b38;
      border-color: #f26b38;
      text-transform: uppercase;
      margin-top: 20px;
    }
  }
}
`;
