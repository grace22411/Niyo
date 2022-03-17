import styled from "styled-components";
import image from "../assets/dash10.jpeg";

export const LoginContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  .login-image {
    background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
      url(${image});
    background-size: cover;
    height: inherit;
    padding:30px;
    width: 50%;
    img{
        height:50px;
        width:50px;
    }
  }
  .login-form {
    width: 50%;
    padding: 10% 10% 5% 10%;
    background-color: #fefefe;
    p{
          margin-bottom:30px; ;
          margin:5px 0px 30px 0; ;
      }
    .connect {
      width: 100%;
      height: 45px;
      margin-top: 20px;
      text-align:center ;

      h2{
          color:#0000003D;
          font-weight:400 ;
          
      }
      
      button {
        width: 100%;
        cursor: pointer;
        border-radius: 7px;
        background:transparent ;
        height: inherit;
        display:flex ;
        font-family: "Open Sans", sans-serif;
        padding:10px 30px;
        font-size:15px;
        font-weight:500 ;
        img{
            height:20px;
            width:20px;
            margin-left:auto ;
        }
      }
    }
    .connect-near {
      button {
        border: 1px solid #000;
      }
    }
    .connect-meta {
      button {
        border: 1px solid #f49701ce;
      }
    }

    .connect-email{
        width:100%;
        form{
            margin-top:30px;
            input{
                width:100%;
                height:45px;
                padding-left:30px;
                border:1px solid #00000033;
                background-color:#fff ;
                border-radius:7px ;
                font-family: "Open Sans", sans-serif;
            }
            button{
                width:100%;
                height:45px;
                border:none;
                background-color:  #f49701ce;;
                color:#ffffff;
                font-size:15px;
                font-weight:500 ;

                border-radius:7px ;
                margin-top:20px;
                font-family: "Open Sans", sans-serif;
            }
        }
    }
    h1 {
      font-size: 50px;
      margin: 0;
    }
  }
  @media only screen and (max-width:994px){
    flex-direction:column ;
    .login-image{
        display:none ;
    }
    .login-form{
        width:100%;
        h1{
            font-size:40px; ;
        }
    }
  }

`;
