import React from 'react';
import '../../Css/Login.css'
import { Container, Row, Col } from "react-bootstrap";
import SignupLogo from '../../Images/SignupLogo.png'
import googlelogo from '../../Images/Logos/google.svg'
import { Link } from "react-router-dom";
import InputForm from "../Form/InputForm"

function LoginPageForm(props) {
    return (
        <div className="HomePage"> 
         <div className="WhiteBox">
         <Container fluid>
          <Row className="mx-auto">
            <Col xl={6} lg={6} sm={12} className="mx-auto">
              <img className="img" src={SignupLogo} alt="SignupLogo" />
            </Col>
            <Col xl={6} lg={6} sm={12} style={{ textAlign: "center" }}>
              <div className="Heading">Login</div>
              <InputForm title="Email :" placeholder="name@example.com" type="email"/>
              <InputForm title="Password :" placeholder=" " type="password" />
<div style={{float : "left" , width : "100%"}}>
<Link to="/forgotPassword">Forgot Password ?</Link> 
</div>
            <div>
                <br/> <br/>
              <hr style={{ float: "left" }} />
              <span style={{ textSize: "0.1px" }}>Or Connect With</span>
              <hr style={{ float: "right" }} />
              </div>
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
                Don't Have an Account?
              </div>
              <div style={{ float: "right", width: "50%", marginTop: "30px" }}>
               <Link to="/"> Sign Up </Link>
              </div>
            </Col>
          </Row>
        </Container>
            
         </div>
        </div>
    );
}

export default LoginPageForm;