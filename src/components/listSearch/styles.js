import styled from 'styled-components';

export const SearchFilmWrapper = styled.div`
  margin: 0px auto 20px auto;
  width: 100%;
  background: white;
  position: absolute;
  z-index: 256;
  padding-bottom: 10px;

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
        
        p.vn{
          color: #a0a3a7;
        }
      }
    }

    .film_active{
      background: #ffdea894;
      .name>p{
        color: chocolate;
      }
    }
  }
`;
