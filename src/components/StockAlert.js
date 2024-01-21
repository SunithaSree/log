import React from 'react';
import { Button,Table} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
function StockAlert() {
    const navigate=useNavigate();
  return (
    <>
      <h2 style={{textAlign:"center",marginTop:"20px"}}>Stock Alert</h2>
      <Table striped bordered hover style={{textAlign:"center",width:"60%",marginTop:"30px"}} align='center' variant='success'>
      <thead>
        <tr>
          <th>ProductId</th>
          <th>ProductName</th>
          <th>Quantity Available</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Bharathi</td>
          <td style={{color:"red"}}>10</td>
        </tr>
      </tbody>
    </Table>
      <Button variant="primary" onClick={()=>navigate(-1)} style={{marginLeft:"30px",marginTop:"60px"}}>Back to home</Button>
    </>
  );
}

export default StockAlert;
