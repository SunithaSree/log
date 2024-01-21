import React from 'react';
import { Button,Table } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
function Pendingpayment() {
    const navigate=useNavigate();
    return (
    <>
      <h2 style={{textAlign:"center",marginTop:"20px"}}>Pending Payment</h2>
      <Table striped bordered hover style={{textAlign:"center",width:"60%",marginTop:"30px"}} align='center' variant='success'>
    <thead>
      <tr>
        <th>CustomerId</th>
        <th>CustomerName</th>
        <th>Pending Amount</th>
        <th>Due by(days)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Saro</td>
        <td>10000</td>
        <td>5</td>
      </tr>
    </tbody>
  </Table>
      <Button variant="primary" onClick={()=>navigate(-1)} style={{marginLeft:"30px",marginTop:"60px"}}>Back to home</Button>
    </>
  );
}

export default Pendingpayment;
