import { useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import contactImg from "../assets/img/contact-img.svg"

export const Contact = () => {

    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "78c41b78-1241-4c87-955b-c409a472f141");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();
        setFormDetails(formInitialDetails);
        if (data.success) {
            setResult("Form Submitted Successfully");
            setStatus({ success: true, message: "Thank you for reaching out to me. I will get back to you soon." });
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
            setStatus({ success: false, message: "Message failed to send. Please try again." });
        }

    };

    const formInitialDetails = {
        firstName: "",
        lastName: "",
        email: "",
        message: "",
        Phone: ""
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState("Send");
    const [status, setStatus] = useState("");

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    return (
        <section className="contact" id="contact">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImg} alt="Contact me" />
                    </Col>
                    <Col md={6}>
                        <h2>Get In Touch</h2>
                        <form onSubmit={onSubmit}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="text" name="firstname" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} required/>
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="text" name="lastname" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} required/>
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="email" name="email" value={formDetails.email} placeholder="Email" onChange={(e) => onFormUpdate('email', e.target.value)} required/>
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="tel" name="phone" value={formDetails.Phone} placeholder="Phone No" onChange={(e) => onFormUpdate('Phone', e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <textarea rows={6} name="message" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)} required/>
                                    <button type="submit" className="btn btn-primary">{buttonText}</button>
                                </Col>
                                {
                                    status.message &&
                                    <Col>
                                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                    </Col>
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}