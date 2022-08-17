import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import whyImg from "../../assets/images/location.png";

const WhyTasty = () => {
    return (
        <Container>
            <Row>
                <Col lg="6" md="6">
                    <img src={whyImg} alt="why-tasty-treat" className="w-100" />
                </Col>

                <Col lg="6" md="6">
                    <div className="why__tasty-treat">
                        <h2 className="tasty__treat-title mb-4">
                            Why <span>MINH CHAU?</span>
                        </h2>
                        <p className="tasty__treat-desc">
                        Focusing on the selection of professional chefs, Minh Chau's menu is always renewed and diversified with flavorful pizzas, sandwiches, pastas and other fast foods.
                        </p>

                        <ListGroup className="mt-4">
                            <ListGroupItem className="border-0 ps-0">
                                <p className=" choose__us-title d-flex align-items-center gap-2 ">
                                    <i class="ri-checkbox-circle-line"></i> Fresh and tasty
                                    foods
                                </p>
                                <p className="choose__us-desc">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                    Quia, voluptatibus.
                                </p>
                            </ListGroupItem>

                            <ListGroupItem className="border-0 ps-0">
                                <p className="choose__us-title d-flex align-items-center gap-2 ">
                                    <i class="ri-checkbox-circle-line"></i> Quality support
                                </p>
                                <p className="choose__us-desc">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Qui, earum.
                                </p>
                            </ListGroupItem>

                            <ListGroupItem className="border-0 ps-0">
                                <p className="choose__us-title d-flex align-items-center gap-2 ">
                                    <i class="ri-checkbox-circle-line"></i>Order from any
                                    location{" "}
                                </p>
                                <p className="choose__us-desc">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Qui, earum.
                                </p>
                            </ListGroupItem>
                        </ListGroup>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default WhyTasty