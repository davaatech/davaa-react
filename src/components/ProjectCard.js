import {Col} from "react-bootstrap";

export const ProjectCard = ({title, description, imgUrl, Url}) => {
    return (
        <Col size={12} sm={6} md={4}>
            <div className="proj-imgbx">
            <img src={imgUrl} alt={title} className="proj-img"/>
            <div className="proj-txtx">
            <h4> {title} </h4>
            <span>{description}</span>
            <br />
            <a href={Url} target="_blank" className="btn btn-primary my-2">Visit site</a>
            </div>
            </div>
        </Col>
    )
}