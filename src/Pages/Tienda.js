import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Jumbotron from "react-bootstrap/Jumbotron"


function Tienda() {
    const [estadoProdus, setProductos] = useState({ productos: [] });
    useEffect(() => {
        fetch("https://my-json-server.typicode.com/Mieczys/repo/productos/")
            .then(respuesta => respuesta.json())
            .then(dataProducto => {
                setProductos({ ...estadoProdus, productos: dataProducto })
            })
            .catch(error => {
                console.log(error);
            })
    }, []);
    return (
        <>
            <Header />
            <Jumbotron fluid>
  <Container>
        <div>
                <div className='grid'>
                    {estadoProdus.productos.map(producto =><div>
                        <Container class="flex-container wrap" >    
                            <Row>
                                <Col>
                                    <img src={producto.imagen} alt={producto.nombre} className='produs' />
                                    <h2>{producto.nombre}</h2>
                                    <p id='precio'>AR${producto.precio}</p>
                                    <Link to={'/tienda/' + producto.id}>
                                    <button className='buttondet'>Mas Detalles</button></Link>
                                </Col>
                            </Row>
                        </Container>
                    </div>)}
                </div>
            </div>
  </Container>
  <Footer />
</Jumbotron>

    </>
);
}
export default Tienda;

