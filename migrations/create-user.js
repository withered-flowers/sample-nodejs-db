const client = require('../config/config.js');

const queryDropUser = 
  `DROP TABLE IF EXISTS "Users"`;

const queryCreateUser = 
  `CREATE TABLE IF NOT EXISTS "Users" (
    id SERIAL PRIMARY KEY,
    name VARCHAR,
    "jobTitle" VARCHAR,
    phone VARCHAR,
    address VARCHAR
  )`;

// query untuk bikin tabel
client.query(queryDropUser, (err, result) => {
  if(err) {
    console.log(err);
  }
  else {
    client.query(queryCreateUser, (err2, result2) => {
      if(err2) {
        console.log(err2);
      }
      else {
        console.log("Table user berhasil dibikin");
        client.end();
      }
    })
  }
});

// fs.readFile baca file berentet caranya gimana?
// file pertama.json
// file kedua.json
