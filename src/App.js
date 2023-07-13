import React, { useState } from 'react';
import PortfolioContainer from './components/PortolioContainer';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }

    return <Home setCurrentPage={setCurrentPage}/>;
  };

  return (
    <PortfolioContainer handlePageChange={setCurrentPage} currentPage={currentPage}>
      {renderPage()}
    </PortfolioContainer>
  );
}

export default App;

