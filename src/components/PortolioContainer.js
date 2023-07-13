import React from 'react';
import NavTabs from './NavTabs';
import ThemeSwitcher from './ThemeSwitcher';

const PortfolioContainer = ({ children, handlePageChange, currentPage }) => {
  return (
    <div>
      <NavTabs handlePageChange={handlePageChange} currentPage={currentPage} />
      <ThemeSwitcher />
      {children}
    </div>
  );
}

export default PortfolioContainer;
