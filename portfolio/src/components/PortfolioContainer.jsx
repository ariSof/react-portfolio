import { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import Contact from './pages/Contact';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // TODO: Add a comment describing the functionality of this method
  // Depending on which is currently set as the currentPage, that is returned as the 
  // page to be rendered
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Project') {
      return <Project />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* // TODO: Add a comment describing what we are passing as props
       The current page we are on and the handler
       */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* // TODO: Add a comment explaining what is happening on the following line
        we call renderPage function which will decide which page will actually be shown.
      */}
      <main className="mx-3">{renderPage()}</main>
    </div>
  );
}
