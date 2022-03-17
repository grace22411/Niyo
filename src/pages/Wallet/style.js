import styled from "styled-components";

export const WalletContainer = styled.div`
  width: 100%;
  height: 100vh;
  // display:flex ;
  //justify-content:center ;
  //align-items:center ;
  .connect {
    width: 100%;
    text-align: center;
    margin-top: 50px;
    button {
      border: none;
      color: #f49701ce;
      height: 30px;
      border-radius: 20px;
      width: auto;
      padding:5px 20px;
      font-size: 16px;
      cursor: pointer;
      font-weight: 700;
      background-color: #fff;
      box-shadow: 0 3px 6px #00000030;
    }
    img {
      width: 70px;
      height: 70px;
    }
    @media only screen and (max-width: 1024px) {
        button{
            width:170px;
        }
    }
  }
`;
