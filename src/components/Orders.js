import React from "react";
import { useState } from "react";
import Navbar from './Navbar';
import {Table,Form,Button,InputGroup,FormControl,Collapse} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Orders(){
    const[open,setOpen]=useState(false);
    return (
      <>
      <Navbar/>
      <div style={{display:"flex",justifyContent:"space-between",marginTop:"15px"}}>
      <div style={{marginLeft:"10px"}} ><h2 style={{color: "white", textShadow: "3px 3px 5px tomato, -3px -3px 5px hsl(273, 100%, 54%)"}}>Orders</h2></div>
      <div style={{marginRight:"10px"}}>
         <InputGroup> <FormControl type="date"placeholder='Filter by dates'/><Button variant="warning" id="filter" type="submit" onClick={()=>{document.getElementById("filter").variant="primary";}}>
          Submit
        </Button></InputGroup></div>
      </div>
      <br/>
      <br/>
      <Table striped bordered hover style={{textAlign:"center",width:"60%"}} align='center' variant='success'>
      <thead>
        <tr>
          <th>CustomerId</th>
          <th>CustomerName</th>
          <th>ProductId</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Saro</td>
          <td>1</td>
          <td>500</td>
          <td>2</td>
          <td>1000</td>
        </tr>
      </tbody>
    </Table>
    <div>
        <Button
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open} style={{marginLeft:"5px"}}
        >
        Add Order
        </Button>
        <Collapse in={open}>
          <div id="example-collapse-text">
            <h5 style={{marginLeft:"5px",marginTop:"5px"}}>CustomerId</h5>
            <Form.Control type="number" min={1}  style={{width:"300px",marginLeft:"5px"}}/>
            <h5 style={{marginLeft:"5px"}}>CustomerName</h5>
            <Form.Control type="text" style={{width:"300px",marginLeft:"5px"}}/>
            <h5 style={{marginLeft:"5px"}}>ProductId</h5>
            <Form.Control type="number" min={1} style={{width:"300px",marginLeft:"5px"}}/>
            <h5 style={{marginLeft:"5px"}}>Price</h5>
            <Form.Control type="number" min={0} step={5} placeholder='In rupees' style={{width:"300px",marginLeft:"5px"}}/>
            <h5 style={{marginLeft:"5px"}}>Quantity Ordered</h5>
            <Form.Control type="number" min={1} style={{width:"300px",marginLeft:"5px",marginBottom:"20px"}}/>
            <Button type="submit" variant='secondary' style={{marginLeft:"5px"}}>Add Order</Button>
          </div>
        </Collapse>
      </div>
    </>
    );
}