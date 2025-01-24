import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import headingImg from "../assets/img/header-img.svg"
import { useEffect, useState } from "react"
import TrackVisibility from "react-on-screen"
import 'animate.css'

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web Developer", "Software developer", "Software Engineer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(250 - Math.random() * 100);
    const period = 1500;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)
        return () => { clearInterval(ticker) };
    }, [text])


    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }
        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }

    }


    return (
        <section className="banner" id="home">
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisbile }) =>
                                <div className={isVisbile ? " animate__animated animate__fadeIn" : " "}>
                                    <span className="tagline">Ello, gov'nor!</span>
                                    <h2>{'I am '} <span className=" banner-text" >Davaa Baatar</span></h2>
                                    <div className="banner-typing-text">

                                        <h1><span className="wrap">{text}</span></h1>
                                    </div>
                                    <p className="description">A natural problem solver, would love to do it through code and turning ideas into reality. Explore my portfolio to see what I've been working on!</p>
                                    <a href="#" className="btn btn-primary">Let's Connect <ArrowRightCircle size={25} /></a>
                                </div>
                            }
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headingImg} alt="heading image" className="heading-image" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}