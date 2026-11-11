
import "./Style.css";

export default function Navbar() {
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
          <a href="/about" className="my-button">
            Our parks
          </a>
        </li>
        <li>
          <a href="/restaurant" className="my-button">
            Restaurant
          </a>
        </li>
        <li>
          <a href="/contact" className="my-button">
            Contact
          </a>
        </li>
        <li>
          <a href="/attractions" className="my-button">
            Attracties
          </a>
        </li>
        <li>
          <a href="/attractions" className="my-button">
            More
          </a>
        </li>
      </ul>
    </nav>
  );
}
