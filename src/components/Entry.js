import React from 'react';
import './Entry.css';
import { Form,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import brick from '../assets/bricks.jpg';
function Entry() {
// const history=useNavigate();
// const msg = () => {
//   toast("Logged in successfully");
//   setTimeout(() => history.push('/home'), 500); // Delay navigation
// };
  return (
<body>
  <img src={brick} height="742" width="1488" alt="bg"/>
        <div class="container2">
          <h1 style={{color:'white' ,fontSize:'4em'}}>Welcome</h1>
          <div>
          <label style={{fontSize:'1.5em'}}>Username</label>
          <Form.Control type="text"  style={{paddingRight:'30px'}} required/>
          </div>
          <div>
          <label style={{fontSize:'1.5em'}}>Password</label>
          <Form.Control type="Password" style={{paddingRight:'30px'}} required/>
          </div>
       <Link to='/home'><Button type="button" class="login"  value="Log in">Log in</Button></Link>
        </div>
        {/* <ToastContainer/> */}
</body>
  );
}

export default Entry;
