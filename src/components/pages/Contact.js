import '../style/style.css';
import { BsFillEnvelopeOpenFill, BsPhone } from "react-icons/bs"

function Contact() {
    return (
        <section>
            <div class="container contact">
                <div className='info'>

                    <div class="title">
                        Contact
                    </div>
                    <h5 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }} className="d-flex">
                        Interested in becoming apart of the basenji family?
                    </h5>
                    <br></br>
                    <br></br>
                    <div class="social-links">
                        <div className="phone">
                            <a target='_blank' rel="noreferrer" href="tel:951-763-4672" class="phoneNumber"><BsPhone /></a>
                            <h4>Call:</h4>
                            <p>+1 951-763-4672</p>
                        </div>
                        <div className="email">
                        <a target='_blank' rel="noreferrer" href="#" class="email"><BsFillEnvelopeOpenFill /></a>
                        <h4>Email:</h4>
                            <p>TBD</p>
                        </div>
                    </div>
                </div>
            </div >
        </section >
    );
}

export default Contact;