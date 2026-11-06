import './dModal.css';

function DModal({ isOpen, title, children, onClose }) {

    if (!isOpen) return null;

    return (
        <div className="d-modal-overlay">
            <div className="d-modal" role="dialog" aria-modal="true" aria-labelledby="model-title">

                <header className="modal-head">
                    {/* <h2 id="modal-title">{title}</h2> */}
                    <div class="modal-nav
                    ">
                        <button onClick={onClose} aria-label="close modal">
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