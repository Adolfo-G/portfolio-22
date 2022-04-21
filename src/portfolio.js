import React, { useState } from 'react';
import About from './components/about/about';
import Work from './components/works/works';
import Contact from './components/contacts/contacts';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer'

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Work') {
      return <Work />;
    }
    if (currentPage === "Contact"){
      return <Contact />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className='container'>
      <div className='nav-and-body'>
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      <div className='body'>
        {renderPage()}
      </div>
      </div>
      <Footer />
    </div>
  );
}
