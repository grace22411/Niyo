import React, { FC } from "react";
import Collection from "./Collection";
import Sidebar from "./Sidebar";
import { LayoutContainer } from "./styles";
import { Outlet } from "react-router";

export const Layout = ({ children }) => {
  return (
    <>
      <LayoutContainer>
        <Sidebar />
        <div className="content">
          <Outlet />
        </div>
        <Collection />
      </LayoutContainer>
    </>
  );
};
