import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SignupLogo from "../Images/SignupLogo.png";
import InputForm from "../Components/Form/InputForm";
import googlelogo from "../Images/Logos/google.svg";
import { Link } from "react-router-dom";

function SignupPage() {
  return (
    <div className="HomePage">
      <div className="WhiteBox mx-auto">
        <Container fluid>
          <Row className="mx-auto">
            <Col xl={6} lg={6} sm={12} className="mx-auto">
              <img className="img" src={SignupLogo} alt="SignupLogo" />
            </Col>
            <Col xl={6} lg={6} sm={12} style={{ textAlign: "center" }}>
              <div className="Heading">Sign Up</div>
              <InputForm title="Name :" placeholder="Full Name" type="text" />
              <InputForm title="Email :" placeholder="name@example.com" type="email"/>
              <InputForm title="Password :" placeholder=" " type="password" />
              <InputForm title="Confirm Pass:"placeholder="" type="password" />

              <hr style={{ float: "left" }} />
              <span style={{ textSize: "0.1px" }}>Or Connect With</span>
              <hr style={{ float: "right" }} />
              <div>
                <img
                  className="LogoSignup"
                  src={googlelogo}
                  style={{
                    width: "30px",
                    height: "30px",
                    border: ".2px solid black",
                    borderRadius: "100%",
                    padding: "5px"
                  }}
                  alt=""
                />
              </div>
              <div style={{ float: "left", width: "50%", marginTop: "30px" }}>
                Already Have an Account?
              </div>
              <div style={{ float: "right", width: "50%", marginTop: "30px" }}>
               <Link to="/login"> Login </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default SignupPage;
