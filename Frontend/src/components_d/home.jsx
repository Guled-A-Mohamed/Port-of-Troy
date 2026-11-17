import ImageSlider from './imageSlider';

// Images for the slider: add them here
const slideData = [];

function Home() {
    return (
        <section>
            <p>Welkom op de default page van Port of Troy.</p>

            <ImageSlider images={slideData} />
        </section>
    );
}

export default Home;
