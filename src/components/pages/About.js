import '../style/style.css';

function About() {
    const cyrus = require('../img/cyrus.jpg');
    return (
        <section class="about">
            <div class="container">

                <div class="row content">
                    <div class="col-lg-5">
                        <img id="cyrus" class="image d-flex align-items-stretch justify-content-center justify-content-lg-start" src={cyrus} alt="Cyrus Couple" />
                    </div>
                    <div class="col-lg-7 ps-0 ps-lg-5 pe-lg-1 d-flex align-items-stretch">
                        <div class="content d-flex flex-column justify-content-center">
                            <h2>The Cyrus Family</h2>
                            <h5>
                                Mountain Springs Ranch has been our home for over 40 years. Originally from Palos Verdes, it was our dream to live on a ranch and raise animals to share the joy and happiness that animals can bring to other people. We made the move over 40 years ago and started our dream. We have been breeding dogs and horses here ever since. 
                            </h5>
                            <h5>
                            Over the years, we have provided thousands of people with their beloved pets. We have made the choice to not show our dogs, but they have been shown by others with great success. 
                            </h5>
                            <h5>
                                Along with raising Basenji dogs and a variety of horses, we have had the blessing of raising our 4 children, 9 grandchildren, and 2 great-grandchildren on this ranch.
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;