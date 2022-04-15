import React, {useState} from 'react';
import {NavDropdown, Nav, Navbar, Container, Image,} from 'react-bootstrap';

import '../../style/header.css';

function Header () {
  const[header, setHeader] = useState(false);

  const changeBackground = () => {
if(window.scrollY >=80){
  setHeader(true)
}else {
  setHeader(false)
}
  };
  window.addEventListener('scroll', changeBackground);

    return (
      <div >

<div className='first-header'>
<Navbar expand='lg' className={header ? 'header active' : 'header'}  >
  <Container>
    <Navbar.Brand href="/">Л О Г О</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="justify-content-end flex-grow-1 pe-3"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="/aboutUs">За нас</Nav.Link>
        <Nav.Link href="#action1">Оптички очила</Nav.Link>
        <Nav.Link href="#action1">Очила за сонце</Nav.Link>
        <Nav.Link href="#" >Контактни леќи</Nav.Link>
        <Nav.Link href="#action1">Совети</Nav.Link>
        <Nav.Link href="/kontakt">Контакт</Nav.Link>
      </Nav>
      
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>

        </div>
    )
}
export default Header