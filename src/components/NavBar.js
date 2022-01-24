import './style/style.css'

function NavTabs({ currentPage, handlePageChange }) {
    return (
        <header id="header" class="fixed-top d-flex align-items-center">
            <div class="container d-flex align-items-center">

                <h1 class="logo me-auto">Mountain Springs Ranch</h1>
                <nav id="navbar" class="navbar">
                    <ul>
                        <li><a
                            href="#home"
                            class="active, nav-link"
                            onClick={() => handlePageChange('Home')}
                            className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
                        >
                            Home</a></li>

                        <li class="dropdown"><a href="#"><span>About </span> <i class="fas fa-chevron-down" style={{fontWeight: "1px"}}> </i></a>
                            <ul>
                                <li><a 
                                href="#about"
                                class="active, nav-link"
                                onClick={() => handlePageChange('About')}
                                className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>About Us</a></li>
                                <li><a 
                                href="#basenji"
                            class="active, nav-link"
                            onClick={() => handlePageChange('Basenji')}
                            className={currentPage === 'Basenji' ? 'nav-link active' : 'nav-link'}>Basenjis</a></li>
                                <li><a 
                                href="#testimonials"
                                class="active, nav-link"
                                onClick={() => handlePageChange('Testimonials')}
                                className={currentPage === 'Testimonials' ? 'nav-link active' : 'nav-link'}>Testimonials</a></li>
                            </ul>
                        </li>
                        <li><a 
                        href="#pastPup"
                        class="active, nav-link"
                        onClick={() => handlePageChange('PastPup')}
                        className={currentPage === 'PastPup' ? 'nav-link active' : 'nav-link'}>Past Puppies</a></li>
                       <li><a 
                       href="#contact"
                       class="active, nav-link"
                       onClick={() => handlePageChange('Contact')}
                       className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact</a></li>
                    </ul>
                    <i class="bi bi-list mobile-nav-toggle"></i>
                </nav>
            </div>
        </header>

    )
}

export default NavTabs;