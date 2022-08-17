import { useRef } from "react";
import Helmet from "../components/Helmet/Helmet";
// import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const Register = () => {
  const signupNameRef = useRef();
  const signupPasswordRef = useRef();
  const signupEmailRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Helmet title="Signup">
      {/* <CommonSection title="Signup" /> */}
      <section className="mt-pro">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <div className="col-xs-12 auth__register auth__block">
                <h3 className="auth__title">A new customer</h3>
                <div className="auth__login__content">
                  <p className="auth__description">
                    Receive thousands of incentives when registering a member at Minh Chau
                  </p>
                  <form className="auth__form mb-4" onSubmit={submitHandler}>
                    <div className="form-group">
                      <input className="form-control" type="text" placeholder="Email/Full name" required/>
                    </div>
                    <div className="form-group">
                      <input className="form-control" type="password" placeholder="Password" required/>
                    </div>
                    <div className="form-group">
                      <input className="form-control" type="password" placeholder="Enter the password" required />
                    </div>
                  </form>
                  <Link to="/login">Already have an account? Login</Link>

                  <div className="auth__form__buttons">
                    <button className="btn btn--large">Sign Up</button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Register;