import React,{useEffect, useState} from "react";

function Huizen(){
    const [user, setHuizen] = useState([])
    useEffect(() => {
       async function loadUsers()  {
        try{
        const res = await fetch('http://localhost:8081/users')
        const data = await res.json()
        setUser(data)}

        catch(err)
        {console.log(err)}

       } 
       loadUsers() }, [])

      
    return(
        <main>
          <ul>
       {user.map((thing) => <li>{thing.voornaam} {thing.achternaam}</li>)}
       </ul>
        </main>
    )
}
export default Huizen