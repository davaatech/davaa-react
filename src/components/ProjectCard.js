import {Col} from "react-bootstrap";

export const ProjectCard = ({title, description, imgUrl}) => {
    return (
        <Col sm={6} md={4}>
            <img src={imgUrl} alt={title} />
            <div className="proj-txtx">
            <h4> {title} </h4>
            <span>{description}</span>
            </div>
        </Col>
    )
}