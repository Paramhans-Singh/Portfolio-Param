import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone
            <span className="wave" role="img" aria-labelledby="wave">
              👋🏻
            </span>
            &nbsp; I am <span className="purple">Paramhans Singh </span>
            from <span className="purple"> Delhi, India.</span>
            <br />
            <br />
            I am an upcoming <span className="purple">Research & Development Intern at Mitacs GRI (Onsite Canada Intern).</span>
            <br />
            <br />
            Currently pursuing a Bachelor of Technology in Computer Science from Guru Gobind Singh Indraprastha University
            with a <span className="purple">stellar CGPA of 9.41,</span> I have honed my skills in Full Stack development, AI & ML, CyberSecurity, and Problem Solving.
            <br />
            <br />
            My achievements include :
            <ul>
              <li className="about-activity">
                <ImPointRight /> Being selected as an Onsite Canada Research Intern at Mitacs Globallink, standing out <span className="purple">among 70 students
                  from India out of 75000+ applicants.</span>
              </li>
              <li className="about-activity">
                <ImPointRight />  Github Global Campus Expert & Microsoft Learn Student Ambassador
              </li>
              <li className="about-activity">
                <ImPointRight /> Achieved the <span className="purple">19th rank in University Rankings with 9.41 CGPA</span>
              </li>
              <li className="about-activity">
                <ImPointRight /> Secured rank in Top 20 in open-source events like GSSOC and SSOC
              </li>
              <li className="about-activity">
                <ImPointRight /> <span className="purple">Solving over 300+ DSA problems </span>on LeetCode and GFG with LeetCode Rating of 1704 and Codechef
                Rating of 1699 (3 Star).
              </li>
              <li className="about-activity">
                <ImPointRight /> <span className="purple">Mentored & Judged over 10+ Hackathons</span>. Selected as Mentor of GSSOC'24.
              </li>
            </ul>
            <br />
            Apart from coding, some other activities that I love to do!
            <ul>
              <li className="about-activity">
                <ImPointRight /> Playing Games
              </li>
              <li className="about-activity">
                <ImPointRight /> Writing Tech Blogs
              </li>
              <li className="about-activity">
                <ImPointRight /> Travelling
              </li>
            </ul>
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;





// My professional experiences as a Research and Development Intern at DRDO, Software Development Intern at SqaureBoat, and
// Frontend Developer at Turing have equipped me with a solid foundation to tackle challenges and deliver impactful results.

// Among my achievements, I had the privilege of being selected as an Onsite Canada Research Intern at Mitacs Globallink,
// standing out among 70 students from India out of 75000+ applicants. Additionally, I have excelled as a Github Global Campus Expert,
// Microsoft Learn Student Ambassador, and achieved the 19th rank in University Rankings. My active participation in open-source events
// like GSSOC and SSOC, along with solving over 300+ DSA problems on platforms like LeetCode and GFG, showcases my commitment to continuous
// learning and growth. Furthermore, my keen interest in Competitive Programming is evident through my LeetCode Rating of 1704 and Codechef
//  Rating of 1699 (3 Star).



// I am Paramhans Singh a 2025 graduate of Guru Gobind Singh Indraprastha University.

// Skills:
// - Full Stack Development
// - AI-ML Technologies
// - CyberSecurity

// Experience:
// - Onsite Internship at MITACS GRI in Canada
// - Research Internship at Leuphana University, Germany
// - Research Internship at DRDO
// - SDE Intern at Squareboat and Turing
// - Microsoft Student Ambassador

// I am a dedicated and skilled professional with a passion for technology and innovation. My diverse experiences in internships and industry have equipped me with a strong foundation in Full Stack Development, AI-ML technologies, and CyberSecurity. I am committed to continuous learning and growth in the field, and I am excited to contribute my expertise to future projects and opportunities.
