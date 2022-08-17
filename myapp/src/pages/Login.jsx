import { useRef } from "react";
import Helmet from "../components/Helmet/Helmet";
import "../style/Login.css";
// import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const Login = () => {
  const loginNameRef = useRef();
  const loginPasswordRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Helmet title="Login">
      {/* <CommonSection title="Login" /> */}
      <section className="mt-pro">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <h3 className="auth__title">Login with your account</h3>
              <div className="auth__login__content">
                <p className="auth__description">
                  If you already have an account, log in to accumulate membership points and get better deals!
                </p>
                <form className="auth__form" onSubmit={submitHandler}>
                  <div className="form-group">
                    <input className="form-control"
                      placeholder="Email" type="email"
                      required />
                  </div>
                  <div className="form-group">
                    <input className="form-control" type="password" placeholder="Password"
                      required />
                  </div>
                  <div className="auth__form__options mt-4">
                    <div className="form-checkbox d-flex justify-content-between mb-4">
                      <label>
                        <input className="checkboxs" type="checkbox" />
                        <span className="mx-1">Remember login</span>
                      </label>
                      <a className="auth__form__link" href="">Forgot password?</a>
                    </div>
                    <Link to="/register">
                      Don't have an account? Create an account
                    </Link>
                  </div>
                  <div className="auth__form__buttons">
                    <button className="btn btn--large">Login</button>
                  </div>
                  <div className="auth__form__buttons">
                    <button className="btn btn--large btn--face"><i className="fa-brands fa-facebook-f"></i>Login with facebook</button>
                  </div>
                  <div className="auth__form__buttons">
                    <button className="btn btn--large btn--gg"><i className="fa-brands fa-google"></i>Login with google</button>
                  </div>

                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Login;