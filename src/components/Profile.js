import React, { useState } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';

 export default function Profile() {
  const [isOpen, setIsOpen] = useState(false);

    const togglePanel = () => {
        setIsOpen(!isOpen);
    };

  return (
    <div>
      {/* <Button variant="light" onClick={togglePanel}>
        <i className="fas fa-user" />
      </Button> */}
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