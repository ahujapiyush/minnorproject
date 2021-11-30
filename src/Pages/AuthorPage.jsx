import React from "react";
import "../Css/Author.css";
import Sidebar from '../Components/Sidebar/Sidebar'
import { Col, Container, Row } from "react-bootstrap";
import Dashboard from "../Components/Dashboard/Dashboard";

function AuthorPage(props) {
  return (
    <>
    <div><Sidebar/> </div>
        <div className = "Home"><Dashboard/></div>
    </>
  );
}

export default AuthorPage;
