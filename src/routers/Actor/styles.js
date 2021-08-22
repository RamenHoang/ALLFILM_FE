import styled from 'styled-components';

export const ActorWrapper = styled.div`
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
    margin-right: 20px;
  }

  .content {
    width: fit-content;
    min-width: 700px;
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
`