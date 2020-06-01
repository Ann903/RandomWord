// const mysql = require('mysql');
const fs = require('fs')
// get the client 
// create the connection to database

var mysql = require('mysql2');
let config = {
    host     : 'localhost',
    user     : 'root',
    password : 'toor',
    database : 'work',
    port:3306,
    multipleStatements: true//允许多条sql同时执行
};
let pool = mysql.createPool(config);
let query = (sql, values) => {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err) {
                reject(err)
            } else {
                connection.query(sql, values, (err, rows) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(rows)
                    }
                    connection.release()
                })
            }
        })
    })
};

module.exports = {
    fakeData: (index) => {
        // fs.readFile('input.txt', function (err, data) { if (err) { return console.error(err); } return data.toString(); });
        var data = fs.readFileSync('input.txt').toString();
        var lines = data.split("\n");
        line_no = index;
        console.log(index);
        ldata = '';
        for (var l in lines) {
        
            if (l == line_no - 1) {
                ldata = lines[l].trim();
            }
            if (line_no > lines.length) {
                ldata = lines[lines.length-1].trim();
                break;
            }
        }
        return ldata  
    },
    
    getDataById: async (id) => {
        a = await query('SELECT data from rand where id = ?',1)
        return a
    }
}
