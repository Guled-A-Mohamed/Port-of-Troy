import { Link, Navigate, Outlet, Route, Routes, useParams } from 'react-router';
import RestaurantPage from '../restaurant/restaurantPage';
import useLang, { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES } from './useLang';

function NotFound() {
    const lang = useLang();

    return (
        <section className="container py-3">
            <h2>Page not found</h2>
            <Link to={`/${lang}`}>Back to the home page</Link>
        </section>
    );
}

// Parent route of every page: checks the language once, then renders the matching child
function LanguageLayout() {
    const { lang } = useParams();

    if (!SUPPORTED_LANGUAGES.includes(lang.toLowerCase())) return <NotFound />;

    return <Outlet />; // <Outlet /> = the place where the child route is shown
}

function AppRoutes({ onOpenModal }) {
    return (
        <Routes>
            {/* "/" -> "/nl". replace keeps "/" out of the history, so back doesn't loop */}
            <Route path="/" element={<Navigate to={`/${DEFAULT_LANGUAGE}`} replace />} />

            {/* /nl, /nl/restaurant/brasserie-de-gouden-kiel, ... */}
            <Route path="/:lang" element={<LanguageLayout />}>
                <Route
                    index
                    element={<section><p>Welkom op de default page van Port of Troy.</p></section>}
                />
                <Route
                    path="restaurant/:slug"
                    element={<RestaurantPage onOpenModal={onOpenModal} />}
                />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
}

export default AppRoutes;