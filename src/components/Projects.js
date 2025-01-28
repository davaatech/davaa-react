import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/eqthem.png";
import projImg2 from "../assets/img/lamore.png";
import projImg3 from "../assets/img/e-voting.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

    const projects = [
        {
          title: "EQTHEM",
          description: "Empowering men in service orineted industry.",
          details: "User name & password: equinox",
          imgUrl: projImg1,
          Url: "https://eqthem.space",
        },
        {
          title: "Lamore",
          description: "Flower shop",
          imgUrl: projImg2,
          Url: "https://lamore.mn",
        },
        {
          title: "E-Voting System with blockchain",
          description: "Blackchain & Smart contracts through Ganache",
          imgUrl: projImg3,
          Url: "https://github.com/bdaa0001/fit5163-evoting-system"
        },
        
      ];

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col xs={12}>
                    <TrackVisibility>
                    {({ isVisible }) =>
                        <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                        <h2> Projects</h2>
                        <p></p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            
                            <Tab.Content id="slideInUp">
                                
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <p>Coming Soon.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <p>Coming Soon.</p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                        </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt=""></img>
        </section>
    )
}