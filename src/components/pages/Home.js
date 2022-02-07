import '../style/style.css';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

function Home({ currentPage, handlePageChange }) {
  const slide2 = require('../img/slide/slide-2.jpg');
  const slide1 = require('../img/slide/slide-1.jpg');
  const slide3 = require('../img/slide/slide-3.jpg');
  const slide4 = require('../img/slide/slide-4.jpg');


  return (
    <section id="hero">
      <Carousel>
        <Carousel.Item interval={4000}>

          {/* <!-- Slide 1 --> */}
          <img src={slide2}
            alt="Mountain Springs Ranch" />
          <Carousel.Caption>
            <div class="container">
              <h2>Mountain Springs Ranch</h2>
              <p>The Cyrus family has been the home to the rare barkless basenji dogs & to registered Thoroughbred, Quarter, and Paint horses for over 40 years. We are located in Southern California, Riverside County, in the mountains near Palm Springs/Temecula/Hemet.</p>
            </div>
          </Carousel.Caption>
          </Carousel.Item>

  {/* <!-- Slide 2 --> */}
          <Carousel.Item interval={4000}>
          <img src={slide3}
            alt="Basenji Pups" />
          <Carousel.Caption>
            <div class="container">
              <h2>Basenji Puppies</h2>
              <p>Beautiful Barkless Basenji Dogs, but they still can yodel and sing. We believe them to be the perfect dog for children and adults of all ages. For most families, these puppies become more like another family member than a dog.</p>
            </div>
          </Carousel.Caption>
          </Carousel.Item>

             {/* <!-- Slide 3 --> */}
             <Carousel.Item interval={4000}>
             <img src={slide4}
            alt="Basenji Pups" />
          <Carousel.Caption>
            <div class="container">
              <h2 >Why Our Pups?</h2>
              <p>We have been breeding basenji dogs and horses for over 40 years in this location. They are raised on a large acreage with clean air and spring water. Our dog parents are Fanconi and PRA tested, and our puppies have all the necessary up-to-date shots upon pick-up.</p>
            </div>
          </Carousel.Caption>
          </Carousel.Item>

           {/* <!-- Slide 4 --> */}
           {/* <Carousel.Item interval={4000}>
             <img src={slide1}
            alt="Basenji Pups" />
          <Carousel.Caption>
            <div class="container">
              <h2 >Slide 4</h2>
              <p> Pricing? How to reserve? Timeframe?</p>
            </div>
          </Carousel.Caption>
          </Carousel.Item> */}

      </Carousel>

    </section >
  );
}

export default Home;