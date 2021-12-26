import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
  } from './NavbarElements';
import './Navbar.css';


function NavbarStudent(){

    return (
        <>
     
        <Nav>
          <NavLink to='/'>
            <img id="Image" src={require('./Logo_ENSA.png')} alt='logo' />
            <div id="TextBackground">
            <h1 id="gtitle">Espace de demandes des documents</h1>
            </div>
          </NavLink>
          <Bars />


        </Nav>
      </>
      );
}
export default NavbarStudent ;