import {Col, Container, Row} from "react-bootstrap";

export const ProjectCard = ({title, description, imgURL}) => {
    return (
        <Col sm={6} md={4}>
            <img src={imgURL} alt={title} />
            <div className="proj-txtx">
            <h4> {title} </h4>
            <span>{description}</span>
            </div>
        </Col>
    )
}