import '../style/style.css';
import { BsEnvelopeOpen, BsPhone, BsPinMap  } from "react-icons/bs"
import { Card, Row, Col, Container } from "react-bootstrap";


function Contact() {
    return (
        <section>
            <div class="container contact">
                <div className='info'>

                    <h1 class="title">
                        Contact
                    </h1>
                    <h5 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }} className="d-flex">
                        Interested in becoming apart of the basenji family?
                    </h5>
                    <br></br>
                    <br></br>
                    <Container className="social-links">
                    <Row xs={1} md={3} className="g-4" >
                        <Col>
                        <Card className="phone">
                            <Card.Body>
                            <a target='_blank' rel="noreferrer" href="tel:951-763-4672" class="phoneNumber"><BsPhone /></a>
                            </Card.Body>
                            <Card.Text>
                                <h4 class="font-weight-medium">Phone</h4>
                                <h6>+1 951-763-4672 </h6>
                            </Card.Text>
                        </Card>
                        </Col>
                        <Col>
                        <Card className="email">
                            <Card.Body>
                            <a target='_blank' rel="noreferrer" href="mailto:msr2@earthlink.net" class="email"><BsEnvelopeOpen /></a>
                            </Card.Body>
                            <Card.Text>
                            <h4 class="font-weight-medium">Email</h4>
                                    <h6>
                                       msr2@earthlink.net
                                    </h6>
                            </Card.Text>
                        </Card>
                        </Col>

                        <Col>
                        <Card className="location">
                            <Card.Body>
                            <a target='_blank' rel="noreferrer" href="https://maps.google.com/?q=33.555267,-116.674179" ><BsPinMap /></a>
                            </Card.Body>
                            <Card.Text>
                            <h4 class="font-weight-medium">Location</h4>
                                    <h6>
                                        Anza, CA
                                    </h6>
                            </Card.Text>
                        </Card>
                        </Col>
                                    {/* <a target='_blank' rel="noreferrer" href="tel:951-763-4672" class="phoneNumber"><BsPhone /></a>
                            
                                <div class="">
                                    <h4 class="font-weight-medium">Phone</h4>
                                    <h6 class="">251 546 9442
                                        <br /> 630 446 8851</h6>
                                </div>
                      
                  
                        <div class="col-lg-4 col-md-4">
                            <div class="card-body d-flex align-items-center c-detail">
                                <div class="mr-3 align-self-center">
                                    <a target='_blank' rel="noreferrer" href="mailto:msr2@earthlink.net" class="email"><BsFillEnvelopeOpenFill /></a>
                                </div>
                                <div class="">
                                    <h4 class="font-weight-medium">Email</h4>
                                    <h6 class="">
                                        info@wrappixel.com
                                        <br /> 123@wrappixel.com
                                    </h6>
                                </div>

                            </div>
                        </div> */}
                        </Row>
                    </Container >
                </div>
            </div>
        </section >
    );
}

export default Contact;