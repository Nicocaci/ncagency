import React from 'react';
import '../css/Porque.css';

const PorqueContainer = () => {
    return (
        <div id='porque' className='porque-container'>
            <div>
                <p className='titulos-container'>Por que elegirnos?</p>
                <p className='sub-container'>Somos tu socio tecnológico estratégico para tu crecimiento digital, con el objetivo de construir relaciones a largo plazo</p>
            </div>
            <div className='porque-grid'>
                <div className='card-porque'>
                    <p className='titulo-porque'>Entrega Rápida</p>
                    <p className='sub-porque'>Proyectos completados en tiempo record sin comprometer la calidad</p>
                </div>
                <div className='card-porque'>
                    <p className='titulo-porque'>Desarrollo a medida</p>
                    <p className='sub-porque'>Creamos tu plataforma desde cero, sin depender de servicios externos, lo que te permite eliminar comisiones por venta y mantener el control total del negocio.</p>
                </div>
                <div className='card-porque'>
                    <p className='titulo-porque'>Equipo Capacitado</p>
                    <p className='sub-porque'>Te acompañamos desde la idea hasta el lanzamiento. Capacidad técninca adaptada a cada necesidad.</p>
                </div>
                <div className='card-porque'>
                    <p className='titulo-porque'>Soporte y evolución</p>
                    <p className='sub-porque'>Después del lanzamiento, se brinda mantenimiento para corregir fallos, actualizar componentes o sumar nuevas funciones según las necesidades del cliente</p>
                </div>
            </div>
        </div>
    )
}

export default PorqueContainer