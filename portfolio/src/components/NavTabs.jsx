function NavTabs({ currentPage, handlePageChange }) {
    return (
        <div>
            <h1> Personal Portfolio </h1>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a
                        href="#home"
                        onClick={() => handlePageChange('Home')}
                        //  Using Conditional or Ternary operator
                        //  to add a class if active, or not, changes the styling when Home pg is rendered
                        className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
                    >
                        Home
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href="#about"
                        onClick={() => handlePageChange('About')}
                        
                        className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                    >
                        About
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href="#project"
                        onClick={() => handlePageChange('Project')}
                        className={currentPage === 'Project' ? 'nav-link active' : 'nav-link'}
                    >
                        Projects
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href="#contact"
            
                        onClick={() => handlePageChange('Contact')}
                        className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                    >
                        Contact
                    </a>
                </li>
            </ul>
        </div>
    );
}
  
export default NavTabs;
  