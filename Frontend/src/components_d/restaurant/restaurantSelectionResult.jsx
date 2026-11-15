function RestaurantResult({ restaurant }) {
    const { naam, locatie } = restaurant; // destructuring: shorter than restaurant.locatie.x everywhere

    return (
        <article className="restaurant-result">
            <h3>{naam}</h3>
            <p>{locatie.straat} {locatie.huisnummer}, {locatie.plaats}</p>

            {/* Showing what you filter on makes the results easy to verify */}
            <p className="restaurant-meta">{locatie.park}</p>
            <p className="restaurant-meta">Distance to park: {locatie.park_afstand}</p>
        </article>
    );
}

export default RestaurantResult;