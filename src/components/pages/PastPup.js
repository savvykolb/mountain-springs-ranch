import '../style/style.css';
import { puppies } from "./puppies"



function PastPup() {
    return (

        <section id="portfolio" class="portfolio">
            <div className="container">

              {puppies.map((puppy, index) => (
                    <div key={index}>
                        <div className="row portfolio-container">
                            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                <div className="portfolio-wrap">
                                    <img className="img-fluid" alt="Puppy" src= {puppy.image} />
                                    <div className="portfolio-info">
                                        <h4>{puppy.year}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
                )}


            </div>
        </section>


    );
}

export default PastPup;