import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.css";

// Componets
import Nav from "../components/Nav";

const Layout = ({ children }) => {
  return (
    <div>
      {/* TODO: Add SEO Components  */}
      <Nav />
      <div className="container layout">{children}</div>
      {/* TODO: Footer */}
    </div>
  );
};
export default Layout;
