import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ExperienceCards";
import Particle from "../Particle";
import squareboat from "../../Assets/Experience/squareboat.png";
import drdo from "../../Assets/Experience/drdo.png";
import turing from "../../Assets/Experience/turing.png";
import algoexpert from "../../Assets/Experience/algoexpert.png";
import ssoc from "../../Assets/Experience/ssoc.png";
import gssoc from "../../Assets/Experience/gssoc.png";
import codingninja from "../../Assets/Experience/codingninja.png";
import mitacs from "../../Assets/Experience/mitacs.png";
import ryerson from "../../Assets/Experience/ryerson.png";
import germany from "../../Assets/Experience/germany.png";
import finland from "../../Assets/Experience/finland.png";
import gdsc from "../../Assets/Experience/gdsc.png";
import iosd from "../../Assets/Experience/iosd.png";
import twilearn from "../../Assets/Experience/twilearn.png";
import placement from "../../Assets/Experience/placement.png";
import microsoft from "../../Assets/Experience/microsoft.png";

function Experience() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Work <strong className="purple">Experience </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are my all interships I have done.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mitacs}
              isBlog={false}
              title="Mitacs GRI - Onsite Canada Internship"
              post="Research and Devlopment Intern"
              date="Upcoming"
              location="Toronto, Canada"
              description={
                <>
                  <ul>
                    <li>
                      Pioneering cutting-edge solutions in dynamic cross-device
                      interactions and collaborative applications, with a strong
                      emphasis on bolstering cybersecurity measures.
                    </li>
                    <li>
                      Innovating secure gesture-based techniques for seamless
                      connecting and disconnecting of devices, as well as
                      enabling the fluid movement of interactive objects across
                      different platforms.
                    </li>
                  </ul>
                </>
              }
              cerLink="https://drive.google.com/file/d/1KzoWk25AG14FQ7sZlnsl4o58ujhkjWrk/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={germany}
              isBlog={false}
              title="Leuphana University - Germany Internship"
              post="Research Intern"
              date="Upcoming"
              location="Remote, Germany"
              description={
                <>
                  <ul>
                    <li>
                      Spearheaded a groundbreaking research project within the
                      NFDI4Datascience framework, utilizing known fraud cases
                      for innovative few-shot learning applications.
                    </li>
                    <li>
                      Pioneered a prompt-based setup leveraging state-of-the-art
                      AI technologies, including Large Language Models and
                      advanced Prompt Engineering techniques, to uncover and
                      dismantle illicit networks in scientific publishing.
                    </li>
                  </ul>
                </>
              }
              cerLink="https://drive.google.com/file/d/1DCjrMxQIqDxnVA4nv6rzZCn2wdonsHKM/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ryerson}
              isBlog={false}
              title="Ryerson University - Onsite Canada Internship"
              post="Research and Devlopment Intern"
              date="Upcoming"
              location="Toronto, Canada"
              description={
                <>
                  <ul>
                    <li>
                      Researching dynamic cross-device interactions and
                      collaborative applications, focusing on Cybersecurity
                      measures and incorporating MERN stack and Machine Learning
                      technologies.
                    </li>
                    <li>
                      Developing technologies for secure connecting and
                      disconnecting of multiple devices with gestures, moving
                      interactive objects across devices.
                    </li>
                  </ul>
                </>
              }
              cerLink="https://drive.google.com/file/d/1KzoWk25AG14FQ7sZlnsl4o58ujhkjWrk/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={microsoft}
              isBlog={false}
              title="Microsoft"
              post=" Learn Student Ambassador"
              date="Feb 2023 - Jan 2024"
              location="New Delhi, India"
              description={
                <>
                  <ul>
                    <li>
                      Establish a vibrant and inclusive community of students
                      passionate about technology, organizing engaging events,
                      and workshops to foster collaboration and mutual support
                      among members.
                    </li>
                    <li>
                      Work closely with educators and academic institutions to
                      develop and implement initiatives that integrate Microsoft
                      technologies seamlessly into educational curricula.
                    </li>
                  </ul>
                </>
              }
              cerLink="https://drive.google.com/file/d/10t8wYKXMAz9XMOQotVCy98SorGvrG9SP/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={turing}
              isBlog={false}
              title="Turing"
              post="Software Developer"
              date="Dec 22 - Jan 23"
              location="Remote, USA"
              description={
                <>
                  <ul>
                    <li>
                      Utilized React JS to design both client-side and
                      server-side architecture, resulting in a notable 25%
                      increase in sales and revenue for the project.
                    </li>
                    <li>
                      Successfully integrated back-end APIs to showcase data
                      through custom components and Redux, enhancing the user
                      experience and functionality of the application.
                    </li>
                  </ul>
                </>
              }
              cerLink="https://drive.google.com/file/d/1R10wfP4-QKUKUk2IInammR-bBPqqpoM8/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={finland}
              isBlog={false}
              title="University of Oulu - Finland Internship"
              post="Research Intern"
              date="Jan 2024 - Apr 2024"
              location="Remote, Finland"
              description={
                <>
                  <ul>
                    <li>
                      Developing an advanced Car Tracing System for Theft
                      Detection through the utilization of computer vision and
                      deep learning technologies.
                    </li>
                    <li>
                      Deployed cutting-edge computer vision algorithms such as
                      Convolutional Neural Networks (CNNs) for accurate vehicle
                      detection, tracking, and recognition.
                    </li>
                    <li>
                      Emphasized swift real-time processing of camera footage
                      for prompt identification and monitoring of stolen
                      vehicles.
                    </li>
                  </ul>
                </>
              }
              cerLink="https://drive.google.com/file/d/1Rmet-nj6JZc7AG4o4YIlNb6a8En22BBj/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={squareboat}
              isBlog={false}
              title="SquareBoat"
              post="Software Developer"
              date="Apr 23 - June 23"
              location="Gurugram, Haryana"
              description={
                <>
                  <ul>
                    <li>
                      Collaborated with the development team to enhance various
                      aspects of the project, resulting in a notable 25%
                      decrease in the number of bugs and ensuring a more stable
                      and reliable software product.
                    </li>
                    <li>
                      Took charge of leading a team of 5 developers in the
                      creation of a full-stack web application, leading to a
                      significant 40% increase in user engagement and
                      satisfaction with the platform.
                    </li>
                  </ul>
                </>
              }
              cerLink="https://drive.google.com/file/d/1DdwgfREXIs5-LwbG0YQW3e_MKn4xtzeb/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gdsc}
              isBlog={false}
              title="Google Developer Student Club"
              post="Open Source Mentor"
              date="Aug 2023 - Present"
              location="New Delhi, India"
              description={
                <>
                  <ul>
                    <li>
                      Guided and mentored 1000+ students in contributing to
                      open-source projects within the Google Developers Students
                      Club (GDSC) community.
                    </li>
                    <li>
                      Organized over 15+ events and hackathons to enhance the
                      open-source community in college.
                    </li>
                    <li>
                      Provided support and guidance to budding developers in
                      navigating the open-source ecosystem.
                    </li>
                  </ul>
                </>
              }
              cerLink="https://drive.google.com/file/d/120kuDTEq0jKYRztLjeZUSQ-gWlN4rt_K/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={drdo}
              isBlog={false}
              title="DRDO - CFEES"
              post="Research and Devlopment Intern"
              date="May 23 - Aug 23"
              location="New Delhi,India"
              description={
                <>
                  <ul>
                    <li>
                      Successfully spearheaded the implementation of Cuckoo
                      sandbox technology for malware analysis, leading to a
                      significant 60% reduction in successful cyberattacks and
                      enhancing the overall cybersecurity posture of the
                      organization.
                    </li>

                    <li>
                      Received Letter of Recommendation from Government of India
                      (DRDO) and 2 from the University for my outstanding
                      research work.
                    </li>
                  </ul>
                </>
              }
              cerLink="https://drive.google.com/file/d/1dfKlfjemINdmJ2UFsyrl4q9jcnTyT7jd/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={iosd}
              isBlog={false}
              title="International Organization of Software Developers"
              post="Web Development Head"
              date="Apr 2023 - Apr 2024"
              location="New Delhi, India"
              description={
                <>
                  <ul>
                    <li>
                      Led a team of web developers within the IOSD (Society of
                      University), overseeing the planning and execution of web
                      development projects.
                    </li>
                    <li>
                      Managed project timelines, resource allocation, and task
                      delegation to ensure timely delivery of high-quality web
                      solutions.
                    </li>
                  </ul>
                </>
              }
              cerLink="https://drive.google.com/file/d/19aK9xxHFpVcvAi-zSmdJ7QAGQE5uLo6h/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gssoc}
              isBlog={false}
              title="GirlScript Summer of Code"
              post="Mentor & Open Source Developer"
              date="May 23 - Aug 23"
              location="Gurgaon, India"
              description={
                <>
                  <ul>
                    <li>
                      Providing personalized guidance and support to mentees in
                      GSSOC, focusing on their open-source project development
                      journey.
                    </li>

                    <li>
                      Achieved a commendable ranking in the Top 20 of GSSOC,
                      showcasing my proficiency and dedication in open-source
                      development and contributing positively to the community.
                    </li>
                  </ul>
                </>
              }
              cerLink="https://drive.google.com/file/d/1casDO3eu5F6yN1lRV4ntSWe0S4kulgeo/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={algoexpert}
              isBlog={false}
              title="AlgoExpert"
              post="Problem Setter and Mentor"
              date="Oct 22 - Feb 23"
              location="New Delhi, India"
              description={
                <>
                  <ul>
                    <li>
                      Serving as a Problem Setter at AlgoExpert, responsible for
                      curating intellectually stimulating questions,
                      contributing to 80% of the platform's question bank
                      expansion.
                    </li>
                    <li>
                      Crafted over 300 new questions spanning various difficulty
                      levels and topics, representing a 50% increase in
                      available content for contests and courses.
                    </li>
                  </ul>
                </>
              }
              cerLink="https://drive.google.com/file/d/12ZGX4O3GLOKrBej_L3gTgvZwHXXaTvPN/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ssoc}
              isBlog={false}
              title="Social(Formerly Script Foundation)"
              post="Open Source Developer"
              date="May 23 - Aug 23"
              location="Noida, India"
              description={
                <>
                  <ul>
                    <li>
                      Achieved a notable ranking in the Top 20 of SSOC,
                      demonstrating my proficiency and dedication in the field
                      of open-source development and web development.
                    </li>
                    <li>
                      Received exciting swags and prizes from the esteemed Team
                      SSOC as a token of appreciation for my hard work and
                      commitment towards enhancing my skills in open-source and
                      web development.
                    </li>
                  </ul>
                </>
              }
              cerLink="https://drive.google.com/file/d/14LVFZMk1ltg3aTcYrXRyTLTxS0JkdJwH/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={codingninja}
              isBlog={false}
              title="Coding Ninja"
              post="SME (Strategy Mentor) & Teaching Assistant"
              date="Sep 23 - Dec 23"
              location="Gurgaon, India"
              description={
                <>
                  <ul>
                    <li>
                      Developed lesson plans and course modules to increase
                      student engagement and understanding of complex topics in
                      the JAVA course on Data Structures and Algorithms.{" "}
                    </li>
                    <li>
                      Collaborated with the course instructor to continuously
                      evaluate and improve the curriculum based on student
                      feedback and performance data.
                    </li>
                  </ul>
                </>
              }
              cerLink="https://drive.google.com/file/d/1CBKHgEfl2Z2Qm3P91kZ9ZddT00hNnqGm/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={twilearn}
              isBlog={false}
              title="TwiLearn"
              post="Full Stack Developer"
              date="Mar 22 - July 22"
              location="New Delhi, India"
              description={
                <>
                  <ul>
                    <li>
                      Worked on backend APIs, contributing to 70% of the
                      project's functionality and seamless data exchange.
                    </li>
                    <li>
                      Contributed to overall design decisions, accounting for
                      30% of the project's architectural coherence and
                      efficiency.
                    </li>
                    <li>
                      Implemented robust error handling mechanisms within
                      backend APIs, ensuring a 95% reduction in system downtime
                      due to unforeseen errors.
                    </li>
                  </ul>
                </>
              }
              cerLink="https://drive.google.com/file/d/1BE4bFTh3JQG_9jBAURFM2WSljHW92mAC/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={placement}
              isBlog={false}
              title="Placement Hub"
              post="Founder"
              date="Feb 23 - Oct 23"
              location="New Delhi, India"
              description={
                <>
                  <ul>
                    <li>We make careers, not just jobs!</li>
                    <li>
                      We are the one-stop solution for Jobs, Internships,
                      Meetups, and Contests. We are a Community of 2000+
                      students teaching and taking sessions on Placement related
                      stuff
                    </li>
                    <li>We are India's first 24*7 job update news channel</li>
                  </ul>
                </>
              }
              cerLink="https://drive.google.com/file/d/1n46GNIjtmuDe4EEZQ93kCPDNCVaP4GZV/view?usp=sharing"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;
