const mysql = require('mysql');
const fs = require('fs')

class Db {
    constructor() {
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '123456',
            database: 'test'
        });
        this.db_conn = connection.connect();
    }

    queryDb(sql) {
        try {
            connection.query(sql, function (error, results, fields) {
                if (error) throw error;
                return results
            });
        } catch (error) {
            console.error('db error', error)
            return null
        }
    }
}

module.exports = {
    fakeData: (index) => {
        // fs.readFile('input.txt', function (err, data) { if (err) { return console.error(err); } return data.toString(); });
        var data = fs.readFileSync('input.txt').toString();
        var lines = data.split("\n");
        line_no = index;
        console.log(line_no);
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
                console.log(ldata)
        return ldata  
    }
}