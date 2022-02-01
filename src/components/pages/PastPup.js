
import '../style/style.css';
import { puppies } from "./puppies";
import { Card, Row, Col, Container } from "react-bootstrap";

function PastPup() {
    return (
        <section id="portfolio" class="portfolio">
            <div className="container">
                <div className="title">Past Puppies</div>
                <h4 style={{display: 'flex',  justifyContent:'center', alignItems:'center',}} className="d-flex">
                    These are just a few of the pictures and puppies, both past and present. For more information on current available puppies, please contact us. We always welcome future families to arrange a time and date to come visit and play with any available puppies.
                </h4>
                <h6 style={{display: 'flex',  justifyContent:'center', alignItems:'center',}}>Covid Restrictions may apply</h6>
                <br></br>
                <Container>
                    <Row >
                        {puppies.map((puppy, index) => (
                            <Col className="portfolio" key={index} xs={12} md={5} lg={4}>
                                <Card border="light" className="portfolio-wrap">
                                    <Card.Img src={puppy.image} />
                                    <Card.Body className="portfolio-info">
                                        <Card.Title style={{fontWeight: 600, fontSize: 35, fontFamily: "RaleWay", color: "white"}}>{puppy.year}</Card.Title>
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