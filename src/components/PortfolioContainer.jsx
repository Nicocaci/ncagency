import React, { useState, useEffect } from 'react';
import '../css/Portfolio.css';
import axios from 'axios';
import { Link } from 'react-router-dom';


const PortfolioContainer = () => {
  const [categoria, setCategoria] = useState("Todos");
  const [proyectos, setProyectos] = useState([]);

  useEffect(() => {
    const fetchProyectos = async () => {
      try {
        const response = await axios.get('/data/proyectos.json')
        setProyectos(response.data)
      } catch (error) {
        console.log('Error al traer los Proyectos');
      }
    }
    fetchProyectos();
  }, []);


  // Filtrar proyectos según categoría
  const proyectosFiltrados = proyectos.filter((p) => {
    if (categoria === "Todos") return true; // muestra todo
    return p.categoria === categoria;       // filtra por coincidencia
  });



  return (
    <div id='portfolio' className="portfolio-container">
      <div>
        <p className="titulos-container">Portfolio</p>
        <p className="sub-container">
          Transformamos desafíos en grandes éxitos. Nuestros trabajos destacados
        </p>
      </div>

      <div>
        <ul className='li-none flex-filtro'>
          <li className='li-filtro' onClick={() => setCategoria("Todos")}>Todos</li>
          <li className='li-filtro' onClick={() => setCategoria("Desarrollo web")}>Desarrollo Web</li>
          <li className='li-filtro' onClick={() => setCategoria("E-commerce")}>E-commerce</li>
          <li className='li-filtro' onClick={() => setCategoria("App web")}>App Web</li>
        </ul>
      </div>
      <div className="grid-portfolio">
        {proyectosFiltrados.map((p) => (
          <div className="card-port">
            <img className="img-port" src={p.img} alt={p.titulo} />
            <p className="nombre-port">{p.titulo}</p>
            <p className="descr-port">{p.sub}</p>
            <div className="flex-port">
              <p className="port-stats">              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" class="bi bi-graph-up" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M0 0h1v15h15v1H0zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07" />
              </svg> {p.stats1}</p>
              <p className="port-stats">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="grey" class="bi bi-calendar" viewBox="0 0 16 16">
                  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
                </svg> {p.tiempo}</p>
            </div>
            <Link className='link-default' key={p.id} to={`/proyectos-entregados/${p.id}`} >
              <p className="btn-proyecto">Ver proyecto completo</p>
            </Link>
          </div>

        ))}
      </div>

    </div>
  );
}

export default PortfolioContainer;
