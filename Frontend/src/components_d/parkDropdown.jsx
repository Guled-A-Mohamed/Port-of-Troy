import { useState, useEffect, useRef } from 'react';
import './ParkDropdown.css';

const PARK_GROUPS = [
  {
    country: 'Belgium',
    parks: [
      { id: 'bobbejaanland', name: 'Bobbejaanland' },
      { id: 'plopsaland', name: 'Plopsaland De Panne' },
      { id: 'walibi-be', name: 'Walibi Belgium' },
    ],
  },
  {
    country: 'France',
    parks: [
      { id: 'disneyland-paris', name: 'Disneyland Paris' },
      { id: 'futuroscope', name: 'Futuroscope' },
      { id: 'parc-asterix', name: 'Parc Astérix' },
      { id: 'puy-du-fou', name: 'Puy du Fou' },
    ],
  },
  {
    country: 'Germany',
    parks: [
      { id: 'europa-park', name: 'Europa-Park' },
      { id: 'heide-park', name: 'Heide Park' },
      { id: 'movie-park', name: 'Movie Park Germany' },
      { id: 'phantasialand', name: 'Phantasialand' },
    ],
  },
  {
    country: 'Netherlands',
    parks: [
      { id: 'efteling', name: 'Efteling' },
      { id: 'slagharen', name: 'Attractiepark Slagharen' },
      { id: 'toverland', name: 'Toverland' },
      { id: 'walibi-nl', name: 'Walibi Holland' },
    ],
  },
];

export default function ParkSelector({ selectedPark, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelectPark = (park) => {
    onSelect(park);
    setIsOpen(false);
  };

  return (
    <div className="park-dropdown dropdown mb-3" ref={dropdownRef}>
      <button
        className={`park-dropdown-btn btn dropdown-toggle w-100 d-flex justify-content-between align-items-center ${
          isOpen ? 'show' : ''
        }`}
        type="button"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span>{selectedPark ? selectedPark.name : '-- Choose a Park --'}</span>
      </button>

      <div className={`park-dropdown-menu dropdown-menu p-3 ${isOpen ? 'show' : ''}`}>
        <div className="row g-3">
          {PARK_GROUPS.map((group) => (
            <div key={group.country} className="col-12 col-lg-6">
              <h6 className="park-country-header dropdown-header px-0">
                {group.country}
              </h6>
              <ul className="list-unstyled mb-0">
                {group.parks.map((park) => (
                  <li key={park.id}>
                    <button
                      type="button"
                      className={`park-item dropdown-item rounded ${
                        selectedPark?.id === park.id ? 'active' : ''
                      }`}
                      onClick={() => handleSelectPark(park)}
                    >
                      {park.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}