// TODO: Add a comment explaining how we are able to extract the key value pairs from props
// We destructure the props
function NavTabs({ currentPage, handlePageChange }) {
    return (
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a
            href="#home"
            onClick={() => handlePageChange('Home')}
            //*  TODO: BONUS: Add a comment explaining what kind of operator this is and what it is checking for
            // The operator is called Conditional or Ternary operator
            // adding a class active, or not, changes the styling when Home pg is rendered
            className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
          >
            Home
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#about"
            onClick={() => handlePageChange('About')}
            //  TODO: Add a comment explaining what this logic is doing
            // if about is clicked go to About and make it look active
  
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          >
            About
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#project"
            onClick={() => handlePageChange('Project')}
            //  TODO: Add a comment explaining what this logic is doing
            //  if projects is clicked set to active with css & render Project pg
            className={currentPage === 'Project' ? 'nav-link active' : 'nav-link'}
          >
            Projects
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contact"
            //  TODO: Add a comment explaining what this logic is doing
            //  If contact selected render Contact pg, set as active with css
  
            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </a>
        </li>
      </ul>
    );
  }
  
  export default NavTabs;
  