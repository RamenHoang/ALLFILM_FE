import styled from 'styled-components';

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

.content-section {
  width: 100%;

  .inline{
    .ant-select{
      .ant-select-selector:hover{
        border: 1px solid chocolate;
        cusor: pointer;
      }
    }
  }

  table{
        
    color: black;
    width: 100%;
    table-layout: fixed;
    margin: 10px 0 30px 0;

    th, td {
      text-align: center;
      padding: 10px;
    }
    
    tr:nth-child(even){background-color: #f9f9f9}
    
    tr:nth-child(odd){background-color: white}
    
    th {
      background-color: #47251c;
      color: white;
    }

    .tr-sum{
      color: #f26b38;
    }

    .recovery-booking-film-image-and-name-container {
      display: flex;
    }

    .recovery-booking-film-image {
      width: 5rem;
    }

    .recovery-booking-film-name {
      display: flex;
      text-align: center;
      align-items: center;
      margin-left: 5px;
    }

    .recovery-booking-table-row:hover {
      background-color: #fdd0bf;
      transition: 0.3s;
    }
  }

  .content {
    width: 80%;
    min-width: fit-content;
    margin-top: 20px;

    & > * {
      display: flex;
      text-align: left;
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
      width: 80%;
      margin-top: 20px;
      margin-bottom: 20px;

      & > * {
        display: flex;
      }

      p {
        min-width: 140px;
        width: 40%;
        font-weight: normal;
        color: #a0a4b2;
        margin-bottom: 10px;
        display: -webkit-box;
      }

      h3 {
        font-weight: normal;
        margin-bottom: 10px;
        white-space: break-spaces;
      }

      input{
        margin-bottom: 10px;
        min-width: 250px;
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
      
      .change{
        margin-top: 10px;
        width: fit-content;
      }
    }
  }
}
`