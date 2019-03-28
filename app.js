const express = require('express')
const mysql = require('mysql2')

const con = mysql.createConnection({
    host: "mysql",
    user: 'root',
    password: 'brkswxz13',
    database: 'app'
})
console.log(

    con.listeners()
);


const PORT = 3000
const HOST = '0.0.0.0'

const app = express()

app.get('/', (req, res) => {
    con.query('select * from products', async (err, result) => {
        res.json({
            msg: 'Bem-vindo Docker - RedFox Tech',
            result
        })

    })
})


app.listen(PORT, HOST)