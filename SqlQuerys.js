const insertScore = (id, score) => {
  return "insert into scores (id,score) values ('" + id + "'," + score + ")";
};

const getScore = (id) => {
  return "SELECT SUM (score) AS score FROM scores WHERE id = '" + id + "';";
};

const insertQrHit = (part) => {
  return "insert into qr_scan values('" + part + "');";
};

module.exports = {
  insertScore,
  getScore,
  insertQrHit
};
