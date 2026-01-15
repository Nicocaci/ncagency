import React from 'react';
import '../css/MainContainer.css'

const MainContainer = () => {
    return (
        <div className='main-container'>
            <div>
                <div className='div-main'>
                    <p className='titulo-main'>AGENCIA DIGITAL</p>
                    <p className='sub-main'>Para Marcas y Emprendedores</p>
                    <p className='frase-main'>Transformámos ideas en proyectos reales</p>
                </div>
                <div className='container-botones center'>
                    <button className='black-button'>Inciar Proyecto</button>
                    <button className='white-button'>Agendar Reunion</button>
                </div>
            </div>
            <div className='main-stats'>
                <div className='div-stats'>
                    <div>
                        <p className='stats'>10+</p>
                    </div>
                    <div>
                        <p>Proyectos Entregados</p>
                    </div>
                </div>
                <div className='div-stats'>
                    <div>
                        <p className='stats'>24/7</p>
                    </div>
                    <div>
                        <p>Soporte Técnico</p>
                    </div>
                </div>
                <div className='div-stats'>
                    <div>
                        <p className='stats'>100%</p>
                    </div>
                    <div>
                        <p>Responsive Mobile</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainContainer;