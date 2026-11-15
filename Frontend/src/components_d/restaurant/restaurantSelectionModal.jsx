import { useState } from 'react';
import RestaurantResult from './restaurantSelectionResult';
import restaurantData from './restaurantData';
import './restaurant.css';

// Static data, so these are calculated once at module level, not on every render.
// Set removes duplicates, [...] turns it back into an array.
const parks = [...new Set(restaurantData.map((restaurant) => restaurant.locatie.park))];

// No filters = show everything. Infinity is "no distance limit".
const defaultFilters = { park: '', radius: Infinity };

// "3,2 km" -> 3.2 and "0 km (op het park)" -> 0
// parseFloat stops reading at the first character that isn't part of the number,
// so " km (op het park)" is ignored. JS needs a dot as decimal separator, hence replace().
const getDistanceKm = (text) => parseFloat(text.replace(',', '.'));

function RestaurantSelection() {
    // Only the APPLIED filters are state. The text a user is still typing stays in the form itself.
    const [filters, setFilters] = useState(defaultFilters);

    const handleSubmit = (event) => {
        event.preventDefault(); // stop the browser from reloading the page

        // FormData reads every field with a name="" straight from the form
        const formData = new FormData(event.currentTarget);
        const radius = formData.get('radius');

        setFilters({
            park: formData.get('park').trim().toLowerCase(),
            radius: radius === '' ? Infinity : Number(radius),
        });
    };

    // The browser clears the fields by itself on reset, we only reset the state.
    const handleReset = () => setFilters(defaultFilters);

    // Derived data: calculated from state on every render, so no extra state or useEffect needed.
    const results = restaurantData.filter(({ locatie }) =>
        locatie.park.toLowerCase().includes(filters.park) &&
        getDistanceKm(locatie.park_afstand) <= filters.radius
    );

    return (
        <section className="restaurant-selection">
            <h2>Selecteer een restaurant</h2>

            <form className="search-options" onSubmit={handleSubmit} onReset={handleReset}>
                <div className="search-field">
                    <label htmlFor="parkSelector">Vacation park</label>
                    {/* datalist = native autocomplete suggestions, the user can still type freely */}
                    <input
                        type="search"
                        id="parkSelector"
                        name="park"
                        list="park-options"
                        autoComplete="off"
                        placeholder="e.g. Kap Arkona"
                    />
                    <datalist id="park-options">
                        {parks.map((park) => (
                            <option key={park} value={park} />
                        ))}
                    </datalist>
                </div>

                <div className="search-field">
                    <label htmlFor="searchRadius">Distance to park</label>
                    <select id="searchRadius" name="radius" defaultValue="">
                        <option value="">Any distance</option>
                        <option value="0">On park</option>
                        <option value="10">Within 10 km</option>
                        <option value="25">Within 25 km</option>
                    </select>
                </div>

                <div className="search-actions">
                    <button type="submit" className="btn-primary">Search</button>
                    <button type="reset" className="btn-secondary">Reset</button>
                </div>
            </form>

            {/* aria-live: screen readers announce the new count after every search */}
            <p className="restaurant-count" aria-live="polite">
                {results.length} {results.length === 1 ? 'restaurant' : 'restaurants'} found
            </p>

            <div className="restaurant-results">
                {results.map((restaurant) => (
                    <RestaurantResult key={restaurant.id} restaurant={restaurant} />
                ))}
            </div>
        </section>
    );
}

export default RestaurantSelection;