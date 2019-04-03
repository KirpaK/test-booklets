import React from "react";

const Layout = ({ children }) => (
  <div>
    <div>Список животных</div>
    <div>{children}</div>
  </div>
);

export default Layout;
