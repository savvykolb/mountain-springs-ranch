

import '../style/style.css';
import { currentPuppies } from "./currentPuppies";
import { Card, Row, Col, Container } from "react-bootstrap";

function CurrentPup() {
    return (
        <section id="portfolio" class="portfolio">
            <div className="container">
                <h1 className="title">Current Puppies</h1>
                <h5 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                    For more information on our available puppies, please contact us. We always welcome future families to arrange a time and date to come visit and play with any available puppies.
                </h5>
                <br></br>
                <h6 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>Covid Restrictions may apply</h6>
                <br></br>
                <Container>
                    <Row >
                        {currentPuppies.map((puppy, index) => (
                            <Col className="portfolio" key={index} xs={12} md={5} lg={4}>
                                <Card border="light" className="portfolio-wrap">
                                    <Card.Img src={puppy.image} />
                                    <Card.Body className="portfolio-info">
                                        <Card.Title style={{ fontWeight: 600, fontSize: 35, fontFamily: "RaleWay", color: "white" }}>{puppy.year}</Card.Title>
                                        <Card.Title style={{ fontWeight: 600, fontSize: 25, fontFamily: "RaleWay", color: "white" }}>{puppy.sex}</Card.Title>
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

export default CurrentPup;