import "./Style.css";

export default function Navbar({ onOpenModal }) {
  return (
    <nav className="my-navbar">
      <h1 className="my-title">(hier komt onze logo)</h1>
      <ul className="my-grid">
        <li>
          <a href="/" className="my-button">
            Home
          </a>
        </li>
        <li>
          <button onClick={() => onOpenModal("test")} className="my-button">
            Our parks
          </button>
        </li>
        <li>
          <button
            onClick={() => onOpenModal("restaurants")}
            className="my-button"
          >
            Restaurant
          </button>
        </li>
        <li>
          <button onClick={() => onOpenModal("test")} className="my-button">
            Contact
          </button>
        </li>
        <li>
          <button onClick={() => onOpenModal("test")} className="my-button">
            Attracties
          </button>
        </li>
        <li>
          <button onClick={() => onOpenModal("test")} className="my-button">
            More
          </button>
        </li>
      </ul>
    </nav>
  );
}
