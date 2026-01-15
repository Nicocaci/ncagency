import React from 'react';
import '../../css/Navbar.css'

const Navbar = () => {
  return (
    <div className='container-navbar'>
        <div>
            <a className='link-default' href="/"><h1>NCC</h1></a>
        </div>
        <div>
            <ul className='div-li'>
                <li>Servicios</li>
                <li>Portfolio</li>
                <li>Comenzar Proyecto</li>
            </ul>
        </div>
    </div>
  ) 
}

export default Navbar