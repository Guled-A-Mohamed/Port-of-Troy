import ImageSlider from './imageSlider';

// Images for the slider: add them here
const slideData = [];

function Home() {
    const slideImages = [
        {
        url: 'https://www.w3schools.com/howto/img_nature_wide.jpg',
        caption: 'Caption One'
        },
        {
        url: 'https://www.w3schools.com/howto/img_snow_wide.jpg',
        caption: 'Caption Two'
        },
        {
        url: 'https://www.w3schools.com/howto/img_mountains_wide.jpg',
        caption: 'Caption Three'
        }
    ];
        
    return (
        <section>
            <p>Welkom op de default page van Port of Troy.</p>

            <ImageSlider images={slideImages}/>
        </section>
    );
}

export default Home;
