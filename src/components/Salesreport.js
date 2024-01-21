import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
const data = [
  {
    name: 'Bharthi',
    bags: 1200,
    price: 450,
  },
  {
    name: 'Ultratech',
    bags: 300,
    price: 300,
  },
  {
    name: 'Chettinad',
    bags: 900,
    price:420,
  },
  {
    name: 'JSW',
    bags: 270,
    price: 400,
  },
  {
    name: 'Anjanai',
    bags: 400,
    price: 360,
  },
  {
    name: 'Brila',
    bags: 600,
    price: 400,
  },
  {
    name: 'ACC',
    bags: 300,
    price:380,
  },
];
function Salesreport() {
    const navigate=useNavigate();
  return (
    <>
     <h2 style={{textAlign:"center",marginTop:"20px"}}>Sales report</h2> 
     <AreaChart
          width={800}
          height={500}
          data={data}
          margin={{
            top: 60,
            right: 30,
            left: 40,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="bags" stroke="black" fill="pink" />
        </AreaChart>
        <h3 style={{marginTop:"30px",marginLeft:"80px"}}><strong>Bharathi cement is the star of the month</strong></h3>
        <Button variant="primary" onClick={()=>navigate(-1)} style={{marginLeft:"80px",marginTop:"60px"}}>Back to home</Button>

    </>
  );
}

export default Salesreport;
