import React, { useState, useEffect } from 'react';
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'
import Form from "react-bootstrap/Form"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import '../Styles/App.css';
import Jumbotron from "react-bootstrap/Jumbotron"
import Container from "react-bootstrap/Container"

function Login() {
    const [opcionesMenu, setLogin] = useState(1);
    if (opcionesMenu === 1) {
        return (
            <>
                <Header />
                <Jumbotron fluid>
                    <Container>
                <div >
                    <form>
                        <input type='email' placeholder='Email'></input>
                        <input type='password' placeholder='Contraseña'></input>
                        <button className='buttondet' ><Link to='/'>Cancelar</Link></button>
                        <button className='buttondet' ><Link to='/'>Confirmar</Link></button>
                    </form>
                    <br></br>
                    <butoton className='buttondeta' onClick={() => setLogin(2)}>Registrarse</butoton>
                </div>
                </Container>
                <Footer />
                </Jumbotron >
                
                    
                
            </>
        );
    }
    else {
        return (
            <>
                <Header />
                <Jumbotron fluid>
  <Container>
                    <Form>
<Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>

    <Form.Row>
  <Form.Group controlId="formBasicName">
    <Form.Label>Nombre</Form.Label>
    <Form.Control type="name" placeholder="Ingrese su Nombre" />
  </Form.Group>
 
  <Form.Group controlId="formBasicName">
    <Form.Label>Apellido</Form.Label>
    <Form.Control type="name" placeholder="Ingrese su Apellido" />
  </Form.Group>
  </Form.Row>
 

  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" placeholder="Ingrese su email" />
  </Form.Group>
 


  <Form.Group controlId="formBasicPassword">
    <Form.Label>Nueva Contraseña</Form.Label>
    <Form.Control type="password" placeholder="Contraseña" />
  </Form.Group>


  <Form.Group controlId="formBasicPassword">
    <Form.Label>Repetir Password</Form.Label>
    <Form.Control type="password" placeholder="Contraseña" />
  </Form.Group>
 
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox"   label="Està deacuerdo con las politicas de nuestro sitio"/>
  </Form.Group>

    <button className='buttondet' ><Link to='/'>Cancelar</Link></button>
    <button className='buttondet' ><Link to='/'>Registrarme</Link></button>
    <br></br>
    <br></br>
    <butoton className='buttondeta' onClick={() => setLogin(1)}>Iniciar Sesion</butoton>

</Form>
</Container>
<Footer />
</Jumbotron>

                
            </>
        );
    }
}
export default Login;

