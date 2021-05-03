import styled from 'styled-components';

export const SelectSectionWrapper = styled.div`
  margin: 20px auto 20px auto;
  width: 100%;
  min-width: 200px;

  & * {
    text-align: left;
  }


  .col{
    width: 100%;
    h4{
      width: 100%;
      margin: 0;
      padding: 10px;
      font-size: 16px;
      background: #f26c39;
      color: white;
      text-transform: uppercase;
      line-height: 1.5;
    }

    .item{
      height: fit-content;
      border: solid #dbdcdd 0.8px;
      border-top: none;
      justify-content: space-between;
      align-item: center;
      transition: 0.4s;

      p, label{
        width: fit-content;
        padding: 10px;
        margin: 0;
        color: gray;
      }

      .flex{
        
        .time {
          padding: 10px 10px;
          display: flex;
          width: calc(100% - 100px);
          flex-wrap: wrap;

          .ant-btn{
            transition: 0.3s;
            margin-right: 10px;
            margin-bottom: 10px;
          }
          .ant-btn:hover{
            color: chocolate;
            border-color: chocolate;
          }
        }
      }
    }
  }

`;
