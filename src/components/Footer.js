import './style/style.css';

// import { BsFillEnvelopeOpenFill, BsPhone} from "react-icons/bs"
// import {FaLinkedin, FaGithub} from 'react-icons/fa'

function Footer() {
  return (
    <footer id="footer">
      <div class="container">
        {/* <div class="social-links">
          <a target='_blank' rel="noreferrer" href="tel:336-707-0007" class="phoneNumber"><BsPhone /></a>
          <a target='_blank' rel="noreferrer" href="mailto:savannahnkolb@gmail.com" class="email"><BsFillEnvelopeOpenFill /></a>
          <a target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/savannah-kolb-11a128208/"class="linkedin"><FaLinkedin /></a>
          <a target='_blank' rel="noreferrer" href="https://github.com/snk923" class="gitHub"><FaGithub /></a>
        </div> */}
        <div class="copyright">
          &copy; Copyright <strong><span>Savvy Development</span></strong>. All Rights Reserved
        </div>
      </div>
    </footer>
  );
}

export default Footer;