import styled from 'styled-components';

export const DirectorWrapper = styled.div`
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
  ${'' /* display: flex;
  justify-content: flex-start; */}
  width: 65%;

  .inline{
    .ant-select{
      .ant-select-selector:hover{
        border: 1px solid chocolate;
        cusor: pointer;
      }
    }
  }

  .img-primary {
    width: 250px;
    height: 381px;
    ${'' /* margin-left: 20px; */}
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
        min-width: 140px;
        width: 15%;
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

      a{
        width: 90%;
        .phim{
          height: fit-content;
          border: solid #dbdcdd 0.8px;
          display: flex;
          transition: 0.4s;
          width: 100%;

          :hover{
            background: #dbdcdd;
            cursor: pointer;
          }
          
          img{
            width: 70px;
            height: 70px;
            margin: auto 10px;
            float: left;
          }

          .name{
            align-item: center;
            text-transform: uppercase;
            padding: 15px;
            p{
              font-family: "Roboto", sans-serif;
              color: #43464b;
              margin: 0;
            }
          }
        }
      }
    }
  }
}

.event-section {
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
`