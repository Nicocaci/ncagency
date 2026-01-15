import React from 'react';
import '../css/Servicios.css'

const ServiciosContainer = () => {
  return (
    <>
    <div id='servicios' className='servicios-container'>
      <div>
        <p className='titulos-container'>Servicios</p>
        <p className='sub-container'>Diseñamos y desarrollamos soluciones integrales para tu crecimiento digital</p>
      </div>
      <div className='grid-servicios'>
        <div className='card-servicios'>
          <p className='titulo-card'>Desarrollo web</p>
          <p>Sitios web que convierten visitantes en clientes</p>
          <ul className='ul-servicios'>
            <li>Desarrollo Responsive</li>
            <li>Optimización de velocidad</li>
            <li>Diseño UX/UI personalizado</li>
            <li>Integración de sistemas</li>
          </ul>
        </div>
        <div className='card-servicios'>
          <p className='titulo-card'>E-Commerce</p>
          <p>Tiendas online desarrolladas desde 0, sin comisiones por venta</p>
          <ul className='ul-servicios'>
            <li>Pasarelas de pago integradas directamente</li>
            <li>Gestión total de productos, stock y pedidos</li>
            <li>Panel de administración propio</li>
            <li>Diseño adaptable movil</li>
          </ul>
        </div>
        <div className='card-servicios'>
          <p className='titulo-card'>APP web</p>
          <p>Aplicaciones a medida para procesos, ventas o gestión online</p>
          <ul className='ul-servicios'>
            <li>Desarrollo a medida</li>
            <li>Acceso multiplataforma</li>
            <li>Paneles administrativos</li>
            <li>Integración con sistemas</li>
          </ul>
        </div>
      </div>
    </div>
          <div className="slider-text-container">
        <div className="slider-track">
          <p className="slider-text">
            DESARROLLAMOS SOLUCIONES DIGITALES  DESARROLLAMOS SOLUCIONES DIGITALES  DESARROLLAMOS SOLUCIONES DIGITALES 
          </p>
          <p className="slider-text">
            DESARROLLAMOS SOLUCIONES DIGITALES  DESARROLLAMOS SOLUCIONES DIGITALES  DESARROLLAMOS SOLUCIONES DIGITALES 
          </p>
        </div>
      </div>
      </>
  )
}

export default ServiciosContainer