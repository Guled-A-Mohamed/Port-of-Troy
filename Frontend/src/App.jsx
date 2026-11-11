
import { useState } from 'react';
import './App.css';
import DModal from './components_d/dModal';
import Test from './components_d/testContent';

function App() {
    const [activeModal, setActiveModal] = useState(null);

    const modalContent = {
        test: {
            title: 'test',
            content: <p>Test Content.</p>
        },

        restaurants: {
            title: 'restaurant selection',
            content: <Test />
        }
    };

    const openModal = (modalName) => {
        setActiveModal(modalName);
    };

    const closeModal = () => {
        setActiveModal(null);
    };

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
