import React from "react";
import styled from "styled-components";

function Button(props) {
  const Button = styled.a`
    background: ${(props) => (props.primary === true ? "#494858" : "white")};
    color: ${(props) => (props.primary === true ? "white" : "#494858")};
    ${(props) => (props.success === true ? "background: #28c76e" : null)};
    ${(props) => (props.success === true ? "color: #fff" : null)};
    margin: 1em;
    border: 1px solid #494858;
    ${(props) => (props.success === true ? "border: 1px solid #28c76e" : null)};
    border-radius: 3px;
    display: block;
    /* width: 80%; */
    margin: 0 auto;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    font-size: 0.875rem;
    letter-spacing: 0.3px;
    text-transform: uppercase;
    padding: 0.53125rem 1.5rem;
    /* max-width: 200px; */
    ${(props) =>
      props.hoverefect === true ? "transition: all 0.5s ease;" : null}
    &:hover {
      ${(props) =>
        props.hoverefect === true ? "transition: all 0.5s ease;" : null};
      background: ${(props) => (props.primary === true ? "#fff" : "#5c5a6e")};
      color: ${(props) => (props.primary === true ? "#5c5a6e" : "#fff")};
      border: 1px solid
        ${(props) => (props.primary === true ? "#5c5a6e" : "#5c5a6e")};
      box-shadow: 0 14px 26px -12px rgba(142, 141, 162, 0.42),
        0 4px 23px 0 rgba(142, 141, 162, 0.12),
        0 8px 10px -5px rgba(142, 141, 162, 0.2);
      /* height: 100% !important;
      position: absolute !important;
      height: auto !important;
      width: 100% !important;
      top: 0 !important;
      left: 0 !important;
      height: 100vh !important;
      box-sizing: border-box !important;
      opacity: 0.5 !important;
      margin: 0px !important;
      background: #fff !important;
      border: 0 !important; */
    }
  `;
  return (
    <Button {...props} clasName="btn">
      {props.children}
    </Button>
  );
}
export default Button;
