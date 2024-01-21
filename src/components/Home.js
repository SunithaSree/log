import React from 'react';
import Navbar from './Navbar';
import {Card,Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Footer  from './Footer';
import './Home.css';
function Home() {
  const navigate=useNavigate();
  return (
    <>
    <body>
      <Navbar/>
      <div class="cardjustify">
      <Card style={{ width: '18rem' }} className="cardhover">
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaE2dZ-caKfMknfU8S7JevD2XG_XUX8NhTaA&usqp=CAU" style={{height:"280px"}} />
      <Card.Body>
        <Card.Title><strong>Pending payments</strong></Card.Title>
        <Card.Text>
        Enquire the customers 
        </Card.Text>
        <Button variant="primary" onClick={()=>navigate("/Pendingpayment")}>View in Detail</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem',marginLeft:"50px"}} className="cardhover">
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_NimPRog-NKrYLbeC9tYY5N0riodUx5ds_g&usqp=CAU" style={{height:"250px"}} />
      <Card.Body>
        <Card.Title><strong>Stock Alert</strong></Card.Title>
        <Card.Text>
          Check immediately and make a purchase
        </Card.Text>
        <Button variant="primary" onClick={()=>navigate("/StockAlert")}>View in Detail</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem',marginLeft:"50px"}} className="cardhover">
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJyxxc2QkNXw1QFq7qrpP8dSZzUU-rG9iqyQ&usqp=CAU" style={{height:"250px"}} />
      <Card.Body>
        <Card.Title><strong>Sales Report</strong></Card.Title>
        <Card.Text>
          Have a look on your sales last month
        </Card.Text>
        <Button variant="primary" onClick={()=>navigate("/Salesreport")}>View in Detail</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem',marginLeft:"50px"}} className="cardhover">
      <Card.Img variant="top" src="https://carnation-inc.com/cdn/shop/articles/Bill-Counters-Accurate.jpg?v=1649058594" style={{height:"250px"}} />
      <Card.Body>
        <Card.Title><strong>Cash Counter</strong></Card.Title>
        <Card.Text>
          Look at your Expenses and income 
        </Card.Text>
        <Button variant="primary" onClick={()=>navigate("/Cashcounter")}>View in Detail</Button>
      </Card.Body>
    </Card>
    </div>
    </body>
    {/* <footer><strong>Any queries:webees@gmail.com</strong></footer> */}
   <Footer/>
    </>
  );
}

export default Home;
