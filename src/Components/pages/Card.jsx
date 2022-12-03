import axios from 'axios';
import React,{useState, useEffect} from 'react'
import { Container,Row,Col, Card ,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UserProfile from './UserProfile';

const Index =() => {
  const [userList, setUserList] = useState([]);
  const getData = async() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((res)=>{
      const users=res.data;
      setUserList(users);
      console.log('====================================');
      console.log({users});
      console.log('====================================');
    })      
  };
  
useEffect(() => {
getData();
}, []);
  return (    
      <Container >
        <Row >
          <Col md={12}>
            <h2 xs>Random User Api</h2>            
          </Col>
        </Row>
        <Row > 
          {
            userList.map(user=>(
            <Col md={4} sm={12}>
              <div>
                <Card style={{width:'18rem'}}>
                  <Card.Body >
                    <Card.Title key={user.id}>{user.name}</Card.Title>
                    </Card.Body>
                     <div style={{paddingLeft:'15px', paddingBottom:'5px',width:'50px'}}>
                    <Link to='/userProfile' state={{user: user}} onmouseover="/userProfile"
                    className='btn btn-secondary' style={{paddingLeft:'08px', paddingTop:'02px', width:'60px', height:'30px'}}>
                      <label style={{fontSize:'15px'}}>Profile</label></Link>                     
                  </div>
                </Card>  
              </div>  
              <br />        
            </Col>          
            ))
          }
        </Row>      
      </Container>
  )
}

export default Index