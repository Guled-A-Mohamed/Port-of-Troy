// "Brasserie De Gouden Kiel" -> "brasserie-de-gouden-kiel"
// "Café Atlântico"           -> "cafe-atlantico"
const toSlug = (text) =>
    text
        .normalize('NFD')                // splits "é" into "e" + a loose accent mark
        .replace(/[\u0300-\u036f]/g, '') // removes those accent marks
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')     // everything that isn't a letter or digit becomes "-"
        .replace(/^-+|-+$/g, '');        // no "-" at the start or end

export default toSlug;
