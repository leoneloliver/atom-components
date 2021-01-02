import React from "react";
// import styled from "styled-components";

function Header(props) {
  const logo =
    "https://assets-global.website-files.com/5b47dc5949f3e10d61a3498c/5e9e08730ef4457aed0baff5_forever-21-logo-png--4750.png";
  return (
    <header>
      <h2>
        <img src={logo} className="logo" />
      </h2>
    </header>
  );
}
export default Header;
