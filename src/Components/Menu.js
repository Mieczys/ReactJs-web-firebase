import React from 'react';
import { Link } from 'react-router-dom'
import Nav from "react-bootstrap/Nav"

function Menu() {
    return (
        


<Nav
  activeKey="/home"
  onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
>
  <Nav.Item>
    <Nav.Link><p><button className="buttondet2"><Link to={{ pathname: '/' }}>Inicio</Link></button></p></Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link><p><button className="buttondet2"><Link to={{ pathname: '/Tienda' }}>Productos</Link></button></p></Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link><p><button className="buttondet2"><Link to={{ pathname: '/Login' }}>Login/Sign in</Link></button></p></Nav.Link>
  </Nav.Item>

</Nav>



        /*

<Nav defaultActiveKey="/home" as="ul">
  <Nav.Item as="li">
    <Nav.Link href="/"><p><button className="buttondet2"><Link to={{ pathname: '/' }}>Inicio</Link></button></p></Nav.Link>
  </Nav.Item>
  <Nav.Item as="li">
    <Nav.Link eventKey="link-1"><p><Link to={{ pathname: '/Tienda' }}>Productos</Link></p></Nav.Link>
  </Nav.Item>
  <Nav.Item as="li">
    <Nav.Link eventKey="link-2"><p><button className="buttondet2"><Link to={{ pathname: '/Login' }}>Login/Sign in</Link></button></p></Nav.Link>
  </Nav.Item>
</Nav>



/*
        <Nav activeKey="/home" onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
  <Nav.Item>
  <button className="buttondet2"> <Nav.Link to={{ pathname: '/' }}>Inicio</Nav.Link> </button>
  </Nav.Item>
  <Nav.Item>
  <button className="buttondet2"><Nav.Link to={{ pathname: '/Tienda' }}>Productos</Nav.Link> </button>
  </Nav.Item>
  <Nav.Item>
  <button className="buttondet2"><Nav.Link to={{ pathname: '/Login' }}>Login/Sign in</Nav.Link> </button>
  </Nav.Item>
  <Nav.Item>
  <button className="buttondet2"><Nav.Link eventKey="disabled" disabled>
      Disabled
    </Nav.Link> </button>
  </Nav.Item>
</Nav>
        //<form class="col-sm-12 col-lg-4">
        /*<div>
            <p><button className="buttondet2"><Link to={{ pathname: '/' }}>Inicio</Link></button></p>

            <p><button className="buttondet2"><Link to={{ pathname: '/Tienda' }}>Productos</Link></button></p>
            
            <p><button className="buttondet2"><Link to={{ pathname: '/Login' }}>Login/Sign in</Link></button></p>
        </div >*/
        //</form>
        
    );
}
export default Menu;
