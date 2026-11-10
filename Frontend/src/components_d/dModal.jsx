import './dModal.css';
import { useEffect } from 'react';

function DModal({ isOpen, title, children, onClose }) {

    useEffect(() => {
        if (!isOpen) return;
    
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') onClose(); 
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const handleModalClick = (event) => {
        event.stopPropagation();
    }

    return (
        <div className="d-modal-overlay" onClick={onClose}>
            <div onClick={handleModalClick} className="d-modal" role="dialog" aria-modal="true" aria-labelledby="model-title">

                <header className="modal-head">
                    {/* <h2 id="modal-title">{title}</h2> */}
                    <div class="modal-nav
                    ">
                        <button className="modal-close-btn" onClick={onClose} aria-label="close modal">
                            Close
                        </button>
                        
                    </div>
                </header>

                <div className="d-modal-content">
                    {children}
                </div>

            </div>
        </div>
    );
}

export default DModal;