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
