import React from 'react';
import Menu from '../Components/Menu'
import Wbuy from '../Includes/Images/wbuy.png';
import Jumbotron from "react-bootstrap/Jumbotron"
import Container from "react-bootstrap/Container"

function Footer() {
    return (
        <Jumbotron fluid fixed="bottom">
            <Container>
            <footer className='App-footer grid2' fixed="bottom">

                <h1>WORLDBuy</h1>
                
            </footer>

        </Container>
        </Jumbotron>
    );
}
export default Footer;
