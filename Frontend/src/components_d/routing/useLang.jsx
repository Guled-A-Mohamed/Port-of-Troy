import { useMatch } from 'react-router';

// Add a language here and every route accepts it automatically
export const SUPPORTED_LANGUAGES = ['nl', 'en'];
export const DEFAULT_LANGUAGE = 'nl';

/**
 * Returns the language from the first URL segment (/nl/... -> "nl").
 * useMatch works anywhere inside the router, also in components outside <Routes>
 * (like the modal), where useParams() would return nothing.
 */
function useLang() {
    const match = useMatch('/:lang/*');
    const lang = match?.params.lang?.toLowerCase();

    return SUPPORTED_LANGUAGES.includes(lang) ? lang : DEFAULT_LANGUAGE;
}

export default useLang;
