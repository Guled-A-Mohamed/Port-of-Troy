import { Link, useParams } from 'react-router';
import restaurantData from './restaurantData';
import RestaurantBlock from './restaurantBlock';
import toSlug from '../toSlug';
import useLang from '../useLang';

function RestaurantPage({ onOpenModal }) {
    const { slug } = useParams();
    const lang = useLang();

    // The URL is not case sensitive for us: DeGoudenKiel and degoudenkiel find the same restaurant
    const restaurant = restaurantData.find((item) => toSlug(item.naam) === slug.toLowerCase());

    if (!restaurant) {
        return (
            <section className="container py-3">
                <h2>Restaurant not found</h2>
                <Link to={`/${lang}`}>Back to the home page</Link>
            </section>
        );
    }

    const { naam, locatie } = restaurant;

    return (
        <article className="restaurant-page container py-3">
            <h2>{naam}</h2>

            {/* Bootstrap grid:
                row-cols-1    -> 1 block per row (mobile)
                row-cols-lg-2 -> 2 blocks per row from the lg breakpoint (992px) up
                g-3           -> gap between the blocks
                4 blocks / 2 columns = a 2 x 2 table, block 4 ends up bottom right */}
            <div className="row row-cols-1 row-cols-lg-2 g-3">
                <div className="col">
                    <RestaurantBlock title="Address">
                        <p className="mb-0">{locatie.straat} {locatie.huisnummer}</p>
                        <p className="mb-0">{locatie.plaats}</p>
                    </RestaurantBlock>
                </div>

                <div className="col">
                    <RestaurantBlock title="Vacation park">
                        <p className="mb-0">{locatie.park}</p>
                        <p className="mb-0">Distance to park: {locatie.park_afstand}</p>
                    </RestaurantBlock>
                </div>

                <div className="col">
                    <RestaurantBlock title="More information">
                        <p className="mb-0">Content follows.</p>
                    </RestaurantBlock>
                </div>

                <div className="col">
                    <RestaurantBlock title="Menu & reservations">
                        {/* Stacked on mobile, side by side from the sm breakpoint (576px) */}
                        <div className="d-flex flex-column flex-sm-row gap-2">
                            <button
                                type="button"
                                className="btn btn-light"
                                aria-haspopup="dialog"
                                onClick={() => onOpenModal('menu')}
                            >
                                Menu / order
                            </button>

                            <button
                                type="button"
                                className="btn btn-outline-light"
                                aria-haspopup="dialog"
                                onClick={() => onOpenModal('reservation')}
                            >
                                Reserve a table
                            </button>
                        </div>
                    </RestaurantBlock>
                </div>
            </div>

            <Link to={`/${lang}`} className="d-inline-block mt-3">Back to the home page</Link>
        </article>
    );
}

export default RestaurantPage;