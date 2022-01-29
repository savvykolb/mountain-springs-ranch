import '../style/style.css';

function About() {
    const cyrus = require('../img/cyrus.jpg');
    return (
        <section id="about" class="about">
            <div class="container">

                <div class="row content">
                    <div class="col-lg-6">
                        <img class="image d-flex align-items-stretch justify-content-center justify-content-lg-start" src={cyrus} alt="Cyrus Couple" />
                    </div>
                    <div class="col-lg-6 ps-0 ps-lg-5 pe-lg-1 d-flex align-items-stretch">
                        <div class="content d-flex flex-column justify-content-center">
                            <h2>The Cyrus Family</h2>
                            <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assum perenda sruen jonee trave</h3>
                            <p>
                                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;