
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"
import { BrowserChrome, CameraReels, Palette, Phone  } from "react-bootstrap-icons"

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
                            <p>I am proficient in front-end development and creating your wanted design..
                                <br></br> 
                            (Extra: AWS Lamda and Azure services).</p>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <div className="skill-space" >
                                        <BrowserChrome size={40} />
                                    </div>
                                        <h5>Web Development</h5>
                                </div>
                                <div className="item">
                                    <div className="skill-space" >
                                        <CameraReels size={40} />
                                    </div>
                                        <h5>Brand Identity</h5>
                                </div>
                                <div className="item">
                                    <div className="skill-space" >
                                        <Palette size={40} />
                                    </div>
                                        <h5>Logo Design</h5>
                                </div>
                                <div className="item">
                                    <div className="skill-space" >
                                        <Phone size={40} />
                                    </div>
                                        <h5>Application Development</h5>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={colorSharp} alt="Image" />
        </section>
    )
}
