
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { BrowserChrome, Lightbulb, Cloud, PersonRaisedHand  } from "react-bootstrap-icons"
import TrackVisibility from 'react-on-screen';

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Skills</h2>
                            <p>As a graduate software engineer proficient in JavaScript, React, Vue, Node.js, Java, and Python, 
                                I have developed innovative solutions that bridge technology and real-world applications. 
                                I built EQTHEM, an AI-powered quiz platform that helps individuals identify suitable careers 
                                in the education and healthcare sectors. Additionally, I developed Pixtag, a cloud-based system 
                                utilizing AWS Lambda to automate image uploads, object detection, and tagging. Passionate about 
                                problem-solving and scalable software development, I am eager to contribute my skills to impactful 
                                projects in a dynamic team environment.
                            </p>
                            <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__bounceInUp": ""}>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <div className="skill-space" >
                                        <BrowserChrome size={40} />
                                    </div>
                                        <h5>Clean UI design</h5>
                                </div>
                                <div className="item">
                                    <div className="skill-space" >
                                        <Cloud size={40} />
                                    </div>
                                        <h5>AWS and Azure services</h5>
                                </div>
                                <div className="item">
                                    <div className="skill-space" >
                                        <Lightbulb size={40} />
                                    </div>
                                        <h5>Problem solving, ability to break down complex issues</h5>
                                </div>
                                <div className="item">
                                    <div className="skill-space" >
                                        <PersonRaisedHand size={40} />
                                    </div>
                                        <h5>Collaboration, Working effectively in teams using Agile or Scrum methodologies</h5>
                                </div>
                            </Carousel>
                            </div>}
                            </TrackVisibility>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
