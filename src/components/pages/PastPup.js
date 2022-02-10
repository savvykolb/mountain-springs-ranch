
import '../style/style.css';
import { pastPuppies } from "./pastPuppies";
import { Card, Row, Col, Container } from "react-bootstrap";

function PastPup() {
    return (
        <section id="portfolio" class="portfolio">
            <div className="container">
                <h1 className="title">Past Puppies</h1>
                <h5 style={{display: 'flex',  justifyContent:'center', alignItems:'center',}} className="d-flex">
                    These are a few of pictures of our past puppies through the years. 
                </h5>
                <br></br>
                <Container>
                    <Row >
                        {pastPuppies.map((puppy, index) => (
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