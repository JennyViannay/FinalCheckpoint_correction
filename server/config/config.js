const db_name = 'wild-circus'
const db_port = 8889 
const mysql = require('mysql')
const connection = mysql.createConnection({
    host: 'localhost',
    port: db_port,
    user: 'root',
    password: 'root',
    database: db_name
})

connection.connect(function (err) {
    if (!err) {
        console.log(`😎😎 -- MySql is connected on ${db_name}'s database on port ${db_port} -- 😎😎`);
    } else {
        console.log("-- 👎 👎  -- Error connecting MySql : -- 👎 👎 -- ", err);
    }
});

module.exports = connection