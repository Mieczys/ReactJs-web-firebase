import React, { useState } from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import '../Styles/App.css';
import Cuadro from "./Cuadro"

/*import { Link, Route, Router } from 'react-router';
import Productos from '../Pages/Productos';
import Tienda from '../Pages/Tienda';
*/ 
const ExampleToast = ({ children }) => {
  const [show, toggleShow] = useState(true);

  return (
    <>
      {!show && <Button onClick={() => toggleShow(true)}>Mostrar promo</Button>}
      <Toast show={show} onClose={() => toggleShow(false)}>
        <Toast.Header>
          <strong className="mr-auto">Con descuento</strong>
        </Toast.Header>
        <Toast.Body>{children}</Toast.Body>
      </Toast>
    </>
  );
};

const Alertas = () => (
  <Container className="p-3">
    <Jumbotron>
    
      <h1 className="header">Super Promo!</h1>
      <ExampleToast>
        <span role="img" aria-label="tada">
          🎉
          
        </span>
      </ExampleToast>
    </Jumbotron>
  </Container>
);

export default Alertas;