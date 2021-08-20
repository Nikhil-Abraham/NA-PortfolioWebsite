import React from "react";
import styled from "styled-components";
import {
  GrTopCorner,
  GrBottomCorner,
  GrTechnology,
  GrReactjs,
} from "react-icons/gr";

import {
  SiTailwindcss,
  SiDjango,
  SiJavascript,
  SiFlask,
  SiSass,
  SiCss3,
  SiPython,
  SiCodecademy,
} from "react-icons/si";

import { FaSass, FaHtml5, FaJava, FaGit } from "react-icons/fa";

import { DiJavascript1, DiGitBranch } from "react-icons/di";

import { IoLogoJavascript } from "react-icons/io";

function TechStack() {
  return (
    <div>
      <Content>
        <Title>
          <GrTechnology color="#1f2932" size="1.5em" />
          <span>TECHSTACK</span>
        </Title>
        <Technologies>
          <Grid>
            <Block>
              <GrReactjs color="#1f2932" size="1.5em" />
              <span>ReactJS</span>
            </Block>
            <Block>
              <IoLogoJavascript color="#1f2932" size="1.5em" />
              <span>Javascript</span>
            </Block>
            <Block>
              <SiPython color="#1f2932" size="1.5em" />
              <span>Python</span>
            </Block>
            <Block>
              <FaHtml5 color="#1f2932" size="1.5em" />
              <span>HTML5</span>
            </Block>
          </Grid>
          <Grid>
            <Block>
              <SiDjango color="#1f2932" size="1.5em" />
              <span>Django</span>
            </Block>
            <Block>
              <SiFlask color="#1f2932" size="1.5em" />
              <span>Flask</span>
            </Block>
            <Block>
              <FaJava color="#1f2932" size="1.5em" />
              <span>Java</span>
            </Block>
            <Block>
              <SiCss3 color="#1f2932" size="1.5em" />
              <span>CSS</span>
            </Block>
          </Grid>
          <Grid>
            <Block>
              <SiTailwindcss color="#1f2932" size="1.5em" />
              <span>Tailwind CSS</span>
            </Block>
            <Block>
              <FaSass color="#1f2932" size="1.5em" />
              <span>SASS / SCSS</span>
            </Block>
            <Block>
              <SiCodecademy color="#1f2932" size="1.5em" />
              <span>C / C++</span>
            </Block>
            <Block>
              <DiGitBranch color="#1f2932" size="1.5em" />
              <span>Git</span>
            </Block>
          </Grid>
        </Technologies>
      </Content>
    </div>
  );
}

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e9edf0;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  font-size: 20px;
  font-family: "Comfortaa", sans-serif;
  letter-spacing: 2px;
  color: #1f2932;
  margin-top: 20px;
  margin-bottom: 30px;
  span {
    padding-left: 7px;
  }
`;

const Technologies = styled.div`
  display: flex;
  margin-bottom: 50px;
`;

const Grid = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
`;

const Block = styled.div`
  margin: 10px;
  display: flex;
  /* border: 1px solid #1f2932; */
  border-radius: 4px;
  padding: 5px;
  padding-left: 15px;
  align-items: center;
  width: 20vw;
  span {
    padding-left: 25px;
    color: #1f2932;
  }
`;

export default TechStack;
