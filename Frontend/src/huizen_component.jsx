import React,{useEffect, useState} from "react";

function Huizen(){
    const [user, setHuizen] = useState([])
    useEffect(() => {
       async function loadUsers()  {
        try{
        const res = await fetch('http://localhost:8081/Huizen')
        const data = await res.json()
        setHuizen(data)}

        catch(err)
        {console.log(err)}

       } 
       loadUsers() }, [])

      
    return(
        <main>
          <ul>
       {user.map((thing) => <li>{thing.naam} {thing.achternaam}</li>)}
       </ul>
        </main>
    )
}
export default Huizen