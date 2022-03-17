import styled from "styled-components";
import recent from "../assets/recent.jpeg";

export const SiderContainer = styled.div`
  width: 5%;
  height: 100vh;
  background-color: #eeb1f0;
  padding: 5px;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  flex-direction: column;
  z-index: 9999;
  justify-content: space-between;
  .logo {
    width: 40px;
    height: 50px;
    background-color: #fff;
    margin: 20px auto;
    img {
      width: 100%;
      height: auto;
      object-fit: cover;
    }
  }
  nav {
    width: 100%;
    text-align: center;
    li{
      list-style:none ;
      a{
        padding: 4px;
        border-radius:5px; ;
      }
    }
    i {
      cursor: pointer;
      color: #f9f9f9;
      width:auto ;
      margin-bottom: 33px;
      font-size: 20px;
     
      //display:inline ;
    }
    a:hover {
      background-color: rgba(0, 0, 0, 0.2);
    }
    .active {
      background-color: rgba(0, 0, 0, 0.2);
    }
  }

  .switch {
    height: 100px;
  }
  @media only screen and (max-width:1024px){
    width:15%;
  }
`;

export const CollectionContain = styled.div`
  width: 25%;
  height: 100vh;
  background-color: #fff;
  box-shadow: 0 3px 22px #0000003d;
  padding: 20px;
  border-radius: 20px;
  position: fixed;
  right: 1%;
  top: 0;
  bottom: 0;
  .header {
    h2 {
      font-size: 20px;
    }
  }

  .recent {
    width: 100%;
    height: 200px;
    position: relative;
    .first-shadow,
    .second-shadow {
      width: 80%;
      left: 0;
      right: 0;
      margin-left: auto;
      margin-right: auto;
      height: 100px;
      border-radius: 20px;
      background-color: #eeb1f09c;
      position: absolute;
    }
    .second-shadow {
      width: 90%;
      margin-top: 20px;
      background-color: #eeb1f0d9;
    }
    .the-recent-image {
      width: 100%;
      height: 150px;
      border-radius: 20px;
      background-image: url(${recent});
      background-position: center;
      position: absolute;
      margin-top: 40px;
      background-size: cover;
      box-shadow: 0 0 20px #b5b0ff;
    }
  }

  @media only screen and (max-width:1024px){
    display:none ;
  }
`;

export const LayoutContainer = styled.div`
  display: flex;
  .content {
    width: 68%;
    height: 100vh;
    margin-left: 6%;
    //border:1px solid blue;
    padding: 30px 20px 70px 0;
  }
  @media only screen and (max-width:1024px){
    .content{
      width:83%;
      margin-left:18%;
    }
  }
`;

export const SavedCollection = styled.div``;

export const ImageSliderSaved = styled.div`
  display: flex;
  //width:100%;
  justify-content: center;
  align-items: center;
  .image-saved {
    height: 150px;
    border-radius: 10px;
    width: 200px;
    background-size: cover;
    background-position: center;
  }
`;
