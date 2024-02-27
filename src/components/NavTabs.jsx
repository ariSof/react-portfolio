import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';


function NavTabs({ currentPage, handlePageChange }) {
    return (
        <div className="block">
            <div id="hero" style={{display: 'flex'}} >
                <h1> Sofia Villalpando's Personal Portfolio </h1>
                
                <Container>
                    <Row>
                        <Col xs={6} md={4}>
                            <Image src="https://res.cloudinary.com/dwjrsllb0/image/upload/v1708928222/personal/photoS_uh6a8u.jpg" rounded alt='picture of Sofia' />
                        </Col>
                    </Row>
                </Container>
            </div>
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
  