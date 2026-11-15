
import { useState } from 'react';
import './App.css';
import DModal from './components_d/dModal';
import Test from './components_d/testContent';
import RestaurantSelection from './components_d/restaurant/restaurantSelectionModal'
import ImageSlider from './components_d/imageSlider';

function App() {
    const [activeModal, setActiveModal] = useState(null);

    const modalContent = {
        test: {
            title: 'test',
            content: <Test />
        },

        restaurants: {
            title: 'restaurant selection',
            content: <RestaurantSelection />
        }
    };

    const openModal = (modalName) => {
        setActiveModal(modalName);
    };

    const closeModal = () => {
        setActiveModal(null);
    };

    const slideData = [
        { url: 'img_nature_wide.jpg', caption: 'Caption Text' },
        { url: 'img_snow_wide.jpg', caption: 'Caption Two' },
        { url: 'img_mountains_wide.jpg', caption: 'Caption Three' },
    ];

    const currentModal = modalContent[activeModal];

    return (
        <main>
            <header className="header">
                <h1>Port of Troy</h1>

                <button onClick={() => openModal('test')}>
                    About
                </button>

                
                <button onClick={() => openModal('restaurants')}>
                    Restaurants
                </button>
            </header>

            <section>
                <p>Welkom op de default page van Port of Troy.</p>

                <ImageSlider images={slideData} />
            </section>

            <DModal
                isOpen={Boolean(currentModal)}
                title={currentModal?.title}
                onClose={closeModal}
            >
                {currentModal?.content}
            </DModal>
        </main>
    );
}

export default App;
