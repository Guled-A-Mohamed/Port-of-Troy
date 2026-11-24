import './ParkDropdown.css';

export default function ParkSelector({ value, onChange }) {
  return (
    <div className="row align-items-center g-2 g-lg-4 mb-3">
      {/* Column 1: Label */}
      <div className="col-12 col-lg-6 text-lg-end">
        <label htmlFor="park-select" className="park-label form-label mb-lg-0">
          Select a Park
        </label>
      </div>

      {/* Column 2: Dropdown */}
      <div className="col-12 col-lg-6">
        <select
          id="park-select"
          className="park-select form-select"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        >
          <option value="" disabled>
            -- Choose a Park --
          </option>

          <optgroup label="Belgium">
            <option value="plopsaland">Plopsaland De Panne</option>
          </optgroup>

          <optgroup label="France">
            <option value="disneyland-paris">Disneyland Paris</option>
            <option value="parc-asterix">Parc Astérix</option>
          </optgroup>

          <optgroup label="Germany">
            <option value="europa-park">Europa-Park</option>
            <option value="phantasialand">Phantasialand</option>
          </optgroup>

          <optgroup label="Netherlands">
            <option value="efteling">Efteling</option>
            <option value="toverland">Toverland</option>
            <option value="walibi-nl">Walibi Holland</option>
          </optgroup>
        </select>
      </div>
    </div>
  );
}