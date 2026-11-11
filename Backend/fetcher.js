const express = require('express') 
const mysql = require('mysql') 
const cors = require('cors') 


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

app.get('/',(req,res) =>{
   const sql = "select * from users"
   db.query(sql,(err,data) =>{
    if(err) {return res,json(err)}
       return res.json(err)
   }

)
})
app.listen(8081,() =>{
    console.log("listening")
})