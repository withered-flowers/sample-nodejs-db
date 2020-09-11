const client = require('../config/config.js');
const fs = require('fs');

fs.readFile('./dummy.json', 'utf8', (err, data) => {
  if(err) {
    console.log(err);
  }
  else {
    data = JSON.parse(data);

    // Jadi sekarang kita udah BUKAN pakai json
    // dimana data HARUS dibaca semuanya dulu 
    // baru bisa ditambah2in.

    // Kita udah pakai.... DATABASE !
    let queryInsertUser = 
      `INSERT INTO "Users" (name, "jobTitle", phone, address) VALUES`;

    // let queryHasil = '';

    // data.forEach((element, index) => {
    //   if(index !== data.length-1) {
    //     queryHasil += 
    //       `('${element.name}', '${element.jobTitle}', '${element.phone}', '${element.address}'),`;
    //   }
    //   else {
    //     queryHasil += 
    //       `('${element.name}', '${element.jobTitle}', '${element.phone}', '${element.address}');`;
    //   }
    // });

    // let queryHasil = [];

    // data.forEach((element) => {
    //   queryHasil.push(
    //       `('${element.name}', '${element.jobTitle}', '${element.phone}', '${element.address}')`
    //   );
    // });
    
    let queryHasil = data.map((element) => {
      let stringModifikasi = `('${element.name}', '${element.jobTitle}', '${element.phone}', '${element.address}')`;

      return stringModifikasi;
    });
    
    queryInsertUser += queryHasil.join(',');

    queryInsertUser += " RETURNING *";

    client.query(queryInsertUser, (err, result) => {
      if(err) {
        console.log(err);
      }
      else {
        // console.log("Data sudah ditambahin");
        console.log(result);
      }
    });
  }
});