import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import './App.css';
import DModal from './components_d/dModal';
import Test from './components_d/testContent';
import RestaurantSelection from './components_d/restaurant/restaurantSelectionModal'
import ImageSlider from './components_d/imageSlider';
import AppRoutes from './components_d/routing/appRoutes';

console.log('1. App.jsx imports loaded:', { DModal, Test, RestaurantSelection, ImageSlider, AppRoutes });

function App() {
    console.log('2. App component starting...');
    const [activeModal, setActiveModal] = useState(null);
    console.log('3. State initialized. Calling useLocation...');

    const { pathname } = useLocation();
    console.log('4. Current pathname:', pathname);

    // App stays mounted when the page changes, so the modal would stay open on top
    // of the new page. This closes it every time the URL path changes
    // (a click on a restaurant, but also the browser's back button).
    useEffect(() => {
        console.log('5. useEffect triggered on pathname change:', pathname);
        setActiveModal(null);
    }, [pathname]);
    
    const openModal = (modalName) => {
        console.log('Event: openModal called with:', modalName);
        setActiveModal(modalName);
    };

    const closeModal = () => {
        console.log('Event: closeModal called');
        setActiveModal(null);
    };

    const modalContent = {
        test: {
            title: 'test',
            content: <Test />
        },

        restaurants: {
            title: 'restaurant selection',
            content: <RestaurantSelection />
        },

        menu: {
            title: 'menu & ordering',
            content: <p>Menu and ordering will follow.</p>
        },

        reservation: {
            title: 'reservation',
            content: <p>Reservations will follow.</p>
        }
    };



    const slideData = [

    ];

    const currentModal = modalContent[activeModal];

    console.log('6. Rendering App JSX. currentModal:', currentModal);

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
                <p>Hi. Welkom op de default page van Port of Troy.</p>

                <ImageSlider images={slideData} />
            </section>

            <AppRoutes onOpenModal={openModal} />

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
