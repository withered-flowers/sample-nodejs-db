const client = require('./config/config.js');

const querySelectUsers =
  `SELECT * FROM "Users"`;

client.query(querySelectUsers, (err, result) => {
  if(err) {
    console.log(err);
  }
  else {
    console.log(result.rows);
  }
});