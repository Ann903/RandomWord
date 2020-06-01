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

        async () => {
            result = {
                'code': 0,
                'data': ''
            }
            try {
                rst = await Db.getDataById(1);
                data = result.rst;
            } catch(err){ 
                console.error(err);
                result.code = -1;
                result.data = 'internal error';
            }
                result.data = data
                return result
        }
    },
    randword_text: function(){
        result = {
            'code': 0,
            'data': ''
        }

        try {
            data =  Db.fakeData(randnum())
            result.data = data
        } catch(err){ 
            console.error(err);
            result.code = -1;
            result.data = 'internal error';
        }
            
        return result
    }
} 