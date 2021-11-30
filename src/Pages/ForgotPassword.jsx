import React from 'react';
import '../Css/Login.css'
import { Container, Row, Col, Alert } from "react-bootstrap";
import SignupLogo from "../Images/SignupLogo.png";
import InputForm from "../Components/Form/InputForm";
import googlelogo from "../Images/Logos/google.svg";
import { Link } from "react-router-dom";
import {Button} from 'react-bootstrap';


function ForgotPassword(props) {
    return (
        <div className="HomePage">
        <div className="WhiteBox">
        <Container fluid>
          <Row className="mx-auto">
            <Col xl={6} lg={6} sm={12} className="mx-auto">
              <img className="img" src={SignupLogo} alt="SignupLogo" />
            </Col>
            <Col xl={6} lg={6} sm={12} style={{ textAlign: "center" }}>
              <div className="Heading">Forgot Password</div>
              <InputForm title="Email :" placeholder="name@example.com" required type="email"/>
<br />
<Button variant="primary" onClick={submitAlert} type="submit">Submit</Button>
                          
<div style={{float : "left" , width : "100%"}}>
  <br /><br /><br />
<Link to="/login">Go Back</Link> 
</div>
            </Col>
          </Row>
        </Container>

        </div>
    </div>
       
    );
}

function submitAlert() {

   alert("Check Your Email")
}

export default ForgotPassword;