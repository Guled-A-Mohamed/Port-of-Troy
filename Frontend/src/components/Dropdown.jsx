import { Link } from "react-router-dom";

function Dropdown() {
  return (
    <>
      <h2>Clickable Dropdown</h2>
      <p>Click on the button to open the dropdown menu.</p>
      <div className="dropdown">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </>
  );
}

export default Dropdown;
