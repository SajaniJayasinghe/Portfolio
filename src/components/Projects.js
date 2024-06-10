import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import projImg8 from "../assets/img/project-img8.png";
import projImg9 from "../assets/img/project-img9.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Train Tickets Reservations System",
      description: "ReactJs & .Net for Web Applications",
      subdescription: "Android for Mobile Applications",
      imgUrl: projImg1,
      githubLink:
        "https://github.com/SajaniJayasinghe/Train_Ticket_Reservation_System_Web-Frontend",
    },
    {
      title: "Bell Pepper Research Website",
      description: "ReactJs",
      imgUrl: projImg2,
      githubLink: "https://pepper-pal.netlify.app/",
    },
    {
      title: "Research Project Management System",
      description: "ReactJs & NodeJs",
      imgUrl: projImg3,
      githubLink:
        "https://github.com/SajaniJayasinghe/AF_Project_Research_Project_Management_Tool",
    },
    {
      title: "Salary Calculator",
      description: "ReactJs/Vite & NodeJs/TypeScript",
      imgUrl: projImg4,
      githubLink: "https://github.com/SajaniJayasinghe/Salary-Calculator",
    },
    {
      title: "Task Management System",
      description: "ReactJs/Vite & NodeJs",
      imgUrl: projImg5,
      githubLink:
        "https://github.com/SajaniJayasinghe/Task-Manage-Web-Application",
    },
    {
      title: "Institute Management System",
      description: "ReactJs & NodeJs ",
      imgUrl: projImg6,
      githubLink:
        "https://github.com/SajaniJayasinghe/Institute_Management_System",
    },
    {
      title: "Task Mamagement Mobile Application",
      description: "Swift",
      imgUrl: projImg7,
      githubLink: "https://github.com/SajaniJayasinghe/Task_Management_App",
    },
    {
      title: "Animal Selling Mobile Application",
      description: "Swift",
      imgUrl: projImg8,
      githubLink: "https://github.com/SajaniJayasinghe/Task_Management_App",
    },
    {
      title: "Life Below Water",
      description: "ReactNative & NodeJS ",
      imgUrl: projImg9,
      githubLink:
        "https://github.com/SajaniJayasinghe/UEE-Mobile-App_Mobile-Application",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2 style={{ marginBottom: "50px" }}>Projects</h2>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="Background"
      />
    </section>
  );
};
