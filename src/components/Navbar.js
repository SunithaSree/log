import React from 'react';
import { useState } from 'react';
import { Navbar,Container,Offcanvas } from 'react-bootstrap';
import Click from '../assets/Click.wav';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAddressBook,faTruck,faTruckRampBox,faSackDollar,faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
function Navabar() {
  const navigate=useNavigate();
  function Play(){
    new Audio(Click).play()
  }
  const [isOpen, setIsOpen] = useState(false);
  const togglePanel = () => {
    setIsOpen(!isOpen);
};
function Profile() {
  return (
    <div>
      <Offcanvas show={isOpen} placement="end" backdrop="static">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>User Panel</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {/* Panel content here */}
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}
  return (
    <>
      <Navbar style={{ backgroundColor: "#717171", color: "#333" }}>
<Container fluid >
 <Navbar.Brand >
  <div style={{display:"flex",justifyContent:"space-between"}}>
  <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOqVpZ_WIAs-7-QHgSFf4oVHIL0okslGr6lw&usqp=CAU" alt="logo" width="70px" height="60px" style={{borderRadius:"80px",marginRight:"10px"}} onClick={()=>navigate("/home")} ></img></div>
 <div><h2 style={{marginTop:"10px",color:"black"}}>Akshayakeerthi Agencies </h2></div>
  </div>
 </Navbar.Brand>
 {/* <NavLink to="/" style={{textTransform:"uppercase",textDecoration:"none",color:'white'}}>
{''}<strong>Home</strong></NavLink> */}
 <NavLink to="/Orders" style={{textTransform:"uppercase",textDecoration:"none",color:'white'}} onClick={Play}><FontAwesomeIcon icon={faTruck} />{' '}<strong>Orders</strong></NavLink>
 <NavLink to="/Stock" style={{textTransform:"uppercase",textDecoration:"none",color:'white'}} onClick={Play}><FontAwesomeIcon icon={faTruckRampBox} />{' '}<strong>Stocks</strong></NavLink>
 <NavLink to="/Payments" style={{textTransform:"uppercase",textDecoration:"none",color:'white'}} onClick={Play} ><FontAwesomeIcon icon={faSackDollar} />{' '}<strong>Payments</strong></NavLink>
 <NavLink to="/Purchases" style={{textTransform:"uppercase",textDecoration:"none",color:'white'}} onClick={Play}><FontAwesomeIcon icon={faCartShopping} />{' '}<strong>Purchases</strong></NavLink>
 <NavLink to="/Customerlist" style={{textTransform:"uppercase",textDecoration:"none",color:'white'}} onClick={Play}><FontAwesomeIcon icon={faAddressBook} />{' '}<strong>CustomerList</strong></NavLink>
 <NavLink to="/entry" style={{textTransform:"uppercase",textDecoration:"none",color:'white'}} onClick={Play}>{' '}<strong>Logout</strong></NavLink>
 <NavLink to="/profile" style={{textTransform:"uppercase",textDecoration:"none",color:'white'}} onClick={Profile}>{' '}<strong>Profile</strong></NavLink>
</Container>
</Navbar>
    </>
  );
}

export default Navabar;
