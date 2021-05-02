import styled from 'styled-components';

export const BookTicketWrapper = styled.div`
  margin: 20px auto 20px auto;
  width: 1250px;
  max-width: 100%;

  & * {
    text-align: left;
  }

  h1, label {
    font-size: 18px;
    font-weight: 500;
    text-align: left;
    color: white;
  }

  h3 {
    text-align: left;
    font-size: 16px;
    color: #43464b;
    line-height: 20px;
    overflow: hidden;
    white-space: nowrap;
  }

  .content {
    display: flex;
    justify-content: space-between;

    .content-section {
      width: 74%;
      height: fit-content;
      padding: 15px;
      background: #f26b38;
      color: white;

      table{
        
        color: black;
        width: 100%;

        .right{
          text-align: right;
        }

        th, td {
          text-align: left;
          padding: 8px;

          input{
            width: 70px;
            text-align: center;
            align-item: center;
          }
          input:focus-visible{
            border-width: 0.5px;
            border-style: inset;
            border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
            border-image: initial;
          }
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
      }

      .map{
        width: 100%;
        background-color: #ffffff;
        padding: 30px 10px;
        color: black;

        table{
          border-collapse: separate;
          // border-color: blue;
          // border: 1px solid red;
          width: 100%;
          
          tr{
            margin: auto;
            text-align: center;
            background-color: white;
          
            td{
              // border: 1px solid blue;
              vertical-align: middle;
              display: inline-block;
              width: 20px;
              height: 20px;
              font-size: 12px;
              text-align: center;    
              background-color: #dbdee1;
              line-height: 22px;
              margin: 0 2.5px 5px 2.5px;
              cursor: pointer;
              padding: 0;
            }

            .cell-left{
              margin-right: 20px;
              background-color: white;
              border: .7px solid black;
            }

            .cell-right{
              margin-left: 20px;
              background-color: white;
              border: .7px solid black;
            }
          }
        }

        h3{
          margin-top: 20px;
          text-align:center;
        }
        .screen{
          height: 3px;
          width: 35%;
          margin: auto;
          background-color: gray;
        }
        .div-note{
          width: fit-content;
          margin: 20px auto 0;
        }
        .note{
          width: 15px;
          height: 15px;
          display: inline-block;
          margin: auto 5px auto 10px;
        }
        .chosing{
          background-color: green;
        }
        .sold{
          background-color: red;
        }
        .enable{
          background-color: #dbdee1;
        }
      }

      .sum{
        margin-top: 15px;
        .ant-btn {
          font-size: 14px;
          background: #f26b38;
          width: fit-content;
          color: white;
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
    }

    .event-section {
      width: 27%;
      margin-left: 20px;

      h1 {
        text-align: left;
        font-size: 16px;
        color: black;
        text-transform: uppercase;
        line-height: 20px;
        overflow: hidden;
        white-space: nowrap;
      }

      .content-event{
        background-color: #f1f1f1;
        height: fit-content;
        padding: 10px;

        top: 0px;
        position: relative;
        transition: top 0.3s ease-in-out 0s;
        z-index: 2;

        .div-img{
          width: 100%;
          text-align: center;
          img{
            width: 85%;
            height: auto;
            margin: 10px 0 20px 0;
          }
        }
      
        .ant-divider-horizontal{
          margin: 8px;
        }
        p{
          margin-bottom: 0;
          b{
            margin-right: 15px;
          }
          .color-orange{
            color: #f26b38;
          }
        }

        .ant-btn {
          font-size: 14px;
          background: #f26b38;
          width: fit-content;
          color: white;
          padding: 10px;
          line-height: 1;
          height: auto;
          border: 0.5px solid #f26b38;
          text-align: left;
          margin: 20px 0 10px 0;
        }
        .ant-btn:hover{
          background: #f26b38;
          color: white;
        }

        .btn-back{
          // display:none;
          margin-right: 15px;
        }

      }
    }
  }

  @media screen and (min-width: 320px) and (max-width: 860px){
    .content {
      display: block;

      .content-section{
        width: 85%;
        margin: auto;
      }
      .event-section{
        width: 85%;
        margin: auto;
      }
    }
  }

  #map-section{
    display: none;
  }
`;
