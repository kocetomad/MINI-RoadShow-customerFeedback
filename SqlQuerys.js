const insertScore = (id,score) => {
    return "insert into scores (id,score) values ('"+id+"',"+score+")"
}

const getScore = (id) => {
    return "SELECT SUM (score) AS score FROM scores WHERE id = '"+id+"';"
}




module.exports = {
    insertScore,
    getScore
}