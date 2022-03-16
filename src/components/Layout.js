import React, { FC } from "react";
import Collection from "./Collection";
import Sidebar from "./Sidebar";
import { LayoutContainer } from "./styles";

export const Layout = ({ children }) => {
  return (
    <>
      <LayoutContainer>
        <Sidebar />
        <div className="content">{children}</div>
        <Collection />
      </LayoutContainer>
    </>
  );
};
