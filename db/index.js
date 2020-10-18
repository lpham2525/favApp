const mysql = require('mysql2')

module.exports = mysql.createConnection('mysql://root:rootroot@localhost:3306/likes_db')