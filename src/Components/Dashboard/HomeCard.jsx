import React from 'react'
import { Card , Button, Col} from 'react-bootstrap'

export default function HomeCard() {
    return (
        
            <Col >
        <Card style={{ width: '100%' , borderRadius : "20px" }}>
  <Card.Body>
    <Card.Title  style={{ fontSize:"2rem" , textAlign:"center"}}>Exam Name - 1</Card.Title>
    <Card.Text className="HomeCardStyle">
    <b> DATE - 29/10/2021 10:00 AM - 02:00 PM  </b>
    </Card.Text>
 
    <Card.Text  className="HomeCardStyle2">
    <b> DURATION : 1hr 15 min</b><br />
    </Card.Text>
    
    <Button  className="d-grid gap-2" href="#">Show Details</Button>
  </Card.Body>
</Card>
</Col>
      
    )
}
