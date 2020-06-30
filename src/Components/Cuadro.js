import React, { useState } from 'react';


import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert'

function Cuadro() {
    const [show, setShow] = useState(true);
  
    return (
      <>
        <Alert show={show} variant="success">
          <Alert.Heading>Cómo estás?!</Alert.Heading>
          <p>
            Nuestro sitio se encuentra en costrucciòn...
          </p>
          <hr />
          <div className="d-flex justify-content-end">
            <Button onClick={() => setShow(false)} variant="outline-success">
              Cerrar Aviso
            </Button>
          </div>
        </Alert>
      </>
      /* Agregar esto abajo de </Alert> para agregar un botòn que para abrir nuevamente el aviso, {!show && <Button onClick={() => setShow(true)}>Aviso Importante</Button>} */
    );
  }
  


export default Cuadro