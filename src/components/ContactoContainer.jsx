import React, { useState } from 'react';
import '../css/Contacto.css';

const ContactoContainer = () => {
  return (
    <div id='contacto' className='contacto-container'>
      <div>
        <p className='titulos-container'>Contacto</p>
      </div>
      <div className='grid-contacto'>
        <div className='grid-contacto-1'>
          <p className='sub-container'>Hagamos algo juntos. Gracias por visitarnos. Estamos aquí para ayudarte a transformar tus ideas en realidad. Contáctanos hoy y comencemos a crear algo increíble juntos!</p>
          <div className='img-container'>
            <img className='img-pc' src="/pc.png" alt="Notebook" />
          </div>
        </div>
        <div>
          <form className='form-contacto' action="">
            <div className='grid-form'>
              <div className='form-contacto'>
                <label>Nombre</label>
                <input name='nombre' placeholder='Juan' className='input-form' type="text" />
              </div>
              <div className='form-contacto'>
                <label>Apellido</label>
                <input name='apellido' placeholder='Perez' className='input-form' type="text" />
              </div>
              <div className='form-contacto'>
                <label>Teléfono</label>
                <input className='input-form' name='telefono' placeholder='+54 11 2266 0000' type="text" />
              </div>
              <div className='form-contacto'>
                <label>Dni/Empresa/Razón Social</label>
                <input className='input-form' name='dni' placeholder='xx.xxx.xxx / Ejemplo S.A.' type="text" />
              </div>
            </div>
            <label>Email</label>
            <input type="text" name='email' placeholder='Juanperez@gmail.com'/>
            <label>Mensaje</label>
            <textarea name="mensaje" placeholder='Contanos sobre tu proyecto' id=""></textarea>
            <div className='btn-container'>
              <button className='btn-mensaje'>Enviar Mensaje</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactoContainer