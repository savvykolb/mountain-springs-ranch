import React from "react";
import { Container, Row, Col, Hidden } from "react-grid-system";

import { BsFillEnvelopeOpenFill, BsPhone } from "react-icons/bs"


const currentPups = () => {
    const element = document.getElementById('current-pups');
    if (element) {
        // 👇 Will scroll smoothly to the top of the next section
        element.scrollIntoView({ behavior: 'smooth' });
    }
};

const contactUs = () => {
    const element = document.getElementById('contact');
    if (element) {
        // 👇 Will scroll smoothly to the top of the next section
        element.scrollIntoView({ behavior: 'smooth' });
    }
};

const demos = [
    {
        hover: true,
        image: "/assets/images/demo/1.jpg",
    },
    {
        hover: true,
        image: "/assets/images/demo/2.jpg",
    },
    {
        hover: true,
        image: "/assets/images/demo/3.jpg",
    },
    {
        hover: true,
        image: "/assets/images/demo/4.jpg",
    },
    {
        hover: true,
        image: "/assets/images/demo/5.jpg",
    },
    {
        hover: true,
        image: "/assets/images/demo/6.jpg",
    },
];

const pastPups = [

    {
        hover: true,
        image: "/assets/images/pastPups/2.jpg",
    },
    {
        hover: true,
        image: "/assets/images/pastPups/3.jpg",
    },
    {
        hover: true,
        image: "/assets/images/pastPups/6.jpg",
    },

    {
        hover: true,
        image: "/assets/images/pastPups/4.jpg",
    },

    {
        hover: true,
        image: "/assets/images/pastPups/5.jpg",
    },

    {
        hover: true,
        image: "/assets/images/pastPups/7.jpg",
    },
    {
        hover: true,
        image: "/assets/images/pastPups/8.jpg",
    },
    {
        hover: true,
        image: "/assets/images/pastPups/9.jpg",
    },
    {
        hover: true,
        image: "/assets/images/pastPups/10.jpg",
    },
    {
        hover: true,
        image: "/assets/images/pastPups/1.jpg",
    },
    {
        hover: true,
        image: "/assets/images/pastPups/11.jpeg",
    },
    {
        hover: true,
        image: "/assets/images/pastPups/12.jpeg",
    },
];


function Demo() {
    return (
        <div className="theme-preview">
            <header className="theme-preview-header">
                <div className="header-logo">
                    <a href="/">MSR</a>
                </div>
                {/* <a href="/#" className="button button-lg button-primary">
                    <span className="wave"></span>
                    <span className="text text-dark">BUY NOW</span>
                </a> */}
            </header>
            <div className="theme-preview-hero">
                <Container className="container">
                    <Row>
                        <Col lg={8} xl={7}>
                            <div className="display-full-screen">
                                <div className="display-center">
                                    <header className="el-heading el-heading-side">
                                        <span className="label">BASENJI DOGS & REGISTERED HORSES.</span>
                                        <h1>Mountain Springs Ranch</h1>
                                        <p>The Cyrus family has been the mountain home to the rare barkless basenji dogs & to registered Thoroughbred, Quarter, and Paint horses for over 40 years. We are located in Southern California, Riverside County, in the mountains near Palm Springs/Temecula/Hemet.</p>
                                    </header>
                                    <div onClick={contactUs} className="button button-lg button-line-light text-primary">
                                        <span className="text text-dark">Contact Us</span>
                                    </div>
                                    <div onClick={currentPups} className="button button-lg button-primary">
                                        <span className="wave"></span>
                                        <span className="text text-dark">Current Puppies</span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>

                {/* ~*~*~*~ These are the diagonal photos on landing page~*~*~*~  */}
                <ul className="mockups mockups-1">
                    <li>
                        <div className="holder">
                            <img src="/assets/images/mockups/slide-4.jpeg" alt="Mockup" />
                        </div>
                    </li>
                    <li>
                        <div className="holder">
                            <img src="/assets/images/mockups/pup10.jpeg" alt="Mockup" />
                        </div>
                    </li>
                    <li>
                        <div className="holder">
                            <img src="/assets/images/mockups/pup2.jpeg" alt="Mockup" />
                        </div>
                    </li>
                    <li>
                        <div className="holder">
                            <img src="/assets/images/mockups/pup16.jpeg" alt="Mockup" />
                        </div>
                    </li>
                </ul>
                <ul className="mockups mockups-2">
                    <li>
                        <div className="holder">
                            <img src="/assets/images/mockups/horses.png" alt="Mockup" />
                        </div>
                    </li>
                    <li>
                        <div className="holder">
                            <img src="/assets/images/mockups/pup3.jpeg" alt="Mockup" />
                        </div>
                    </li>
                    <li>
                        <div className="holder">
                            <img src="/assets/images/mockups/flower.jpeg" alt="Mockup" />
                        </div>
                    </li>
                    <li>
                        <div className="holder">
                            <img src="/assets/images/mockups/pup8.jpeg" alt="Mockup" />
                        </div>
                    </li>
                </ul>
            </div>

            {/* ~*~*~*~*~*~ Background Image ~*~*~*~* */}
            <div className="theme-preview-empty overlay-color">
                <div className="bg-image overlay-image" style={{ backgroundImage: `url(/assets/images/demo/IMG_2039.jpeg)` }}></div>
                <span className="bg-color bg-dark-60"></span>
                <div className="display-spacing"></div>
            </div>

            {/* ~*~*~*~*~* Demo Preview Images / Links ~*~*~*~*  */}
            <div id="theme-preview-demos" className="theme-preview-demos">
                <div className="display-spacing">
                    <Container className="container">
                        <div className="theme-preview-heading">
                            <h2 id='current-pups'>Current Puppies</h2>
                            <div className="divider divider-1"></div>
                            <h3>For more information on our available puppies, please contact us. We always welcome future families to arrange a time and date to come visit and play with any available puppies.</h3>
                        </div>
                        <Row>
                            {demos.map((item, index) => (
                                <Col key={index} xs={12} md={12} lg={6} xl={4}>
                                    <div className="item">
                                        <img src={item.image} alt={item.title} />
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </div>
            </div>

            {/* ~*~*~*~*~* Other Background Image ~*~*~*~*~*  */}
            <div className="theme-preview-ca overlay-color" style={{ backgroundImage: `url(/assets/images/demo/slide-4.jpg)` }}>
                <span className="bg-color bg-dark-60"></span>
                <div className="display-center">
                    <h4>
                        Our dogs' parents are <span>Fanconi</span> and <span>PRA</span> tested. All puppies are up-to-date on <span>vaccinations </span>upon pick-up!
                    </h4>
                </div>
            </div>

            {/* ~*~*~*~ PAST PUPS ~*~*~* */}
            <div id="theme-preview-demos" className="theme-preview-demos">
                <div className="display-spacing">
                    <Container className="container">
                        <div className="theme-preview-heading">
                            <h2>Past Puppies</h2>
                            <div className="divider divider-1"></div>
                            <h3>Our pups are raised on a large acreage with clean air and spring water.</h3>
                        </div>
                        <Row>
                            {pastPups.map((item, index) => (
                                <Col key={index} xs={12} md={12} lg={6} xl={4}>
                                    <div className="item">
                                        <img src={item.image} alt={item.title} />
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </div>
            </div>
            {/* ~*~*~*~*~* Other Background Image ~*~*~*~*~*  */}
            <div className="theme-preview-ca overlay-color" style={{ backgroundImage: `url(/assets/images/demo/background.jpeg)` }}>
                <span className="bg-color bg-dark-60"></span>
                <div className="display-center">
                    <h4>
                        We do not show, but some of our dogs have been shown with <span>great</span> success!
                        {/* Create your dream site
                        <br />
                        with <span>Miro</span> ReactJS Template! */}
                    </h4>
                </div>
            </div>

            {/* ~*~*~*~*~ Cards ~*~*~*~  */}
            <section className="section section-contact section-contact-1">
                <div className="display-spacing">
                    <Container>
                        <Row>
                            <Hidden xs sm md>
                                <Col lg={5}>
                                    <div className="contact-image">
                                        <div className="image overlay-image" style={{ backgroundImage: `url(/assets/images/demo/cyrus.jpg)` }}></div>
                                    </div>
                                </Col>
                            </Hidden>
                            <Col lg={7}>
                                <div className="contact-content">
                                    <header className="el-heading">
                                        <h3 id="contact">
                                            <span>Contact Us</span>
                                        </h3>
                                        <div className="divider divider-1"></div>
                                        <br></br>
                                        <br></br>
                                        <p>We have had basenji dogs for over 40 years and believe them to be the perfect dogs for children and homes. We have seen them over the years become like another family member than another dog. All dogs are sold with AKC Limited Papers for $2000.</p>
                                    </header>
                                    <form className="form form-1 pt-15">
                                        <Row className="row">
                                            <Col xs={12} sm={12} md={12}>
                                                <div className="form-item">
                                                    <div class="social-links">
                                                        <br></br>
                                                        <a target='_blank' rel="noopener noreferrer" href="tel:951-763-4672" class="phoneNumber"><BsPhone /></a>
                                                        <a target='_blank' rel="noopener noreferrer" href="mailto:PUPPIES@BASENJIDOGS.COM" class="email"><BsFillEnvelopeOpenFill /></a>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </form>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div style={{
                    textAlign: "center", position: "absolute",
                    left: "0",
                    bottom: "15px",
                    right: "0"
                }} class="copyright">
                    &copy; 2023 Copyright <a href={'https://www.savvykolb.com'} rel="noreferrer"> <b>SavvyKolb</b></a>
                </div>
            </section>
        </div>
    );
}

export default Demo;
