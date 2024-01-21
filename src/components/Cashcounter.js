import React from 'react';
import {Button,Card} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
function Cashcounter() {
    const navigate=useNavigate();
  return (
    <>
     <h2 style={{textAlign:"center",marginTop:"20px"}}>Cash Counter</h2> 
     <div style={{display:'flex',flexDirection:"row"}}>
     <Card style={{ width: '18rem',marginLeft:"30%",marginTop:"30px" }}>
      <Card.Body>
        <Card.Title><strong>Fuel and Transport Expenses</strong></Card.Title>
        <Card.Text>
         2000
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem',marginLeft:"50px",marginTop:"30px" }}>
      <Card.Body>
        <Card.Title><strong>Purchase Expenses</strong></Card.Title>
        <Card.Text>
         50000
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    <div style={{display:'flex',flexDirection:"row"}}>
     <Card style={{ width: '18rem',marginLeft:"30%",marginTop:"30px" }}>
      <Card.Body>
        <Card.Title><strong>Labour Expenses</strong></Card.Title>
        <Card.Text>
       2000
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem',marginLeft:"50px",marginTop:"30px" }}>
      <Card.Body>
        <Card.Title><strong>Payments received</strong></Card.Title>
        <Card.Text>
         10000
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
     <Button variant="primary" onClick={()=>navigate(-1)} style={{marginLeft:"30px",marginTop:"60px"}}>Back to home</Button>
    </>
  );
}

export default Cashcounter;
