const { Console } = require('console')
const express = require('express')
const app = express()

app.use(express.static('Pages'))

//yash chage
app.listen(3000, () => console.log("APP RUNNING ON PORT:3000"))
