const insertScore = (id,score) => {
    return "insert into scores (id,score) values ('"+id+"',"+score+")"
}

module.exports = {
    insertScore
}