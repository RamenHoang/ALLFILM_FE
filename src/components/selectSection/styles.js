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
      display: flex;
      justify-content: space-between;
      align-item: center;
      transition: 0.4s;

      :hover{
        background: #dbdcdd;
      }

      p{
        width: fit-content;
        padding: 15px;
        margin: 0;
        color: gray;
      }
    }

  }

`;
