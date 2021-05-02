import styled from 'styled-components';

export const SelectTicketWrapper = styled.div`
  margin: 20px auto 20px auto;
  width: 1250px;
  max-width: 100%;

  & * {
    text-align: left;
  }

  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: #f26c39;
    text-shadow: 0 0 0.25px currentColor;
  }

  .container {
    .ant-tabs-ink-bar{
      backgound: #f26c39 !important;
    }
    .ant-tabs-int-bar-animated{
      backgound: #f26c39 !important;

    }
  }
  
  .ant-tabs-tab:hover>.ant-tabs-tab-btn{
    color: #f26c39;
    text-shadow: 0 0 0.25px currentColor;
  }

  .flex{
    display: flex;
    .col-width{
      width: 30%;
    }
  }

  @media screen and (min-width: 220px) and (max-width: 850px){
    .flex {
      display: block;
      .col-width{
        width: 100%;
      }
    }
  }
`;
