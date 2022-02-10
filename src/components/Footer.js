import './style/style.css';
import { Navbar, Container} from 'react-bootstrap';

// import { BsFillEnvelopeOpenFill, BsPhone} from "react-icons/bs"
// import {FaLinkedin, FaGithub} from 'react-icons/fa'

function Footer() {
  return (
    <Navbar fixed="bottom" id="footer">
      <Container>
    
      <div class="container">
        <div class="copyright">
          &copy; 2022 Copyright <a href={'https://www.savvykolb.com'} rel="noreferrer" target="_blank"> SavvyKolb</a>
        </div>
      </div>
      </Container>
    </Navbar>
  );
}

export default Footer;