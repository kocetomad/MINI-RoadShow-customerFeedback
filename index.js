const { Console } = require('console')
const express = require('express')
const { Pool, Client } = require('pg')
const controllers = require('./controllers/index')


const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: '123456',
  port: 5432,
})
client.connect()



const app = express()
app.use(express.json())

app.use(express.static('Pages'))
app.post('/insertScores', (req, res) => controllers.InsertScores(req, res, client))
app.post('/getScores', (req, res) => controllers.GetScores(req, res, client))


app.listen(3000, () => console.log("APP RUNNING ON PORT:3000"))
