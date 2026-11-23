const express = require('express') 
const mysql = require('mysql') 
const cors = require('cors') 

//const port = 
const app = express()
app.use(cors())


const db = mysql.createConnection({
    host : "localhost",
    user: "root",
    password:"",
    database:"port_troy"
})
app.get('/',(req,res) =>{
    return res.json("db_mode")
})

///huizen table

app.get('/huizen', (req, res) => {
  const sql = "SELECT naam, prijs,straat,huisnummer,plaats FROM huizen join park_locatie on location_id = locatie_id;"

  db.query(sql, (err, data) => {
    if (err) return res.json(err)
    return res.json(data)
  })
})


app.get('/users', (req, res) => {
  const sql = "SELECT voornaam, achternaam, email FROM users"

  db.query(sql, (err, data) => {
    if (err) return res.json(err)
    return res.json(data)
  })
})












app.listen(8081,() =>{
    console.log("listening")
})