import React from "react";
import { SiderContainer } from "./styles";
import logo from "../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Sidebar = () => {
  const location = useLocation(); // once ready it returns the 'window.location' object
  const [url, setUrl] = useState(null);
  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);

  return (
    <SiderContainer>
      <div className="logo">
        <img src={logo} alt="Niyo Logo" />
      </div>

      <nav>
        <li>
          <Link
            className={url === "/dashboard" ? " active" : ""}
            to="/dashboard"
          >
            <i className="fas fa-home "></i>
          </Link>
        </li>
        <li>
          <Link to="/dashboard">
            <i className="fas fa-comment-dots"></i>{" "}
          </Link>
        </li>
        <li>
          <Link to="/dashboard">
            {" "}
            <i className="fas fa-megaphone"></i>
          </Link>
        </li>
        <li>
          {" "}
          <Link to="/dashboard">
            <i className="fas fa-bell"></i>
          </Link>
        </li>
        <li>
          <Link
            className={url === "/dashboard/wallet" ? " active" : ""}
            to="/dashboard/wallet"
          >
            {" "}
            <i className="fas fa-wallet"></i>
          </Link>
        </li>
      </nav>

      <div className="switch"></div>
    </SiderContainer>
  );
};

export default Sidebar;
