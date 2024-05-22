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
              post = "Research and Devlopment Intern"
              date="Upcoming"
              location= "Toronto, Canada"
              description={<>
              <ul>
                <li>Pioneering cutting-edge solutions in dynamic cross-device interactions and collaborative applications, 
                with a strong emphasis on bolstering cybersecurity measures.</li>
                <li>Innovating secure gesture-based techniques for seamless connecting and disconnecting of devices, as well as enabling the 
                fluid movement of interactive objects across different platforms.</li></ul></>}
              cerLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={germany}
              isBlog={false}
              title="Leuphana University - Germany Internship"
              post = "Research Intern"
              date="Upcoming"
              location= "Remote, Germany"
              description={<>
              <ul>
                <li>Spearheaded a groundbreaking research project within the NFDI4Datascience framework, 
                utilizing known fraud cases for innovative few-shot learning applications.</li>
                <li>Pioneered a prompt-based setup leveraging state-of-the-art AI technologies, including Large Language Models 
                  and advanced Prompt Engineering techniques, to uncover and dismantle illicit networks in scientific publishing.</li>
                </ul>
                </>}
              cerLink=""
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ryerson}
              isBlog={false}
              title="Ryerson University - Onsite Canada Internship"
              post = "Research and Devlopment Intern"
              date="Upcoming"
              location= "Toronto, Canada"
              description={<>
              <ul>
              <li>Researching dynamic cross-device interactions and collaborative applications, focusing on
                 Cybersecurity measures and incorporating MERN stack and Machine Learning technologies.</li>
                <li>Developing technologies for secure connecting and disconnecting of multiple devices with gestures, moving 
                  interactive objects across devices.</li>
                  </ul>
                </>}
             cerLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={drdo}
              isBlog={false}
              title="DRDO - CFEES"
              post = "Research and Devlopment Intern"
              date="May 23 - Aug 23"
              location= "New Delhi,India"
              description={
                <>
                <ul>
                  <li> Successfully spearheaded the implementation of Cuckoo sandbox technology for malware analysis, leading to a 
                    significant 60% reduction in successful cyberattacks and enhancing the overall cybersecurity posture of the 
                    organization.</li>
             <li>Analyzed and effectively mitigated malicious files, contributing to a 5% decrease in malware infections and ensuring a more
              secure computing environment for users.</li>
              <li>Received two Letters of Recommendation from prestigious institutions such as the University and the Government of India DRDO for
                 my outstanding research work, highlighting my expertise and dedication in the field of cybersecurity and technology.</li>
              </ul>
              </>}
              cerLink="https://drive.google.com/file/d/1GgX5QDUjyI_tKmxbj15xD44EBjXpXvNw/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={squareboat}
              isBlog={false}
              title="SquareBoat"
              post="Software Developer"
              date="Apr 23 - June 23"
              location="Delhi, India"
              description={
                <>
                <ul>
                  <li>Spearheaded the implementation of Cuckoo sandbox technology for malware analysis, resulting in a 60% reduction in
              successful cyberattacks and ensuring a secure web environment</li>
              <li>Got 2 Letter of Recommendation from the University and
              DRDO for the research work.</li>
              </ul>
              </>}
              cerLink="https://drive.google.com/file/d/1D-OoGcxHfMq1VrVs6HIH-b8qMCsGe0Gv/view?usp=sharing"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={turing}
              isBlog={false}
              title="Turing"
              post="Software Developer"
              date="Dec 22 - Jan 23"
              location="Gurgaon, India"
              description={
                <>
                <ul>
                  <li>Spearheaded the implementation of Cuckoo sandbox technology for malware analysis, resulting in a 60% reduction in
              successful cyberattacks and ensuring a secure web environment</li>
              <li>Got 2 Letter of Recommendation from the University and
              DRDO for the research work.</li>
              </ul>
              </>}
              cerLink="https://drive.google.com/file/d/1r_cZ4EsUQPkH73CGi-X_6vWiyU1VhAp7/view?usp=sharing"
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
                  <li>Spearheaded the implementation of Cuckoo sandbox technology for malware analysis, resulting in a 60% reduction in
              successful cyberattacks and ensuring a secure web environment</li>
              <li>Got 2 Letter of Recommendation from the University and
              DRDO for the research work.</li>
              </ul>
              </>}
              cerLink="https://drive.google.com/file/d/1XpnqR6_VIYkkN952NMF8KCIe7PukZgNr/view?usp=sharing"
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
                  <li>- Achieved a notable ranking in the Top 20 of SSOC, demonstrating my proficiency and dedication in the field of 
                    open-source development and web development.</li>
                    <li>Received exciting swags and prizes from the esteemed Team SSOC as a token of appreciation for my hard work 
                      and commitment towards enhancing my skills in open-source and web development.</li>
                    <li>Enhanced my expertise in open-source development and web development through active participation in SSOC, 
                      gaining valuable experience in collaborative coding, project management, and the latest technologies and tools 
                      in the industry.</li>
              </ul>
              </>}
              cerLink="https://drive.google.com/file/d/1aIZFDXXd9zR231jh0clZyfnCWyh4zk-f/view?usp=sharing"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gssoc}
              isBlog={false}
              title="GirlScript Summer of Code"
              post="Open Source Developer"
              date="May 23 - Aug 23"
              location="Gurgaon, India"
              description={
                <>
                <ul>
                  <li>Achieved a commendable ranking in the Top 20 of GSSOC, showcasing my proficiency and dedication in open-source 
                    development and contributing positively to the community.</li>
                  <li>Received exciting swags and prizes from the esteemed Team GSSOC as a token of appreciation for my hard work 
                    and commitment towards open-source projects.</li>
                  <li>Enhanced my skills in open-source development by actively participating in GSSOC, gaining practical experience 
                    and knowledge in collaborative coding, project management, and community engagement.</li>
              </ul>
              </>}
              cerLink="https://drive.google.com/file/d/172IjK0VNpkQlqrRwx3OvR7cAXFP3Zn8K/view?usp=sharing"
            />

          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={codingninja}
              isBlog={false}
              title="Coding Ninja"
              post="Teaching Assistant"
              date="Apr 23 - Sep 23"
              location="Gurgaon, India"
              description= {
                <>
                <ul>
                  <li>Developed lesson plans and course modules to increase student engagement and understanding of complex topics 
                    in the JAVA course on Data Structures and Algorithms. </li>
              <li>Collaborated with the course instructor to continuously evaluate and improve the curriculum based on student 
                feedback and performance data.</li>
                <li>Solved 500+ questions from more than 100+ students enrolled in the online class.</li>
              </ul>
              </>}
              cerLink="https://drive.google.com/file/d/12_eUyZFj7CjjDFBnNRtwSlkGeFM9IWZn/view?usp=sharing"
            />

          </Col>
        
          </Row>
      </Container>
    </Container>
  );
}

export default Experience;
