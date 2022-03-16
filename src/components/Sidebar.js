import React from "react";
import { SiderContainer } from "./styles";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";


const Sidebar = () => {
  return (
    <SiderContainer>
      <div className="logo">
        <img src={logo} alt="Niyo Logo" />
      </div>

      <nav>
      <Link to="/dashboard"><i class="fas fa-home"></i></Link>
        <i className="fas fa-comment-dots"></i>
        <i class="fas fa-megaphone"></i>
        <i className="fas fa-bell"></i>
       <Link to="/dashboard/wallet"> <i className="fas fa-wallet"></i></Link>
      </nav>

      <div className="switch">
          </div>
    </SiderContainer>
  );
};

export default Sidebar;
