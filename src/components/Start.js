import React from 'react';
import {Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../components/Start.css';
import brick from '../assets/bricks.jpg';
import Ani from './Ani';
function Start() {
  return (
    <body>
      <img src={brick} height="742" width="1488" alt="bg"></img>
    <div class="container1">
    <div><h1 class="start">Track your Business</h1></div>
    <div><Link to="/entry"><Button variant="secondary"><Ani/></Button></Link></div>
    </div>
    </body>
  );
}

export default Start;
