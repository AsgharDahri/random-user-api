import React from 'react'
import { Container,Row,Col, Card ,Button} from 'react-bootstrap';
import {Link, useLocation} from 'react-router-dom';
const UserProfile = (props) => {
  const location = useLocation();
  const user = location.state.user
  return (
    <Container style={{fontFamily:'cursive'}} className="d-flex justify-content-md-center align-items-center vh-100">
      <Card>
        <Card.Body>
          <Card.Title style={{width:"20rem"}}>{user.name}</Card.Title>
          <Card.Subtitle>{user.username} | {user.website}</Card.Subtitle><br/>
          <Card.Text>
            <p>Company: {user.company.name}</p>
            <p>Phone: {user.phone}</p>
            <p>Adress: {user.address.street}, {user.address.suite}</p>
          </Card.Text>
          <Link to='/' className='btn btn-secondary'>Back</Link>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default UserProfile