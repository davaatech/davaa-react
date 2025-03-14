import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImgEqthem from "../assets/img/eqthem.png";
import projImgLamore from "../assets/img/lamore.png";
import projImgEvoting from "../assets/img/e-voting.png";
import projImgUsukh from "../assets/img/Usukh_landing.png";
import projImgPixtag from "../assets/img/pixtag.png";
import projImgBuildMyCaravan from "../assets/img/caravan.png";
import projImgBlueTradie from "../assets/img/blueTradie.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

    const projects = [
        {
          title: "EQTHEM",
          description: "Empowering men in service oriented industry.",
          details: "User name & password: equinox",
          imgUrl: projImgEqthem,
          Url: "https://eqthem.space",
        },
        {
          title: "Blue Tradie",
          description: "A platform for tradies to find jobs and clients to find tradies.",
          imgUrl: projImgBlueTradie,
          Url: "https://listing.gometa.com.au",
        },
        {
          title: "Build My Caravan",
          description: "Customized caravan hiring system",
          imgUrl: projImgBuildMyCaravan,
          Url: "https://buildmycaravan.com.au"
        },
        
      ];

      const projects_2 = [
        {
          title: "Pixtag",
          description: "Pixtag is a platform for uploading a photo and getting a tag for it, objects are automatically recogized. Developed by AWS Lambda, S3, API Gateway, Express.js ",
          imgUrl: projImgPixtag,
          Url: "https://github.com/davaatech/pixtag",
        },
        {
          title: "E-Voting System with blockchain",
          description: "Blackchain & Smart contracts through Ganache",
          imgUrl: projImgEvoting,
          Url: "https://github.com/bdaa0001/fit5163-evoting-system"
        },
        
      ];

      const projects_3 = [
        {
          title: "Usukh.mn",
          description: "Empowering company in food and beverage industry.",
          imgUrl: projImgUsukh,
          Url: "https://usukh.mn",
        },
        {
          title: "Lamore",
          description: "Flower store, shopify website.",
          imgUrl: projImgLamore,
          Url: "https://lamore.mn",
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
                                <Row>
                                        {
                                            projects_2.map((projects, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...projects}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                <Row>
                                        {
                                            projects_3.map((projects, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...projects}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
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