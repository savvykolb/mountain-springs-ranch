import '../style/style.css';

function Basenji() {
    const basenji = require('../img/basenji/basenji-pg.jpeg');
    return (
        <section id="about" class="about">
            <div class="container">

                <div class="row content">
                    <div class="col-lg-4">
                        <img id="basenji" class="image d-flex align-items-stretch justify-content-center justify-content-lg-start" src={basenji} alt="Basenji Puppies" />
                    </div>
                    <div class="col-lg-8 ps-0 ps-lg-5 pe-lg-1 d-flex align-items-stretch">
                        <div class="content d-flex flex-column justify-content-center">
                            <h2>Basenji at a Glance</h2>
                            <h5>
                            Basenjis are ancient dogs tracing their lineage from pariah dogs to the Egyptians and then to hunting dogs for the tribes in the Congo. Running in silent packs (they do make noise, but not regular barking), the Basenjis often wore bells to alert their human partners to their whereabouts in the deep jungle. They were, and still are, renowned for their keen eyesight and excellent sense of smell.
                            </h5>
                            <h5>
                            The basenji makes a great family dog. They are very affectionate with their family. They originally hunted in packs and are usually good with other dogs if socialized while young. Basenjis tend to be clever dogs. They need creative, patient handling to bring out their best qualities. As mentioned, they do not bark, but the yodeling certainly makes noise. 
                            </h5>
                            <h5> Basenji breeders and owners often refer to them as "catlike," as they do a great deal of licking to groom and are quiet. They also seem to like climbing up onto high places; perhaps to survey their kingdoms from there.
                            </h5>
                            <ul>
                                <li>Height: 16-17 inches tall at the shoulder</li>
                                <li>Weight: 22-24 pounds</li>
                                <li>Life Span: 10-13 years</li>
                                <li>Coat: Short, easy grooming</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Basenji;