import React, { useEffect, useState } from "react";


export function Searchbar({ search, setSearch , term, setTerm }) {

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
    const [search, setSearch] = useState("")
    const [huis, setHuizen] = useState([])
    const [term, setTerm] = useState("")


    useEffect(() => {
        async function loadhuizen() {
            try {
                const res = await fetch('http://localhost:8081/Huizen')
                const data = await res.json()
                setHuizen(data)
            }

            catch (err) { console.log(err) }

        }
        loadhuizen()
    }, [])

    const filtered = huis.filter(thing => thing.naam.toLowerCase().includes(term.toLowerCase()))

    return (

        <main>
            <Searchbar search={search} setSearch={setSearch} term={term} setTerm={setTerm} />
            <ul>
                {filtered.map((thing) => <li key={thing.id}>{thing.naam} {thing.prijs} {thing.plaats}</li>)}
            </ul>
        </main>
    )
}
export default Huizen