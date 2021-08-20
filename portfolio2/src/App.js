import "./App.css";
import styled from "styled-components";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <Hero>
        <Profile src="images/bio.jpg" />
        <Data>
          <Name>Nikhil Abraham</Name>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
            deleniti.
          </p>
        </Data>
        <Social>
          <a href="">
            <FaInstagram size="1.6em" color="#fff" />
          </a>
          <a href="">
            <FaLinkedin size="1.6em" color="#fff" />
          </a>
          <a href="">
            <FaGithub size="1.6em" color="#fff" />
          </a>
        </Social>
      </Hero>
    </div>
  );
}

const Hero = styled.div`
  display: flex;
  height: 80vh;
  width: 100%;
  justify-content: space-between;
  background-color: #1f2932;
`;

const Profile = styled.img`
  object-fit: contain;
  height: 80vh;
`;

const Data = styled.div`
  color: white;
  flex-grow: 1;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Name = styled.span`
  font-family: "Marck Script", sans-serif;
  font-weight: bold;
  font-size: 3em;
`;

const Social = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-top: 30vh;
  a {
    padding: 6px;
  }
`;

export default App;
