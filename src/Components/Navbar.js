import React,{useState} from 'react'
import Logo from '../assets/lojaLogo.png';
import {Link} from 'react-router-dom'
import '../styles/Navbar.css';

function Navbar() {
    
  return (
    <div className="navbar">
      <div className="leftSide">
          <img src={Logo}/>
          </div>
      <div className="righttSide">
          <Link to='/'>Home</Link>
          <Link to='/produto'>Produtos</Link>
          <Link to='/sobre'>Sobre</Link>
          <Link to='/contato'>Contato</Link>
      </div>
    </div>
  )
}

export default Navbar
