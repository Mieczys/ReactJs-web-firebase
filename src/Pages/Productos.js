import React, { useState, useEffect } from 'react';
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Card from 'react-bootstrap/Card'
import '../Styles/App.css';
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Image from "react-bootstrap/Image"


function Productos(props) {
    const [productoDet, setProductos] = useState({ producto: [] });
    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/Mieczys/repo/productos/${props.match.params.id}`)
            .then(respuesta => respuesta.json())
            .then(data => {
                setProductos({ ...productoDet, producto: data })
                console.log(productoDet)
                this.handleOnClick = this.handleOnClick.bind(this)
            })
            .catch(error => {
                console.log(error);
            })
    }, []);
    /*   return (
           <Header />
       );*/
    return (
        <>
            <Header />
            <Card style={{ width: '18rem' }}>
  <Card.Body>

                <div className='grid2'>
                    <div>
                    <Container>
                        <Row>
                            <Col xs={6} md={4}>
                                <Image src={productoDet.producto.imagen} className='produs' rounded />
                            </Col>
                        </Row>
                    </Container>    

                        <Card.Title>{productoDet.producto.nombre}</Card.Title>
                        <Card.Text>
                            {productoDet.producto.descripcion}
                            <p id='precio'>${productoDet.producto.precio}</p>
                        </Card.Text>
                        <button className='buttondet'>
                            Comprar</button>
                    </div>
                </div>
  </Card.Body>
</Card>
            <Footer />
        </>
    );
}
export default Productos;



