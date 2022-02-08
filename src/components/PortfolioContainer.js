import React, { useState } from 'react';
import NavTabs from './NavTabs';
import About from './pages/About';
import Basenji from './pages/Basenji';
import Home from './pages/Home';
import Contact from './pages/Contact';
import PastPup from './pages/PastPup';
import Testimonial from './pages/Testimonial'
import CurrentPup from './pages/CurrentPup';


export default function PortfolioContainer() {

  const [currentPage, setCurrentPage] = useState('Home');


  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Basenji') {
      return <Basenji />;
    }
    if (currentPage === 'Testimonial') {
      return <Testimonial />;
    }
    if (currentPage === 'PastPup') {
      return <PastPup />;
    }
    if (currentPage === 'CurrentPup') {
      return <CurrentPup />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}
