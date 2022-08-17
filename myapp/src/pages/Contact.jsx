import { useEffect } from "react";
import { Col, Container, Row } from "reactstrap";
import "../style/Contact.css";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="mt-pro">
      <Container>
        <Row>
          <Col lg="6" md="6" sm="12">
            <div>
              <h3 className="text-center">Welcome to Minh Chau</h3>
              <div>
                <div>
                  <div >

                    <p className="text">
                      To order pizza, please contact the call center number: 012.23.456.789
                    </p>
                    <p className="text">
                      To reflect on service quality, please call: 0989.999.9999
                    </p>
                    <p className="text">
                      Email: example@gmail.com
                    </p>
                  </div>
                </div>
              </div>
              <div className="contact-map container-fuild">

              </div>

            </div>

          </Col>
          <Col lg="6" md="6" sm="12">
            <div>
              <h1 className="heading-1 text-center">
                Địa chỉ
              </h1>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.9229690516377!2d105.7874095148835!3d21.035767985994564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab49dd21ac4d%3A0xe95b1cd57e261798!2zOSBUcuG6p24gVGjDoWkgVMO0bmcsIEThu4tjaCBW4buNbmcsIEPhuqd1IEdp4bqleSwgSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1644380244639!5m2!1svi!2s" style={{ height: "350px", border: "0", loading: "lazy", width: "100%" }}></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}


export default Contact;