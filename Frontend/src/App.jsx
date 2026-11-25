import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import './App.css';
import DModal from './components_d/dModal';
import Test from './components_d/testContent';
import RestaurantSelection from './components_d/restaurant/restaurantSelectionModal'
import ImageSlider from './components_d/imageSlider';
import AppRoutes from './components_d/routing/appRoutes';
import ParkSelector from './components_d/parkDropdown';

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

                <ParkSelector />
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
import { useState,} from "react";
import "./App.css";
import DModal from "./components_d/dModal";
import Test from "./components_d/testContent";
import Navbar from "./components/Navbar";
// 1. Move configuration outside the component so it doesn't get recreated on every render
const MODAL_CONFIG = {
  test: {
    title: "test",
    type: "text",
    content: "Test Content.",
  },
  restaurants: {
    title: "restaurant selection",
    type: "component",
    Component: Test,
  },
};

function App() {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (modalName) => {
    setActiveModal(modalName);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  const currentModal = MODAL_CONFIG[activeModal];

  // Helper to render the correct content type safely
  const renderModalContent = () => {
    if (!currentModal) return null;
    if (currentModal.type === "text") {
      return <p>{currentModal.content}</p>;
    }
    if (currentModal.type === "component") {
      const ComponentToRender = currentModal.Component;
      return <ComponentToRender />;
    }
    return null;
  };

  return (
    <main>
      <header className="header">
        <h1>Port of Troy</h1>

        <button onClick={() => openModal("test")}>About</button>

        <button onClick={() => openModal("restaurants")}>Restaurants</button>
      </header>

      <section>
        <p>Welkom op de default page van Port of Troy.</p>
      </section>
      <Navbar />
      <DModal
        isOpen={Boolean(currentModal)}
        title={currentModal?.title}
        onClose={closeModal}
      >
        {renderModalContent()}
      </DModal>
    </main>
  );
}

export default App;
