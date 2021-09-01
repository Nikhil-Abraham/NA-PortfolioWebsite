import React from "react";
import styled from "styled-components";

function Projects() {
  return (
    <Background>
      <Content>&#60; Projects &#47; &#62;</Content>
    </Background>
  );
}

const Background = styled.div`
  /* background-image: url("images/bg3.jpg"); */
  background-color: #e9edf0;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
`;

const Content = styled.div`
  font-size: 25px;
  font-family: "Comfortaa", cursive;
  height: inherit;
`;

export default Projects;
