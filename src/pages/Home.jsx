import React from 'react';
import '../css/Home.css';
import MainContainer from '../components/MainContainer.jsx';
import ServiciosContainer from '../components/ServiciosContainer.jsx';
import PortfolioContainer from '../components/PortfolioContainer.jsx';
import PorqueContainer from '../components/PorqueContainer.jsx';
import TestimonioContainer from '../components/TestimonioContainer.jsx';
import ContactoContainer from '../components/ContactoContainer.jsx';


const Home = () => {
  return (
    <>
    <MainContainer/>
    <ServiciosContainer/>
    <PortfolioContainer/>
    <PorqueContainer/>
    <ContactoContainer/>
    </>
  )
}

export default Home