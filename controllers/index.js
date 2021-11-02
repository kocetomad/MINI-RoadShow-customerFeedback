const queries = require('../SqlQuerys')

const InsertScores = (req, res, client) => {

    console.log(""+req.body.id)
    client.query(queries.insertScore(req.body.id,req.body.score), (err, res) => {
        console.log(err, res.rows[0])
      })
}

const GetScores = (req, resp, client) => {
    console.log(""+req.body.id)
    client.query(queries.getScore(req.body.id), (err, res) => {
        console.log(err, res.rows[0])
        resp.json(res.rows[0].score)

      })
}

module.exports = {
    InsertScores,
    GetScores
}