const Db = require('../models/db')
const fs = require('fs')
randnum = () => {
    result = {
        'code': 0,
        'data': ''
    }

    try {
        result.data = Math.round(Math.random() * 10);
    } catch (error) {
        console.error(error);
        result.code = -1;
        result.data = 'internal error';
    }

    return result
}
module.exports = {

    randword: () => {
        result = {
            'code': 0,
            'data': ''
        }
        try {
            data = Db.fakeData(randnum().data)
            // console.log(data)
            result.data = data
        } catch (error) {
            console.error(error);
            result.code = -1;
            result.data = 'internal error';
        }

        return result
    }
} 