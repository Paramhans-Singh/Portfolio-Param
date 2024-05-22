import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import { ImPointRight } from "react-icons/im";

import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "3em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              {/* Hi Everyone  */}
              {/* <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
            </span> */}
              {/* &nbsp; */}

              <ImPointRight /> I am an upcoming <b className="purple">Research & Development Intern at Mitacs GRI (Onsite Canada Intern).</b>
              <br />
              <br />
              <ImPointRight /> I am currently pursuing a Bachelor of Technology in Computer Science from Guru Gobind Singh Indraprastha University
              <b className="purple"> with a stellar CGPA of 9.41.</b>
              <br />
              <br />  
              <ImPointRight /> I have honed my skills in
              <b className="purple"> Full Stack development, AI & ML, CyberSecurity, and Problem Solving. </b>
              <br />
              <br />

              <ImPointRight /> My professional experiences includes &nbsp;
              <b className="purple">Research and Development Intern at DRDO, </b>
              <b className="purple">
                Software Development Intern at SqaureBoat, </b>and
              <b className="purple"> Software Developer at Turing </b>have equipped me with a solid foundation to tackle challenges and
              deliver impactful results.
              <br />
              <br />
            </p>

          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Paramhans-Singh"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/ParamSingh1303"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/paramhans-singh13/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;