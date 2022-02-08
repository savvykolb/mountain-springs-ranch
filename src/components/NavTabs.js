import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import './style/style.css'


function NavTabs({ currentPage, handlePageChange }) {
    return (
        <Navbar sticky="top" bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home"
                    class="active, nav-link"
                    onClick={() => handlePageChange('Home')}
                    className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>
                    Mountain Springs Ranch
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="me-auto justify-content-end" id="basic-navbar-nav">
                        <Nav.Link href="#home"
                            class="active, nav-link"
                            onClick={() => handlePageChange('Home')}
                            className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>
                            Home
                        </Nav.Link>
                        <NavDropdown title="About" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#about"
                                class="active, nav-link"
                                onClick={() => handlePageChange('About')}
                                className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>
                                About
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#basenji"
                                class="active, nav-link"
                                onClick={() => handlePageChange('Basenji')}
                                className={currentPage === 'Basenji' ? 'nav-link active' : 'nav-link'}>
                                About Basenjis
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#testimonial"
                                class="active, nav-link"
                                onClick={() => handlePageChange('Testimonial')}
                                className={currentPage === 'Testimonial' ? 'nav-link active' : 'nav-link'}>
                                Testimonials
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Puppies" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#currentPup"
                                class="active, nav-link"
                                onClick={() => handlePageChange('CurrentPup')}
                                className={currentPage === 'CurrentPup' ? 'nav-link active' : 'nav-link'}>
                                Available Puppies
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#pastPup"
                                class="active, nav-link"
                                onClick={() => handlePageChange('PastPup')}
                                className={currentPage === 'PastPup' ? 'nav-link active' : 'nav-link'}>
                                Past Puppies
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#contact"
                       class="active, nav-link"
                       onClick={() => handlePageChange('Contact')}
                       className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>
                           Contact
                       </Nav.Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavTabs;