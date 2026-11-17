import { useId } from 'react';

// One reusable block: a titled <section> that fills its grid cell.
// h-100 and p-3 are Bootstrap utility classes (height 100%, padding 1rem).
function RestaurantBlock({ title, children }) {
    const titleId = useId(); // links aria-labelledby to the heading, so each block gets a name

    return (
        <section className="restaurant-block h-100 p-3" aria-labelledby={titleId}>
            <h3 id={titleId} className="h5">{title}</h3>
            {children}
        </section>
    );
}

export default RestaurantBlock;