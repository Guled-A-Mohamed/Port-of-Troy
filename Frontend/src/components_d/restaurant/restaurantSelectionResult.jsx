import { Link } from 'react-router';
import toSlug from '../routing/toSlug';
import useLang from '../routing/useLang';


function RestaurantResult({ restaurant }) {
    const { naam, locatie } = restaurant; // destructuring: shorter than restaurant.locatie.x everywhere

    const lang = useLang(); // keeps the current language in the URL: /nl/... or /en/...

    // Build the same slug that RestaurantPage uses to look the restaurant up again
    const path = `/${lang}/restaurant/${toSlug(naam)}`;

    return (
        // position-relative is needed so stretched-link knows which box to cover
        <article className="restaurant-result">
            <h3>
                {/* stretched-link (Bootstrap) makes the whole card clickable,
                    while the accessible link name stays just the restaurant name */}
                <Link style={{ color: 'white' }} to={path}>{naam}</Link>
            </h3>
            <p>{locatie.straat} {locatie.huisnummer}, {locatie.plaats}</p>

            {/* Showing what you filter on makes the results easy to verify */}
            <p className="restaurant-meta">{locatie.park}</p>
            <p className="restaurant-meta">Distance to park: {locatie.park_afstand}</p>
        </article>
    );
}

export default RestaurantResult;