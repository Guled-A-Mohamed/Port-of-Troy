import { useEffect, useState } from 'react';
import useLang, { DEFAULT_LANGUAGE } from './useLang';

// Vite finds every JSON file at build time and turns each into a lazy loader
const files = import.meta.glob('../../../../Backend/LanJsons/**/*.json', { import: 'default' });

// Builds the same key that import.meta.glob uses, e.g. ".../LanJsons/NL/HomePage/Tekst 1.json"
const toPath = (lang, section, fileName) =>
    `../../../../Backend/LanJsons/${lang.toUpperCase()}/${section}/${fileName}.json`;

/**
 * Loads one text file for the current language, with a fallback to the default language.
 * Usage: const { data, loading } = useLanText('Contact', 'Gegevens - Park 1');
 * Note: the file name differs per language for HomePage ("Tekst 1" in NL, "Text 1" in EN/FY).
 */
function useLanText(section, fileName) {
    const lang = useLang();
    const key = `${lang}/${section}/${fileName}`;
    const [result, setResult] = useState({ key: null, data: null });

    useEffect(() => {
        let cancelled = false;

        // Missing file in this language: try the default language, then give up (data = null)
        const load = files[toPath(lang, section, fileName)]
            ?? files[toPath(DEFAULT_LANGUAGE, section, fileName)];
        const request = load ? load() : Promise.resolve(null);

        request.then((data) => {
            if (!cancelled) setResult({ key, data });
        });

        // Ignore the answer if the language or page changed while loading
        return () => { cancelled = true; };
    }, [key, lang, section, fileName]);

    // loading is derived from the key, so no setState is needed to reset it
    const loading = result.key !== key;
    return { data: loading ? null : result.data, loading };
}

export default useLanText;
