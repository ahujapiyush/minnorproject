import React from 'react'
import HomeCard from './HomeCard'
import './Dashboard.css'
import { Col, Container, Row } from 'react-bootstrap'


export default function Dashboard() {
    return (
     <>
        <div className = "AuthorName">
        Welcome, Student Name
            </div>   
        <hr />
<Container>

<HomeCard/>
<HomeCard/>
<HomeCard/>

<HomeCard/>

<HomeCard/>

</Container>
</>

    )
}
