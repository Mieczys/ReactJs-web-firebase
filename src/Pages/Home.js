import React from 'react';
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'; //para que funcione Alertas pero rompe toda la forma
import Alertas from "../Components/Alertas"
import Cuadro from "../Components/Cuadro"
import Jumbotron from "react-bootstrap/Jumbotron"
import Container from "react-bootstrap/Container"

function Home() {
    return (
  <div>
                        <Header />
            <Jumbotron fluid>

  <Container>
            <Cuadro/>
            <Alertas />
            <Footer />
  </Container>
</Jumbotron>
</div>
    );
}
export default Home;


