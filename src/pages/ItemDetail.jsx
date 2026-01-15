import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../css/ItemDetail.css'

const ItemDetail = () => {
  const { id } = useParams();
  const [proyecto, setProyecto] = useState({});
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchP = async () => {
      try {
        const response = await axios.get('/data/proyectos.json')
        const buscarProyecto = response.data.find((p) => p.id === Number(id))
        setProyecto(buscarProyecto)
      } catch (error) {
        console.log('Error buscando proyecto');
        setProyecto(null)
      } finally {
        setLoading(false)
      }
    }
    fetchP();
  }, [id])

  if (loading) return <p>Cargando proyecto...</p>;

  if (!proyecto) return <p>Proyecto no encontrado.</p>;
  return (
    <>
      <div className='fondo-item-detail'
        style={{
          backgroundImage: `url(${proyecto.imgPresentacion})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}>
        <div className='detalle-content'>
          <h2 className='titulo-detalle'>{proyecto.titulo}</h2>
          <p className='subT-detalle'>{proyecto.sub}</p>
        </div>
      </div>
      <div className='detalle-proyecto-container'>
        <div className=''>
          <ul className='li-container-detalle'>
            <li className='li-detalle center'>Introducción</li>
            <li className='li-detalle center'>Cliente</li>
            <li className='li-detalle center'>Objetivo</li>
            <li className='li-detalle center'>Solución</li>
          </ul>
        </div>
        <div className='introduccion-container'>
          <div className='div-detalle-1'>
            <ul>
              <li>Introducción</li>
            </ul>
          </div>
          <div className='div-detalle-2'>
            <p>{proyecto.introduccion}</p>
          </div>
        </div>
        <div className='introduccion-container'>
          <div className='div-detalle-1'>
            <ul>
              <li>Cliente</li>
            </ul>
          </div>
          <div className='div-detalle-2'>
            <p>{proyecto.cliente}</p>
          </div>
        </div>
        <div className='introduccion-container'>
          <div className='div-detalle-1'>
            <ul>
              <li>Objetivo</li>
            </ul>
          </div>
          <div className='div-detalle-2'>
            <p>{proyecto.objetivo}</p>
          </div>
        </div>
        <div className='introduccion-container'>
          <div className='div-detalle-1'>
            <ul>
              <li>Solución</li>
            </ul>
          </div>
          <div className='div-detalle-2'>
            <p>{proyecto.solucion}</p>
          </div>
        </div>
      </div>

    </>
  )
}

export default ItemDetail