const express = require('express')
const cors = require('cors')
const mysql = require('mysql')
// require('dotenv').config()
const app = express()

app.use(cors())

// const connection = mysql.createConnection(process.env.JAWSDB_URL)

const connection = mysql.createConnection({
    host: 'l6glqt8gsx37y4hs.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'zz6ll5rlrye9fn0w',
    password: 'v7uk67732pua46bq',
    database: 'mqq3z3i9kt7r25gk'
  })


app.get('/',(req, res) => {
    console.log('Hello world')
    res.send('Hello World!!!!')
})

app.get('/users',(req,res)=> {
    connection.query(
        'SELECT * FROM users',
        function(err, results, fields) {
            res.send(results)
        }
    )
})


app.get('/tutorials',(req,res)=> {
    connection.query(
        'SELECT * FROM tutorials',
        function(err, results, fields) {
            res.send(results)
        }
    )
})


// app.listen(process.env.PORT || 3000)

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Charin Test Server is running on port ${PORT}.`);
});

