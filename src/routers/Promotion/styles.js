import styled from 'styled-components';

export const PromotionWrapper = styled.div`
margin: 20px auto 20px auto;
width: 1250px;
max-width: 100%;

& * {
  text-align: left;
}

.content-event {
  display: flex;
  justify-content: space-between;
}

.content-section {
  width: 65%;

  .content {
    width: fit-content;
    min-width: 700px;
    margin: auto;
    margin-top: 50px;

    & > * {
      display: flex;
      text-align: left;
    }

    .img-primary {
      width: 250px;
      height: 381px;
      margin-right: 20px;
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
        font-weight: normal;
      }

      p {
        color: #a0a4b2;
        margin-bottom: 10px;
      }

      h3 {
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