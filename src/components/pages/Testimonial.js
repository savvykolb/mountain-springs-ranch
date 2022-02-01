import '../style/style.css';
import { Card, Row, Col, Container } from "react-bootstrap";
import { testimonials } from "./testimonials"

function Testimonial() {
    return (
        <section>
            <div className="container">
                <h1 className="title">
                    Happy families through the years!
                </h1>
                <br></br>
                <Container className="testimonials">
                    <Row xs={1} md={3} className="g-4" >
                        {testimonials.map((happy, index) => (
                            <Col key={index} >
                                <Card className="testimonial-item">
                                    <Card.Img src={happy.image} />
                                    <Card.Body>
                                        <Card.Text>
                                            <i style={{ color: 'forestgreen', fontSize: 20, }} class="fas fa-quote-left"></i>
                                            <br></br>
                                            <div style={{ marginLeft: 20,}}>{happy.review}
                                                <i style={{ color: 'forestgreen', fontSize: 20, float: 'right' }} class="fas fa-quote-right"></i>
                                            </div>
                                            {/* <i style={{ color: 'forestgreen', fontSize: 20, float: 'right' }} class="fas fa-quote-right"></i> */}
                                            <br></br>
                                            {happy.name}
                                            <br></br>
                                            {happy.date}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                        )}
                    </Row>
                </Container>
            </div>
        </section>
    );
}

export default Testimonial;