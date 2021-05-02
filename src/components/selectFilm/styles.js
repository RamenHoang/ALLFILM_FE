import styled from 'styled-components';

export const SelectFilmWrapper = styled.div`
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
      transition: 0.4s;

      :hover{
        background: #dbdcdd;
      }
  
      img{
        width: 70px;
        height: auto;
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
        
          p.vn{
            color: #a0a3a7;
          }
      }
  
    }
  }

`;
