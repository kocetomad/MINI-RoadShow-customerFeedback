const InsertScores = (req, res, client) => {
    client.query(queries.insertScore(req.body.id,req.body.score), (err, res) => {
        console.log(err, res.rows[0].now)
        client.end()
      })
}

module.exports = {
    InsertScores
}