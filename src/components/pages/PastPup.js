
import '../style/style.css';
import { puppies } from "./puppies";
import { Card, Row, Col, Container } from "react-bootstrap";

function PastPup() {
    return (
        <section id="portfolio" class="portfolio">
            <div className="container">
                <h4 className="d-flex justify-content-center">
                    These are just a few of the past and present puppies. You can arrange a time and date to come visit any available puppies.
                </h4>
                <br></br>
                <Container>
                    <Row >
                        {puppies.map((puppy, index) => (
                            <Col className="portfolio" key={index} xs={12} md={5} lg={4}>
                                <Card className="portfolio-wrap">
                                    <Card.Img className="img" src={puppy.image} />
                                    <Card.Body className="portfolio-info">
                                        <Card.Title>{puppy.year}</Card.Title>
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

export default PastPup;