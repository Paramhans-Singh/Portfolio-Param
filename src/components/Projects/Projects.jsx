import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import busbooker from "../../Assets/Projects/busbooker.png";
import iosd from "../../Assets/Projects/iosd.png";
import chat from "../../Assets/Projects/chat.png";
import mart from "../../Assets/Projects/5mart.png";
import codeeditor from "../../Assets/Projects/codeeditor.png";
import cuckoo from "../../Assets/Projects/cuckoo.png";
import eatfit from "../../Assets/Projects/eatfit.png";
import geekguru from "../../Assets/Projects/geekguru.png";
import grubhub from "../../Assets/Projects/grubhub.png";
import projectlist from "../../Assets/Projects/techproject.png";
import placement from "../../Assets/Projects/placement.png";
import indchat from "../../Assets/Projects/indchat.png";
import impulse from "../../Assets/Projects/impulse.png";
import gallery from "../../Assets/Projects/gallery.png";
import film from "../../Assets/Projects/film.png";
import snip from "../../Assets/Projects/snip.png";
import foodie from "../../Assets/Projects/foodie.png";
import gana from "../../Assets/Projects/gana.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={indchat}
              isBlog={false}
              title="IndChat"
              description=" Tech Project List - website showcases a comprehensive catalog of all my projects developed using various technology stacks. Built with React and styled with CSS, the website presents a clean and organized list of each project."
              ghLink="https://github.com/Paramhans-Singh/My-Tech-Projects"
              demoLink="https://my-tech-projects.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={grubhub}
              isBlog={false}
              title="GrubHub"
              description="GrubHub a MERN stack food app offers a user-friendly React frontend for seamless browsing and ordering Powered by Express Js and MongoDB it ensures secure transactions efficient order management and a delightful food ordering experience"
              ghLink="https://github.com/Paramhans-Singh/GrubHub"
              demoLink="https://grub-hubs.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={projectlist}
              isBlog={false}
              title="My Tech Project-List"
              description=" Tech Project List - website showcases a comprehensive catalog of all my projects developed using various technology stacks. Built with React and styled with CSS, the website presents a clean and organized list of each project."
              ghLink="https://github.com/Paramhans-Singh/My-Tech-Projects"
              demoLink="https://my-tech-projects.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={impulse}
              isBlog={false}
              title="Impulse"
              description=" Tech Project List - website showcases a comprehensive catalog of all my projects developed using various technology stacks. Built with React and styled with CSS, the website presents a clean and organized list of each project."
              ghLink="https://github.com/Paramhans-Singh/My-Tech-Projects"
              demoLink="https://my-tech-projects.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eatfit}
              isBlog={false}
              title="Eatfit"
              description=" Tech Project List - website showcases a comprehensive catalog of all my projects developed using various technology stacks. Built with React and styled with CSS, the website presents a clean and organized list of each project."
              ghLink="https://github.com/Paramhans-Singh/My-Tech-Projects"
              demoLink="https://my-tech-projects.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chat}
              isBlog={false}
              title="Chat-X"
              description="ChatX, a MERN stack chatting engine with Socket.io, provides real-time communication through React. Supported by Express.js and MongoDB, it ensures seamless and instant messaging experiences with dynamic updates and efficient data synchronization."
              ghLink="https://github.com/Paramhans-Singh/Chat-X"
              demoLink="https://github.com/Paramhans-Singh/Chat-X"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={geekguru}
              isBlog={false}
              title="GeekGuru"
              description="GeekGuru, a MERN stack eLearning platform, leverages React for an intuitive user interface. Fueled by Express.js and MongoDB, it delivers a robust learning experience with personalized courses, interactive content, and comprehensive progress tracking."
              ghLink="https://github.com/Paramhans-Singh/Geek-Gurus"
              demoLink="https://geek-gurus.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={busbooker}
              isBlog={false}
              title="BusBooker"
              description="BusBooker, a MERN stack bus booking app, employs React for a user-friendly interface. Driven by Express.js and MongoDB, it streamlines the booking process, offering users a seamless experience to find, reserve, and manage bus tickets."
              ghLink="https://github.com/Paramhans-Singh/BusBooker"
              demoLink="https://github.com/Paramhans-Singh/BusBooker"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={placement}
              isBlog={false}
              title="Placement Hub"
              description=" Tech Project List - website showcases a comprehensive catalog of all my projects developed using various technology stacks. Built with React and styled with CSS, the website presents a clean and organized list of each project."
              ghLink="https://github.com/Paramhans-Singh/My-Tech-Projects"
              demoLink="https://my-tech-projects.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gallery}
              isBlog={false}
              title="Gallery Ellite"
              description=" Tech Project List - website showcases a comprehensive catalog of all my projects developed using various technology stacks. Built with React and styled with CSS, the website presents a clean and organized list of each project."
              ghLink="https://github.com/Paramhans-Singh/My-Tech-Projects"
              demoLink="https://my-tech-projects.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={snip}
              isBlog={false}
              title="Short Snip"
              description=" Tech Project List - website showcases a comprehensive catalog of all my projects developed using various technology stacks. Built with React and styled with CSS, the website presents a clean and organized list of each project."
              ghLink="https://github.com/Paramhans-Singh/My-Tech-Projects"
              demoLink="https://my-tech-projects.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={iosd}
              isBlog={false}
              title="IOSD Website"
              description="The IOSD Website, built on the MERN stack, serves as a centralized hub for a college society, providing students with easy access to event details, announcements, and educational resources. Its intuitive interface fosters community engagement and collaboration within the Institute. "
              ghLink="https://github.com/Paramhans-Singh/IOSD"
              demoLink="https://iosd.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={film}
              isBlog={false}
              title="FilmSafari"
              description=" Tech Project List - website showcases a comprehensive catalog of all my projects developed using various technology stacks. Built with React and styled with CSS, the website presents a clean and organized list of each project."
              ghLink="https://github.com/Paramhans-Singh/My-Tech-Projects"
              demoLink="https://my-tech-projects.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cuckoo}
              isBlog={false}
              title="Cuckoo | DRDO Project"
              description=" Tech Project List - website showcases a comprehensive catalog of all my projects developed using various technology stacks. Built with React and styled with CSS, the website presents a clean and organized list of each project."
              ghLink="https://github.com/Paramhans-Singh/My-Tech-Projects"
              demoLink="https://my-tech-projects.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={codeeditor}
              isBlog={false}
              title="Code Canvas"
              description=" Tech Project List - website showcases a comprehensive catalog of all my projects developed using various technology stacks. Built with React and styled with CSS, the website presents a clean and organized list of each project."
              ghLink="https://github.com/Paramhans-Singh/My-Tech-Projects"
              demoLink="https://my-tech-projects.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mart}
              isBlog={false}
              title="5 Mart"
              description=" Tech Project List - website showcases a comprehensive catalog of all my projects developed using various technology stacks. Built with React and styled with CSS, the website presents a clean and organized list of each project."
              ghLink="https://github.com/Paramhans-Singh/My-Tech-Projects"
              demoLink="https://my-tech-projects.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foodie}
              isBlog={false}
              title="Foodie"
              description=" Tech Project List - website showcases a comprehensive catalog of all my projects developed using various technology stacks. Built with React and styled with CSS, the website presents a clean and organized list of each project."
              ghLink="https://github.com/Paramhans-Singh/My-Tech-Projects"
              demoLink="https://my-tech-projects.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gana}
              isBlog={false}
              title="Gaana Mart"
              description=" Tech Project List - website showcases a comprehensive catalog of all my projects developed using various technology stacks. Built with React and styled with CSS, the website presents a clean and organized list of each project."
              ghLink="https://github.com/Paramhans-Singh/My-Tech-Projects"
              demoLink="https://my-tech-projects.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
