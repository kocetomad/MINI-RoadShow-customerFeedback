const { Console } = require('console')
const express = require('express')
const { Pool, Client } = require('pg')
const queries = require('SqlQuerys.js')

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: '123456',
  port: 5432,
})
client.connect()



const app = express()

app.use(express.static('Pages'))
app.post('/insertScores', (req, res) => controllers.InsertScores(req, res, client))


//yash chage
app.listen(3000, () => console.log("APP RUNNING ON PORT:3000"))
