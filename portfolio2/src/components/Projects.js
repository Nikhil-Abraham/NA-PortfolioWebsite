import React from "react";
import styled from "styled-components";

function Projects() {
  return (
    <Background>
      <Content>Hey These are my projects!!!</Content>
    </Background>
  );
}

const Background = styled.div`
  background-image: url("images/bg3.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
`;

const Content = styled.div`
  background-color: #1f29329f;
  height: inherit;
`;

export default Projects;
