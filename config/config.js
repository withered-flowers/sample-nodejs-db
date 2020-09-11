// menuliskan identitas dari database yang akan gw koneksikan
const { Client } = require('pg');

// identitas / confignya
const client = new Client({
  user: 'postgres',
  password: 'postgres',
  host: 'localhost',
  database: 'percobaan'
});

client.connect();

module.exports = client;