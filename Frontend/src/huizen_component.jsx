import React, { useEffect, useState } from "react";

const VERBLIJF_NACHTEN = 4 // midweek: maandag t/m vrijdag

function formatDatum(d) {
    const jaar = d.getFullYear()
    const maand = String(d.getMonth() + 1).padStart(2, "0")
    const dag = String(d.getDate()).padStart(2, "0")
    return `${jaar}-${maand}-${dag}`
}

function volgendeAankomst() {
    const d = new Date()
    const dagenTotMaandag = (1 - d.getDay() + 7) % 7
    d.setDate(d.getDate() + dagenTotMaandag)
    return d
}

function dagNa(datum) {
    const d = new Date(datum)
    d.setDate(d.getDate() + 1)
    return formatDatum(d)
}

function aantalNachten(van, tot) {
    const verschil = new Date(tot) - new Date(van)
    return Math.round(verschil / (1000 * 60 * 60 * 24))
}

export function Searchbar({ search, setSearch, term, setTerm }) {

    const click = () => {
        setTerm(search)
    }
    const change = event => {
        const newSearch = event.target.value
        setSearch(newSearch)
    }
    return (
        <div className="searchBox">
            <input onChange={change} value={search} />
            <button onClick={click}>Click me</button>
        </div>
    )
}

function Huizen() {
    const aankomst = volgendeAankomst()
    const vertrek = new Date(aankomst)
    vertrek.setDate(vertrek.getDate() + VERBLIJF_NACHTEN)
    const eersteAankomst = formatDatum(aankomst)

    const [search, setSearch] = useState("")
    const [huis, setHuizen] = useState([])
    const [term, setTerm] = useState("")
    const [locatie, setLocatie] = useState("")
    const [van, setVan] = useState(eersteAankomst)
    const [tot, setTot] = useState(formatDatum(vertrek))

    useEffect(() => {
        async function loadhuizen() {
            try {
                const res = await fetch('http://localhost:8081/huizen')
                const data = await res.json()
                setHuizen(data)
            }
            catch (err) { console.log(err) }
        }
        loadhuizen()
    }, [])

    const changeVan = (e) => {
        const nieuweVan = e.target.value
        setVan(nieuweVan)
        if (tot <= nieuweVan) {
            setTot(dagNa(nieuweVan))
        }
    }

    const changeTot = (e) => {
        setTot(e.target.value)
    }

    const nachten = aantalNachten(van, tot)

    const locaties = [...new Set(huis.map(thing => thing.plaats))]
    const filtered = huis.filter(thing =>
        thing.naam.toLowerCase().includes(term.toLowerCase()) &&
        (locatie === "" || thing.plaats === locatie)
    )

    return (
        <main>
            <select value={locatie} onChange={e => setLocatie(e.target.value)}>
                <option value="">Alle locaties</option>
                {locaties.map(plaats => (
                    <option key={plaats} value={plaats}>{plaats}</option>
                ))}
            </select>

            <input type="date" value={van} min={eersteAankomst} onChange={changeVan} />
            <input type="date" value={tot} min={dagNa(van)} onChange={changeTot} />

            <Searchbar search={search} setSearch={setSearch} term={term} setTerm={setTerm} />

            <ul>
                {filtered.map((thing) => (
                    <li key={thing.id}>
                        {thing.naam} – aantal gasten:{thing.gasten}- {thing.plaats} – {van} t/m {tot} ({nachten} nachten) –
                        totaal €{(thing.prijs * nachten).toFixed(2)} 
                    </li>
                ))}
            </ul>
        </main>
    )
}
export default Huizen