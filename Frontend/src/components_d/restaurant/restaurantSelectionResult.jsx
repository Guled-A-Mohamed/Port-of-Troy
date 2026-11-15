
import { useState } from 'react';

function RestaurantResult({ restaurant }) {

    return (
        <article className="restaurant-result">
            <h3>{restaurant.naam}</h3>

            <p>
                {restaurant.locatie.straat} {restaurant.locatie.huisnummer},
                {' '}{restaurant.locatie.plaats}
            </p>

        </article>
    );
}

export default RestaurantResult;
