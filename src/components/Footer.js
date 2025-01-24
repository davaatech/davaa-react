import { Container, Row, Col } from "react-bootstrap";
import logo from '../assets/img/LOGO.png';
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">

          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href='https://au.linkedin.com/in/davaa-baatar' target='_blank'>
                        <img src={navIcon1} alt="linked in profile icon"/>
                    </a>
                    <a href='https://www.facebook.com/davaa.like' target='_blank'>
                        <img src={navIcon2} alt="Facebook icon"/>
                    </a>
                    <a href='https://www.instagram.com/baatar_davaa' target='_blank' >
                        <img src={navIcon3} alt="Instagram icon"/>
                    </a>
            </div>
            <p>Copyright 2025. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}