import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navigation/Navbar.jsx';
import Home from './pages/Home.jsx';
import Footer from './components/navigation/Footer.jsx';
import ItemDetail from './pages/ItemDetail.jsx';

function App() {


  return(
  <>
    <BrowserRouter>
    <div id='root'>
    <Navbar />
      <main>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/proyectos-entregados/:id' element={<ItemDetail/>}/>
      </Routes>
      </main>
    <Footer/>
    </div>
    </BrowserRouter>
  </>
  )
}

export default App
